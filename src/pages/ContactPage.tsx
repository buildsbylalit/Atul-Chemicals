import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  FlaskConical, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Bulk Tanker Quotation',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please provide inquiry message details';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSent(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: 'Bulk Tanker Quotation',
        message: '',
      });
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <div id="contact-page" className="w-full flex flex-col space-y-16 lg:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800">
            Get In Touch
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight">
            Contact Atul Chemicals Sales & Works
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Connect with our technical chemists, customer support desk, or plant dispatch team for quotation inquiries and custom compounding.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column: Contact Details & Depots */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Corporate Office */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">Corporate & Commercial Office</h3>
                  <p className="text-xs text-slate-500">Commercial & Financial Headquarters</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>Suite 804, Atul House, Bandra-Kurla Complex (BKC), Mumbai, Maharashtra - 400051, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>+91 (022) 2456-7890 / +91 (022) 2456-7891</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>info@atulchemicals.example</span>
                </div>
              </div>
            </div>

            {/* Manufacturing Works & Tank Farm */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-teal-200" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">Manufacturing Works & Depots</h3>
                  <p className="text-xs text-slate-500">Analytical Lab, QC & Weighbridge</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>Plot No. 42-45, Chemical Industrial Zone, MIDC Phase II, Tarapur / Thane Industrial Corridor, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>+91 (025) 2525-4400 (Plant Dispatch Desk)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>dispatch@atulchemicals.example</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Dispatch Hours: Mon - Sat (08:00 AM - 08:00 PM)</span>
                </div>
              </div>
            </div>

            {/* Direct Commercial Assurance */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Immediate Inquiry SLA</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All requirement inquiries submitted through this portal are routed directly to our designated product manager for immediate stock reservation.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
              <div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Send a Direct Message / Quotation Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below and our chemical sales specialist will get back to you within 4 business hours.
                </p>
              </div>

              {isSent && (
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-300 text-teal-900 flex items-start gap-3 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully</h4>
                    <p className="text-xs text-teal-800 mt-0.5">
                      Your inquiry has been logged. Our technical team has been notified and will email you with the requested specifications shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                        errors.name ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-600 font-semibold mt-1">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nexus Polychem Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                        errors.company ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                      }`}
                    />
                    {errors.company && <p className="text-[11px] text-rose-600 font-semibold mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Corporate Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. anand@nexuschem.example"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white transition-all ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 font-semibold mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Contact Number:
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98200 55555"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:bg-white focus:border-teal-600"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Nature of Inquiry:
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:bg-white focus:border-teal-600 font-medium text-slate-800"
                  >
                    <option value="Bulk Tanker Quotation">Bulk Road Tanker Commercial Quotation</option>
                    <option value="Technical COA / Sample Request">Technical COA / Lab Sample Request</option>
                    <option value="Custom Chemical Synthesis">Custom Chemical Synthesis & Toll Compounding</option>
                    <option value="Annual Rate Contract">Annual Rate Contract Proposal</option>
                    <option value="General Commercial Inquiry">General Commercial / Export Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Your Requirements / Specifications <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify chemical name, purity grade, expected monthly consumption, packaging, and unloading plant location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:outline-none focus:bg-white resize-none transition-all ${
                      errors.message ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-300 focus:border-teal-600'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 font-semibold mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>Send Message to Sales Desk</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
