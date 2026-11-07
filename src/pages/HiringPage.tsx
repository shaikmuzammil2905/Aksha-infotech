import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, MapPin, Filter, RotateCcw, Briefcase, 
  Building2, Clock, ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { Job, JobCategory } from '../types/job';
import { searchJobs } from '../data/jobsData';

interface HiringPageProps {
  onOpenApply: (job: Job) => void;
}

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Categories', value: 'all' },
  { label: 'IT & Software Jobs', value: 'it-software-jobs' },
  { label: 'BPO Jobs', value: 'bpo-jobs' },
  { label: 'KPO Jobs', value: 'kpo-jobs' },
  { label: 'Healthcare Jobs', value: 'healthcare-jobs' },
  { label: 'Finance Jobs', value: 'finance-jobs' },
  { label: 'Non-IT Jobs', value: 'non-it-jobs' },
];

const LOCATIONS = [
  { label: 'All Locations', value: 'all' },
  { label: 'Hyderabad, Telangana', value: 'Hyderabad' },
  { label: 'Chennai, Tamil Nadu', value: 'Chennai' },
  { label: 'Bangalore, Karnataka', value: 'Bangalore' },
  { label: 'Remote / Work From Home', value: 'Remote' },
];

const EXPERIENCES = [
  { label: 'Any Experience', value: 'all' },
  { label: '0–2 Years (Fresher/Junior)', value: '0–2' },
  { label: '1–3 Years', value: '1–3' },
  { label: '2–5 Years (Mid-level)', value: '2–5' },
  { label: '5+ Years (Senior)', value: '5' },
];

const EMPLOYMENT_TYPES = [
  { label: 'All Types', value: 'all' },
  { label: 'Full Time', value: 'Full Time' },
  { label: 'Work From Home', value: 'Work From Home' },
  { label: 'Hybrid', value: 'Hybrid' },
  { label: 'Contract', value: 'Contract' },
];

export const HiringPage: React.FC<HiringPageProps> = ({ onOpenApply }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryParam = searchParams.get('q') || '';
  const locParam = searchParams.get('loc') || 'all';
  const catParam = searchParams.get('cat') || 'all';

  const [query, setQuery] = useState(queryParam);
  const [selectedLocation, setSelectedLocation] = useState(locParam);
  const [selectedCategory, setSelectedCategory] = useState(catParam);
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // Keep state in sync with URL
  useEffect(() => {
    setQuery(queryParam);
    setSelectedLocation(locParam);
    setSelectedCategory(catParam);
  }, [queryParam, locParam, catParam]);

  const jobsList = useMemo(() => {
    return searchJobs(
      query,
      selectedLocation,
      selectedCategory,
      selectedExperience,
      selectedType,
      sortBy
    );
  }, [query, selectedLocation, selectedCategory, selectedExperience, selectedType, sortBy]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.append('q', query.trim());
    if (selectedLocation !== 'all') params.append('loc', selectedLocation);
    if (selectedCategory !== 'all') params.append('cat', selectedCategory);
    setSearchParams(params);
  };

  const handleResetFilters = () => {
    setQuery('');
    setSelectedLocation('all');
    setSelectedCategory('all');
    setSelectedExperience('all');
    setSelectedType('all');
    setSortBy('latest');
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Page Title & Breadcrumb */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="hover:text-slate-700 cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue font-semibold">Hiring &amp; Job Openings</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Current Job Openings
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore verified positions across KPO, BPO, Healthcare, Finance, Non-IT, and IT/Software.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {jobsList.length} Active Openings Found
              </span>
            </div>
          </div>

          {/* Quick Search Bar */}
          <form onSubmit={handleSearchSubmit} className="mt-6 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search job title, skills (e.g. React, Medical Coding, US Tax, BPO...)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Layout: Sidebar Filters + Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <Filter className="w-4 h-4 text-brand-blue" />
                  <span>Filter Jobs</span>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-brand-red hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Job Category
                </label>
                <div className="space-y-1.5">
                  {CATEGORIES.map((c) => (
                    <label key={c.value} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                      <input
                        type="radio"
                        name="categoryFilter"
                        checked={selectedCategory === c.value}
                        onChange={() => setSelectedCategory(c.value)}
                        className="text-brand-blue focus:ring-brand-blue"
                      />
                      <span className={selectedCategory === c.value ? 'font-bold text-brand-navy' : ''}>{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.value} value={loc.value}>{loc.label}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Experience Level
                </label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  {EXPERIENCES.map((exp) => (
                    <option key={exp.value} value={exp.value}>{exp.label}</option>
                  ))}
                </select>
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Work Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  {EMPLOYMENT_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Sort Results
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  <option value="latest">Latest First</option>
                  <option value="title">Alphabetical (A–Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Jobs Listing Column */}
          <div className="lg:col-span-3 space-y-4">
            {jobsList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-brand-red flex items-center justify-center mx-auto">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">No Matching Jobs Found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  There are no active openings matching your current search criteria. Try modifying your keywords or resetting filters.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-brand-navy hover:bg-brand-blue text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              jobsList.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-brand-blue flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 
                            onClick={() => navigate(`/jobs/${job.id}`)}
                            className="font-black text-base sm:text-lg text-slate-900 hover:text-brand-blue transition-colors cursor-pointer"
                          >
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                            <span className="font-semibold text-slate-700">{job.company}</span>
                            <span>•</span>
                            <span className="text-brand-blue font-medium">{job.category}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="px-3 py-1 rounded-full bg-sky-50 text-brand-blue text-xs font-bold border border-sky-100">
                          {job.employmentType}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-2">
                      {job.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        Experience: <strong className="text-slate-800">{job.experience}</strong>
                      </span>
                      <span>•</span>
                      <span>
                        Package: <strong className="text-brand-red">{job.salary}</strong>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        Posted {job.postedDate}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 mt-5 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => navigate(`/jobs/${job.id}`)}
                      className="text-xs font-bold text-slate-700 hover:text-brand-blue flex items-center gap-1"
                    >
                      <span>View More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenApply(job)}
                      className="px-5 py-2.5 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

