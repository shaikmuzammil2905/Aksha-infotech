import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Users, Phone } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="bottom-nav border-t border-slate-200 py-2 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-4 items-center text-center">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Home</span>
        </NavLink>

        {/* Services */}
        <NavLink
          to="/services"
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Briefcase className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Services</span>
        </NavLink>

        {/* About Us */}
        <NavLink
          to="/about"
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Users className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">About Us</span>
        </NavLink>

        {/* Contact Us */}
        <NavLink
          to="/contact"
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Contact Us</span>
        </NavLink>
      </div>
    </div>
  );
};
