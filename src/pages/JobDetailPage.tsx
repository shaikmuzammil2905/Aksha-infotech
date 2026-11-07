import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Building2, MapPin, Briefcase, Clock, Calendar, CheckCircle, 
  ArrowLeft, Share2, PhoneCall, MessageCircle, AlertCircle, 
  ShieldCheck, ArrowRight, DollarSign, Award, ChevronRight
} from 'lucide-react';
import { Job } from '../types/job';
import { getJobById } from '../data/jobsData';

interface JobDetailPageProps {
  onOpenApply: (job: Job) => void;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ onOpenApply }) => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();

  const job = jobId ? getJobById(jobId) : undefined;

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-4 shadow-sm">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-800">Job Opening Not Found</h2>
          <p className="text-xs text-slate-500">
            The job opening you are looking for has expired or the link is invalid. Please explore our active listings.
          </p>
          <button
            onClick={() => navigate('/hiring')}
            className="px-6 py-2.5 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold rounded-xl transition-colors shadow"
          >
            Back to All Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this opening for ${job.title} at AKSHA Infotech!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/hiring')}>Jobs</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue font-bold truncate max-w-[200px]">{job.title}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-slate-600 hover:text-brand-navy font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Job Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-brand-blue flex-shrink-0 shadow-inner">
                <Building2 className="w-9 h-9" />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue text-[11px] font-bold">
                    {job.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                    {job.employmentType}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {job.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-slate-700">{job.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-4 h-4" />
                    Posted {job.postedDate}
                  </span>
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleShare}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                title="Share Job"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => onOpenApply(job)}
                className="px-8 py-3.5 bg-brand-red hover:bg-brand-redHover text-white text-sm font-black rounded-xl shadow-lg transition-all duration-150 flex items-center gap-2 active:scale-95"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Highlight Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[11px] font-medium block">Experience</span>
              <strong className="text-slate-800 text-sm font-bold flex items-center gap-1.5 mt-0.5">
                <Briefcase className="w-4 h-4 text-brand-blue" />
                {job.experience}
              </strong>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[11px] font-medium block">Offered Salary</span>
              <strong className="text-brand-red text-sm font-bold flex items-center gap-1.5 mt-0.5">
                <DollarSign className="w-4 h-4 text-brand-red" />
                {job.salary}
              </strong>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[11px] font-medium block">Qualification</span>
              <strong className="text-slate-800 text-xs font-bold flex items-center gap-1.5 mt-0.5 truncate">
                <Award className="w-4 h-4 text-brand-blue flex-shrink-0" />
                {job.qualification}
              </strong>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-slate-400 text-[11px] font-medium block">Openings</span>
              <strong className="text-emerald-600 text-sm font-bold flex items-center gap-1.5 mt-0.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                {job.openings || 'Multiple'} Positions
              </strong>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Job Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-sky-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility & Candidate Requirements */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Candidate Eligibility &amp; Requirements
              </h2>
              <ul className="space-y-3">
                {job.eligibility.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits & Perks */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Benefits &amp; Perks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (1 Col) */}
          <div className="space-y-6">
            {/* Apply Action Card */}
            <div className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-5 border border-white/10">
              <div>
                <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider block">Interested in this role?</span>
                <h3 className="text-xl font-black text-white mt-1">Submit Your Profile</h3>
                <p className="text-xs text-sky-100 mt-2 leading-relaxed">
                  Fast-track your application directly to the hiring desk at <span className="font-bold text-white">Mnkumar@akshainfotech.com</span>.
                </p>
              </div>

              <button
                onClick={() => onOpenApply(job)}
                className="w-full py-3.5 bg-brand-red hover:bg-brand-redHover text-white text-xs font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Apply Now for this Job</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs">
                <div className="text-[11px] text-slate-300 font-semibold">Have immediate questions? Talk to recruiter:</div>
                <a
                  href="tel:+919701310634"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call: 9701310634</span>
                </a>
                <a
                  href={`https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20I%20am%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20role.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Application</span>
                </a>
              </div>
            </div>

            {/* Recruiter Trust Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>100% Verified Opening</span>
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                AKSHA Infotech Pvt Ltd does not charge any registration fees or hidden charges from job seekers. All job opportunities are directly coordinated with verified hiring corporate partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
