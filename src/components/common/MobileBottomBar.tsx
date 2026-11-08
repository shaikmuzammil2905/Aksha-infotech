import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Search, Users, Phone } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-2 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-5 items-center text-center">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Home</span>
        </NavLink>

        {/* Jobs */}
        <NavLink
          to="/hiring"
          end
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Briefcase className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Jobs</span>
        </NavLink>

        {/* Hiring */}
        <NavLink
          to="/hiring"
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Search className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">Hiring</span>
        </NavLink>

        {/* About Us */}
        <NavLink
          to="/about"
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold py-1 px-1 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Users className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">About Us</span>
        </NavLink>

        {/* Contact Us */}
        <NavLink
          to="/contact"
          className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold py-1 px-1 rounded-xl transition-colors ${
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
