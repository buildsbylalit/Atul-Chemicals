import React, { useState } from 'react';
import { 
  Check, 
  Plus, 
  Minus 
} from 'lucide-react';
import { ChemicalProduct, PageRoute } from '../types';
import { useRequirement } from '../context/RequirementContext';

interface ProductCardProps {
  product: ChemicalProduct;
  onNavigate: (route: PageRoute) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onNavigate }) => {
  const { addToRequirement, isInRequirement } = useRequirement();
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddedAnim, setIsAddedAnim] = useState<boolean>(false);

  const isAlreadyInRequirement = isInRequirement(product.id);
  const rateValue = product?.rate ?? 0;
  const totalItemAmount = (quantity || 1) * rateValue;

  const handleAddOrUpdate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const finalQty = Math.max(1, quantity);
    addToRequirement(product, finalQty, product.packagingOptions?.[0] || 'Standard Packaging', product.unit || 'KGS');
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1600);
  };

  const handleQtyChange = (val: number) => {
    const safeVal = Math.max(1, val);
    setQuantity(safeVal);
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="bg-white rounded-xl border border-slate-200 hover:border-teal-500/70 shadow-sm hover:shadow transition-all duration-150 p-4 sm:p-5 text-left flex flex-col justify-between"
    >
      <div>
        {/* Product Serial No & Name */}
        <div className="flex items-start gap-2.5">
          <span className="bg-slate-900 text-amber-300 text-xs font-mono font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">
            #{product.srNo || 1}
          </span>
          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Rate Display */}
        <div className="mt-3.5 p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
          <span className="text-xs font-medium text-slate-600">Rate:</span>
          <div className="text-right">
            <span className="font-heading font-extrabold text-lg text-slate-950">
              ₹{rateValue.toLocaleString('en-IN')}
            </span>
            <span className="text-xs font-bold text-teal-800 ml-1">
              / {product.unit || 'KGS'}
            </span>
          </div>
        </div>

        {/* Customer Quantity Selector */}
        <div className="mt-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label className="font-bold text-slate-700">
              Required Quantity:
            </label>
            <span className="font-bold text-slate-900">
              Total: ₹{(totalItemAmount || 0).toLocaleString('en-IN')}
            </span>
          </div>

          {/* Stepper with Unit */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50 flex-1 overflow-hidden">
              <button
                type="button"
                onClick={() => handleQtyChange(quantity - 1)}
                className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <input
                type="number"
                min="1"
                max="50000"
                value={quantity}
                onChange={(e) => handleQtyChange(parseInt(e.target.value) || 1)}
                className="w-full text-center text-sm font-bold text-slate-900 bg-transparent focus:outline-none py-1.5"
              />
              <button
                type="button"
                onClick={() => handleQtyChange(quantity + 1)}
                className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <span className="text-xs font-bold text-slate-700 px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg shrink-0 min-w-12 text-center">
              {product.unit}
            </span>
          </div>
        </div>
      </div>

      {/* Add / Update to Requirement Button */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <button
          id={`add-requirement-${product.id}`}
          onClick={handleAddOrUpdate}
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all duration-150 ${
            isAddedAnim
              ? 'bg-emerald-600 text-white shadow-sm'
              : isAlreadyInRequirement
              ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-sm'
              : 'bg-blue-900 hover:bg-blue-950 text-white shadow-sm'
          }`}
        >
          {isAddedAnim ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to List!</span>
            </>
          ) : isAlreadyInRequirement ? (
            <>
              <Check className="w-4 h-4 text-teal-300" />
              <span>Update ({quantity} {product.unit})</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 text-teal-300" />
              <span>Add ({quantity} {product.unit})</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
