import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, Calendar, Target, Eye, ShieldCheck, Heart, 
  ArrowRight, Users, CheckCircle2, PhoneCall, Sparkles, Award 
} from 'lucide-react';
import { Counter } from '../components/common/Counter';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const coreValues = [
    { name: 'Trust', desc: 'Building long-standing relationships founded on honesty and dependable execution.' },
    { name: 'Transparency', desc: 'Unbiased, straightforward job placement terms with zero hidden fees for candidates.' },
    { name: 'Candidate First', desc: 'Prioritizing the candidate’s long-term career aspirations, aptitude, and well-being.' },
    { name: 'Professionalism', desc: 'Adhering to high ethical recruitment standards and punctual corporate communication.' },
    { name: 'Growth', desc: 'Empowering individuals and client organizations to scale and realize their full potential.' },
    { name: 'Quality', desc: 'Rigorous pre-screening ensuring candidates are genuinely matched with suitable openings.' },
    { name: 'Integrity', desc: 'Uncompromising adherence to moral principles and confidential data governance.' },
    { name: 'Opportunity', desc: 'Creating open pathways to meaningful employment across diverse economic sectors.' }
  ];

  const timelineSteps = [
    {
      year: '2022',
      title: 'AKSHA Infotech Begins Its Journey',
      description: 'Founded in Hyderabad with a steadfast mission to bridge the employment divide between ambitious job seekers and quality employers across emerging sectors.'
    },
    {
      year: 'Growth',
      title: 'Expansion Across Multiple Employment Sectors',
      description: 'Rapidly expanded recruitment support across KPO, BPO, Healthcare, Finance, Non-IT, and IT/Software domains, building enduring relationships with 20+ corporate clients.'
    },
    {
      year: 'Today',
      title: 'Empowering Talent & Building Sustainable Careers',
      description: 'Over 2,000+ candidates successfully placed in career-defining positions, while continuously expanding our employer recruitment services and community presence.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-200 border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-brand-red" />
              <span>Established 2022</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              About AKSHA Infotech Pvt Ltd
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
              AKSHA Infotech Pvt Ltd is a recruitment and software-oriented organization established in 2022, focused on connecting job seekers with meaningful employment opportunities across KPO, BPO, Healthcare, Finance, Non-IT, and IT/Software sectors.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/hiring')}
                className="px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Company Background & Story */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Our Story &amp; Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Bridging the Talent Gap With Integrity &amp; Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Operating from Nacharam, Hyderabad, AKSHA Infotech Pvt Ltd was founded with a singular purpose: to make recruitment accessible, transparent, and candidate-centric. In an employment landscape often complicated by lack of clear career direction and disconnected processes, AKSHA provides a dependable guiding hand for aspiring professionals.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We specialize across six vibrant employment sectors &mdash; KPO, BPO, Healthcare, Finance, Non-IT, and IT &amp; Software &mdash; partnering with vetted employers to match candidates not merely with jobs, but with sustainable career trajectories.
            </p>
          </div>

          {/* Quick Statistics Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 text-center">
              <div className="text-3xl font-black text-brand-blue">
                <Counter end={2000} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Candidates Placed</div>
            </div>

            <div className="p-4 bg-rose-50/70 rounded-2xl border border-rose-100 text-center">
              <div className="text-3xl font-black text-brand-red">
                <Counter end={20} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Corporate Clients</div>
            </div>

            <div className="p-4 bg-slate-100/70 rounded-2xl border border-slate-200 text-center">
              <div className="text-3xl font-black text-slate-900">
                <Counter end={5000} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Website Visitors</div>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 text-center">
              <div className="text-3xl font-black text-emerald-600">
                <span>2022</span>
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Operating Since</div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4 relative overflow-hidden group hover:border-brand-blue transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-blue flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To become a trusted career and recruitment partner that connects talent with meaningful employment opportunities and helps individuals build sustainable careers.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4 relative overflow-hidden group hover:border-brand-red transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-brand-red flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To connect job seekers with suitable employers through accessible recruitment support, career guidance, and opportunities across diverse industries.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The foundational principles that guide every candidate interaction and employer relationship.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-brand-blue font-black text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-sm text-slate-900">{val.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Key milestones in our commitment to empowering talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold">
                  {step.year}
                </span>
                <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

