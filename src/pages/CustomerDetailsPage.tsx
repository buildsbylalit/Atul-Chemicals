import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { PageRoute, CustomerDetails } from '../types';
import { useRequirement } from '../context/RequirementContext';
import { RequirementStepsIndicator } from '../components/RequirementStepsIndicator';

interface CustomerDetailsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CustomerDetailsPage: React.FC<CustomerDetailsPageProps> = ({ onNavigate }) => {
  const { customer, updateCustomerDetails, items } = useRequirement();

  const [formData, setFormData] = useState<CustomerDetails>({
    fullName: customer.fullName || '',
    companyName: customer.companyName || '',
    email: customer.email || '',
    phone: customer.phone || '',
    city: customer.city || '',
    state: customer.state || '',
    country: customer.country || 'India',
    industrySector: customer.industrySector || 'Chemical Processing & Manufacturing',
    gstOrTaxId: customer.gstOrTaxId || '',
    deliveryTimeline: customer.deliveryTimeline || 'Within 1-2 Weeks',
    deliveryAddress: customer.deliveryAddress || '',
    additionalNotes: customer.additionalNotes || '',
    acceptTerms: customer.acceptTerms ?? true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name / Contact Person is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Enterprise Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Corporate Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits)';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City / Plant Location is required';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the commercial communication policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CustomerDetails, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      updateCustomerDetails(formData);
      onNavigate('requirement-summary');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="customer-details-page" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Steps Indicator */}
      <RequirementStepsIndicator
        currentStep="customer-details"
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto space-y-6 text-left">
        
        {/* Header Title */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            Company & Delivery Details
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Please enter your corporate contact details so our sales chemist can generate a formal proforma quotation and delivery schedule.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Section 1: Contact Person & Company */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Building2 className="w-4 h-4 text-teal-700" />
              <span>Corporate Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Contact Person Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="customer-fullname-input"
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                      errors.fullName ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Company / Enterprise Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="customer-company-input"
                    type="text"
                    placeholder="e.g. Apex Pharma Solutions Pvt. Ltd."
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                      errors.companyName ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                    }`}
                  />
                </div>
                {errors.companyName && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.companyName}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Corporate Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="customer-email-input"
                    type="email"
                    placeholder="e.g. procurement@apexpharma.example"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Mobile / Direct Contact Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="customer-phone-input"
                    type="tel"
                    placeholder="e.g. +91 98200 12345"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Section 2: Location & Delivery Expectations */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <MapPin className="w-4 h-4 text-teal-700" />
              <span>Plant Location & Dispatch Parameters</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* City / Location */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  City / Location <span className="text-rose-500">*</span>
                </label>
                <input
                  id="customer-city-input"
                  type="text"
                  placeholder="e.g. Ahmedabad, Gujarat"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                    errors.city ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                  }`}
                />
                {errors.city && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.city}</span>
                  </p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  State / Region:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maharashtra"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:bg-white focus:border-teal-600"
                />
              </div>

            </div>

            {/* Plant Delivery Address */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Plant / Unloading Warehouse Address (Optional for freight estimation):
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Plot No. 12, GIDC Industrial Estate, Phase 3..."
                value={formData.deliveryAddress}
                onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:bg-white focus:border-teal-600 resize-none"
              />
            </div>

            {/* Additional Project Message */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Additional Technical Remarks / Target Landed Price / Special Packaging Needs:
              </label>
              <textarea
                rows={3}
                placeholder="e.g. We require batch test sample for approval before tanker dispatch. Target monthly volume is 50 MT..."
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:bg-white focus:border-teal-600 resize-none"
              />
            </div>

          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300 mt-0.5"
              />
              <span className="text-xs text-slate-600">
                I agree to receive formal commercial proforma quotations, COA analytical sheets, and technical follow-ups from the Atul Chemicals technical sales desk.
              </span>
            </label>
            {errors.acceptTerms && (
              <p className="text-[11px] text-rose-600 font-semibold mt-1">
                {errors.acceptTerms}
              </p>
            )}
          </div>

          {/* Navigation Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              id="back-to-requirement-list-btn"
              onClick={() => {
                onNavigate('requirement-list');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Requirement List</span>
            </button>

            <button
              type="submit"
              id="submit-customer-details-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all active:scale-98"
            >
              <span>Review Requirement Summary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};
