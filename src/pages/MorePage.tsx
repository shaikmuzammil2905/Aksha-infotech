import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, Briefcase, Bell, User, Phone, MessageCircle, Mail, 
  MapPin, ChevronRight, Shield, FileText, Cookie, PlusCircle, 
  Building2, Headphones, HeartPulse, Coins, Users, Code2, 
  Award, GraduationCap, Handshake, Info 
} from 'lucide-react';
import { PolicyType } from '../components/modals/PolicyModal';

interface MorePageProps {
  onOpenPostJob: () => void;
  onOpenPolicy: (type: PolicyType) => void;
}

export const MorePage: React.FC<MorePageProps> = ({ onOpenPostJob, onOpenPolicy }) => {
  const navigate = useNavigate();

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home, desc: 'Return to landing page' },
    { name: 'About AKSHA Infotech', path: '/about', icon: Info, desc: 'Established 2022, Vision, Mission & Values' },
    { name: 'Services & Programs', path: '/services', icon: Award, desc: 'Placement support, training & counseling' },
    { name: 'Hiring / Job Openings', path: '/hiring', icon: Briefcase, desc: 'Search & filter active jobs' },
    { name: 'Alerts & Notifications', path: '/alerts', icon: Bell, desc: 'Live job updates and recruitment drives' },
    { name: 'Candidate & Employer Login', path: '/login', icon: User, desc: 'Access your career profile' },
    { name: 'Contact & Location', path: '/contact', icon: MapPin, desc: 'Nacharam, Hyderabad office & map' },
  ];

  const categories = [
    { name: 'KPO Jobs', path: '/services/kpo-jobs', icon: Headphones },
    { name: 'BPO Jobs', path: '/services/bpo-jobs', icon: Headphones },
    { name: 'Healthcare Jobs', path: '/services/healthcare-jobs', icon: HeartPulse },
    { name: 'Finance Jobs', path: '/services/finance-jobs', icon: Coins },
    { name: 'Non-IT Jobs', path: '/services/non-it-jobs', icon: Users },
    { name: 'IT & Software Jobs', path: '/services/it-software-jobs', icon: Code2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-blue font-semibold">Directory &amp; Navigation</span>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Website Directory &amp; More
            </h1>
            <p className="text-xs sm:text-sm text-sky-200 mt-1">
              Quick access to all job sectors, career services, policies, and contact desks.
            </p>
          </div>
          <button
            onClick={onOpenPostJob}
            className="px-5 py-2.5 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 flex-shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post a Job</span>
          </button>
        </div>

        {/* Core Pages Grid */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
            Main Navigation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mainLinks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-blue/30 hover:bg-sky-50/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-brand-blue group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
                        {item.name}
                      </strong>
                      <span className="text-[11px] text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Job Categories Grid */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
            Explore 6 Job Sectors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.path}
                  onClick={() => navigate(cat.path)}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50/70 border border-slate-100 hover:border-brand-blue/40 cursor-pointer transition-all flex items-center gap-2.5 group"
                >
                  <Icon className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue transition-colors truncate">
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Helpdesk Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="tel:+919701310634"
            className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3 transition-colors hover:bg-emerald-100/80"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-600 block">Recruiter Phone</span>
              <strong className="text-xs font-black text-emerald-950">+91 9701310634</strong>
            </div>
          </a>

          <a
            href="https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20job%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-sm flex items-center gap-3 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-100 block">WhatsApp Us</span>
              <strong className="text-xs font-black">Chat with Recruiter</strong>
            </div>
          </a>

          <a
            href="mailto:Mnkumar@akshainfotech.com"
            className="p-4 bg-sky-50 rounded-2xl border border-sky-200 flex items-center gap-3 transition-colors hover:bg-sky-100/80"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-brand-blue block">Direct Email</span>
              <strong className="text-xs font-black text-sky-950 truncate block max-w-[140px]">
                Mnkumar@akshainfotech.com
              </strong>
            </div>
          </a>
        </div>

        {/* Legal Policies */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span className="font-semibold text-slate-700">Company Policies:</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-brand-blue flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-brand-blue flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms &amp; Conditions</span>
            </button>
            <button
              onClick={() => onOpenPolicy('cookie')}
              className="hover:text-brand-blue flex items-center gap-1"
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Policy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

