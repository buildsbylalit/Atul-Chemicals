import React from 'react';
import { 
  FlaskConical, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner: B2B Trust Bar */}
      <div className="bg-slate-900/80 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">ISO 9001:2015 Certified</h4>
              <p className="text-xs text-slate-400 mt-0.5">Strict quality parameters & batch trace testing</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-400">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">Batch COA & GC Assay</h4>
              <p className="text-xs text-slate-400 mt-0.5">Every shipment accompanied by certified lab report</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">Bulk & Custom Packaging</h4>
              <p className="text-xs text-slate-400 mt-0.5">Drums, IBCs, ISO Tanks & Dedicated Tankers</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white">Rapid RFQ Turnaround</h4>
              <p className="text-xs text-slate-400 mt-0.5">Formal quotation provided within 4 business hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Company Bio */}
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-teal-600 flex items-center justify-center text-white shadow-md">
                <FlaskConical className="w-5 h-5 text-teal-200" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-white">ATUL</span>
                  <span className="font-heading font-bold text-xl tracking-tight text-teal-400">CHEMICALS</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Chemical Manufacturing & B2B Supply</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Atul Chemicals is a dependable B2B manufacturer and distributor of high-purity industrial solvents, specialty polymers, water treatment compounds, and chemical intermediates serving global manufacturing industries.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct Plant Dispatches Active
              </span>
            </div>
          </div>

          {/* Office & Plant Contact */}
          <div id="footer-contact-section" className="flex flex-col md:pl-6 lg:pl-12 md:border-l md:border-slate-800/80">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact & Works
            </h3>
            
            <div className="space-y-3 text-sm text-slate-400">
              {/* Address / Map Integration */}
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=19,+Shivaji+Nagar,+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open location in Google Maps"
                  className="text-slate-300 hover:text-teal-400 transition-colors inline-block font-medium hover:underline leading-relaxed"
                >
                  19, Shivaji Nagar, Nashik
                </a>
              </div>

              {/* Direct Phone Numbers */}
              <div className="flex flex-wrap items-center gap-x-2 text-slate-300 font-medium">
                <a 
                  href="tel:+919021561915" 
                  className="hover:text-teal-400 transition-colors hover:underline"
                >
                  +91 9021561915
                </a>
                <span className="text-slate-600">,</span>
                <a 
                  href="tel:+919922275337" 
                  className="hover:text-teal-400 transition-colors hover:underline"
                >
                  +91 9922275337
                </a>
              </div>

              {/* Direct Mail Integration */}
              <div>
                <a
                  href="mailto:sales@atulchemicalsgroup.in"
                  title="Send inquiry email"
                  className="text-slate-300 hover:text-teal-400 transition-colors inline-block font-medium hover:underline break-all"
                >
                  sales@atulchemicalsgroup.in
                </a>
              </div>

              {/* Operating Hours */}
              <div className="text-xs text-slate-500 pt-1">
                Mon – Sat: 09:00 AM – 06:30 PM (IST)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Atul Chemicals Pvt. Ltd. All rights reserved. B2B Industrial Supply Portal.</p>
          <div className="flex items-center gap-6">
            <span>Material Safety Data Compliant</span>
            <span>GHS Chemical Labeling</span>
            <span>Strict B2B Procurement Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
