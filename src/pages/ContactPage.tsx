import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, MessageCircle, Send, 
  CheckCircle2, AlertCircle, Loader2, Clock, Upload, Briefcase 
} from 'lucide-react';
import { sendContactMessage } from '../services/emailService';

const WHATSAPP_NUMBER = '919701310634';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const initialCategory = searchParams.get('category') || 'IT & Software Jobs';

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    jobCategory: initialCategory,
    qualification: '',
    experience: 'Fresher / 0 Years',
    preferredLocation: 'Hyderabad',
    message: ''
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFormData(prev => ({ ...prev, jobCategory: cat }));
    }
    if (searchParams.get('apply') === 'true' || location.hash === '#apply-form' || cat) {
      setTimeout(() => {
        const el = document.getElementById('apply-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [searchParams, location.hash]);

  const buildWhatsAppLink = (data: typeof formData, file: File | null) => {
    const lines = [
      '*AKSHA Infotech - Job Application & Inquiry*',
      '',
      `*Full Name:* ${data.fullName}`,
      `*Mobile Number:* ${data.mobile}`,
      `*Email:* ${data.email}`,
      `*Preferred Job Category:* ${data.jobCategory}`,
      `*Qualification:* ${data.qualification}`,
      `*Experience Level:* ${data.experience}`,
      `*Preferred Location:* ${data.preferredLocation}`,
      `*Resume:* ${file ? `${file.name} (Attached in WhatsApp)` : 'Will attach resume in chat'}`,
      data.message.trim() ? `*Skills / Message:* ${data.message.trim()}` : ''
    ].filter(Boolean);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.fullName.trim() || !formData.mobile.trim() || !formData.email.trim() || !formData.qualification.trim()) {
      setErrorMessage('Please fill in all mandatory candidate details (Name, Mobile, Email, Qualification).');
      return;
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await sendContactMessage({
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
        subject: `Job Application: ${formData.jobCategory} (${formData.qualification})`,
        message: `Category: ${formData.jobCategory} | Qualification: ${formData.qualification} | Experience: ${formData.experience} | Location: ${formData.preferredLocation} | Resume: ${resumeFile?.name || 'Pending'} | Notes: ${formData.message}`,
        submittedAt: new Date().toISOString()
      });

      const waLink = buildWhatsAppLink(formData, resumeFile);
      setWhatsappUrl(waLink);
      setSubmitted(true);

      // Directly forward candidate details to the related WhatsApp contact
      window.open(waLink, '_blank', 'noopener,noreferrer');

      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        jobCategory: 'IT & Software Jobs',
        qualification: '',
        experience: 'Fresher / 0 Years',
        preferredLocation: 'Hyderabad',
        message: ''
      });
      setResumeFile(null);
    } catch {
      setErrorMessage('Failed to submit details. Please try again or reach out directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-white/10 text-center sm:text-left">
          <div className="max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider inline-block">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Contact AKSHA Infotech
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Have inquiries about job vacancies, interview schedules, or employer recruitment partnerships? Reach out to our Hyderabad office team directly.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Head Office Information</h3>
                <p className="text-xs text-slate-500 mt-1">AKSHA Infotech Pvt Ltd &bull; Est. 2022</p>
              </div>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+919701310634"
                  className="p-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-2xl border border-emerald-200 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-600 block">Click to Call</span>
                    <span className="text-xs font-black">+91 9701310634</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20job%20opportunities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-sm flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-100 block">WhatsApp Us</span>
                    <span className="text-xs font-black">Chat Live</span>
                  </div>
                </a>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 font-bold mb-0.5">Office Address:</strong>
                    <span className="text-slate-600 leading-relaxed">
                      Mallapur Main Road, Opp. to Shiva Hotel, Mallapur, Nacharam, Hyderabad &ndash; 500076, Telangana, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 font-bold mb-0.5">Email Support:</strong>
                    <a href="mailto:Mnkumar@akshainfotech.com" className="text-brand-blue hover:underline font-semibold">
                      Mnkumar@akshainfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 font-bold mb-0.5">Operating Hours:</strong>
                    <span className="text-slate-600">Monday &ndash; Saturday: 9:30 AM &ndash; 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm overflow-hidden space-y-2">
              <div className="flex items-center gap-2 px-2 text-xs font-bold text-slate-800">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Location: Nacharam / Mallapur, Hyderabad</span>
              </div>
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="AKSHA Infotech Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Mallapur+Main+Road+Nacharam+Hyderabad+500076&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>

          {/* Application & Contact Form Column (7 cols) */}
          <div id="apply-form" className="lg:col-span-7 scroll-mt-24">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-brand-blue text-xs font-bold border border-sky-100 mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Direct Job Application &amp; Inquiry Form</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Apply for Job &amp; Send Resume</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submit your basic details and resume below. Your application goes directly to our placement WhatsApp desk (<strong className="text-emerald-600">+91 9701310634</strong>) and email (<span className="font-semibold text-brand-blue">Mnkumar@akshainfotech.com</span>).
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Application Ready &amp; Forwarded!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your details have been submitted to <strong className="text-brand-navy">Mnkumar@akshainfotech.com</strong> and prepared for WhatsApp. Please click below if WhatsApp did not open automatically to send your resume file.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open in WhatsApp &amp; Attach Resume</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-xl transition-colors"
                    >
                      Submit Another Application
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
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. 9701310634"
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
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Job Sector <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.jobCategory}
                        onChange={(e) => setFormData({ ...formData, jobCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white cursor-pointer"
                      >
                        <option value="IT & Software Jobs">IT &amp; Software Jobs</option>
                        <option value="BPO Jobs">BPO Jobs (Voice / Non-Voice)</option>
                        <option value="KPO Jobs">KPO Jobs (Research &amp; Analytics)</option>
                        <option value="Healthcare Jobs">Healthcare Jobs (Medical Coding)</option>
                        <option value="Finance Jobs">Finance &amp; Accounting Jobs</option>
                        <option value="Non-IT Jobs">Non-IT, HR &amp; Operations Jobs</option>
                        <option value="Any Suitable Role">General / Any Suitable Role</option>
                      </select>
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
                        placeholder="e.g. B.Tech, MBA, B.Com, Any Graduate"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Experience
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white cursor-pointer"
                        >
                          <option value="Fresher / 0 Years">Fresher (0 Yrs)</option>
                          <option value="1–2 Years">1–2 Years</option>
                          <option value="3–5 Years">3–5 Years</option>
                          <option value="5+ Years">5+ Years</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred City
                        </label>
                        <select
                          value={formData.preferredLocation}
                          onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 bg-white cursor-pointer"
                        >
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Work From Home / Remote">Remote / WFH</option>
                          <option value="Pan-India">Pan-India</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Upload Resume (PDF, DOC, DOCX)
                    </label>
                    <div className="relative border-2 border-dashed border-slate-300 hover:border-brand-blue rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50/70">
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
                        <Upload className="w-5 h-5 text-brand-blue" />
                        {resumeFile ? (
                          <span className="text-xs font-bold text-emerald-600 truncate max-w-xs">
                            Selected: {resumeFile.name} (attach in WhatsApp chat after submit)
                          </span>
                        ) : (
                          <>
                            <span className="text-xs font-semibold text-slate-700">Click or drag &amp; drop your resume</span>
                            <span className="text-[11px] text-slate-400">PDF, DOC, DOCX supported</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Key Skills / Additional Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your key skills, preferred role, notice period, or questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Apply &amp; Send to WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

