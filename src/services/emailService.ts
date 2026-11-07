import { ApplicationSubmission, EmployerRequirement, ContactMessage } from '../types/job';

const COMPANY_RECIPIENT = 'Mnkumar@akshainfotech.com';

export const sendJobApplication = async (data: ApplicationSubmission): Promise<{ success: boolean; message: string }> => {
  // Simulate network dispatch to backend email API
  await new Promise(resolve => setTimeout(resolve, 800));

  const applicationsKey = 'aksha_applications';
  const existing = JSON.parse(localStorage.getItem(applicationsKey) || '[]');
  existing.unshift({
    ...data,
    recipientEmail: COMPANY_RECIPIENT,
    id: `app_${Date.now()}`
  });
  localStorage.setItem(applicationsKey, JSON.stringify(existing));

  return {
    success: true,
    message: `Application for "${data.jobTitle}" submitted successfully! Details have been forwarded to recruitment team at ${COMPANY_RECIPIENT}.`
  };
};

export const sendEmployerRequirement = async (data: EmployerRequirement): Promise<{ success: boolean; message: string }> => {
  await new Promise(resolve => setTimeout(resolve, 800));

  const employerKey = 'aksha_employer_requirements';
  const existing = JSON.parse(localStorage.getItem(employerKey) || '[]');
  existing.unshift({
    ...data,
    recipientEmail: COMPANY_RECIPIENT,
    id: `req_${Date.now()}`
  });
  localStorage.setItem(employerKey, JSON.stringify(existing));

  return {
    success: true,
    message: `Job requirement for "${data.jobTitle}" from ${data.companyName} submitted successfully! Our talent acquisition team will get in touch shortly.`
  };
};

export const sendContactMessage = async (data: ContactMessage): Promise<{ success: boolean; message: string }> => {
  await new Promise(resolve => setTimeout(resolve, 800));

  const contactKey = 'aksha_contact_messages';
  const existing = JSON.parse(localStorage.getItem(contactKey) || '[]');
  existing.unshift({
    ...data,
    recipientEmail: COMPANY_RECIPIENT,
    id: `msg_${Date.now()}`
  });
  localStorage.setItem(contactKey, JSON.stringify(existing));

  return {
    success: true,
    message: `Thank you! Your message has been submitted successfully to ${COMPANY_RECIPIENT}. We will respond within 24 hours.`
  };
};

