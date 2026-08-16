import React, { useState } from 'react';
import { 
  Search, 
  Package, 
  FileCheck, 
  Truck, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  FlaskConical,
  Send
} from 'lucide-react';
import { PageRoute } from '../types';

interface HowItWorksPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      number: '01',
      title: 'Browse & Select Chemical Specifications',
      subtitle: 'Identify CAS numbers, formula assay & purity grades',
      description: 'Search our exhaustive B2B catalog of industrial solvents, suspension polymers, coagulants, and fine chemical intermediates. View full technical data sheets (TDS) and standard COA benchmarks.',
      icon: Search,
      badge: 'Step 1: Product Selection'
    },
    {
      number: '02',
      title: 'Configure Volumes & Packaging Formats',
      subtitle: 'Select from 25kg bags, 200L drums, IBC totes, or bulk road tankers',
      description: 'Specify your required quantity in Metric Tons (MT), Kilograms, Drums, or Litres. Choose your preferred container type based on your plant unloading facilities and add custom purity remarks.',
      icon: Package,
      badge: 'Step 2: Specification'
    },
    {
      number: '03',
      title: 'Submit Company & Delivery Location',
      subtitle: 'Provide enterprise billing & plant destination details',
      description: 'Fill out our streamlined company details form with your city and delivery timeline. Our logistics calculation engine accurately estimates landed freight to your destination.',
      icon: FileCheck,
      badge: 'Step 3: Verification'
    },
    {
      number: '04',
      title: 'Receive Certified Commercial Quotation',
      subtitle: 'Official proforma + batch COA within 4 business hours',
      description: 'Our technical sales chemist reviews product availability and issues an official formal quotation containing unit prices, GST breakdown, valid transit schedule, and batch assay samples.',
      icon: Clock,
      badge: 'Step 4: Formal RFQ'
    },
    {
      number: '05',
      title: 'Secured Logistics & Safe Plant Dispatch',
      subtitle: 'Dedicated road tankers and bonded transport',
      description: 'Upon PO confirmation, shipments are loaded under nitrogen-blanketed bays with strict GHS labels, calibrated weighbridge verification, and real-time transit status updates.',
      icon: Truck,
      badge: 'Step 5: Dispatch & Handover'
    }
  ];

  const faqs = [
    {
      q: 'What is the standard turnaround time for a commercial requirement quotation?',
      a: 'For standard catalog chemicals, formal proforma quotations with landed freight are dispatched within 4 business hours. Custom synthesis or tailor-made solvent blends typically require 24 hours for laboratory feasibility assessment.'
    },
    {
      q: 'Do you provide Certificate of Analysis (COA) and Safety Data Sheets (SDS)?',
      a: 'Yes, 100% of our dispatches include a batch-specific COA containing Gas Chromatography (GC) assay results, moisture testing, and heavy metal checks, alongside GHS-compliant 16-section Safety Data Sheets.'
    },
    {
      q: 'What are your minimum order quantities (MOQ)?',
      a: 'MOQs vary by packaging format: 1 Drum (160-220 Kg) for standard solvents, 1 Metric Ton (40 bags of 25kg) for polymers/coagulants, and 15-30 MT for bulk road tankers.'
    },
    {
      q: 'Can Atul Chemicals support annual rate contracts or quarterly volume locks?',
      a: 'Yes. We frequently establish quarterly volume agreements and annual rate contracts with price formulas tied to benchmark petrochemical indices for large manufacturing consumers.'
    },
    {
      q: 'What quality certifications does your manufacturing facility hold?',
      a: 'Our facilities operate under ISO 9001:2015 Quality Management Systems, ISO 14001 Environmental Standards, GMP guidelines for pharma-grade chemicals, and REACH compliance for international export shipments.'
    }
  ];

  return (
    <div id="how-it-works-page" className="w-full flex flex-col space-y-16 lg:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800">
            B2B Procurement Blueprint
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight">
            How The Atul Chemicals Requirement Flow Works
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            From molecular selection to calibrated weighbridge dispatch, our streamlined digital workflow eliminates procurement delays.
          </p>
        </div>
      </section>

      {/* Step by Step Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-left max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-teal-400 transition-all flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-950 text-teal-300 flex items-center justify-center font-heading font-extrabold text-xl shrink-0 shadow-md">
                  {step.number}
                </div>

                <div className="space-y-2 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    {step.badge}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Standards & Documentation Callout */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
              Regulatory Compliance
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-3">
              Standard Quality Documentation Dispatched With Every Order
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-teal-400" />
              <h4 className="font-bold text-white text-sm">Batch Certificate of Analysis</h4>
              <p className="text-xs text-slate-400">Actual GC assay %, moisture % and trace impurity metrics.</p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-2">
              <FileCheck className="w-6 h-6 text-blue-400" />
              <h4 className="font-bold text-white text-sm">GHS Safety Data Sheet (SDS)</h4>
              <p className="text-xs text-slate-400">16-point safety, fire protection, and chemical handling guide.</p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-2">
              <Truck className="w-6 h-6 text-teal-400" />
              <h4 className="font-bold text-white text-sm">Transport Emergency Card (TREM)</h4>
              <p className="text-xs text-slate-400">Hazard guidelines for road tanker driver and state check-posts.</p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <h4 className="font-bold text-white text-sm">Weighbridge Calibration Slip</h4>
              <p className="text-xs text-slate-400">Certified tare and gross weight certification for bulk dispatches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Got Questions?
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Procurement & Commercial FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-teal-700"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('products')}
              className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Explore Products & Start Requirement</span>
              <ArrowRight className="w-4 h-4 text-teal-300" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
