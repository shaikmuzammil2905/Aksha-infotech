import { Job } from '../types/job';

export const INITIAL_JOBS: Job[] = [
  {
    id: 'it-dev-01',
    title: 'Senior Software Developer',
    company: 'AKSHA Infotech Partner Client',
    category: 'IT & Software Jobs',
    categorySlug: 'it-software-jobs',
    location: 'Hyderabad, Telangana',
    experience: '5–8 Years',
    salary: '₹12–18 LPA',
    employmentType: 'Full Time',
    description: 'Looking for a Senior Software Developer proficient in React, Node.js, and cloud architectures to architect scalable web enterprise applications and mentor junior engineers.',
    responsibilities: [
      'Design, build, and maintain highly scalable web applications and RESTful APIs.',
      'Collaborate with product managers, UX designers, and cross-functional engineering teams.',
      'Perform peer code reviews and maintain clean, modular, and testable code standards.',
      'Optimize application performance, security, and scalability for cloud deployment.'
    ],
    eligibility: [
      'B.Tech / B.E / MCA in Computer Science, Information Technology or related field.',
      '5+ years of demonstrable hands-on software development experience.',
      'Solid command over JavaScript / TypeScript, React, Node.js, and SQL / NoSQL databases.',
      'Experience with AWS / Azure / GCP and modern CI/CD pipelines.'
    ],
    skills: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'REST APIs'],
    qualification: 'B.Tech / B.E / MCA in Computer Science',
    benefits: ['Health Insurance', 'Performance Bonuses', 'Flexible Work Options', 'Skill Upgrade Allowances'],
    postedDate: '2 days ago',
    status: 'active',
    isFeatured: true,
    openings: 3
  },
  {
    id: 'bpo-exec-02',
    title: 'Healthcare BPO Executive',
    company: 'AKSHA Health Services Client',
    category: 'BPO Jobs',
    categorySlug: 'bpo-jobs',
    location: 'Chennai, Tamil Nadu',
    experience: '0–3 Years',
    salary: '₹3–5 LPA',
    employmentType: 'Work From Home',
    description: 'Seeking energetic professionals for US Healthcare BPO processes. Responsible for handling client queries, medical insurance verification, and claims processing.',
    responsibilities: [
      'Communicate with healthcare providers and insurance carriers regarding claims status.',
      'Perform eligibility verification and prior authorization procedures accurately.',
      'Maintain detailed logs and documentation in compliance with HIPAA guidelines.',
      'Resolve pending claim denials and follow up with relevant insurance clearinghouses.'
    ],
    eligibility: [
      'Graduate in any discipline (B.Sc, B.Com, B.A, B.Pharm preferred).',
      'Excellent verbal and written English communication skills.',
      'Willingness to work in flexible rotational shifts.',
      'Basic knowledge of medical terminology and US healthcare billing is an advantage.'
    ],
    skills: ['US Healthcare', 'Claims Processing', 'Customer Support', 'HIPAA', 'Medical Billing'],
    qualification: 'Any Degree / Graduate',
    benefits: ['Work From Home Setup Support', 'Night Shift Allowance', 'Medical Cover', 'Career Progression Path'],
    postedDate: '1 day ago',
    status: 'active',
    isFeatured: true,
    openings: 8
  },
  {
    id: 'kpo-analyst-03',
    title: 'Senior Research & Data Analyst',
    company: 'AKSHA Global KPO Solutions',
    category: 'KPO Jobs',
    categorySlug: 'kpo-jobs',
    location: 'Hyderabad, Telangana',
    experience: '3–6 Years',
    salary: '₹8–13 LPA',
    employmentType: 'Hybrid',
    description: 'Conduct high-impact secondary research, quantitative data synthesis, and market intelligence reports for global corporate clients across multiple domains.',
    responsibilities: [
      'Perform detailed qualitative and quantitative research on global industry trends.',
      'Build comprehensive financial and operational benchmarking models.',
      'Prepare executive summary decks, infographics, and analytical business reports.',
      'Liaise directly with international stakeholders to present data findings.'
    ],
    eligibility: [
      'MBA, M.Com, or Master’s in Economics, Statistics, or Analytics.',
      '3+ years experience in a reputed KPO or research advisory firm.',
      'Advanced proficiency in Excel, PowerBI / Tableau, and statistical tools.',
      'Exceptional analytical reasoning and data presentation skills.'
    ],
    skills: ['Secondary Research', 'Market Intelligence', 'PowerBI', 'Advanced Excel', 'Financial Modeling'],
    qualification: 'MBA / Master in Economics or Statistics',
    benefits: ['Hybrid Work Model', 'Annual Incentive', 'Comprehensive Health Plan', 'Learning Sponsorship'],
    postedDate: '3 days ago',
    status: 'active',
    isFeatured: true,
    openings: 4
  },
  {
    id: 'fin-acc-04',
    title: 'Accounts & Financial Analyst',
    company: 'AKSHA Finance Corporate Client',
    category: 'Finance Jobs',
    categorySlug: 'finance-jobs',
    location: 'Hyderabad, Telangana',
    experience: '2–5 Years',
    salary: '₹5.5–9 LPA',
    employmentType: 'Full Time',
    description: 'Manage core financial operations including ledger accounting, budgeting, reconciliation, GST/tax filing, and internal financial audits.',
    responsibilities: [
      'Supervise general ledger entries, journal postings, and balance sheet reconciliations.',
      'Assist in monthly, quarterly, and annual financial closing cycles.',
      'Prepare cash flow statements, cost analyses, and variance reporting.',
      'Ensure strict statutory compliance with GST, TDS, and corporate tax regulations.'
    ],
    eligibility: [
      'B.Com / M.Com / Inter CA / MBA Finance.',
      '2 to 5 years of solid experience in corporate accounting or financial operations.',
      'Hands-on expertise in SAP, Tally Prime, and advanced Excel spreadsheet modeling.',
      'Sound understanding of Indian GAAP, GST, and international accounting principles.'
    ],
    skills: ['General Ledger', 'Tally Prime', 'SAP FICO', 'GST Filing', 'Financial Auditing'],
    qualification: 'B.Com / M.Com / MBA Finance',
    benefits: ['PF & Gratuity', 'Health Insurance', 'Performance Bonus', 'Day Shift Schedule'],
    postedDate: 'Just now',
    status: 'active',
    isFeatured: true,
    openings: 2
  },
  {
    id: 'health-code-05',
    title: 'Certified Medical Coder',
    company: 'AKSHA Healthcare Solutions',
    category: 'Healthcare Jobs',
    categorySlug: 'healthcare-jobs',
    location: 'Hyderabad, Telangana',
    experience: '1–4 Years',
    salary: '₹4.5–7.5 LPA',
    employmentType: 'Full Time',
    description: 'Review clinical clinical documentation and assign standardized ICD-10-CM, CPT, and HCPCS codes to patient records accurately in accordance with federal regulations.',
    responsibilities: [
      'Review medical charts and doctor notes to extract diagnoses and procedures.',
      'Assign precise ICD-10, CPT, and HCPCS codes following official coding guidelines.',
      'Identify discrepancies in medical records and query healthcare providers for clarification.',
      'Maintain higher than 97% coding accuracy and fulfill daily productivity targets.'
    ],
    eligibility: [
      'Life Science graduate (B.Sc Nursing, B.Pharm, Biotechnology, Zoology).',
      'Valid AAPC (CPC) or AHIMA (CCS) certification is preferred.',
      'Thorough knowledge of human anatomy, physiology, and medical terminology.',
      'Minimum 1 year active experience in outpatient or inpatient medical coding.'
    ],
    skills: ['ICD-10-CM', 'CPT Coding', 'HCPCS', 'Medical Terminology', 'AAPC CPC'],
    qualification: 'B.Sc Life Sciences / B.Pharm / BPT',
    benefits: ['Certification Renewal Assistance', 'Shift Allowances', 'Health Insurance', 'Quarterly Incentives'],
    postedDate: '4 days ago',
    status: 'active',
    isFeatured: true,
    openings: 5
  },
  {
    id: 'nonit-hr-06',
    title: 'HR & Talent Acquisition Executive',
    company: 'AKSHA Infotech Pvt Ltd',
    category: 'Non-IT Jobs',
    categorySlug: 'non-it-jobs',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    salary: '₹3.5–5 LPA',
    employmentType: 'Full Time',
    description: 'Lead recruitment drives, screen candidate resumes, coordinate interviews with client hiring managers, and assist with candidate onboarding processes.',
    responsibilities: [
      'Source candidate profiles via job boards, social media, and internal recruitment databases.',
      'Conduct initial HR phone screenings to assess candidate suitability and expectations.',
      'Schedule and coordinate interview rounds with client department leads.',
      'Maintain candidate pipeline records in the applicant tracking system (ATS).'
    ],
    eligibility: [
      'MBA in HR or Bachelor’s degree in Business Administration / Psychology / Commerce.',
      '1 to 3 years experience in recruitment or talent acquisition.',
      'Strong phone presence, negotiation, and relationship management capabilities.',
      'Familiarity with LinkedIn Recruiter, Naukri, and Monster job portals.'
    ],
    skills: ['Talent Sourcing', 'Interview Coordination', 'Resume Screening', 'Candidate Management', 'HR Operations'],
    qualification: 'MBA in HR / Any Graduate',
    benefits: ['Incentive per placement', 'Direct mentorship', 'Corporate exposure', 'Health Benefits'],
    postedDate: '2 days ago',
    status: 'active',
    isFeatured: true,
    openings: 2
  },
  {
    id: 'it-react-07',
    title: 'Frontend React Developer',
    company: 'AKSHA Tech Innovations',
    category: 'IT & Software Jobs',
    categorySlug: 'it-software-jobs',
    location: 'Bangalore / Remote',
    experience: '2–4 Years',
    salary: '₹6–10 LPA',
    employmentType: 'Full Time',
    description: 'Build sleek, responsive web interfaces using React.js, Tailwind CSS, and Next.js. Focus on speed, mobile accessibility, and delightful user interactions.',
    responsibilities: [
      'Develop modern, responsive web layouts based on Figma and design specs.',
      'Integrate frontend components with REST and GraphQL backend services.',
      'Ensure high performance across mobile devices and modern desktop browsers.',
      'Write clean, accessible, and well-documented TypeScript code.'
    ],
    eligibility: [
      'B.Tech / BCA / MCA or equivalent computer degree.',
      '2+ years of professional React and TypeScript experience.',
      'Deep mastery of HTML5, CSS3, Tailwind CSS, and state management.',
      'Strong eye for UI/UX detail and micro-interactions.'
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Next.js', 'Git'],
    qualification: 'B.Tech / BCA / MCA',
    benefits: ['Remote Flexibility', 'Medical Cover', 'Annual Tech Budget', 'Paid Time Off'],
    postedDate: '3 days ago',
    status: 'active',
    isFeatured: false,
    openings: 3
  },
  {
    id: 'bpo-intl-08',
    title: 'International Customer Support (Voice/Chat)',
    company: 'AKSHA Global BPO',
    category: 'BPO Jobs',
    categorySlug: 'bpo-jobs',
    location: 'Hyderabad, Telangana',
    experience: '0–2 Years',
    salary: '₹3.2–4.5 LPA',
    employmentType: 'Full Time',
    description: 'Provide high-quality voice and omni-channel chat support to international consumers. Solve inquiries, track tickets, and ensure first-call resolution.',
    responsibilities: [
      'Handle inbound customer calls and support tickets with empathy and speed.',
      'Troubleshoot basic customer issues following standard operating procedures.',
      'Accurately update CRM records after every customer interaction.',
      'Adhere to high quality metrics, CSAT scores, and average handling time targets.'
    ],
    eligibility: [
      'Intermediate / Any Graduate / Undergraduate.',
      'Fluency in English with neutral accent and strong articulation.',
      'Active listening and problem-solving mindset.',
      'Comfortable working in 24/7 rotational shifts with 2 days off.'
    ],
    skills: ['Customer Service', 'Voice Process', 'CRM Software', 'Communication', 'Active Listening'],
    qualification: 'Intermediate / Any Graduate',
    benefits: ['Cab Facility (Pick & Drop)', 'Shift Allowances', 'Subsidized Cafeteria', 'Quarterly Awards'],
    postedDate: '5 days ago',
    status: 'active',
    isFeatured: false,
    openings: 12
  },
  {
    id: 'kpo-fin-09',
    title: 'Financial Research Associate',
    company: 'AKSHA KPO Financial Analytics',
    category: 'KPO Jobs',
    categorySlug: 'kpo-jobs',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    salary: '₹6–8.5 LPA',
    employmentType: 'Full Time',
    description: 'Assist in equity research, earnings report analysis, financial forecasting, and industry landscape assessments for global investment firms.',
    responsibilities: [
      'Extract and analyze quarterly financial data from 10-K, 10-Q, and annual reports.',
      'Update valuation models, DCF, and comparable company analyses.',
      'Monitor market news, mergers & acquisitions, and macroeconomic events.',
      'Draft concise investment briefs and sector snapshots.'
    ],
    eligibility: [
      'CFA Level 1/2, MBA Finance, or M.Com.',
      'Strong financial statement analysis acumen.',
      'High speed in MS Excel, Bloomberg / FactSet exposure is a bonus.',
      'Sound written and spoken English.'
    ],
    skills: ['Financial Modeling', 'Equity Research', 'Valuation', 'Excel', 'Corporate Finance'],
    qualification: 'MBA Finance / CFA aspirant / M.Com',
    benefits: ['Study Sponsorship for CFA', 'Health Cover', 'Annual Bonus', 'Professional Mentorship'],
    postedDate: '6 days ago',
    status: 'active',
    isFeatured: false,
    openings: 3
  },
  {
    id: 'fin-tax-10',
    title: 'US Tax Associate',
    company: 'AKSHA Advisory & Tax Services',
    category: 'Finance Jobs',
    categorySlug: 'finance-jobs',
    location: 'Hyderabad, Telangana',
    experience: '1–4 Years',
    salary: '₹5–8 LPA',
    employmentType: 'Full Time',
    description: 'Prepare and review US federal and state income tax returns for individuals (Form 1040) and corporations (Form 1120/1065) with high precision.',
    responsibilities: [
      'Analyze client tax documents including W-2, 1099, K-1, and financial records.',
      'Prepare tax returns using leading tax software (GoSystem, UltraTax, ProConnect).',
      'Perform tax research and identify eligible deductions and tax credits.',
      'Maintain client workpapers in compliance with US IRS regulations.'
    ],
    eligibility: [
      'B.Com, M.Com, MBA Finance, or Enrolled Agent (EA) credential.',
      'At least 1 tax season experience in US tax compliance.',
      'Strong attention to detail and analytical skills.',
      'Proficiency in US tax laws and compliance workflows.'
    ],
    skills: ['US Taxation', 'Form 1040', 'Form 1120', 'Tax Preparation', 'IRS Compliance'],
    qualification: 'B.Com / M.Com / EA / MBA Finance',
    benefits: ['Tax Season Incentives', 'Cab Facility', 'Comprehensive Medical Policy', 'Career Growth'],
    postedDate: '1 week ago',
    status: 'active',
    isFeatured: false,
    openings: 4
  },
  {
    id: 'nonit-ops-11',
    title: 'Operations & Facilities Coordinator',
    company: 'AKSHA Corporate Facility Services',
    category: 'Non-IT Jobs',
    categorySlug: 'non-it-jobs',
    location: 'Hyderabad, Telangana',
    experience: '2–4 Years',
    salary: '₹3.8–5.2 LPA',
    employmentType: 'Full Time',
    description: 'Oversee corporate office day-to-day operations, vendor management, asset procurement, logistical scheduling, and facility maintenance.',
    responsibilities: [
      'Manage office utilities, supplies inventory, and vendor service contracts.',
      'Ensure workplace safety, security compliance, and hygiene standards.',
      'Coordinate travel arrangements, accommodation, and meeting room logistics.',
      'Maintain office operational expense reports and invoice verifications.'
    ],
    eligibility: [
      'Bachelor’s degree in Any Discipline.',
      '2+ years in facility coordination, office administration, or front-desk operations.',
      'Strong organizational, multi-tasking, and vendor management skills.',
      'Working knowledge of MS Office tools.'
    ],
    skills: ['Facility Management', 'Vendor Relations', 'Office Administration', 'Procurement', 'Logistics'],
    qualification: 'Any Degree / Graduate',
    benefits: ['Provident Fund', 'Medical Insurance', 'Paid Annual Leave', 'Fixed Day Shift'],
    postedDate: '5 days ago',
    status: 'active',
    isFeatured: false,
    openings: 1
  },
  {
    id: 'health-nurse-12',
    title: 'Clinical Data Coordinator',
    company: 'AKSHA Clinical Research Solutions',
    category: 'Healthcare Jobs',
    categorySlug: 'healthcare-jobs',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    salary: '₹4.2–6.5 LPA',
    employmentType: 'Full Time',
    description: 'Review and validate clinical trial data from medical case report forms (eCRFs) to ensure integrity, consistency, and compliance with GCP standards.',
    responsibilities: [
      'Perform data review, query generation, and discrepancy resolution in EDC systems.',
      'Collaborate with medical monitors, clinical investigators, and biostatisticians.',
      'Ensure adherence to ICH-GCP guidelines and protocol specifications.',
      'Support database lock activities and quality control checks.'
    ],
    eligibility: [
      'B.Pharm / M.Pharm / Pharm.D / M.Sc Life Sciences.',
      'Prior hands-on exposure to EDC platforms (Medidata Rave, Oracle InForm).',
      'Strong understanding of clinical trial terminology and data validation.',
      'High accuracy and detail orientation.'
    ],
    skills: ['Clinical Data Management', 'EDC Rave', 'ICH-GCP', 'Data Validation', 'Medical Terminology'],
    qualification: 'B.Pharm / M.Pharm / Pharm.D',
    benefits: ['Medical Insurance', 'Yearly Bonus', 'Continuous Education Support', 'Weekend Offs'],
    postedDate: '4 days ago',
    status: 'active',
    isFeatured: false,
    openings: 3
  }
];

