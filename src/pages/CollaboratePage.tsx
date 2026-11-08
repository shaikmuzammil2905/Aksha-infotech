import React, { useState } from 'react';
import { 
  Building2, Users, CheckCircle2, Clock, ShieldCheck, 
  Send, PhoneCall, MessageCircle, Mail, MapPin, Sparkles, 
  ArrowRight, Briefcase, Award, TrendingUp, Layers, Check
} from 'lucide-react';
import { sendCorporateRequirement, CorporateRequirement } from '../services/emailService';

export const CollaboratePage: React.FC = () => {
  const [formData, setFormData] = useState<CorporateRequirement>({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    domain: 'IT & Software',
    rolesNeeded: '',
    headcount: '5-20',
    experienceLevel: '1-3 Years',
    workModel: 'Onsite Hyderabad',
    timeline: 'Immediate / Urgent',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState<CorporateRequirement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Please fill in the required company contact details.');
      return;
    }

    setLoading(true);
    try {
      await sendCorporateRequirement(formData);
      setSubmittedDetails({ ...formData });
      setSubmitted(true);
      setFormData({
        companyName: '',
        contactPerson: '',
        designation: '',
        email: '',
        phone: '',
        domain: 'IT & Software',
        rolesNeeded: '',
        headcount: '5-20',
        experienceLevel: '1-3 Years',
        workModel: 'Onsite Hyderabad',
        timeline: 'Immediate / Urgent',
        description: ''
      });
    } catch {
      alert('Failed to submit requirement. Please try again or reach us directly at +91 9701310634.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('client-requirement-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-r from-[#06142e] via-[#092247] to-[#0c3166] text-white py-12 lg:py-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                <span className="font-semibold tracking-wide uppercase">Corporate Recruitment &amp; Staffing Partnership</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Collaborate With <span className="text-brand-red">AKSHA Infotech</span> <br />
                Hire Pre-Screened Talent On Demand
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                We empower enterprise clients, mid-market companies, and emerging startups with custom talent acquisition. Tell us your headcount requirements and skill parameters — we deliver thoroughly vetted, interview-ready candidates with high retention.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="px-6 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all duration-150 flex items-center gap-2 active:scale-95"
                >
                  <span>Submit Hiring Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919701310634"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call Hotline: +91 9701310634</span>
                </a>
              </div>
            </div>

            {/* SLA Guarantee Box */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Our Client Commitments</span>
              </h3>
              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>24 to 48 Hours</strong> average profile turnaround for immediate requirements.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Pre-screened &amp; Verified</strong> candidate profiles matching your exact JD.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Dedicated Account Manager</strong> assigned to manage interview logistics.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Replacement Assurance</strong> for early candidate dropouts within policy.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== METRICS BANNER ===================== */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-brand-blue">2000+</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Successful Placements</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-brand-red">20+</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Enterprise Corporate Clients</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">98%</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">90-Day Candidate Retention</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">2022</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Operating Excellence in Hyderabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ENGAGEMENT MODELS ===================== */}
      <section className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Flexible Hiring Models</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Tailored Collaboration Based On Your Need
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Every business has unique scaling timelines. Choose an engagement model that matches your current growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Model 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">High-Volume BPO &amp; KPO Staffing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ideal for domestic and international contact centers requiring 20 to 100+ agents monthly. We handle voice assessments, accent neutralisation screenings, and typing tests.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-brand-blue">
              Turnaround: 24 to 48 Hours
            </div>
          </div>

          {/* Model 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-brand-red flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">IT &amp; Lateral Tech Recruitment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Targeted headhunting for full-stack developers, cloud DevOps engineers, QA automation specialists, data analysts, and solution architects with niche technical stacks.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-brand-red">
              Precision Skill Matching
            </div>
          </div>

          {/* Model 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Healthcare &amp; Finance Verticals</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated sourcing of certified Medical Coders (CPC/CIC), US Healthcare revenue cycle professionals, Chartered Accountants, Tax analysts, and audit associates.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-600">
              Domain Certified Talent
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLIENT REQUIREMENT FORM SECTION ===================== */}
      <section id="client-requirement-form" className="py-8 lg:py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-brand-blue text-xs font-bold border border-sky-100">
                <Building2 className="w-3.5 h-3.5" />
                <span>Client Requirement Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                Submit Your Hiring Requirement
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Share your open roles, headcount, and criteria. Our talent acquisition directors will review your requirement and connect within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Company & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Infotech Solutions Pvt Ltd"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Person Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Designation, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Designation
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. HR Manager / Director"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. hr@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / Mobile Number <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Domain & Headcount */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Domain / Sector
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-brand-blue focus:outline-none font-medium cursor-pointer"
                  >
                    <option value="IT & Software">IT &amp; Software Development</option>
                    <option value="BPO Customer Care">BPO (Voice &amp; Non-Voice)</option>
                    <option value="KPO & Analytics">KPO &amp; Research Analytics</option>
                    <option value="Healthcare & Medical Coding">Healthcare &amp; Medical Coding</option>
                    <option value="Finance & Accounting">Finance &amp; Corporate Accounting</option>
                    <option value="Non-IT & Operations">Non-IT, Operations &amp; HR</option>
                    <option value="Multiple Verticals">Multiple Cross-Domain Roles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Open Headcount Needed
                  </label>
                  <select
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-brand-blue focus:outline-none font-medium cursor-pointer"
                  >
                    <option value="1-5 Positions">1 to 5 Positions</option>
                    <option value="5-20 Positions">5 to 20 Positions</option>
                    <option value="20-50 Positions">20 to 50 Positions (Bulk)</option>
                    <option value="50+ Positions">50+ Positions (Mass Drive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Experience Range
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-brand-blue focus:outline-none font-medium cursor-pointer"
                  >
                    <option value="Freshers / Entry Level">Freshers / Entry Level (0-1 Yr)</option>
                    <option value="1-3 Years">1 to 3 Years</option>
                    <option value="3-5 Years">3 to 5 Years</option>
                    <option value="5+ Years Senior / Lead">5+ Years Senior / Lead</option>
                    <option value="Mixed Hierarchy">Mixed Hierarchy</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Roles needed & Work model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Job Title / Roles Required <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.rolesNeeded}
                    onChange={(e) => setFormData({ ...formData, rolesNeeded: e.target.value })}
                    placeholder="e.g. React Developer, 15 Customer Support Associates, CPC Coders"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Model
                    </label>
                    <select
                      value={formData.workModel}
                      onChange={(e) => setFormData({ ...formData, workModel: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-brand-blue focus:outline-none font-medium cursor-pointer"
                    >
                      <option value="Onsite Hyderabad">Onsite Hyderabad</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote / Pan-India">Remote / Pan-India</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:border-brand-blue focus:outline-none font-medium cursor-pointer"
                    >
                      <option value="Immediate / Urgent">Immediate / Urgent</option>
                      <option value="Within 15 Days">Within 15 Days</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Quarterly Pipeline">Quarterly Pipeline</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description / Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Requirements / Job Description Summary
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Mention salary budget, shift timings, mandatory technical skills, languages required, or candidate criteria..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-brand-blue focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Confidentiality guaranteed. Details shared strictly with recruitment leads.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-brand-blue hover:bg-brand-navy text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Requirement...' : 'Submit Corporate Requirement'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===================== CORPORATE CONTACT DESK ===================== */}
      <section className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need To Discuss An Urgent Hiring Pipeline?
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 max-w-xl">
              Connect directly with our corporate recruitment desk. We are available for immediate coordination and in-person discussions at our Hyderabad office.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919701310634"
              className="px-5 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call: +91 9701310634</span>
            </a>
            <a
              href="https://wa.me/919701310634?text=Hello%20AKSHA%20Infotech,%20We%20are%20looking%20to%20collaborate%20for%20our%20company%20hiring%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SUBMISSION SUCCESS MODAL ===================== */}
      {submitted && submittedDetails && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 text-center animate-scale-in space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Requirement Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Thank you, <strong>{submittedDetails.contactPerson}</strong>. Your corporate requirement for <strong>{submittedDetails.companyName}</strong> has been logged into our enterprise talent management system.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs space-y-1.5 border border-slate-200/80">
              <div className="flex justify-between">
                <span className="text-slate-500">Domain:</span>
                <span className="font-bold text-slate-800">{submittedDetails.domain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Roles Needed:</span>
                <span className="font-bold text-slate-800">{submittedDetails.rolesNeeded}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Headcount:</span>
                <span className="font-bold text-brand-blue">{submittedDetails.headcount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Account Lead:</span>
                <span className="font-bold text-slate-800">Mnkumar@akshainfotech.com</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Our Head of Corporate Partnerships will call you at <strong>{submittedDetails.phone}</strong> shortly to begin candidate profile deliveries.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full py-3 bg-brand-blue hover:bg-brand-navy text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow"
            >
              Done &amp; Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

