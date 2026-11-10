import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, FileText, UserCheck, Award, GraduationCap, Handshake, 
  ArrowRight, CheckCircle2, PhoneCall, Sparkles 
} from 'lucide-react';

interface ServicesPageProps {
  onOpenPostJob: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenPostJob }) => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'job-placement',
      title: 'Job Placement Support',
      icon: Briefcase,
      color: 'bg-blue-50 text-brand-blue border-blue-200',
      badge: 'Core Program',
      image: '/images/solution-placement.jpg',
      tagline: 'Connecting qualified candidates with pre-screened hiring corporate clients.',
      description: 'We bridge the gap between talented job seekers and established companies across India. Our dedicated placement executives assist you from initial profile screening to final offer letter release.',
      features: [
        'Direct access to active job drives and immediate client openings',
        'Transparent matching based on your skill set, location, and salary expectations',
        'Continuous interview scheduling and feedback coordination',
        'End-to-end support until formal joining and onboarding'
      ]
    },
    {
      id: 'resume-building',
      title: 'Resume Building & ATS Optimization',
      icon: FileText,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badge: 'High Impact',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80',
      tagline: 'Transform your resume into a compelling career document that passes modern ATS filters.',
      description: 'Most candidate resumes are discarded by automated recruitment algorithms before reaching human recruiters. We analyze, restructure, and optimize your resume with domain-relevant keywords.',
      features: [
        'ATS keyword alignment tailored for KPO, BPO, IT, Finance, and Healthcare roles',
        'Clear, impactful formatting emphasizing achievements and core technical competencies',
        'Customized cover letters tailored for specific job designations',
        'Review and actionable feedback from experienced recruitment consultants'
      ]
    },
    {
      id: 'career-counseling',
      title: 'Career Counselling & Pathway Guidance',
      icon: UserCheck,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      badge: 'Personalized',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
      tagline: 'Discover your ideal industry track and make informed long-term career choices.',
      description: 'Whether you are a fresh graduate entering the workforce or an experienced professional considering a sector switch, our career counselors provide grounded, market-driven insights.',
      features: [
        'One-on-one evaluation of strengths, educational background, and aspirations',
        'Sector-specific advice across IT, BPO, KPO, Healthcare, and Corporate Finance',
        'Salary benchmarking and career trajectory mapping for 1 to 5 years',
        'Confidence-building and realistic career navigation strategies'
      ]
    },
    {
      id: 'skill-development',
      title: 'Skill Development & Employability Training',
      icon: Award,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      badge: 'Skill Up',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
      tagline: 'Targeted preparation to close skill gaps and meet industry employer expectations.',
      description: 'The job market evolves rapidly. We identify critical operational and technical proficiencies required by top hiring managers and guide job seekers to practical mastery.',
      features: [
        'Domain-specific skill orientation (US Healthcare terminology, Accounting, Programming)',
        'Professional email etiquette and corporate communication modules',
        'Hands-on tools exposure (MS Excel, CRM systems, ticketing platforms)',
        'Continuous assessment and employability scoring'
      ]
    },
    {
      id: 'interview-preparation',
      title: 'Interview Preparation & Mock Drills',
      icon: GraduationCap,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      badge: 'Confidence Boost',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
      tagline: 'Master technical questions, behavioral rounds, and HR salary negotiations.',
      description: 'Walking into an interview with thorough preparation dramatically increases placement success. We conduct realistic mock interviews that replicate real employer rounds.',
      features: [
        'Rigorous behavioral and situational question frameworks (STAR method)',
        'Voice, accent, and fluency coaching for international voice BPO roles',
        'Technical screening simulations for software and analytics positions',
        'Constructive feedback reports highlighting exact areas for improvement'
      ]
    },
    {
      id: 'employer-recruitment',
      title: 'Employer Recruitment & Staffing Support',
      icon: Handshake,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      badge: 'Corporate',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
      tagline: 'High-speed talent sourcing and pre-screened recruitment drives for organizations.',
      description: 'We partner with startups, mid-sized enterprises, and multinational corporations to satisfy urgent and volume hiring demands across Hyderabad and Pan-India.',
      features: [
        'Pre-screened candidate shortlists within 24 to 48 hours of requirement submission',
        'Turnkey campus hiring drives, walk-in events, and lateral recruitment pipelines',
        'Strict credential verification and initial HR phone screenings',
        'Flexible engagement models for contract, permanent, and remote staffing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-200 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Dedicated Career Solutions</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Recruitment &amp; Placement Services
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              AKSHA Infotech Pvt Ltd delivers comprehensive, candidate-focused placement guidance and agile talent acquisition for employers across Hyderabad and Pan-India.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => navigate('/hiring')}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Find Your Job</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/collaborate')}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-colors"
              >
                Collaborate With Us
              </button>
            </div>
          </div>
        </div>

        {/* Services Detail List */}
        <div className="space-y-5">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Tailored Solutions For Job Seekers &amp; Employers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Explore how AKSHA Infotech accelerates your career trajectory or powers your company’s talent needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Grand Service Photo Header with Overlay */}
                    <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06142e]/90 via-[#06142e]/30 to-transparent" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 text-slate-900 uppercase tracking-wider shadow-md backdrop-blur-sm">
                          {srv.badge}
                        </span>
                      </div>

                      {/* Title & Icon overlaid on bottom of photo */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-md flex-shrink-0 ${srv.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-white drop-shadow-md leading-tight">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <p className="text-xs font-bold text-brand-blue leading-snug">
                        {srv.tagline}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {srv.description}
                      </p>

                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                        <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Key Highlights:</div>
                        {srv.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                    {srv.id === 'employer-recruitment' ? (
                      <button
                        onClick={() => navigate('/collaborate')}
                        className="text-xs font-bold text-brand-red hover:text-brand-redHover flex items-center gap-1.5 transition-colors"
                      >
                        <span>Collaborate With Us</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate('/hiring')}
                        className="text-xs font-bold text-brand-blue hover:text-brand-navy flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Matching Roles</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Are you an Employer Looking to Hire?</h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Post your job openings with AKSHA Infotech and receive verified candidate profiles within 24 to 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={() => navigate('/collaborate')}
              className="px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Collaborate With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919701310634"
              className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

