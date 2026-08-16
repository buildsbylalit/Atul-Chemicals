import React from 'react';
import { 
  FlaskConical, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';
import { PageRoute } from '../types';
import { CHEMICAL_CATEGORIES } from '../data/products';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
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

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Atul Chemicals is a dependable B2B manufacturer and distributor of high-purity industrial solvents, specialty polymers, water treatment compounds, and chemical intermediates serving global manufacturing industries.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct Plant Dispatches Active
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Chemical Products</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>How It Works</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('requirement-list')} className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Requirement List</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Key Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CHEMICAL_CATEGORIES.slice(1, 6).map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => handleNav('products')}
                    className="text-left hover:text-teal-400 transition-colors text-slate-400 line-clamp-1"
                  >
                    {cat}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleNav('products')}
                  className="text-teal-400 font-semibold flex items-center gap-1 hover:underline text-xs mt-1"
                >
                  <span>View All 12+ Chemicals</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Office & Plant Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact & Works
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Plot No. 42-45, Chemical Industrial Zone, MIDC Phase II, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91 (022) 2456-7890</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="break-all">sales@atulchemicals.example</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Mon – Sat: 09:00 AM – 06:30 PM</span>
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
