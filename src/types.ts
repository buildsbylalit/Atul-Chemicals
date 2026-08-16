export type Category = 
  | 'Stain Removers & Spotting'
  | 'Laundry & Fabric Care'
  | 'Commercial Detergents'
  | 'Packaging & Accessories'
  | 'Leather & Shoe Care'
  | 'Finishing & Brighteners'
  | 'Hygiene & Disinfection'
  | 'Dry Cleaning & Solvent Recovery'
  | 'Software & Digital Solutions';

export type PackagingOption = 
  | '1 Kg / 1 Ltr Bottle'
  | '5 Kg / 5 Ltr Can'
  | '20 Kg / 20 Ltr Drum / Carboy'
  | '50 Kg HDPE Drum'
  | '5 Kg Bundle / Roll'
  | '1000 Pcs Box'
  | '1 Year Cloud License'
  | 'Custom Packaging';

export interface ChemicalSpec {
  parameter: string;
  specification: string;
  testMethod?: string;
}

export interface ChemicalProduct {
  id: string;
  srNo: number;
  name: string;
  iupacName?: string;
  casNumber?: string;
  formula?: string;
  molecularWeight?: string;
  grade: 'Commercial Grade' | 'Industrial Grade' | 'Technical Grade' | 'Premium Concentrate' | 'Enterprise Edition';
  purity: string;
  category: Category;
  rate: number;
  defaultQty: number;
  unit: 'KGS' | 'LTR' | 'PCS' | 'NOS' | string;
  taxableValue: number;
  description: string;
  fullDescription: string;
  appearance: string;
  density?: string;
  boilingPoint?: string;
  meltingPoint?: string;
  flashPoint?: string;
  hazardClass?: string;
  unNumber?: string;
  packagingOptions: PackagingOption[];
  applications: string[];
  features: string[];
  specifications: ChemicalSpec[];
  storageInstructions: string;
  safetyDataSheetAvailable: boolean;
  certificateOfAnalysisAvailable: boolean;
  image: string;
  featured?: boolean;
  inStock: boolean;
  minimumOrderQuantity: string;
}

export interface RequirementItem {
  productId: string;
  product: ChemicalProduct;
  quantity: number;
  unit: string;
  rate: number;
  selectedPackaging: PackagingOption;
  customPurityRequirement?: string;
  customNotes?: string;
  addedAt: number;
}

export interface CustomerDetails {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  industrySector: string;
  gstOrTaxId: string;
  deliveryTimeline: 'Immediate (1-3 Days)' | 'Within 1-2 Weeks' | 'Within 1 Month' | 'Quarterly Contract' | 'Annual Rate Contract';
  deliveryAddress: string;
  additionalNotes: string;
  acceptTerms: boolean;
}

export interface InquirySubmission {
  id: string;
  trackingCode: string;
  createdAt: string;
  customer: CustomerDetails;
  items: RequirementItem[];
  status: 'Received' | 'Assigned to Sales Chemist' | 'Quotation in Preparation' | 'Dispatch Review';
  totalEstimatedWeight: string;
  preferredFulfillmentDays: string;
}

export type PageRoute = 
  | 'home'
  | 'about'
  | 'products'
  | 'product-details'
  | 'requirement-list'
  | 'customer-details'
  | 'requirement-summary'
  | 'how-it-works'
  | 'contact'
  | 'success';
