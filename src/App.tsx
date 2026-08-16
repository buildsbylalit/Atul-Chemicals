/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { RequirementProvider, useRequirement } from './context/RequirementContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { RequirementListPage } from './pages/RequirementListPage';
import { CustomerDetailsPage } from './pages/CustomerDetailsPage';
import { RequirementSummaryPage } from './pages/RequirementSummaryPage';
import { SuccessPage } from './pages/SuccessPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';

import { CheckCircle2, X, ShoppingBag } from 'lucide-react';

const AppContent: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes: PageRoute[] = [
      'home',
      'about',
      'products',
      'product-details',
      'requirement-list',
      'customer-details',
      'requirement-summary',
      'how-it-works',
      'contact',
      'success',
    ];
    return validRoutes.includes(hash as PageRoute) ? (hash as PageRoute) : 'home';
  });

  const { toastMessage, dismissToast, getItemCount } = useRequirement();

  // Sync route with URL hash
  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'products',
        'product-details',
        'requirement-list',
        'customer-details',
        'requirement-summary',
        'how-it-works',
        'contact',
        'success',
      ];
      if (validRoutes.includes(hash as PageRoute)) {
        setCurrentRoute(hash as PageRoute);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render appropriate page view
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'products':
        return <ProductsPage onNavigate={navigateTo} />;
      case 'product-details':
        return <ProductDetailsPage onNavigate={navigateTo} />;
      case 'requirement-list':
        return <RequirementListPage onNavigate={navigateTo} />;
      case 'customer-details':
        return <CustomerDetailsPage onNavigate={navigateTo} />;
      case 'requirement-summary':
        return <RequirementSummaryPage onNavigate={navigateTo} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'success':
        return <SuccessPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Sticky Responsive Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Toast Notification Container */}
      {toastMessage && (
        <div 
          id="app-toast-notification"
          className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-teal-500/40 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200 max-w-md"
        >
          <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs font-semibold text-slate-200 flex-1">
            {toastMessage}
          </p>
          <button
            onClick={dismissToast}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default function App() {
  return (
    <RequirementProvider>
      <AppContent />
    </RequirementProvider>
  );
}
