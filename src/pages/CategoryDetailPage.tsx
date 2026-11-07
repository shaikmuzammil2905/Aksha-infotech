import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Briefcase, CheckCircle2, ArrowRight, Building2, MapPin, 
  DollarSign, Clock, ChevronRight, Award, ShieldCheck, PhoneCall 
} from 'lucide-react';
import { Job, JobCategory } from '../types/job';
import { getJobsByCategory } from '../data/jobsData';

interface CategoryDetailPageProps {
  onOpenApply: (job: Job) => void;
  categorySlug?: string;
}

interface CategoryMeta {
  title: string;
  categoryName: JobCategory;
  tagline: string;
  heroDesc: string;
  overview: string;
  typicalRoles: string[];
  candidateRequirements: string[];
  industryBenefits: string[];
  salaryBracket: string;
  growthPath: string;
}

const CATEGORY_MAP: Record<string, CategoryMeta> = {
  'kpo-jobs': {
    title: 'KPO Jobs (Knowledge Process Outsourcing)',
    categoryName: 'KPO Jobs',
    tagline: 'High-Value Research, Data Analytics & Financial Intelligence Roles',
    heroDesc: 'Explore premium analytical, market intelligence, and research analyst opportunities with top multinational KPO firms.',
    overview: 'Knowledge Process Outsourcing (KPO) represents the pinnacle of business process execution, demanding high expertise, domain mastery, and complex analytical reasoning. AKSHA Infotech connects analytical minds with global investment banks, market research firms, and strategic advisory corporations.',
    typicalRoles: [
      'Senior Research & Data Analyst',
      'Financial Research Associate & Equity Modeler',
      'Market Intelligence Specialist',
      'Business Performance & KPI Analyst',
      'Legal & IP Research Specialist'
    ],
    candidateRequirements: [
      'MBA, M.Com, CFA, Master’s in Economics, Statistics, or Analytics',
      'Advanced command of MS Excel (Macros, VLOOKUP, Pivot) & PowerBI / Tableau',
      'Exceptional secondary data synthesis and executive presentation skills',
      'Demonstrated qualitative reasoning and commercial acumen'
    ],
    industryBenefits: [
      'Accelerated corporate ladder towards investment consulting & strategy',
      'Exposure to global market dynamics and multinational corporate executives',
      'High-tier compensation benchmarks with quarterly performance incentives',
      'Hybrid and flexible remote working options'
    ],
    salaryBracket: '₹6 LPA – ₹16 LPA (depending on experience)',
    growthPath: 'Analyst → Senior Analyst → Lead Consultant → Practice Head'
  },
  'bpo-jobs': {
    title: 'BPO Jobs (Business Process Outsourcing)',
    categoryName: 'BPO Jobs',
    tagline: 'Voice, Non-Voice, Customer Success & Technical Operations',
    heroDesc: 'Accelerate your career in premier global BPO centers with competitive salaries, transportation benefits, and rapid internal promotions.',
    overview: 'Business Process Outsourcing is one of India’s largest employment drivers. AKSHA Infotech has placed over 1,000+ candidates in top-tier multinational BPOs across Hyderabad and Chennai, supporting international consumers across ecommerce, fintech, and telecom sectors.',
    typicalRoles: [
      'International Customer Support Specialist (Voice)',
      'Omnichannel Chat & Email Process Associate',
      'Technical Support Representative (Tier 1 & Tier 2)',
      'Healthcare BPO Executive (Claims & Verification)',
      'Quality Analyst & Operations Team Lead'
    ],
    candidateRequirements: [
      'Intermediate / Any Graduate / Undergraduate candidates eligible',
      'Fluent verbal English communication with neutral pronunciation',
      'Basic computer navigation and typing proficiency (25–35 WPM)',
      'Flexibility for 24/7 rotational shifts with 2 consecutive days off'
    ],
    industryBenefits: [
      'Fixed free pick-and-drop corporate cab facilities for night shifts',
      'Lucrative monthly performance incentives and shift allowances',
      'Fast-track internal job postings (IJP) to management within 12 months',
      'Comprehensive family medical coverage and accidental insurance'
    ],
    salaryBracket: '₹3 LPA – ₹6.5 LPA + Performance Incentives',
    growthPath: 'Process Executive → Senior Executive → Quality Analyst → Team Lead'
  },
  'healthcare-jobs': {
    title: 'Healthcare & Medical Operations Jobs',
    categoryName: 'Healthcare Jobs',
    tagline: 'Medical Coding, Clinical Data Management & Revenue Cycle Services',
    heroDesc: 'Join the booming healthcare BPO & RCM industry with specialized medical coding and clinical trial coordination roles.',
    overview: 'The global healthcare revenue cycle management (RCM) sector has experienced exponential growth. AKSHA Infotech bridges certified life science graduates with top US healthcare providers, hospitals, and pharmaceutical research organizations.',
    typicalRoles: [
      'Certified Medical Coder (AAPC CPC / AHIMA CCS)',
      'Clinical Data Coordinator (eCRF & Trial Monitoring)',
      'Healthcare Denial Management Specialist',
      'Medical Billing & Prior-Authorization Associate',
      'Pharmacovigilance & Drug Safety Associate'
    ],
    candidateRequirements: [
      'Life Science graduates (B.Pharmacy, M.Pharmacy, B.Sc Nursing, Biotechnology)',
      'Valid AAPC or AHIMA coding certification preferred for coding roles',
      'Sound understanding of ICD-10-CM, CPT, HCPCS, and human anatomy',
      'High accuracy orientation and adherence to US HIPAA regulations'
    ],
    industryBenefits: [
      'Recession-proof healthcare industry career with long-term stability',
      'Certification sponsorship and renewal assistance for professional coders',
      'Work-from-home and hybrid setups with full infrastructure provided',
      'Regular day/afternoon shift schedules and weekend off structures'
    ],
    salaryBracket: '₹4 LPA – ₹9 LPA',
    growthPath: 'Junior Coder → Senior Coder → QA Auditor → Medical Coding Trainer'
  },
  'finance-jobs': {
    title: 'Finance, US Taxation & Corporate Accounting Jobs',
    categoryName: 'Finance Jobs',
    tagline: 'General Ledger, US Tax Compliance, Auditing & Financial Planning',
    heroDesc: 'Unlock career openings with leading accounting conglomerates, US CPA firms, and corporate finance departments.',
    overview: 'Financial acumen is universally sought after by global organizations. AKSHA Infotech connects finance graduates, CAs, and tax professionals with prominent multinational corporate centers operating in Hyderabad.',
    typicalRoles: [
      'US Tax Associate (Form 1040, 1120, 1065 Preparation)',
      'General Ledger & Accounts Payable / Receivable Accountant',
      'Financial Planning & Analysis (FP&A) Executive',
      'Statutory & Internal Audit Specialist',
      'Billing & Reconciliation Coordinator'
    ],
    candidateRequirements: [
      'B.Com, M.Com, MBA Finance, Inter CA, or Enrolled Agent (EA)',
      'Demonstrated experience in Tally Prime, SAP FICO, or US Tax Software',
      'Strong grasp of balance sheet reconciliation, TDS, and GST norms',
      'Analytical mindset with precision in numerical calculations'
    ],
    industryBenefits: [
      'Rewarding tax-season bonuses and overtime incentive structures',
      'Direct pathway towards Enrolled Agent (EA) and CPA credentialing',
      'Exposure to US and international accounting standards (US GAAP & IFRS)',
      'Steady, predictable corporate day shifts'
    ],
    salaryBracket: '₹4.5 LPA – ₹11 LPA',
    growthPath: 'Accounts Associate → Senior Accountant → Finance Manager → Financial Controller'
  },
  'non-it-jobs': {
    title: 'Non-IT, Operations & Human Resource Jobs',
    categoryName: 'Non-IT Jobs',
    tagline: 'HR Talent Acquisition, Corporate Admin, Logistics & Operations',
    heroDesc: 'Explore diverse opportunities in corporate administration, human resources, facilities management, and operational leadership.',
    overview: 'Behind every successful enterprise operates a robust backbone of non-technical talent. AKSHA Infotech places enthusiastic candidates in human resources, office logistics, executive administration, and procurement roles across diverse industries.',
    typicalRoles: [
      'HR Executive & Talent Acquisition Specialist',
      'Corporate Operations & Admin Coordinator',
      'Procurement & Vendor Relationship Executive',
      'Training & Onboarding Coordinator',
      'Front Desk & Executive Secretary'
    ],
    candidateRequirements: [
      'MBA in HR, BBA, B.Com, or any recognized University Degree',
      'Strong interpersonal, conflict resolution, and communication abilities',
      'Working fluency in MS Office (Word, PowerPoint, Excel)',
      'Proactive organizational mindset with attention to detail'
    ],
    industryBenefits: [
      'Direct interaction with company leadership and cross-functional teams',
      'Placement incentive bonuses for recruitment specialists',
      'Regular day-time working hours with corporate holiday schedules',
      'Versatile career trajectory applicable to virtually any business sector'
    ],
    salaryBracket: '₹3 LPA – ₹6.5 LPA',
    growthPath: 'HR Associate → HR Generalist → HR Manager → Head of People'
  },
  'it-software-jobs': {
    title: 'IT & Software Development Jobs',
    categoryName: 'IT & Software Jobs',
    tagline: 'Full Stack Web, Cloud, Mobile, QA Automation & DevOps Engineering',
    heroDesc: 'Accelerate your tech career with established product enterprises, software boutiques, and multinational IT consulting firms.',
    overview: 'Information technology is the bedrock of modern global enterprise. AKSHA Infotech maintains extensive partnerships with software development companies, providing verified openings for programmers, quality engineers, and cloud architects in Hyderabad and across India.',
    typicalRoles: [
      'Senior Software Developer (Full Stack Java / Python / Node)',
      'Frontend React.js / Next.js Engineer',
      'QA Automation & Selenium / Cypress Engineer',
      'Cloud & DevOps Engineer (AWS, Docker, Kubernetes)',
      'Database Administrator & Backend Architect'
    ],
    candidateRequirements: [
      'B.Tech / B.E / MCA / BCA in Computer Science or related branch',
      'Proficiency in core programming (JavaScript, TypeScript, Python, or Java)',
      'Familiarity with modern frameworks, REST APIs, Git, and database engines',
      'Strong problem-solving, algorithmic thinking, and debugging skills'
    ],
    industryBenefits: [
      'Top-market salary brackets with substantial joining bonuses',
      'High growth rate with hybrid and remote-first work cultures',
      'Modern tech stacks and opportunity to build enterprise-scale solutions',
      'Learning allowances and cloud certification sponsorships'
    ],
    salaryBracket: '₹6 LPA – ₹20+ LPA (based on seniority)',
    growthPath: 'Software Engineer → Senior Developer → Tech Lead → Solutions Architect'
  }
};

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ onOpenApply, categorySlug: propSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const activeSlug = propSlug || slug || 'it-software-jobs';
  const categoryData = CATEGORY_MAP[activeSlug] || CATEGORY_MAP['it-software-jobs'];

  // Fetch active jobs for this specific category
  const matchingJobs = getJobsByCategory(activeSlug);

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/services')}>Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-blue font-semibold">{categoryData.title}</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider">
              {categoryData.categoryName}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {categoryData.title}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-sky-300">
              {categoryData.tagline}
            </p>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              {categoryData.heroDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate(`/hiring?cat=${activeSlug}`)}
                className="px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>View {matchingJobs.length} Active Openings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919701310634"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Placement Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Overview & Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main 2 Cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Sector Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {categoryData.overview}
              </p>
            </div>

            {/* Typical Roles Available */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Typical Job Profiles In This Category
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryData.typicalRoles.map((role, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                    <Briefcase className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Requirements */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Common Eligibility &amp; Candidate Requirements
              </h2>
              <ul className="space-y-3">
                {categoryData.candidateRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Why Build a Career in this Industry?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryData.industryBenefits.map((b, i) => (
                  <div key={i} className="p-3.5 bg-sky-50/60 rounded-2xl border border-sky-100 text-xs text-sky-950 font-medium flex items-start gap-2">
                    <Award className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Salary & Fast Highlights */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Market Benchmarks
              </h3>
              <div>
                <span className="text-[11px] text-slate-400 font-semibold block uppercase">Typical Package Range</span>
                <p className="text-base font-extrabold text-brand-red mt-0.5">{categoryData.salaryBracket}</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 font-semibold block uppercase">Typical Career Ladder</span>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">{categoryData.growthPath}</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 font-semibold block uppercase">Service Fee for Candidates</span>
                <p className="text-xs font-extrabold text-emerald-600 mt-0.5">100% Free Placement Service</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-dark to-brand-navy text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h4 className="font-bold text-base">Want Personalized Guidance?</h4>
              <p className="text-xs text-sky-200 leading-relaxed">
                Speak directly with an AKSHA Infotech career consultant specialized in {categoryData.categoryName}.
              </p>
              <a
                href="https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20job%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>WhatsApp Recruiter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Active Openings Section */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Current Openings in {categoryData.categoryName} ({matchingJobs.length})
            </h2>
            <button
              onClick={() => navigate(`/hiring?cat=${activeSlug}`)}
              className="text-xs font-bold text-brand-blue hover:underline"
            >
              Filter &amp; Search All
            </button>
          </div>

          {matchingJobs.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
              There are no active openings in this category right now. Please check back soon or submit your profile.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchingJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 
                          onClick={() => navigate(`/jobs/${job.id}`)}
                          className="font-bold text-slate-900 hover:text-brand-blue cursor-pointer transition-colors"
                        >
                          {job.title}
                        </h3>
                        <p className="text-xs text-slate-500 flex items-center gap-2 mt-1">
                          <span>{job.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {job.location}
                          </span>
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-sky-50 text-brand-blue text-[10px] font-bold">
                        {job.employmentType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex items-center gap-3 mt-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <span>Exp: {job.experience}</span>
                      <span>•</span>
                      <span className="font-bold text-brand-navy">{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => navigate(`/jobs/${job.id}`)}
                      className="text-xs font-semibold text-slate-600 hover:text-brand-blue"
                    >
                      View Details &rarr;
                    </button>
                    <button
                      onClick={() => onOpenApply(job)}
                      className="px-4 py-2 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
