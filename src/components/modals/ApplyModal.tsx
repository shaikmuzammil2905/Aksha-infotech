import React, { useState, useEffect } from 'react';
import { X, Upload, CheckCircle2, AlertCircle, Loader2, Briefcase, Building2, MapPin } from 'lucide-react';
import { Job, ApplicationSubmission } from '../../types/job';
import { sendJobApplication } from '../../services/emailService';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    location: '',
    coverMessage: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSubmitting, onClose]);

  // Reset states on open
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen || !job) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-click duplicate submissions

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.qualification.trim()) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    // Phone validation
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (phoneClean.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const payload: ApplicationSubmission = {
        jobId: job.id,
        jobTitle: job.title,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        qualification: formData.qualification,
        experience: formData.experience || 'Not specified',
        location: formData.location || 'Not specified',
        resumeFileName: resumeFile ? resumeFile.name : 'Resume_attached.pdf',
        coverMessage: formData.coverMessage,
        submittedAt: new Date().toISOString()
      };

      await sendJobApplication(payload);
      setSubmitted(true);
    } catch {
      setErrorMessage('Application submission failed. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 py-6 bg-slate-900/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[88vh] flex flex-col my-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 px-5 py-4 sm:px-6 sm:py-5 text-white flex items-start justify-between gap-3 border-b border-white/10">
          <div className="space-y-1 pr-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider mb-0.5">
              Apply Now
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
              {job.title}
            </h3>
            <p className="text-xs text-sky-200 flex flex-wrap items-center gap-2.5 pt-0.5">
              <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-sky-400" /> {job.company}</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-400" /> {job.location}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Application Submitted Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your application for <strong className="text-slate-900">{job.title}</strong> has been transmitted directly to our recruitment team at <span className="font-semibold text-brand-blue">Mnkumar@akshainfotech.com</span>.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 max-w-md mx-auto text-left space-y-1">
                <div><strong>Candidate:</strong> {formData.fullName}</div>
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
                <div><strong>Qualification:</strong> {formData.qualification}</div>
              </div>
              <p className="text-xs text-slate-400">Our HR specialist will review your profile and reach out within 24 to 48 business hours.</p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-brand-navy hover:bg-brand-blue text-white font-medium text-sm rounded-xl transition-colors shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Applying For Badge Box with proper mobile spacing */}
              <div className="bg-sky-50/80 p-3 sm:p-3.5 rounded-2xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 text-xs text-sky-900">
                <span className="font-bold flex items-center gap-1.5 text-slate-700 flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-brand-blue" />
                  Applying For:
                </span>
                <span className="font-extrabold text-brand-navy bg-white px-3 py-1.5 rounded-xl border border-sky-200 shadow-sm text-xs leading-normal">
                  {job.title}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9701310634"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    placeholder="e.g. B.Tech, MCA, MBA, Any Degree"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white"
                  >
                    <option value="">Select Experience</option>
                    <option value="Fresher / 0 Years">Fresher / 0 Years</option>
                    <option value="1–2 Years">1–2 Years</option>
                    <option value="3–5 Years">3–5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Hyderabad, Bangalore, Remote"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Upload Resume (PDF, DOC, DOCX up to 5MB)
                </label>
                <div className="relative border-2 border-dashed border-slate-300 hover:border-brand-blue rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50/50">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setResumeFile(e.target.files[0]);
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Upload className="w-6 h-6 text-brand-blue" />
                    {resumeFile ? (
                      <span className="text-xs font-semibold text-emerald-600 truncate max-w-xs">
                        Selected: {resumeFile.name}
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-medium text-slate-700">Click or drag & drop your resume file</span>
                        <span className="text-[11px] text-slate-400">Supported formats: PDF, DOCX</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Cover Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Cover Note / Message for Recruiter (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.coverMessage}
                  onChange={(e) => setFormData({ ...formData, coverMessage: e.target.value })}
                  placeholder="Share a brief introduction or your key strengths..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-xl shadow-md transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

