import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Bell, User, LayoutGrid } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-3 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => `flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </NavLink>

        {/* Jobs */}
        <NavLink
          to="/hiring"
          className={({ isActive }) => `flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span>Jobs</span>
        </NavLink>

        {/* Alerts - Opens new dedicated /alerts page */}
        <NavLink
          to="/alerts"
          className={({ isActive }) => `relative flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-red text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              2
            </span>
          </div>
          <span>Alerts</span>
        </NavLink>

        {/* Login - Opens new dedicated /login page */}
        <NavLink
          to="/login"
          className={({ isActive }) => `flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Login</span>
        </NavLink>

        {/* More - Opens new dedicated /more directory page */}
        <NavLink
          to="/more"
          className={({ isActive }) => `flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
            isActive ? 'text-brand-blue font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>More</span>
        </NavLink>
      </div>
    </div>
  );
};
