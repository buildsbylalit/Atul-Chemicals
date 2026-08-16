import React from 'react';
import { 
  ShieldCheck, 
  FlaskConical, 
  Award, 
  Factory, 
  Layers, 
  CheckCircle2, 
  Truck, 
  Users2, 
  Globe2, 
  Leaf, 
  ArrowRight,
  Send
} from 'lucide-react';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="w-full flex flex-col space-y-16 lg:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800">
            About Atul Chemicals
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight">
            Pioneering Chemical Purity & Industrial Supply Since 1998
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            A trusted Indian chemical enterprise delivering critical bulk solvents, functional polymers, water treatment coagulants, and fine chemical intermediates across global markets.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center">
              <Globe2 className="w-6 h-6 text-teal-300" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-slate-900">Our Corporate Mission</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To deliver rigorously tested, reliable, and compliant chemical solutions that empower manufacturing enterprises to operate with utmost safety, highest yields, and zero downtime.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Zero compromise on molecular assay and purity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>On-time dispatch with end-to-end tanker tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Transparent and ethical commercial transactions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center">
              <Award className="w-6 h-6 text-teal-200" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-slate-900">Our Strategic Vision</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To be recognized internationally as India's most dependable, sustainable, and technologically agile chemical manufacturing and supply partner for B2B industrial processing.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Expand eco-friendly solvent recycling & green chemistry</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Modernize tank farms with IoT level monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Double annual throughput capacity to 100,000 MT</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Infrastructure & Quality Testing Facilities */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
              Industrial Infrastructure
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-3">
              Precision QC Laboratories & Modern Depots
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Our facilities in the MIDC Industrial Corridor are engineered to meet strict chemical safety, environmental, and high-volume packaging standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">In-House Analytical Laboratory</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Equipped with Shimadzu Gas Chromatography (GC), UV-Vis Spectrophotometers, Karl Fischer Coulometers, and automated densitometers for comprehensive batch analysis.
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">Bulk Tank Farms & Storage</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated carbon steel and SS 316 storage tanks with closed-loop nitrogen blanketing to prevent moisture ingestion and degradation of volatile solvents.
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">Dedicated Road Tanker Fleet</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operates compliant PESO-licensed road tankers equipped with emergency shutoff valves, vapor recovery lines, and GPS location tracking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Sector Applications
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
            Industries Powered by Atul Chemicals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: 'Pharmaceuticals', desc: 'API extractions & solvents' },
            { title: 'Paints & Coatings', desc: 'Resins, thinners & esters' },
            { title: 'Water Treatment', desc: 'ETP, STP & drinking coagulants' },
            { title: 'Textile & Dyes', desc: 'Bleaching & scouring alkalis' },
            { title: 'Plastics & PVC', desc: 'Suspension resins & plasticizers' },
            { title: 'Agrochemicals', desc: 'Pesticide & herbicide precursors' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 hover:border-teal-500 transition-colors shadow-sm">
              <div className="w-8 h-8 mx-auto rounded-full bg-slate-100 text-blue-900 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability & Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-950 text-white rounded-2xl p-8 sm:p-12 border border-teal-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Leaf className="w-4 h-4" />
              <span>Environment, Health & Safety (EHS)</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Committed to Zero Liquid Discharge and Sustainable Operations
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We implement comprehensive solvent recovery systems, biological effluent treatment, and strict GHS-compliant container management to ensure sustainable stewardship of chemical resources.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onNavigate('products')}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <span>Explore Chemical Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Contact Quality Desk</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
