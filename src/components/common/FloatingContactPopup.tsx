import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, X, Sparkles, ArrowRight } from 'lucide-react';

export const FloatingContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={popupRef} className="fixed bottom-20 md:bottom-6 right-5 z-40">
      {/* Floating WhatsApp Action Trigger Button - Icon Only */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white ring-4 ring-[#25D366]/20"
          aria-label="WhatsApp Quick Contact"
        >
          {/* Official WhatsApp Favicon Icon */}
          <svg className="w-8 h-8 fill-white transition-transform group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.769.458 3.498 1.332 5.02L2 22l5.088-1.309a10.005 10.005 0 004.943 1.34h.005c5.534 0 10.03-4.496 10.03-10.031S17.565 2 12.031 2zm0 18.356h-.004a8.318 8.318 0 01-4.24-1.161l-.304-.18-3.155.811.838-3.076-.197-.314a8.297 8.297 0 01-1.272-4.382c0-4.597 3.742-8.339 8.339-8.339 2.228 0 4.322.868 5.897 2.444a8.293 8.293 0 012.442 5.895c0 4.598-3.741 8.339-8.339 8.339z" />
          </svg>
          {/* Subtle online status indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full animate-ping pointer-events-none" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full pointer-events-none" />
        </button>
      )}

      {/* Popup Dialog Card */}
      {isOpen && (
        <div className="relative w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">AKSHA Career Helpdesk</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] text-sky-200">Recruiters Online Now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close helpdesk popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-2.5 bg-slate-50 text-xs">
            <p className="text-[11px] text-slate-600 leading-snug">
              Looking for immediate job placement or hiring requirements in Hyderabad? Connect directly with our recruitment specialists:
            </p>

            {/* WhatsApp option */}
            <a
              href="https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20job%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-800 font-bold">Chat on WhatsApp</strong>
                  <span className="text-[10px] text-slate-500">+91 9701310634</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Phone call option */}
            <a
              href="tel:+919701310634"
              className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-sky-50/50 shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-brand-blue flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-800 font-bold">Direct Phone Call</strong>
                  <span className="text-[10px] text-slate-500">Instant Recruiter Dial</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Email option */}
            <a
              href="mailto:Mnkumar@akshainfotech.com"
              className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50/50 shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-800 font-bold">Official Email</strong>
                  <span className="text-[10px] text-slate-500">Mnkumar@akshainfotech.com</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-center">
            <span className="text-[10px] font-semibold text-slate-500">
              Mallapur Main Road, Nacharam, Hyderabad &bull; Est. 2022
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

