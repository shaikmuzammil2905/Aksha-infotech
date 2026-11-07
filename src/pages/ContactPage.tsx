import React, { useState } from 'react';
import { 
  Building2, MapPin, Phone, Mail, MessageCircle, Send, 
  CheckCircle2, AlertCircle, Loader2, Clock, Globe 
} from 'lucide-react';
import { sendContactMessage } from '../services/emailService';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.fullName.trim() || !formData.mobile.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Please provide a message of at least 10 characters.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await sendContactMessage({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      setErrorMessage('Failed to send message. Please try again or reach out directly by phone.');
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

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send Us an Inquiry</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below. Messages are routed directly to <span className="font-semibold text-brand-blue">Mnkumar@akshainfotech.com</span>.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Thank you!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your message has been submitted successfully to <strong className="text-brand-navy">Mnkumar@akshainfotech.com</strong>. Our placement coordinator will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold rounded-xl shadow transition-colors"
                  >
                    Send Another Message
                  </button>
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
                        Mobile Number <span className="text-red-500">*</span>
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
                        Subject / Inquiry Type
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Job Placement / Corporate Hiring"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Requirement Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details about your qualification, job interest, or hiring requirement..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
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
