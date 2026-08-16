import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FlaskConical, 
  Truck, 
  Award, 
  Clock, 
  Layers, 
  Send, 
  BarChart3, 
  FileSpreadsheet,
  Check,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';
import { CHEMICAL_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useRequirement } from '../context/RequirementContext';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { items } = useRequirement();
  const featuredProducts = CHEMICAL_PRODUCTS.filter((p) => p.featured).slice(0, 4);

  const handleSendRequirement = () => {
    if (items.length > 0) {
      onNavigate('customer-details');
    } else {
      onNavigate('products');
    }
  };

  return (
    <div id="home-page" className="w-full flex flex-col space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden py-16 sm:py-24 lg:py-32">
        {/* Background Visual Pattern & Glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-teal-950/80 border border-teal-500/40 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <FlaskConical className="w-4 h-4 text-teal-400" />
                <span>Premier B2B Chemical Manufacturer & Distributor</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-white">
                Engineered Purity for <br />
                <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-blue-200 bg-clip-text text-transparent">
                  Global Industrial Excellence
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Atul Chemicals supplies certified high-purity industrial solvents, specialty polymers, water purification reagents, and pharmaceutical intermediates. Guaranteed batch consistency, custom packaging, and prompt nationwide dispatch.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="hero-explore-products-btn"
                  onClick={() => onNavigate('products')}
                  className="bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 flex items-center gap-2.5 transition-all duration-200 active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-send-requirement-btn"
                  onClick={handleSendRequirement}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold px-7 py-3.5 rounded-xl backdrop-blur-md flex items-center gap-2.5 transition-all duration-200 active:scale-95"
                >
                  <Send className="w-4 h-4 text-teal-400" />
                  <span>Send Requirement</span>
                </button>
              </div>

              {/* Trust Badges under hero */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="font-heading font-extrabold text-xl sm:text-2xl text-teal-300">50,000+ MT</p>
                  <p className="text-xs text-slate-400 font-medium">Annual Supply Capacity</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl sm:text-2xl text-white">99.8%+</p>
                  <p className="text-xs text-slate-400 font-medium">Average Assay Purity</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl sm:text-2xl text-teal-300">&lt; 4 Hours</p>
                  <p className="text-xs text-slate-400 font-medium">Formal RFQ Response</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-teal-500/30 to-blue-900/30 border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-4/3">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                    alt="Atul Chemicals Quality Laboratory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating badge inside visual */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-600/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Certified Quality Assurance
                        </h4>
                        <p className="text-xs text-slate-300">
                          Every dispatch supported with GC/HPLC certified Certificate of Analysis (COA)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION / ABOUT SECTION */}
      <section id="about-intro-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Company Profile & Legacy
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Empowering Manufacturing Through Reliable Chemical Chemistry
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded on the principles of precision manufacturing and uncompromising quality, <strong>Atul Chemicals</strong> has grown into a trusted B2B partner for pharmaceutical plants, coating manufacturers, water treatment authorities, and polymer processing units.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our state-of-the-art storage depots, tanker fleets, and analytical testing laboratories ensure that every consignment meets strict global pharmacopeia and industrial benchmarks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Bulk Tanker & ISO Container Ready</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Flameproof Hazardous Storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Full Batch Traceability & COA</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Dedicated B2B Key Account Manager</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-teal-700 hover:text-teal-800 font-bold text-sm flex items-center gap-1.5 group"
                >
                  <span>Learn more about our manufacturing & infrastructure</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-teal-300" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Industrial Solvents</h3>
                  <p className="text-xs text-slate-500">IPA, Ethyl Acetate, Toluene, Glacial Acetic Acid</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center">
                    <Layers className="w-5 h-5 text-teal-200" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Polymers & Resins</h3>
                  <p className="text-xs text-slate-500">Suspension PVC K-67, Liquid Epoxy Resin, PE</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-950 text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-teal-300" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Water Treatment</h3>
                  <p className="text-xs text-slate-500">PAC 30%, Sodium Hypochlorite, Alum</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-teal-900 text-white flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-teal-300" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Specialty Intermediates</h3>
                  <p className="text-xs text-slate-500">PNCB, Benzoic Acid, Caustic Flakes</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section id="featured-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              High-Demand Catalog
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
              Featured Chemical Products
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Browse our core stock available for prompt dispatch in bulk tankers, IBCs, and HDPE drums.
            </p>
          </div>

          <button
            id="home-view-all-products-btn"
            onClick={() => onNavigate('products')}
            className="self-start md:self-end bg-blue-900 hover:bg-blue-950 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-teal-300" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section id="why-choose-us-section" className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800">
              Why Partner With Us
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-3">
              Built for Uninterrupted Industrial Supply Chains
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              We understand that even minor variances in chemical purity or delayed shipments can disrupt high-throughput manufacturing lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Guaranteed Purity & GC Assay</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every batch is rigorously screened in our in-house QC laboratory using GC, HPLC, Karl Fischer titrators, and spectrophotometry.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Dedicated Logistics & Tankers</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our partnered insulated stainless steel and mild steel tanker fleets ensure punctual delivery across all major industrial clusters.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Custom Packaging Configurations</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you need 25kg multi-wall bags, 200L epoxy-lined drums, 1000L IBC totes, or 25 MT bulk tankers, we pack to specification.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">4-Hour RFQ Turnaround</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Receive commercial pricing, packaging details, transit schedules, and technical data sheets rapidly through our digital portal.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Compliance & Regulatory Safety</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Full compliance with GHS classification, standard SDS documentation, REACH guidelines, and state environmental clearances.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Contract Pricing & Spot Deals</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Flexible commercial terms including quarterly volume contracts, annual rate locks, and competitive spot tender quotes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS WORKFLOW PREVIEW */}
      <section id="how-it-works-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Streamlined Procurement
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
            How The Requirement Flow Works
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Submit your chemical specs, packaging choices, and delivery timelines in 4 easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-left space-y-3 relative shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-base">Select Products</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore our chemical catalog, choose your required purity grade, and add to your requirement list.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 text-left space-y-3 relative shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-base">Specify Volumes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Define quantities, preferred packaging (HDPE drums, IBCs, Tankers), and custom technical remarks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 text-left space-y-3 relative shadow-sm">
            <div className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-base">Enter Company Info</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provide corporate billing & plant delivery details for tax calculation and freight estimation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-teal-300 bg-teal-50/40 text-left space-y-3 relative shadow-sm">
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-base">Get Certified Quote</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our sales chemist reviews your requirement and issues a formal commercial proforma within 4 hours.
            </p>
          </div>

        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('how-it-works')}
            className="text-sm font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1.5"
          >
            <span>Read full procurement & dispatch guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. CONTACT / RFQ CALL TO ACTION */}
      <section id="contact-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-teal-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300 bg-teal-950 px-3 py-1 rounded-full border border-teal-500/30">
                Ready for Bulk Orders or Custom Synthesis?
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Request a Certified Commercial Quotation Today
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Our technical sales team is ready to provide comprehensive technical data sheets, Certificate of Analysis samples, and competitive landed volume pricing.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                id="cta-send-requirement-btn"
                onClick={handleSendRequirement}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Requirement Now</span>
              </button>

              <button
                id="cta-contact-us-btn"
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Contact Sales Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
