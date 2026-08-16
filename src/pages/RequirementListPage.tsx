import React from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ArrowLeft, 
  Package, 
  ShieldCheck, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { PageRoute, PackagingOption } from '../types';
import { useRequirement } from '../context/RequirementContext';
import { RequirementStepsIndicator } from '../components/RequirementStepsIndicator';

interface RequirementListPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const RequirementListPage: React.FC<RequirementListPageProps> = ({ onNavigate }) => {
  const { 
    items, 
    removeFromRequirement, 
    updateQuantity, 
    updatePackaging, 
    updateUnit,
    updateNotes,
    clearRequirement,
    setSelectedProductIdForDetails,
    getItemCount
  } = useRequirement();

  const totalItemCount = getItemCount();

  const totalTaxableAmount = items.reduce(
    (sum, item) => sum + (item.quantity || 0) * (item.product?.rate ?? item.rate ?? 0),
    0
  );
  const estimatedGst = totalTaxableAmount * 0.18;
  const estimatedTotal = totalTaxableAmount + estimatedGst;

  const handleProceed = () => {
    if (items.length > 0) {
      onNavigate('customer-details');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleViewProduct = (productId: string) => {
    setSelectedProductIdForDetails(productId);
    onNavigate('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="requirement-list-page" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Steps Indicator */}
      <RequirementStepsIndicator
        currentStep="requirement-list"
        onNavigate={onNavigate}
      />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 text-left">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            Product Requirement List
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Review your selected chemicals & laundry supplies, specify order quantities, and select packaging formats.
          </p>
        </div>

        {items.length > 0 && (
          <button
            id="clear-all-requirements-btn"
            onClick={clearRequirement}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-2 rounded-lg border border-rose-200 flex items-center gap-1.5 self-start transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear List</span>
          </button>
        )}
      </div>

      {items.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-lg mx-auto space-y-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-700 mx-auto flex items-center justify-center">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Your Requirement List is Empty
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
              Explore our product catalog, select the laundry chemicals, spotters, or packaging items you need, and add them to build your RFQ.
            </p>
          </div>
          <button
            id="empty-browse-products-btn"
            onClick={() => onNavigate('products')}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-sm transition-colors"
          >
            <span>Browse Product Catalog</span>
            <ArrowRight className="w-4 h-4 text-teal-300" />
          </button>
        </div>
      ) : (
        /* Active Items List & Summary */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Item Cards */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => {
              const itemRate = item.product?.rate ?? item.rate ?? 0;
              const itemTotal = (item.quantity || 1) * itemRate;

              return (
                <div
                  key={item.productId}
                  id={`requirement-item-${item.productId}`}
                  className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:border-teal-400/50 transition-all space-y-4"
                >
                  {/* Top Row: Item No, Name, Price & Remove */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 cursor-pointer flex-1" onClick={() => handleViewProduct(item.productId)}>
                      <span className="bg-slate-900 text-amber-300 font-mono font-bold text-xs px-2.5 py-1.5 rounded-lg border border-slate-800 shrink-0">
                        #{item.product?.srNo || 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                            {item.product?.category || 'Chemical'}
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {item.product?.grade || 'Commercial Grade'}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mt-1 hover:text-teal-700 transition-colors">
                          {item.product?.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span className="font-bold text-slate-900">
                            Rate: ₹{itemRate.toLocaleString('en-IN')} / {item.unit || item.product?.unit || 'KGS'}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-emerald-700">{item.product?.purity || 'Commercial Purity'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Calculated Price & Remove Button */}
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Item Amount</span>
                        <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900">
                          ₹{itemTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <button
                        id={`remove-item-${item.productId}`}
                        onClick={() => removeFromRequirement(item.productId)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Remove from requirement list"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Configuration Controls: Quantity, Packaging, Unit */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                    
                    {/* Quantity Stepper */}
                    <div className="sm:col-span-4">
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Quantity:
                      </label>
                      <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-l-lg transition-colors"
                          title="Decrease"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          max="50000"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value) || 1)}
                          className="w-full text-center text-sm font-bold bg-transparent focus:outline-none py-1.5"
                        />
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-r-lg transition-colors"
                          title="Increase"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Packaging Dropdown */}
                    <div className="sm:col-span-5">
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Packaging Format:
                      </label>
                      <select
                        value={item.selectedPackaging}
                        onChange={(e) => updatePackaging(item.productId, e.target.value as PackagingOption)}
                        className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-none focus:border-teal-600"
                      >
                        {item.product.packagingOptions.map((pkg) => (
                          <option key={pkg} value={pkg}>
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Unit Dropdown */}
                    <div className="sm:col-span-3">
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Unit:
                      </label>
                      <select
                        value={item.unit}
                        onChange={(e) => updateUnit(item.productId, e.target.value)}
                        className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2 py-2 text-slate-800 focus:outline-none focus:border-teal-600"
                      >
                        <option value={item.product.unit}>{item.product.unit}</option>
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

                  {/* Custom Notes per product */}
                  <div>
                    <input
                      type="text"
                      placeholder="Specific packing or delivery notes for this item (optional)..."
                      value={item.customNotes || ''}
                      onChange={(e) => updateNotes(item.productId, e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-teal-500"
                    />
                  </div>

                </div>
              );
            })}

            {/* Add More Chemicals Link */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 p-2 rounded-lg hover:bg-teal-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>+ Add More Products from Catalog</span>
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary & Next Step */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-5 sticky top-28">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Requirement Summary
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Selected Products:</span>
                  <span className="font-bold text-slate-900">{items.length} Items</span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Total Quantity Count:</span>
                  <span className="font-bold text-teal-700">{totalItemCount} Units</span>
                </div>

                <div className="flex items-center justify-between text-slate-600 pt-2 border-t border-slate-100">
                  <span>Est. Taxable Value:</span>
                  <span className="font-bold text-slate-900">
                    ₹{totalTaxableAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Est. GST (18%):</span>
                  <span className="font-medium text-slate-700">
                    ₹{estimatedGst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-900 font-heading font-bold text-base pt-2 border-t border-slate-200">
                  <span>Est. Total Invoice Value:</span>
                  <span className="text-teal-700">
                    ₹{estimatedTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-500 text-[11px] pt-1">
                  <span>Quotation Response:</span>
                  <span className="font-semibold text-blue-900">&lt; 4 Business Hours</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  id="proceed-to-customer-details-btn"
                  onClick={handleProceed}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
                >
                  <span>Proceed to Customer Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-lg transition-colors"
                >
                  Continue Browsing Catalog
                </button>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Commercial Assurance:</span>
                </div>
                <p>
                  Official tax invoices provided with applicable GST breakdowns, freight options, and delivery notes.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
