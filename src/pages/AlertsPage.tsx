import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, CheckCircle2, Clock, Briefcase, Building2, 
  ArrowRight, Filter, Sparkles, ChevronRight, CheckCheck, Trash2 
} from 'lucide-react';
import { INITIAL_JOBS } from '../data/jobsData';
import { Job } from '../types/job';

interface AlertsPageProps {
  onOpenApply: (job: Job) => void;
}

interface AlertItem {
  id: string;
  type: 'job' | 'drive' | 'system' | 'update';
  title: string;
  message: string;
  time: string;
  unread: boolean;
  category?: string;
  jobId?: string;
}

export const AlertsPage: React.FC<AlertsPageProps> = ({ onOpenApply }) => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState<'all' | 'job' | 'drive' | 'system'>('all');

  const [alerts, setAlerts] = useState<AlertItem[]>([
    {
      id: 'a1',
      type: 'job',
      title: 'Urgent Opening: Senior Software Developer (React & Node)',
      message: 'AKSHA Infotech client in Hyderabad is hiring Senior Full Stack Developers. Experience 5–8 Years. Package ₹12–18 LPA. Immediate interviews.',
      time: '15 mins ago',
      unread: true,
      category: 'IT & Software',
      jobId: 'it-dev-01'
    },
    {
      id: 'a2',
      type: 'drive',
      title: 'US Healthcare BPO Walk-In Recruitment Drive',
      message: 'Healthcare claims and medical insurance verification executives wanted. Freshers and 0–3 Yrs experience eligible. Remote work options available.',
      time: '1 hour ago',
      unread: true,
      category: 'BPO Jobs',
      jobId: 'bpo-exec-02'
    },
    {
      id: 'a3',
      type: 'job',
      title: 'New Position: Certified Medical Coder (AAPC CPC)',
      message: 'Certified Medical Coders required for outpatient chart coding in Hyderabad. Day shifts, certification bonus, and immediate joining.',
      time: '3 hours ago',
      unread: true,
      category: 'Healthcare',
      jobId: 'health-code-05'
    },
    {
      id: 'a4',
      type: 'job',
      title: 'US Tax & Accounting Associate Opening',
      message: 'Leading tax advisory firm hiring B.Com / MBA graduates for Form 1040/1120 tax season preparation in Hyderabad.',
      time: '1 day ago',
      unread: false,
      category: 'Finance',
      jobId: 'fin-tax-10'
    },
    {
      id: 'a5',
      type: 'system',
      title: 'Resume Screening Status Update',
      message: 'All job applications submitted through AKSHA portal are reviewed within 24 to 48 business hours by our placement desk at Mnkumar@akshainfotech.com.',
      time: '2 days ago',
      unread: false,
    },
    {
      id: 'a6',
      type: 'drive',
      title: 'KPO Secondary Research Analyst Drive Active',
      message: 'Research associates and financial modelers needed for multinational corporate intelligence practice in Hyderabad.',
      time: '3 days ago',
      unread: false,
      category: 'KPO Jobs',
      jobId: 'kpo-analyst-03'
    }
  ]);

  const markAllAsRead = () => {
    setAlerts(alerts.map(a => ({ ...a, unread: false })));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  const filteredAlerts = alerts.filter(a => filterType === 'all' || a.type === filterType);
  const unreadCount = alerts.filter(a => a.unread).length;

  const handleAction = (alert: AlertItem) => {
    if (alert.jobId) {
      const job = INITIAL_JOBS.find(j => j.id === alert.jobId);
      if (job) {
        onOpenApply(job);
        return;
      }
    }
    navigate('/hiring');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-blue font-semibold">Job Alerts &amp; Updates</span>
        </div>

        {/* Header Card */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/90 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recruitment Feed</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <span>Alerts &amp; Notifications</span>
              {unreadCount > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-xs font-bold animate-pulse">
                  {unreadCount} New
                </span>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-sky-200">
              Live updates on new openings, walk-in drives, and hiring schedules from AKSHA Infotech.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-1.5"
              >
                <CheckCheck className="w-4 h-4 text-emerald-400" />
                <span>Mark All Read</span>
              </button>
            )}
            {alerts.length > 0 && (
              <button
                onClick={clearAllAlerts}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-xl transition-colors"
                title="Clear all alerts"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all' 
                ? 'bg-brand-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Updates ({alerts.length})
          </button>
          <button
            onClick={() => setFilterType('job')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'job' 
                ? 'bg-brand-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Job Openings
          </button>
          <button
            onClick={() => setFilterType('drive')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'drive' 
                ? 'bg-brand-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Hiring Drives
          </button>
          <button
            onClick={() => setFilterType('system')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'system' 
                ? 'bg-brand-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Placement Desk
          </button>
        </div>

        {/* Alerts List */}
        <div className="space-y-3">
          {filteredAlerts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">No Notifications</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                You are all caught up! New recruitment updates and drive notifications will appear here.
              </p>
              <button
                onClick={() => navigate('/hiring')}
                className="mt-2 px-5 py-2.5 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold rounded-xl transition-colors"
              >
                Explore Active Openings
              </button>
            </div>
          ) : (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`bg-white rounded-2xl p-5 border transition-all duration-200 shadow-sm hover:shadow-md flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                  alert.unread ? 'border-brand-blue/40 bg-sky-50/20' : 'border-slate-200/80'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    alert.type === 'job' 
                      ? 'bg-blue-50 text-brand-blue border border-blue-100' 
                      : alert.type === 'drive'
                      ? 'bg-rose-50 text-brand-red border border-rose-100'
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  }`}>
                    {alert.type === 'job' ? <Briefcase className="w-5 h-5" /> : alert.type === 'drive' ? <Building2 className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {alert.category && (
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                          {alert.category}
                        </span>
                      )}
                      {alert.unread && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-red text-white text-[9px] font-bold uppercase tracking-wider">
                          New
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {alert.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {alert.message}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-center flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button
                    onClick={() => handleAction(alert)}
                    className="w-full sm:w-auto px-4 py-2 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>{alert.jobId ? 'Apply Now' : 'View Openings'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

