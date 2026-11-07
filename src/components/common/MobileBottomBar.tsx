import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Briefcase, Bell, User, LayoutGrid, X, Check } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenAuth: (tab?: 'login' | 'register') => void;
  onOpenPostJob: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAuth, onOpenPostJob }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const navigate = useNavigate();

  const mockNotifications = [
    { id: 1, title: 'New Senior Developer opening', time: '10m ago', unread: true },
    { id: 2, title: 'Healthcare BPO drive ongoing', time: '1h ago', unread: true },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-3 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around">
          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => `flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
              isActive ? 'text-brand-blue' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </NavLink>

          {/* Jobs */}
          <NavLink
            to="/hiring"
            className={({ isActive }) => `flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 rounded-xl transition-colors ${
              isActive ? 'text-brand-blue' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Jobs</span>
          </NavLink>

          {/* Notifications with badge */}
          <button
            type="button"
            onClick={() => setNotificationsOpen(true)}
            className="relative flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 text-slate-500 hover:text-slate-800"
          >
            <div className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-red text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                2
              </span>
            </div>
            <span>Alerts</span>
          </button>

          {/* Login */}
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 text-slate-500 hover:text-slate-800"
          >
            <User className="w-5 h-5" />
            <span>Login</span>
          </button>

          {/* More */}
          <button
            type="button"
            onClick={() => setMoreMenuOpen(true)}
            className="flex flex-col items-center gap-0.5 text-[11px] font-semibold py-1 px-2 text-slate-500 hover:text-slate-800"
          >
            <LayoutGrid className="w-5 h-5" />
            <span>More</span>
          </button>
        </div>
      </div>

      {/* Notifications Drawer Modal */}
      {notificationsOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end md:hidden animate-fade-in"
          onClick={() => setNotificationsOpen(false)}
        >
          <div 
            className="w-full bg-white rounded-t-2xl p-5 shadow-2xl max-h-[70vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-brand-red" />
                <h4 className="font-bold text-sm text-slate-800">Recruitment Updates (2)</h4>
              </div>
              <button 
                onClick={() => setNotificationsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-3 space-y-2">
              {mockNotifications.map((n) => (
                <div 
                  key={n.id} 
                  onClick={() => {
                    setNotificationsOpen(false);
                    navigate('/hiring');
                  }}
                  className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{n.title}</p>
                    <span className="text-[10px] text-slate-400">{n.time}</span>
                  </div>
                  <Check className="w-4 h-4 text-brand-blue" />
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setNotificationsOpen(false);
                navigate('/hiring');
              }}
              className="w-full py-2 bg-brand-navy text-white text-xs font-bold rounded-xl"
            >
              Explore All Openings
            </button>
          </div>
        </div>
      )}

      {/* More Quick Sheet */}
      {moreMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end md:hidden animate-fade-in"
          onClick={() => setMoreMenuOpen(false)}
        >
          <div 
            className="w-full bg-white rounded-t-2xl p-5 shadow-2xl max-h-[80vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-sm text-slate-800">Quick Directory</h4>
              <button 
                onClick={() => setMoreMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-2 text-xs font-semibold">
              <button
                onClick={() => {
                  setMoreMenuOpen(false);
                  onOpenPostJob();
                }}
                className="w-full py-2.5 px-4 bg-brand-red text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow"
              >
                Post a Job / Hire Talent
              </button>
              <button
                onClick={() => {
                  setMoreMenuOpen(false);
                  navigate('/about');
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-700"
              >
                About AKSHA Infotech
              </button>
              <button
                onClick={() => {
                  setMoreMenuOpen(false);
                  navigate('/services');
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-700"
              >
                Recruitment Services
              </button>
              <button
                onClick={() => {
                  setMoreMenuOpen(false);
                  navigate('/contact');
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-700"
              >
                Contact &amp; Location
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

