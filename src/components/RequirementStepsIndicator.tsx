import React from 'react';
import { Check, ShoppingBag, Building2, FileCheck2, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface StepsProps {
  currentStep: 'requirement-list' | 'customer-details' | 'requirement-summary' | 'success';
  onNavigate: (route: PageRoute) => void;
}

export const RequirementStepsIndicator: React.FC<StepsProps> = ({ currentStep, onNavigate }) => {
  const steps = [
    {
      id: 'requirement-list',
      title: 'Requirement List',
      sub: 'Items & Quantities',
      icon: ShoppingBag,
      stepNumber: 1,
    },
    {
      id: 'customer-details',
      title: 'Customer Details',
      sub: 'Company & Delivery Info',
      icon: Building2,
      stepNumber: 2,
    },
    {
      id: 'requirement-summary',
      title: 'Requirement Summary',
      sub: 'Review & Verify Specs',
      icon: FileCheck2,
      stepNumber: 3,
    },
    {
      id: 'success',
      title: 'Quotation Request',
      sub: 'Reference & Tracking',
      icon: ShieldCheck,
      stepNumber: 4,
    },
  ];

  const getStepStatus = (stepId: string, index: number) => {
    const stepOrder = ['requirement-list', 'customer-details', 'requirement-summary', 'success'];
    const currentIndex = stepOrder.indexOf(currentStep);
    
    if (index < currentIndex) return 'completed';
    if (index === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div id="requirement-steps-indicator" className="w-full bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm mb-8">
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-0.5 bg-slate-200 -z-0" />
        
        {steps.map((step, idx) => {
          const status = getStepStatus(step.id, idx);
          const Icon = step.icon;
          const isClickable = status === 'completed' || status === 'current';

          return (
            <div
              key={step.id}
              onClick={() => {
                if (isClickable && step.id !== 'success') {
                  onNavigate(step.id as PageRoute);
                }
              }}
              className={`relative z-10 flex flex-col items-center text-center group ${
                isClickable && step.id !== currentStep ? 'cursor-pointer' : ''
              }`}
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                  status === 'completed'
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-500/20 group-hover:bg-teal-700'
                    : status === 'current'
                    ? 'bg-blue-900 text-white ring-4 ring-blue-100 shadow-md'
                    : 'bg-slate-100 text-slate-400 border border-slate-200'
                }`}
              >
                {status === 'completed' ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>
              <div className="mt-2.5">
                <p
                  className={`text-sm font-semibold ${
                    status === 'current'
                      ? 'text-blue-950 font-bold'
                      : status === 'completed'
                      ? 'text-teal-700'
                      : 'text-slate-500'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-slate-400 font-medium">{step.sub}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Step Bar */}
      <div className="flex md:hidden items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
            {steps.findIndex((s) => s.id === currentStep) + 1}/4
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
              Step {steps.findIndex((s) => s.id === currentStep) + 1} of 4
            </p>
            <p className="text-sm font-bold text-slate-900">
              {steps.find((s) => s.id === currentStep)?.title}
            </p>
          </div>
        </div>
        <div className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
          B2B Requirement Flow
        </div>
      </div>
    </div>
  );
};
