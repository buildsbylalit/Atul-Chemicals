import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Plus, 
  Package, 
  FileText, 
  ShieldCheck, 
  Download, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  ShoppingBag,
  Send,
  Sparkles,
  Info
} from 'lucide-react';
import { ChemicalProduct, PageRoute, PackagingOption } from '../types';
import { CHEMICAL_PRODUCTS } from '../data/products';
import { useRequirement } from '../context/RequirementContext';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ onNavigate }) => {
  const { 
    selectedProductIdForDetails, 
    addToRequirement, 
    isInRequirement,
    setSelectedProductIdForDetails 
  } = useRequirement();

  // Retrieve selected product, or fallback to first product
  const product: ChemicalProduct = 
    CHEMICAL_PRODUCTS.find((p) => p.id === selectedProductIdForDetails) || CHEMICAL_PRODUCTS[0];

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedPackaging, setSelectedPackaging] = useState<PackagingOption>(product.packagingOptions[0]);
  const [customNotes, setCustomNotes] = useState<string>('');
  const [unit, setUnit] = useState<string>(product.unit || 'KGS');
  const [isAddedSuccess, setIsAddedSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'applications' | 'packaging' | 'safety'>('specs');

  const isAlreadyInRequirement = isInRequirement(product.id);

  // Related products from same category
  const relatedProducts = CHEMICAL_PRODUCTS
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleAdd = () => {
    addToRequirement(product, quantity, selectedPackaging, unit, customNotes);
    setIsAddedSuccess(true);
    setTimeout(() => setIsAddedSuccess(false), 2500);
  };

  const handleNavigateToRequirement = () => {
    onNavigate('requirement-list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="product-details-page" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between text-left">
        <button
          id="back-to-products-btn"
          onClick={() => onNavigate('products')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-900 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </button>

        <div className="text-xs text-slate-500 hidden sm:flex items-center gap-2">
          <span>Products</span>
          <span>/</span>
          <span className="text-teal-700 font-semibold">{product.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm text-left">
        
        {/* Left Column: Product Summary & Commercial Specification */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-6 text-white space-y-5">
            <div className="flex items-center justify-between">
              <span className="bg-amber-400 text-slate-950 font-mono font-bold px-3 py-1 rounded text-xs">
                Product Item #{product.srNo}
              </span>
              <span className="text-xs font-semibold text-teal-300 bg-teal-950/80 border border-teal-500/40 px-2.5 py-1 rounded">
                {product.category}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-teal-300 font-bold uppercase tracking-wider block">Official Unit Rate</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-heading font-extrabold text-3xl text-white">
                  ₹{(product?.rate ?? 0).toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-teal-200 font-semibold">/ {product?.unit || 'KGS'}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Standard Lot:</span>
                <span className="font-bold text-white text-sm">{product?.defaultQty || 1} {product?.unit || 'KGS'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Taxable Base Lot:</span>
                <span className="font-bold text-teal-300 text-sm">₹{(product?.taxableValue ?? 0).toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Grade / Quality:</span>
                <span className="font-bold text-white">{product?.grade || 'Commercial Grade'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Form / State:</span>
                <span className="font-bold text-slate-200">{(product?.appearance || 'Liquid').split(',')[0]}</span>
              </div>
            </div>
          </div>

          {/* Regulatory Badges */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Quality Certified</p>
                <p className="text-[11px] text-slate-500">Commercial Standard</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-blue-900 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Safety Compliant</p>
                <p className="text-[11px] text-slate-500">Technical Datasheet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Details & Add to Requirement Box */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          
          <div>
            {/* Category & CAS */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full">
                {product.category}
              </span>
              {product.casNumber && (
                <span className="bg-slate-100 text-slate-700 text-xs font-mono font-bold px-3 py-1 rounded-full border border-slate-300">
                  CAS: {product.casNumber}
                </span>
              )}
              <span className="bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
                {product.grade}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              {product.name}
            </h1>
            {product.iupacName && (
              <p className="text-xs sm:text-sm text-slate-500 italic mt-0.5">
                Specification: {product.iupacName}
              </p>
            )}

            {/* Full description */}
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Molecular Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Standard Lot:</span>
                <span className="font-bold text-slate-800">{product.defaultQty} {product.unit}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Appearance:</span>
                <span className="font-bold text-slate-800 truncate block" title={product.appearance}>{product.appearance}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Purity / Active:</span>
                <span className="font-bold text-teal-700">{product.purity}</span>
              </div>
              {product.molecularWeight && (
                <div>
                  <span className="text-slate-400 block font-medium">Molecular Wt:</span>
                  <span className="font-bold text-slate-800">{product.molecularWeight}</span>
                </div>
              )}
              {product.density && (
                <div>
                  <span className="text-slate-400 block font-medium">Density:</span>
                  <span className="font-bold text-slate-800">{product.density}</span>
                </div>
              )}
              <div>
                <span className="text-slate-400 block font-medium">Lead Time:</span>
                <span className="font-bold text-emerald-700">Ready Stock</span>
              </div>
            </div>
          </div>

          {/* Add to Requirement Form Container */}
          <div className="bg-teal-50/50 border border-teal-200 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-teal-700" />
                <span>Configure & Add to Requirement List</span>
              </h3>
              <span className="text-xs font-semibold text-teal-800">
                MOQ: {product.minimumOrderQuantity}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Packaging Type selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Select Packaging Type:
                </label>
                <select
                  value={selectedPackaging}
                  onChange={(e) => setSelectedPackaging(e.target.value as PackagingOption)}
                  className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-800 focus:outline-none focus:border-teal-600"
                >
                  {product.packagingOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity and Unit */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Quantity Required:
                  </label>
                  <span className="text-[11px] font-bold text-teal-800">
                    Est: ₹{((quantity || 1) * (product?.rate ?? 0)).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="50000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 text-sm font-bold text-center bg-white border border-slate-300 rounded-lg py-2 text-slate-900 focus:outline-none focus:border-teal-600"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="flex-1 text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-2.5 text-slate-800 focus:outline-none focus:border-teal-600"
                  >
                    <option value={product.unit}>{product.unit} (Standard)</option>
                    <option value="KGS">KGS</option>
                    <option value="LTR">LTR</option>
                    <option value="PCS">PCS</option>
                    <option value="NOS">NOS</option>
                    <option value="Drums">Drums</option>
                    <option value="Cans">Cans</option>
                    <option value="Boxes">Boxes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Custom Notes / Spec remarks */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Custom Specifications / Delivery Remarks (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Need batch COA test report and delivery schedule..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                id="details-add-to-requirement-btn"
                onClick={handleAdd}
                className="w-full sm:flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                {isAddedSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Requirement List!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Add to Requirement List ({quantity} {unit})</span>
                  </>
                )}
              </button>

              <button
                id="details-proceed-requirement-btn"
                onClick={handleNavigateToRequirement}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <span>View List</span>
                <Send className="w-4 h-4 text-teal-300" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Tabs Section: Technical Specs, Applications, Packaging, Storage */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left">
        
        {/* Tab Headers */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {[
            { id: 'specs', label: 'Technical Specifications (COA)' },
            { id: 'applications', label: 'Industrial Applications' },
            { id: 'packaging', label: 'Packaging & Logistical Handling' },
            { id: 'safety', label: 'Safety, Hazard & Storage' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="pt-6">
          
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900">
                Standard Certificate of Analysis (COA) Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border border-slate-200 text-left">Test Parameter</th>
                      <th className="p-3 border border-slate-200 text-left">Standard Specification</th>
                      <th className="p-3 border border-slate-200 text-left">Testing Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-800">{spec.parameter}</td>
                        <td className="p-3 border border-slate-200 font-mono text-teal-800 font-bold">{spec.specification}</td>
                        <td className="p-3 border border-slate-200 text-slate-500">{spec.testMethod || 'Standard ASTM / IS'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                * Note: Batch-specific COA with actual analytical results is provided alongside every dispatch consignment.
              </p>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900">
                Key Industrial Applications & Usage Domains
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.applications.map((app, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'packaging' && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900">
                Available Packaging Configurations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.packagingOptions.map((pkg, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <Package className="w-5 h-5 text-teal-700" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{pkg}</h4>
                    <p className="text-[11px] text-slate-500">GHS Compliant UN-approved container</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900">
                Storage, Handling & Regulatory Safety
              </h3>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Storage Guideline:</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                  {product.storageInstructions}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800">Hazard Classification:</span>
                  <p className="text-slate-600">{product.hazardClass || 'Standard Non-Hazardous Industrial'}</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800">UN Transportation Code:</span>
                  <p className="text-slate-600">{product.unNumber || 'Not Regulated for Dangerous Goods'}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-xl text-slate-900">
              Related Chemicals in "{product.category}"
            </h2>
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-teal-700 hover:text-teal-800"
            >
              View Category →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
