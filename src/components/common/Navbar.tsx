import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { User, Menu, X, ChevronDown, PlusCircle, PhoneCall, MessageCircle, Briefcase } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenPostJob: () => void;
  onOpenAuth: (tab?: 'login' | 'register') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPostJob, onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'All Services', path: '/services' },
        { name: 'KPO Jobs', path: '/services/kpo-jobs' },
        { name: 'BPO Jobs', path: '/services/bpo-jobs' },
        { name: 'Healthcare Jobs', path: '/services/healthcare-jobs' },
        { name: 'Finance Jobs', path: '/services/finance-jobs' },
        { name: 'Non-IT Jobs', path: '/services/non-it-jobs' },
        { name: 'IT & Software Jobs', path: '/services/it-software-jobs' },
      ]
    },
    { name: 'Hiring', path: '/hiring' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled 
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/10 py-2.5' 
            : 'bg-brand-dark border-b border-slate-800 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  const isActive = location.pathname.startsWith('/services');
                  return (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <NavLink
                        to={item.path}
                        className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                          isActive
                            ? 'bg-brand-blue text-white shadow-sm'
                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                      </NavLink>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white shadow-2xl border border-slate-100 py-2 animate-fade-in z-50 text-slate-800">
                          {item.subItems?.map((sub) => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              className={({ isActive: isSubActive }) => `block px-4 py-2 text-xs font-semibold transition-colors ${
                                isSubActive
                                  ? 'bg-sky-50 text-brand-blue font-bold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-brand-navy'
                              }`}
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'bg-brand-blue text-white shadow-sm'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <NavLink
                to="/login"
                className={({ isActive }) => `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  isActive ? 'bg-white/20 text-white font-bold' : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span>Login / Register</span>
              </NavLink>

              <button
                type="button"
                onClick={onOpenPostJob}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-full shadow-md transition-all duration-150 active:scale-95"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Post a Job</span>
              </button>
            </div>

            {/* Mobile Actions: Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenPostJob}
                className="px-3 py-1.5 bg-brand-red text-white text-[11px] font-bold rounded-full shadow-sm"
              >
                Post Job
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-dark text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-4 space-y-1">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  Services
                </NavLink>

                {/* Sub links */}
                <div className="pl-4 py-1 space-y-1 border-l-2 border-slate-700 ml-3">
                  <NavLink to="/services/kpo-jobs" className="block py-1 text-xs text-sky-200 hover:text-white">KPO Jobs</NavLink>
                  <NavLink to="/services/bpo-jobs" className="block py-1 text-xs text-sky-200 hover:text-white">BPO Jobs</NavLink>
                  <NavLink to="/services/healthcare-jobs" className="block py-1 text-xs text-sky-200 hover:text-white">Healthcare Jobs</NavLink>
                  <NavLink to="/services/finance-jobs" className="block py-1 text-xs text-sky-200 hover:text-white">Finance Jobs</NavLink>
                  <NavLink to="/services/non-it-jobs" className="block py-1 text-xs text-sky-200 hover:text-white">Non-IT Jobs</NavLink>
                  <NavLink to="/services/it-software-jobs" className="block py-1 text-xs text-sky-200 hover:text-white">IT & Software Jobs</NavLink>
                </div>

                <NavLink
                  to="/hiring"
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  Hiring / Jobs
                </NavLink>
                <NavLink
                  to="/alerts"
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  Alerts &amp; Updates (2)
                </NavLink>
                <NavLink
                  to="/more"
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  Directory &amp; More
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-brand-blue text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-sky-400" />
                <span>Candidate / Employer Login</span>
              </NavLink>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPostJob();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold flex items-center justify-center gap-2 shadow"
              >
                <Briefcase className="w-4 h-4" />
                <span>Post a Job Requirement</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="tel:+919701310634"
                  className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Recruiter</span>
                </a>
                <a
                  href="https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20job%20opportunities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

