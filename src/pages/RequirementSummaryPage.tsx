import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit3, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  ArrowLeft, 
  Package, 
  Clock, 
  FileText,
  Loader2,
  Download,
  MessageSquare,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PageRoute } from '../types';
import { useRequirement } from '../context/RequirementContext';
import { RequirementStepsIndicator } from '../components/RequirementStepsIndicator';
import { 
  sendBillAndPDFToOwner,
  sendBillAndEmailToOwner,
  OWNER_WHATSAPP_DISPLAY,
  OWNER_WHATSAPP_NUMBER,
  OWNER_EMAIL_DISPLAY
} from '../utils/quotationGenerator';

interface RequirementSummaryPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const RequirementSummaryPage: React.FC<RequirementSummaryPageProps> = ({ onNavigate }) => {
  const { items, customer, submitRequirement, getItemCount } = useRequirement();
  const [submittingTarget, setSubmittingTarget] = useState<'whatsapp' | 'email' | 'gmail' | null>(null);

  const totalItemsCount = getItemCount();

  const totalTaxable = items.reduce(
    (sum, item) => sum + (item.quantity || 0) * (item.product?.rate ?? item.rate ?? 0),
    0
  );
  const totalGst = totalTaxable * 0.18;
  const grandTotal = totalTaxable + totalGst;

