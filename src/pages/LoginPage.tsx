import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  User, Lock, Mail, Phone, Briefcase, Building2, 
  CheckCircle2, ArrowRight, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { Logo } from '../components/common/Logo';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'register' ? 'register' : 'login';

  const [tab, setTab] = useState<'login' | 'register'>(initialTab);
  const [role, setRole] = useState<'candidate' | 'employer'>('candidate');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    companyName: '',
    qualification: '',
    rememberMe: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/hiring');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-16 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-blue font-semibold">Account Access</span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          {/* Card Top Brand Header */}
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 p-6 sm:p-8 text-white text-center space-y-2">
            <div className="flex justify-center mb-2">
              <Logo size="md" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {tab === 'login' ? 'Welcome Back to AKSHA Portal' : 'Create Your Career Profile'}
            </h1>
            <p className="text-xs text-sky-200">
              Connecting qualified talent with top employers across India.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 text-xs font-bold">
            <button
              type="button"
              onClick={() => { setTab('login'); setSubmitted(false); }}
              className={`py-3.5 text-center transition-all ${
                tab === 'login'
                  ? 'bg-white text-brand-navy border-b-2 border-brand-red text-sm font-extrabold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setTab('register'); setSubmitted(false); }}
              className={`py-3.5 text-center transition-all ${
                tab === 'register'
                  ? 'bg-white text-brand-navy border-b-2 border-brand-red text-sm font-extrabold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Register Profile
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900">
                  {tab === 'login' ? 'Authentication Successful!' : 'Profile Created Successfully!'}
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Welcome! Redirecting you to current job opportunities...
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/hiring')}
                    className="px-6 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl"
                  >
                    Go to Jobs Now
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Role Switcher */}
                <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-semibold text-slate-600 mb-2">
                  <button
                    type="button"
                    onClick={() => setRole('candidate')}
                    className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      role === 'candidate' ? 'bg-white text-brand-navy font-bold shadow-sm' : 'hover:text-slate-900'
                    }`}
                  >
                    <User className="w-4 h-4 text-brand-blue" />
                    <span>Job Seeker / Candidate</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('employer')}
                    className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      role === 'employer' ? 'bg-white text-brand-navy font-bold shadow-sm' : 'hover:text-slate-900'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-brand-red" />
                    <span>Employer / Recruiter</span>
                  </button>
                </div>

                {/* Extra fields for Register */}
                {tab === 'register' && (
                  <>
                    {role === 'employer' ? (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="e.g. Acme Corporation"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Ramesh Chandra"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9701310634"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                        />
                      </div>
                    </div>

                    {role === 'candidate' && (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Highest Qualification</label>
                        <input
                          type="text"
                          required
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                          placeholder="e.g. B.Tech, MCA, B.Com, MBA"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {role === 'employer' ? 'Official Work Email' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. user@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">Password</label>
                    {tab === 'login' && (
                      <span className="text-[11px] text-brand-blue hover:underline cursor-pointer">
                        Forgot Password?
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{tab === 'login' ? 'Sign In to Account' : 'Create Free Profile'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center pt-2">
                  <span className="text-xs text-slate-500">
                    {tab === 'login' ? "Don't have an account yet?" : 'Already have an account?'}
                  </span>{' '}
                  <button
                    type="button"
                    onClick={() => { setTab(tab === 'login' ? 'register' : 'login'); setSubmitted(false); }}
                    className="text-xs font-bold text-brand-red hover:underline"
                  >
                    {tab === 'login' ? 'Register Now' : 'Sign In'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Secure 256-bit encrypted authentication &bull; AKSHA Infotech</span>
          </div>
        </div>
      </div>
    </div>
  );
};
