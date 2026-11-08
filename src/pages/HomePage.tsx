import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, MapPin, ArrowRight, CheckCircle, Headphones, 
  HeartPulse, Coins, Users, Code2, Briefcase, FileText, 
  UserCheck, Award, GraduationCap, Handshake, Calendar,
  TrendingUp, Sparkles, Building2, Clock, Globe2
} from 'lucide-react';
import { Counter } from '../components/common/Counter';
import { TypingCounter } from '../components/common/TypingCounter';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Job } from '../types/job';
import { INITIAL_JOBS } from '../data/jobsData';

interface HomePageProps {
  onOpenApply: (job: Job) => void;
  onOpenAuth: (tab?: 'login' | 'register') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenApply, onOpenAuth }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.append('q', searchQuery.trim());
    if (locationFilter && locationFilter !== 'all') params.append('loc', locationFilter);
    navigate(`/hiring?${params.toString()}`);
  };

  const jobCategories = [
    {
      title: 'KPO Jobs',
      slug: 'kpo-jobs',
      icon: Headphones,
      color: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:border-blue-300',
      description: 'Analytics, secondary research, equity modeling & data intelligence.'
    },
    {
      title: 'BPO Jobs',
      slug: 'bpo-jobs',
      icon: Headphones,
      color: 'bg-purple-50 text-purple-600 border-purple-100 group-hover:border-purple-300',
      description: 'Voice, non-voice customer support & international process handling.'
    },
    {
      title: 'Healthcare Jobs',
      slug: 'healthcare-jobs',
      icon: HeartPulse,
      color: 'bg-rose-50 text-rose-600 border-rose-100 group-hover:border-rose-300',
      description: 'Medical coding, clinical trial monitoring & healthcare claims processing.'
    },
    {
      title: 'Finance Jobs',
      slug: 'finance-jobs',
      icon: Coins,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:border-emerald-300',
      description: 'Corporate accounting, US taxation, auditing & financial analysis.'
    },
    {
      title: 'Non-IT Jobs',
      slug: 'non-it-jobs',
      icon: Users,
      color: 'bg-amber-50 text-amber-600 border-amber-100 group-hover:border-amber-300',
      description: 'Operations, HR talent acquisition, admin logistics & back-office roles.'
    },
    {
      title: 'IT & Software Jobs',
      slug: 'it-software-jobs',
      icon: Code2,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:border-indigo-300',
      description: 'Full stack development, cloud computing, QA automation & DevOps.'
    }
  ];

  const servicesList = [
    { title: 'Job Placement Support', icon: Briefcase, desc: 'Connecting candidates directly with hiring corporate partners.' },
    { title: 'Resume Building', icon: FileText, desc: 'Professional ATS-friendly resume enhancement and formatting.' },
    { title: 'Career Counseling', icon: UserCheck, desc: 'One-on-one personalized career pathway and industry guidance.' },
    { title: 'Skill Development', icon: Award, desc: 'Targeted skill gap training to increase interview employability.' },
    { title: 'Interview Preparation', icon: GraduationCap, desc: 'Mock HR interviews and technical screening drills.' },
    { title: 'Talent Acquisition for Employers', icon: Handshake, desc: 'Fast turnaround candidate sourcing for corporate clients.' },
  ];

  const featuredJobs = INITIAL_JOBS.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-r from-[#06142e] via-[#092247] to-[#0d346b] text-white overflow-hidden border-b border-slate-800">
        {/* Desktop Hero Animated Background Image (image copy 2.png) - Bright & Crisp */}
        <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 ease-out transform scale-100 hover:scale-[1.02]"
            style={{ 
              backgroundImage: "url('/images/hero-desktop-bg.png')",
              backgroundPosition: 'right 12% center',
              filter: 'brightness(1.12) contrast(1.04) saturate(1.1)',
            }}
          />
          {/* Soft directional gradient only over text area so the woman & office shine through brightly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06142e] via-[#06142e]/75 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06142e]/70 via-transparent to-[#06142e]/20" />

          {/* Ambient lighting */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-400/25 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
        </div>

        {/* Mobile Hero Background Image (image copy 5.png) - Bright & Clear */}
        <div className="block lg:hidden absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ 
              backgroundImage: "url('/images/hero-mobile-bg.png')",
              backgroundPosition: 'right 0 top',
              backgroundSize: 'cover',
              filter: 'brightness(1.06) contrast(1.03)',
            }}
          />
          {/* Gentle gradient on left so text is readable while image copy 5.png is bright and crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06142e]/90 via-[#06142e]/60 via-55% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06142e]/90 via-transparent to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading, Subtext, Search Form */}
            <div className="lg:col-span-8 xl:col-span-8 space-y-5 sm:space-y-6">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight animate-fade-up">
                Your Career, <br />
                Our <span className="text-brand-red drop-shadow-sm">Mission</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-xs sm:text-base text-slate-100 max-w-2xl leading-relaxed font-normal drop-shadow">
                Connecting Job Seekers with Top Employers in <span className="text-white font-semibold">KPO, BPO, Healthcare, Finance, Non IT, IT &amp; Software Jobs</span>.
              </p>

              {/* Search Box - Translucent Glass on Mobile so Background Woman & Graphics Shine Through, Crisp on Desktop */}
              <div className="pt-2 sm:pt-3">
                <form
                  onSubmit={handleSearchSubmit}
                  className="bg-slate-900/60 sm:bg-white backdrop-blur-md border border-white/20 sm:border-white/30 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col sm:flex-row items-center gap-2"
                >
                  {/* Job Search Input */}
                  <div className="flex items-center gap-2.5 flex-1 px-3 py-2 w-full">
                    <Search className="w-5 h-5 text-sky-300 sm:text-slate-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for jobs (e.g. IT Developer, BPO, Healthcare...)"
                      className="w-full text-xs sm:text-sm text-white sm:text-slate-800 placeholder-slate-200 sm:placeholder-slate-400 focus:outline-none bg-transparent"
                    />
                  </div>

                  <div className="hidden sm:block w-[1px] h-8 bg-slate-200" />

                  {/* Location Selector */}
                  <div className="flex items-center gap-2 px-3 py-2 w-full sm:w-auto">
                    <MapPin className="w-4 h-4 text-sky-300 sm:text-slate-400 flex-shrink-0" />
                    <select
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="text-xs sm:text-sm text-white sm:text-slate-700 bg-transparent focus:outline-none font-medium cursor-pointer"
                    >
                      <option value="all" className="text-slate-800 bg-white">All Locations</option>
                      <option value="Hyderabad" className="text-slate-800 bg-white">Hyderabad</option>
                      <option value="Chennai" className="text-slate-800 bg-white">Chennai</option>
                      <option value="Bangalore" className="text-slate-800 bg-white">Bangalore</option>
                      <option value="Remote" className="text-slate-800 bg-white">Work From Home / Remote</option>
                    </select>
                  </div>

                  {/* Search CTA */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center gap-2 active:scale-95 flex-shrink-0"
                  >
                    <span>Search Jobs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HERO STATS COUNTER BANNER ===================== */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <ScrollReveal direction="up">
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200/90">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {/* Stat 1: Placing the candidate till now */}
              <div className="flex items-center gap-3 p-2">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-brand-blue tracking-tight">
                    <TypingCounter end={2000} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                    Placing Candidates Till Now
                  </div>
                  <div className="text-[11px] text-slate-400">Careers Launched</div>
                </div>
              </div>

              {/* Stat 2: Clients up to */}
              <div className="flex items-center gap-3 p-2 sm:pl-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-50 text-brand-red flex items-center justify-center flex-shrink-0 shadow-sm border border-rose-100">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-brand-red tracking-tight">
                    <TypingCounter end={20} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                    Clients Up To
                  </div>
                  <div className="text-[11px] text-slate-400">Corporate Partners</div>
                </div>
              </div>

              {/* Stat 3: Visitors */}
              <div className="flex items-center gap-3 p-2 sm:pl-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-100">
                  <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-purple-600 tracking-tight">
                    <TypingCounter end={5000} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                    Website Visitors
                  </div>
                  <div className="text-[11px] text-slate-400">Monthly Job Seekers</div>
                </div>
              </div>

              {/* Stat 4: Success rate */}
              <div className="flex items-center gap-3 p-2 sm:pl-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">
                    <TypingCounter end={98} suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                    Placement Success Rate
                  </div>
                  <div className="text-[11px] text-slate-400">Interview Clearance</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===================== EXPLORE JOB CATEGORIES ===================== */}
      <section className="py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-7 bg-brand-blue rounded-full" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Explore Job Categories
              </h2>
            </div>
            <button
              onClick={() => navigate('/hiring')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-navy group transition-colors"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* 6 Category Cards: 2 cols on mobile (image copy.png), 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {jobCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.slug} delay={idx * 80}>
                <div
                  onClick={() => navigate(`/services/${cat.slug}`)}
                  className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-200 mb-3 ${cat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-brand-blue transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed hidden sm:block">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-brand-blue transition-colors">
                      Explore
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ===================== FEATURED JOBS SECTION ===================== */}
      <section className="py-6 sm:py-8 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-7 bg-brand-red rounded-full" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Featured Job Openings
                  </h2>
                  <p className="text-xs text-slate-500">Verified openings currently hiring in Hyderabad and Pan-India</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/hiring')}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:underline"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredJobs.map((job, idx) => (
              <ScrollReveal key={job.id} delay={idx * 100}>
                <div
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-brand-blue flex-shrink-0">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 
                            className="font-bold text-sm sm:text-base text-slate-900 hover:text-brand-blue transition-colors cursor-pointer" 
                            onClick={() => navigate(`/jobs/${job.id}`)}
                          >
                            {job.title}
                          </h3>
                          <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>{job.category}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              {job.location}
                            </span>
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                        {job.employmentType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500 font-medium pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        Exp: {job.experience}
                      </span>
                      <span>•</span>
                      <span className="font-bold text-brand-navy">
                        {job.salary}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        {job.postedDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => navigate(`/jobs/${job.id}`)}
                      className="text-xs font-semibold text-slate-600 hover:text-brand-blue"
                    >
                      View Details &rarr;
                    </button>
                    <button
                      onClick={() => onOpenApply(job)}
                      className="px-4 py-2 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MIDDLE 4-CARDS SECTION (FROM REFERENCE IMAGE) ===================== */}
      <section className="py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Empowering Talent. Building Futures. */}
          <ScrollReveal delay={0}>
            <div className="bg-gradient-to-br from-[#06142e] via-[#092247] to-[#0c3166] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group h-full">
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/60 border border-brand-blue text-xs font-semibold text-white">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Since 2022</span>
                </div>
                <h3 className="text-xl font-black text-white leading-snug">
                  Empowering Talent. <br />Building Futures.
                </h3>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  We are AKSHA Infotech Pvt Ltd, a trusted recruitment &amp; BPO/KPO partner, committed to offering premier job opportunities across diverse sectors.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <button
                  onClick={() => navigate('/about')}
                  className="w-full py-2.5 px-4 bg-white hover:bg-sky-50 text-brand-navy rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Card 2: Find Your Dream Job */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all h-full">
              <div className="space-y-3">
                <h3 className="text-lg font-black text-slate-900">
                  Find Your Dream Job
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Search, Apply and Get Hired effortlessly!
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Wide range of job opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Trusted employers &amp; corporate clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>End-to-end career growth support</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenAuth('register')}
                  className="w-full py-2.5 px-4 bg-brand-blue hover:bg-brand-navy text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Create Your Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Why Choose AKSHA? */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all h-full">
              <div className="space-y-3">
                <h3 className="text-lg font-black text-slate-900">
                  Why Choose AKSHA?
                </h3>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>Trusted recruitment since 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>Wide range of job opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>Supportive career guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>Strong employer network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>Your career growth is our priority</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100">
                <span className="font-semibold text-brand-navy">Candidate-First</span>
                <span className="text-brand-red font-bold">100% Free for Seekers</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Our Impact Statistics */}
          <ScrollReveal delay={300}>
            <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50/50 rounded-3xl p-6 shadow-md border border-sky-100 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black text-slate-900">
                    Our Impact
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-brand-blue">
                    Milestones
                  </span>
                </div>

                {/* Grid of Verified Statistics */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-2xl font-black text-brand-blue">
                      <TypingCounter end={2000} suffix="+" />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1">Candidates Placed</div>
                  </div>

                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-2xl font-black text-brand-red">
                      <TypingCounter end={20} suffix="+" />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1">Partner Clients</div>
                  </div>

                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-2xl font-black text-slate-900">
                      <TypingCounter end={5000} suffix="+" />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1">Website Visitors</div>
                  </div>

                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-2xl font-black text-emerald-600">
                      <TypingCounter end={2} suffix="+" />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1">Years Operating</div>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-4">
                Real career journeys shaped since 2022
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== OUR SERVICES SECTION ===================== */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-7 bg-brand-blue rounded-full" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Our Services
                  </h2>
                  <p className="text-xs text-slate-500">Comprehensive recruitment and career acceleration programs</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:underline"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {servicesList.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div
                    onClick={() => navigate('/services')}
                    className="group bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-brand-blue hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between text-center h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-100/70 text-brand-blue group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center mx-auto transition-colors mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {srv.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-tight hidden sm:block">
                      {srv.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="py-6 sm:py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="relative rounded-3xl bg-gradient-to-r from-[#06142e] via-[#092247] to-[#0c3166] p-6 sm:p-10 text-white overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
              {/* Globe wireframe background effect */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none flex items-center justify-end pr-10">
                <Globe2 className="w-72 h-72 text-sky-300 animate-spin" style={{ animationDuration: '40s' }} />
              </div>

              <div className="relative z-10 max-w-xl space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider">
                  Shape Your Tomorrow
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Let&apos;s Build Your Career Together
                </h2>
                <p className="text-xs sm:text-sm text-sky-200">
                  Explore the latest jobs and take the next step towards a brighter future with AKSHA Infotech.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => navigate('/hiring')}
                  className="px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all duration-150 flex items-center gap-2 active:scale-95"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-colors"
                >
                  Contact Recruiter
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
