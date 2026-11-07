import React, { useEffect } from 'react';
import { X, Shield, FileText, Cookie } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'cookie';

interface PolicyModalProps {
  isOpen: boolean;
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[85vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <Shield className="w-5 h-5 text-sky-400" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-sky-400" />}
            {type === 'cookie' && <Cookie className="w-5 h-5 text-sky-400" />}
            <h3 className="text-base font-bold">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms & Conditions'}
              {type === 'cookie' && 'Cookie Policy'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p><strong>Last Updated: 2026</strong></p>
              <p>AKSHA Infotech Pvt Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered at Mallapur Main Road, Opp. to Shiva Hotel, Mallapur, Nacharam, Hyderabad – 500076, is committed to safeguarding candidate and employer privacy.</p>
              <h4 className="font-bold text-slate-800 text-sm">1. Information We Collect</h4>
              <p>When you submit an application, register your profile, or post a job requirement, we collect personal identifying data including your name, contact phone number, email address, educational background, professional experience, and resume files.</p>
              <h4 className="font-bold text-slate-800 text-sm">2. Purpose of Use</h4>
              <p>All information submitted is strictly utilized to match prospective candidates with suitable employer openings, coordinate interviews, and deliver career guidance services across KPO, BPO, Healthcare, Finance, Non-IT, and IT/Software domains.</p>
              <h4 className="font-bold text-slate-800 text-sm">3. Confidentiality & Security</h4>
              <p>Candidate resumes and proprietary employer details are never sold to third-party marketing brokers. Direct access is restricted to verified recruitment specialists and designated client hiring personnel.</p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p><strong>Effective Date: 2026</strong></p>
              <p>By accessing or utilizing the recruitment portal and career consulting services operated by AKSHA Infotech Pvt Ltd, you agree to comply with the terms set forth herein.</p>
              <h4 className="font-bold text-slate-800 text-sm">1. Candidate Accuracy</h4>
              <p>Job seekers warrant that all credentials, employment histories, and academic qualifications submitted are true, authentic, and accurate to the best of their knowledge.</p>
              <h4 className="font-bold text-slate-800 text-sm">2. Employer Obligations</h4>
              <p>Recruiting companies posting job listings warrant that openings represent legitimate, lawful employment opportunities compliant with prevailing labor standards and equal opportunity laws.</p>
              <h4 className="font-bold text-slate-800 text-sm">3. Limitation of Liability</h4>
              <p>AKSHA Infotech acts as an introductory facilitator between candidates and employers. Final hiring decisions, contract offers, and employment agreements remain exclusively between the candidate and the hiring employer.</p>
            </>
          )}

          {type === 'cookie' && (
            <>
              <p><strong>Effective Date: 2026</strong></p>
              <p>AKSHA Infotech Pvt Ltd uses minimal essential cookies and session storage to optimize your navigation, persist job filter preferences, and ensure secure form submissions.</p>
              <h4 className="font-bold text-slate-800 text-sm">1. Essential Functional Cookies</h4>
              <p>These enable session authentication, remember search criteria on the Hiring page, and prevent duplicate application submissions.</p>
              <h4 className="font-bold text-slate-800 text-sm">2. Analytics Cookies</h4>
              <p>We use anonymous aggregate performance indicators to assess site usage trends and continuously improve user experience across desktop and mobile devices.</p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-navy hover:bg-brand-blue text-white rounded-xl text-xs font-semibold"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