// Helper functions
export const getActiveJobs = (): Job[] => {
  const stored = localStorage.getItem('aksha_jobs');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return INITIAL_JOBS;
    }
  }
  return INITIAL_JOBS;
};

export const getJobById = (id: string): Job | undefined => {
  const jobs = getActiveJobs();
  return jobs.find(j => j.id === id);
};

export const getJobsByCategory = (categorySlug: string): Job[] => {
  const jobs = getActiveJobs();
  return jobs.filter(j => j.categorySlug === categorySlug && j.status === 'active');
};

export const searchJobs = (
  query: string = '',
  location: string = '',
  category: string = '',
  experience: string = '',
  type: string = '',
  sort: string = 'latest'
): Job[] => {
  let list = getActiveJobs().filter(j => j.status === 'active');

  const q = query.trim().toLowerCase();
  if (q) {
    list = list.filter(j => 
      j.title.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.skills.some(s => s.toLowerCase().includes(q))
    );
  }

  if (location && location !== 'all') {
    const loc = location.toLowerCase();
    list = list.filter(j => j.location.toLowerCase().includes(loc));
  }

  if (category && category !== 'all') {
    list = list.filter(j => j.categorySlug === category || j.category === category);
  }

  if (experience && experience !== 'all') {
    list = list.filter(j => j.experience.toLowerCase().includes(experience.toLowerCase()));
  }

  if (type && type !== 'all') {
    list = list.filter(j => j.employmentType.toLowerCase() === type.toLowerCase());
  }

  if (sort === 'latest') {
    // Keep top order or reverse
  } else if (sort === 'title') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
};
