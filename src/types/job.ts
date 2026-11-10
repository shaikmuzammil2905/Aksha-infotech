export type JobCategory = 
  | 'KPO Jobs'
  | 'BPO Jobs'
  | 'Healthcare Jobs'
  | 'Finance Jobs'
  | 'Non-IT Jobs'
  | 'IT & Software Jobs';

export type EmploymentType = 'Full Time' | 'Part Time' | 'Contract' | 'Work From Home' | 'Hybrid';

export interface Job {
  id: string;
  title: string;
  company: string;
  category: JobCategory;
  categorySlug: string;
  location: string;
  experience: string;
  salary: string;
  employmentType: EmploymentType;
  description: string;
  responsibilities: string[];
  eligibility: string[];
  skills: string[];
  qualification: string;
  benefits: string[];
  postedDate: string;
  status: 'active' | 'inactive';
  isFeatured?: boolean;
  openings?: number;
  image?: string;
}

export interface ApplicationSubmission {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
  location: string;
  resumeFileName?: string;
  coverMessage?: string;
  submittedAt: string;
}

export interface EmployerRequirement {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  jobTitle: string;
  jobCategory: JobCategory;
  location: string;
  experience: string;
  jobDescription: string;
  openingsCount: number;
  submittedAt: string;
}

export interface ContactMessage {
  fullName: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

