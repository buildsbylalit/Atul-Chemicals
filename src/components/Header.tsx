import React, { useState, useEffect } from 'react';
import { 
  FlaskConical, 
  ShoppingBag, 
  Menu, 
  X, 
  PhoneCall, 
  Mail, 
  Send, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { PageRoute } from '../types';
import { useRequirement } from '../context/RequirementContext';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const { getItemCount, items } = useRequirement();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'How It Works', route: 'how-it-works' },
    { label: 'Contact Us', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar for B2B credentials & direct lines */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-teal-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 & GMP Certified Facility</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <span>Bulk Chemical Manufacturing & Distribution</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="tel:+912224567890" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 (022) 2456-7890</span>
            </a>
            <a 
              href="mailto:sales@atulchemicals.example" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>sales@atulchemicals.example</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-slate-200 ${
        isScrolled ? 'shadow-md shadow-slate-900/5' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Atul Chemicals Brand Logo */}
            <div 
              id="brand-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-950 via-blue-900 to-teal-700 flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform">
                <FlaskConical className="w-6 h-6 text-teal-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-blue-950">
                    ATUL
                  </span>
                  <span className="font-heading font-bold text-2xl tracking-tight text-teal-700">
                    CHEMICALS
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-500 -mt-1">
                  Industrial Solutions & Solvents
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route || 
                  (link.route === 'products' && currentRoute === 'product-details');

                return (
                  <button
                    key={link.route}
                    id={`nav-link-${link.route}`}
                    onClick={() => handleNavClick(link.route)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 relative ${
                      isActive
                        ? 'text-blue-900 bg-blue-50/80 font-bold'
                        : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-teal-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions: Requirement Count Cart + Send Requirement CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Requirement Cart Button with dynamic counter */}
              <button
                id="header-requirement-cart-btn"
                onClick={() => handleNavClick('requirement-list')}
                className={`relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border transition-all duration-200 ${
                  currentRoute === 'requirement-list' || currentRoute === 'customer-details' || currentRoute === 'requirement-summary'
                    ? 'border-blue-900 bg-blue-900 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                }`}
                title="View Requirement List"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {itemCount > 0 && (
                    <span 
                      id="header-requirement-count-badge"
                      className="absolute -top-2 -right-2.5 bg-teal-600 text-white text-[11px] font-bold h-5 min-w-5 px-1 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in"
                    >
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  List ({itemCount})
                </span>
              </button>

              {/* Send Requirement Direct Action */}
              <button
                id="header-send-requirement-btn"
                onClick={() => {
                  if (items.length > 0) {
                    handleNavClick('customer-details');
                  } else {
                    handleNavClick('products');
                  }
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-teal-800 hover:from-blue-950 hover:to-teal-900 text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-teal-300" />
                <span>Send Requirement</span>
              </button>
            </div>

            {/* Mobile Menu & Cart Icon */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-requirement-cart-btn"
                onClick={() => handleNavClick('requirement-list')}
                className="relative p-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
                aria-label="Requirement List"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-teal-600 text-white text-[10px] font-bold h-4.5 min-w-4.5 px-1 rounded-full flex items-center justify-center border-2 border-white">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-nav-menu" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-teal-300' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => handleNavClick('requirement-list')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-teal-50 border border-teal-200 text-teal-950 font-bold text-sm"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-teal-700" />
                  <span>View Requirement List</span>
                </div>
                <span className="bg-teal-700 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </span>
              </button>

              <button
                onClick={() => {
                  if (items.length > 0) {
                    handleNavClick('customer-details');
                  } else {
                    handleNavClick('products');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-950 text-white font-bold text-sm shadow-sm"
              >
                <Send className="w-4 h-4 text-teal-400" />
                <span>Send Requirement Now</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex flex-col gap-1 px-1">
              <span>📞 Sales: +91 (022) 2456-7890</span>
              <span>✉️ sales@atulchemicals.example</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