  const handleSendViaWhatsApp = async () => {
    setSubmittingTarget('whatsapp');
    try {
      const generatedRef = `AC-REQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      // Send Bill & PDF to Owner WhatsApp: 9021561915
      sendBillAndPDFToOwner({
        referenceCode: generatedRef,
        customer,
        items,
        createdAt: new Date().toLocaleDateString('en-IN')
      });

      await new Promise((resolve) => setTimeout(resolve, 600));
      await submitRequirement();
      onNavigate('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setSubmittingTarget(null);
    }
  };

  const handleSendViaEmail = async (method: 'mailto' | 'gmail' = 'mailto') => {
    setSubmittingTarget(method === 'gmail' ? 'gmail' : 'email');
    try {
      const generatedRef = `AC-REQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      // Send Bill & PDF to Owner Email: sales@atulchemicalsgroup.in
      sendBillAndEmailToOwner({
        referenceCode: generatedRef,
        customer,
        items,
        createdAt: new Date().toLocaleDateString('en-IN')
      }, method);

      await new Promise((resolve) => setTimeout(resolve, 600));
      await submitRequirement();
      onNavigate('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setSubmittingTarget(null);
    }
  };

  return (
    <div id="requirement-summary-page" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Steps Indicator */}
      <RequirementStepsIndicator
        currentStep="requirement-summary"
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto space-y-8 text-left">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Step 3 of 4: Verification & Commercial Quotation
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
            Requirement & Quotation Summary
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Please verify your requested chemical items, quantities, rates, and enterprise delivery information before final submission.
          </p>
        </div>

        {/* 1. Products Review Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-teal-700" />
              <h2 className="font-heading font-bold text-lg text-slate-900">
                Requested Products ({items.length})
              </h2>
            </div>

            <button
              id="edit-requirements-btn"
              onClick={() => onNavigate('requirement-list')}
              className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Items</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {items.map((item, idx) => {
              const itemRate = item.product?.rate ?? item.rate ?? 0;
              const lineTotal = (item.quantity || 1) * itemRate;

              return (
                <div key={item.productId} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      #{item.product?.srNo || idx + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                        {item.product?.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <span className="font-bold text-slate-900">
                          Rate: ₹{itemRate.toLocaleString('en-IN')} / {item.unit || item.product?.unit || 'KGS'}
                        </span>
                        <span>•</span>
                        <span className="text-teal-700 font-semibold">{item.product?.purity || 'Commercial'}</span>
                        <span>•</span>
                        <span>{item.product?.category || 'Chemical'}</span>
                      </div>
                      {item.customNotes && (
                        <p className="text-xs text-slate-600 italic mt-1 bg-slate-50 p-2 rounded border border-slate-100">
                          Remarks: "{item.customNotes}"
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:text-right bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-lg shrink-0">
                    <p className="font-heading font-extrabold text-sm sm:text-base text-slate-900">
                      ₹{lineTotal.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {item.quantity} {item.unit} ({item.selectedPackaging})
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Calculation Summary Box */}
          <div className="pt-4 border-t border-slate-200 bg-slate-50 p-5 rounded-xl space-y-2 text-xs sm:text-sm">
            <div className="flex items-center justify-between text-slate-600">
              <span>Total Items Count:</span>
              <span className="font-bold text-slate-900">{totalItemsCount} Units Across {items.length} Products</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Est. Taxable Subtotal:</span>
              <span className="font-bold text-slate-900">₹{(totalTaxable || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Est. Applicable GST (18%):</span>
              <span className="font-medium text-slate-700">₹{(totalGst || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center justify-between text-slate-900 font-heading font-extrabold text-base pt-2 border-t border-slate-200">
              <span>Est. Total Quotation Value:</span>
              <span className="text-teal-800">₹{(grandTotal || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        {/* 2. Customer & Delivery Information Review */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-900" />
              <h2 className="font-heading font-bold text-lg text-slate-900">
                Company & Delivery Information
              </h2>
            </div>

            <button
              id="edit-customer-details-btn"
              onClick={() => onNavigate('customer-details')}
              className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">Contact Person:</span>
              <span className="font-bold text-slate-900">{customer.fullName || 'Not provided'}</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">Company Name:</span>
              <span className="font-bold text-slate-900">{customer.companyName || 'Not provided'}</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">Corporate Email:</span>
              <span className="font-bold text-slate-900">{customer.email || 'Not provided'}</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">Contact Number:</span>
              <span className="font-bold text-slate-900">{customer.phone || 'Not provided'}</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-medium">Plant Location / City:</span>
              <span className="font-bold text-slate-900">{customer.city}{customer.state ? `, ${customer.state}` : ''}</span>
            </div>

            {customer.deliveryTimeline && (
              <div className="space-y-1">
                <span className="text-slate-400 block font-medium">Delivery Timeline:</span>
                <span className="font-bold text-teal-700">{customer.deliveryTimeline}</span>
              </div>
            )}

            {customer.gstOrTaxId && (
              <div className="space-y-1">
                <span className="text-slate-400 block font-medium">GSTIN / Tax ID:</span>
                <span className="font-bold font-mono text-slate-900">{customer.gstOrTaxId}</span>
              </div>
            )}

            {customer.industrySector && (
              <div className="space-y-1">
                <span className="text-slate-400 block font-medium">Industry Domain:</span>
                <span className="font-bold text-slate-900">{customer.industrySector}</span>
              </div>
            )}
          </div>

          {customer.deliveryAddress && (
            <div className="pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-400 block font-medium">Plant Delivery Address:</span>
              <p className="text-slate-800 mt-0.5">{customer.deliveryAddress}</p>
            </div>
          )}

          {customer.additionalNotes && (
            <div className="pt-2 text-xs">
              <span className="text-slate-400 block font-medium">Special Project / Packaging Remarks:</span>
              <p className="text-slate-800 mt-0.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">{customer.additionalNotes}</p>
            </div>
          )}
        </div>

        {/* 3. Commercial Protocol Assurance */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5" />
            <span>Commercial Quotation Protocol</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <h4 className="font-bold text-white">1. Verified GC Analysis</h4>
              <p className="text-slate-400">Shipment backed by certified lab assay and standard SDS sheet.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white">2. Proforma Quotation</h4>
              <p className="text-slate-400">Formal invoice breakdown with landed freight & GST calculation.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white">3. Priority Dispatch</h4>
              <p className="text-slate-400">Dedicated logistics desk handles road tanker / ISO container loading.</p>
            </div>
          </div>
        </div>

        {/* Final Submission Section - 2 Dispatch Channels */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-teal-700" />
                <span>Choose Order Dispatch Method (2 Options)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Both options will automatically generate and download your official PDF Bill & Quotation receipt.
              </p>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 self-start sm:self-auto">
              Instant Owner Notification
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option 1: WhatsApp */}
            <div className="border border-emerald-200 bg-emerald-50/40 rounded-xl p-4 flex flex-col justify-between space-y-3 hover:border-emerald-300 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Option 1: WhatsApp
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700">{OWNER_WHATSAPP_DISPLAY}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 pt-1">Send via WhatsApp Desk</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct instant chat with owner desk on WhatsApp with pre-filled itemized bill and specifications.
                </p>
              </div>

              <button
                type="button"
                id="final-submit-requirement-btn"
                onClick={handleSendViaWhatsApp}
                disabled={Boolean(submittingTarget) || items.length === 0}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all active:scale-98 disabled:opacity-50"
              >
                {submittingTarget === 'whatsapp' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Opening WhatsApp & Bill...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Order via Whatsapp</span>
                  </>
                )}
              </button>
            </div>

            {/* Option 2: Email */}
            <div className="border border-blue-200 bg-blue-50/40 rounded-xl p-4 flex flex-col justify-between space-y-3 hover:border-blue-300 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">
                    <Mail className="w-3.5 h-3.5" />
                    Option 2: Corporate Email
                  </span>
                  <span className="text-[11px] font-mono font-bold text-blue-700 truncate max-w-[150px]">{OWNER_EMAIL_DISPLAY}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 pt-1">Send via Email Desk</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sends formal quotation order to owner email with reference ID, line items, and downloadable PDF bill.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  id="send-email-btn"
                  onClick={() => handleSendViaEmail('mailto')}
                  disabled={Boolean(submittingTarget) || items.length === 0}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-700/25 transition-all active:scale-98 disabled:opacity-50"
                >
                  {submittingTarget === 'email' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Opening Email & Bill...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Order via Email</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] px-1 text-slate-500">
                  <span>Using webmail?</span>
                  <button
                    type="button"
                    id="send-gmail-btn"
                    onClick={() => handleSendViaEmail('gmail')}
                    disabled={Boolean(submittingTarget) || items.length === 0}
                    className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1 hover:underline disabled:opacity-50"
                  >
                    <span>Open in Web Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              id="back-to-details-btn"
              onClick={() => onNavigate('customer-details')}
              disabled={Boolean(submittingTarget)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Customer Details</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Owner WhatsApp: <strong className="text-slate-800 font-mono">{OWNER_WHATSAPP_DISPLAY}</strong> &bull; Email: <strong className="text-slate-800 font-mono">{OWNER_EMAIL_DISPLAY}</strong></span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
