import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  Printer, 
  ArrowRight, 
  Home, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Package, 
  FileText, 
  Sparkles,
  Building2,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { PageRoute } from '../types';
import { useRequirement } from '../context/RequirementContext';
import { RequirementStepsIndicator } from '../components/RequirementStepsIndicator';
import { 
  generateQuotationPDF, 
  getOwnerWhatsAppUrl, 
  getOwnerMailtoUrl,
  getOwnerGmailWebUrl,
  OWNER_WHATSAPP_DISPLAY,
  OWNER_WHATSAPP_NUMBER,
  OWNER_EMAIL_DISPLAY,
  OWNER_EMAIL
} from '../utils/quotationGenerator';

interface SuccessPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onNavigate }) => {
  const { lastInquiry, customer, items, clearRequirement } = useRequirement();

  const referenceCode = lastInquiry?.trackingCode || `AC-REQ-${new Date().getFullYear()}-7824`;
  const submissionDate = lastInquiry?.createdAt || new Date().toLocaleString();

  const quotationData = {
    referenceCode,
    customer,
    items: items.length > 0 ? items : (lastInquiry?.items || []),
    createdAt: submissionDate,
  };

  const handleDownloadPDF = () => {
    try {
      const doc = generateQuotationPDF(quotationData);
      const sanitizedRef = referenceCode.replace(/[^a-zA-Z0-9_-]/g, '_');
      doc.save(`Bill_Quotation_${sanitizedRef}.pdf`);
    } catch (e) {
      console.error(e);
      window.print();
    }
  };

  const handleOpenWhatsApp = () => {
    const waUrl = getOwnerWhatsAppUrl(quotationData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenEmail = () => {
    const mailtoUrl = getOwnerMailtoUrl(quotationData);
    window.location.href = mailtoUrl;
  };

  const handleOpenGmail = () => {
    const gmailUrl = getOwnerGmailWebUrl(quotationData);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleStartNew = () => {
    clearRequirement();
    onNavigate('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="success-confirmation-page" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Steps Indicator */}
      <RequirementStepsIndicator
        currentStep="success"
        onNavigate={onNavigate}
      />

      <div className="max-w-3xl mx-auto space-y-8 text-left">
        
        {/* Main Success Hero Card */}
        <div className="bg-white rounded-2xl border border-teal-200 p-8 sm:p-12 shadow-sm text-center space-y-6 relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-in zoom-in-50 duration-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Requirement & Bill Ready
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900">
              Requirement Logged Successfully!
            </h1>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{customer.fullName || 'Valued Customer'}</strong>. Your chemical requirement inquiry has been recorded and the quotation bill has been prepared for dispatch.
            </p>
          </div>

          {/* Reference ID Pill */}
          <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto text-left">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Inquiry Reference ID:
              </p>
              <p className="text-lg sm:text-xl font-mono font-bold text-teal-300">
                {referenceCode}
              </p>
            </div>

            <div className="text-right space-y-0.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700/60 block">
                <MessageSquare className="w-3 h-3" />
                <span>WA: {OWNER_WHATSAPP_DISPLAY}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-blue-950/80 text-blue-300 px-2 py-0.5 rounded border border-blue-800/60 block">
                <Mail className="w-3 h-3" />
                <span>Email: {OWNER_EMAIL_DISPLAY}</span>
              </span>
            </div>
          </div>

          {/* Actions: WhatsApp / Email / Download PDF / Print */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              id="whatsapp-owner-btn"
              onClick={handleOpenWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Owner</span>
            </button>

            <button
              id="email-owner-btn"
              onClick={handleOpenEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-700/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Owner</span>
            </button>

            <button
              id="email-gmail-btn"
              onClick={handleOpenGmail}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold transition-colors"
            >
              <span>Gmail Web</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              id="download-pdf-btn"
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-teal-300 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Bill</span>
            </button>

            <button
              id="print-summary-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print Receipt</span>
            </button>

            <button
              id="new-inquiry-btn"
              onClick={handleStartNew}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              <Package className="w-4 h-4" />
              <span>New Requirement</span>
            </button>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-700" />
            <span>Next Steps in Your Procurement Journey</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Technical Review</h4>
              <p className="text-slate-600 leading-relaxed">
                Assigned to dedicated Regional Sales Chemist to verify purity specs and packaging availability.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Formal Quotation</h4>
              <p className="text-slate-600 leading-relaxed">
                Commercial Proforma with landed freight, GST, and Certificate of Analysis dispatched to <strong>{customer.email || 'your email'}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Priority Dispatch</h4>
              <p className="text-slate-600 leading-relaxed">
                Upon PO approval, tanker or drum cargo loaded directly from our certified storage depots.
              </p>
            </div>

          </div>
        </div>

        {/* Direct Contact Support Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-base text-white">
              Need Expedited / Emergency Tanker Clearance?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with our senior industrial desk manager for immediate stock allocations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+912224567890"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+91 (022) 2456-7890</span>
            </a>

            <button
              onClick={() => onNavigate('home')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
