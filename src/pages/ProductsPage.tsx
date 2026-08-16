import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  FlaskConical, 
  ShoppingBag, 
  Send 
} from 'lucide-react';
import { ChemicalProduct, PageRoute } from '../types';
import { CHEMICAL_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useRequirement } from '../context/RequirementContext';

interface ProductsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const { getItemCount } = useRequirement();
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtered Products Calculation (Search Only)
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return CHEMICAL_PRODUCTS;

    return CHEMICAL_PRODUCTS.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        String(product.srNo).includes(query) ||
        `#${product.srNo}`.includes(query) ||
        (product.iupacName && product.iupacName.toLowerCase().includes(query)) ||
        (product.casNumber && product.casNumber.toLowerCase().includes(query)) ||
        (product.formula && product.formula.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.applications.some((app) => app.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  return (
    <div id="products-catalog-page" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
      
      {/* Page Title & Requirement Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6 text-left">
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
            <span>Product Catalog</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Chemicals & Supplies
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Select products and required quantities to add them to your requirement list.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('requirement-list')}
            className="flex items-center gap-2 bg-teal-50 border border-teal-300 text-teal-900 px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-teal-100 transition-colors shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-teal-700" />
            <span>Requirement List ({getItemCount()})</span>
          </button>

          <button
            onClick={() => {
              if (getItemCount() > 0) {
                onNavigate('customer-details');
              } else {
                onNavigate('requirement-list');
              }
            }}
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors"
          >
            <Send className="w-4 h-4 text-teal-300" />
            <span>Send Requirement</span>
          </button>
        </div>
      </div>

      {/* Search Bar Only */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-left">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            id="product-search-input"
            type="text"
            placeholder="Search chemicals by name or item number (e.g. Bleach, Care 1.0, CC 500, Shiner, #12)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-left">
        <p className="text-xs sm:text-sm font-semibold text-slate-600">
          Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> products
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-bold text-teal-700 hover:text-teal-900"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-4 max-w-md mx-auto">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <FlaskConical className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-800">
            No Chemical Products Found
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We couldn't find any products matching "{searchQuery}". Try typing another chemical name or clear the search.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Show All Products
          </button>
        </div>
      )}

    </div>
  );
};
