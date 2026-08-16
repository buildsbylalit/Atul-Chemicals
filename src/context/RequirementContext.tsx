import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChemicalProduct, RequirementItem, CustomerDetails, InquirySubmission, PackagingOption } from '../types';
import { CHEMICAL_PRODUCTS } from '../data/products';

interface RequirementContextType {
  items: RequirementItem[];
  customer: CustomerDetails;
  lastInquiry: InquirySubmission | null;
  addToRequirement: (
    product: ChemicalProduct, 
    quantity?: number, 
    packaging?: PackagingOption,
    unit?: string, 
    notes?: string
  ) => void;
  removeFromRequirement: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updatePackaging: (productId: string, packaging: PackagingOption) => void;
  updateUnit: (productId: string, unit: string) => void;
  updateNotes: (productId: string, notes: string) => void;
  clearRequirement: () => void;
  updateCustomerDetails: (details: Partial<CustomerDetails>) => void;
  submitRequirement: () => Promise<InquirySubmission>;
  isInRequirement: (productId: string) => boolean;
  getItemCount: () => number;
  toastMessage: string | null;
  dismissToast: () => void;
  selectedProductIdForDetails: string | null;
  setSelectedProductIdForDetails: (id: string | null) => void;
}

const defaultCustomerDetails: CustomerDetails = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  country: 'India',
  industrySector: 'Chemical Processing & Manufacturing',
  gstOrTaxId: '',
  deliveryTimeline: 'Within 1-2 Weeks',
  deliveryAddress: '',
  additionalNotes: '',
  acceptTerms: true,
};

const RequirementContext = createContext<RequirementContextType | undefined>(undefined);

export const RequirementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<RequirementItem[]>(() => {
    try {
      const saved = localStorage.getItem('atul_chem_requirement_items');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];

      return parsed
        .map((item: any) => {
          const matchedProduct = CHEMICAL_PRODUCTS.find((p) => p.id === item.productId || p.id === item.product?.id);
          const product = matchedProduct || item.product;
          if (!product) return null;

          const sanitizedProduct: ChemicalProduct = {
            ...product,
            rate: product.rate ?? 0,
            taxableValue: product.taxableValue ?? 0,
            defaultQty: product.defaultQty ?? 1,
            unit: product.unit || 'KGS',
            packagingOptions: product.packagingOptions || ['Standard Packaging'],
          };

          return {
            productId: sanitizedProduct.id,
            product: sanitizedProduct,
            quantity: typeof item.quantity === 'number' && item.quantity > 0 ? item.quantity : (sanitizedProduct.defaultQty || 1),
            unit: item.unit || sanitizedProduct.unit || 'KGS',
            rate: sanitizedProduct.rate,
            selectedPackaging: item.selectedPackaging || sanitizedProduct.packagingOptions[0] || 'Standard Packaging',
            customNotes: item.customNotes || '',
            addedAt: item.addedAt || Date.now(),
          } as RequirementItem;
        })
        .filter(Boolean) as RequirementItem[];
    } catch {
      return [];
    }
  });

  const [customer, setCustomer] = useState<CustomerDetails>(() => {
    try {
      const saved = localStorage.getItem('atul_chem_customer_details');
      return saved ? JSON.parse(saved) : defaultCustomerDetails;
    } catch {
      return defaultCustomerDetails;
    }
  });

  const [lastInquiry, setLastInquiry] = useState<InquirySubmission | null>(() => {
    try {
      const saved = localStorage.getItem('atul_chem_last_inquiry');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedProductIdForDetails, setSelectedProductIdForDetails] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('atul_chem_requirement_items', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save requirement items', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('atul_chem_customer_details', JSON.stringify(customer));
    } catch (e) {
      console.error('Failed to save customer details', e);
    }
  }, [customer]);

  useEffect(() => {
    if (lastInquiry) {
      try {
        localStorage.setItem('atul_chem_last_inquiry', JSON.stringify(lastInquiry));
      } catch (e) {
        console.error('Failed to save last inquiry', e);
      }
    }
  }, [lastInquiry]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const dismissToast = () => {
    setToastMessage(null);
  };

  const addToRequirement = (
    product: ChemicalProduct,
    quantity?: number,
    packaging?: PackagingOption,
    unit?: string,
    notes: string = ''
  ) => {
    const qty = quantity !== undefined ? Math.max(1, quantity) : 1;
    const chosenUnit = unit || product.unit || 'KGS';
    const chosenPackaging = packaging || product.packagingOptions?.[0] || 'Standard Packaging';

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.productId === product.id);
      
      if (existingIndex >= 0) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty,
          rate: product.rate,
          unit: chosenUnit,
          selectedPackaging: packaging || updated[existingIndex].selectedPackaging,
          customNotes: notes || updated[existingIndex].customNotes,
        };
        showToast(`Updated requirement quantity for ${product.name}`);
        return updated;
      } else {
        showToast(`Added ${product.name} to requirement list`);
        return [
          ...prevItems,
          {
            productId: product.id,
            product,
            quantity: qty,
            unit: chosenUnit,
            rate: product.rate,
            selectedPackaging: chosenPackaging,
            customNotes: notes,
            addedAt: Date.now(),
          },
        ];
      }
    });
  };

  const removeFromRequirement = (productId: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.productId === productId);
      if (item) {
        showToast(`Removed ${item.product.name} from requirement list`);
      }
      return prev.filter((item) => item.productId !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromRequirement(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const updatePackaging = (productId: string, packaging: PackagingOption) => {
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, selectedPackaging: packaging } : item
      )
    );
  };

  const updateUnit = (productId: string, unit: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, unit } : item
      )
    );
  };

  const updateNotes = (productId: string, notes: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, customNotes: notes } : item
      )
    );
  };

  const clearRequirement = () => {
    setItems([]);
    showToast('Requirement list cleared');
  };

  const updateCustomerDetails = (details: Partial<CustomerDetails>) => {
    setCustomer((prev) => ({ ...prev, ...details }));
  };

  const isInRequirement = (productId: string) => {
    return items.some((item) => item.productId === productId);
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const submitRequirement = async (): Promise<InquirySubmission> => {
    // Generate unique corporate tracking code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `AC-REQ-${new Date().getFullYear()}-${randomSuffix}`;
    
    const submission: InquirySubmission = {
      id: `inq_${Date.now()}`,
      trackingCode,
      createdAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      customer: { ...customer },
      items: [...items],
      status: 'Received',
      totalEstimatedWeight: `${items.reduce((acc, curr) => acc + curr.quantity, 0)} Units`,
      preferredFulfillmentDays: customer.deliveryTimeline,
    };

    setLastInquiry(submission);
    // Note: We don't wipe items until the user views confirmation or explicitly starts a fresh list
    return submission;
  };

  return (
    <RequirementContext.Provider
      value={{
        items,
        customer,
        lastInquiry,
        addToRequirement,
        removeFromRequirement,
        updateQuantity,
        updatePackaging,
        updateUnit,
        updateNotes,
        clearRequirement,
        updateCustomerDetails,
        submitRequirement,
        isInRequirement,
        getItemCount,
        toastMessage,
        dismissToast,
        selectedProductIdForDetails,
        setSelectedProductIdForDetails,
      }}
    >
      {children}
    </RequirementContext.Provider>
  );
};

export const useRequirement = () => {
  const context = useContext(RequirementContext);
  if (!context) {
    throw new Error('useRequirement must be used within a RequirementProvider');
  }
  return context;
};
