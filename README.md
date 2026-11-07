# AKSHA Infotech Pvt Ltd — Recruitment & Job Placement Platform

Official modern, responsive web application for **AKSHA Infotech Pvt Ltd** — A premier software, BPO, and recruitment-oriented organization operating since 2022.

---

## 🌟 Key Highlights & Design Implementation

- **Desktop & Mobile UI Fidelity**: Faithful reproduction of the desktop UI reference (`image.png`) and dedicated mobile UI layout (`image copy.png`).
- **Animated Hero Sections**:
  - **Desktop View**: Animated background utilizing `hero-desktop-bg.png` (`image copy 2.png`) with ambient light glow and dynamic floating badge overlays.
  - **Mobile View**: Animated background utilizing `hero-mobile-bg.png` (`image copy 3.png`) with high-contrast text readability.
- **Interactive Multi-Route Architecture**:
  - `/` — Homepage with search, 6 category cards, statistics counters, middle cards, services, featured jobs, and call-to-actions.
  - `/about` — Company history (founded 2022), Vision, Mission, Core Values (8 principles), and Timeline.
  - `/services` — Comprehensive recruitment services (Job Placement Support, Resume Building, Career Counselling, Skill Development, Interview Preparation, Employer Recruitment Support).
  - `/services/kpo-jobs` — Dedicated KPO jobs page with sector overview, market packages, typical roles, and active listings.
  - `/services/bpo-jobs` — Dedicated BPO jobs page with typical roles, benefits (cabs, night allowances), and active openings.
  - `/services/healthcare-jobs` — Dedicated Healthcare jobs page (Medical Coding, Clinical Data Management, RCM).
  - `/services/finance-jobs` — Dedicated Finance & US Taxation jobs page (General Ledger, US Tax 1040/1120, GST/Audit).
  - `/services/non-it-jobs` — Dedicated Non-IT jobs page (HR, Operations, Logistics, Administration).
  - `/services/it-software-jobs` — Dedicated IT & Software jobs page (Full Stack, React, Cloud, DevOps).
  - `/hiring` — Advanced job discovery portal with search, multi-faceted filtering (category, location, experience, type), sorting, reset, and live count.
  - `/jobs/:jobId` — In-depth job opening details with responsibilities, candidate eligibility, skills tags, benefits, recruiter contact, and 1-click Apply.
  - `/contact` — Contact page with working Phone dialer (`tel:+919701310634`), WhatsApp live chat (`+91 9701310634`), Email (`Mnkumar@akshainfotech.com`), interactive Google Maps, and validated contact form.
- **Functional Modals & Workflows**:
  - **Job Application Modal**: Automatically pre-fills selected job, captures candidate info, resume file, and sends submission to `Mnkumar@akshainfotech.com`.
  - **Post a Job / Employer Modal**: Collects hiring requirements and forwards them to `Mnkumar@akshainfotech.com`.
  - **Candidate / Employer Auth Portal**: Login and registration flows.
  - **Policies**: Privacy Policy, Terms & Conditions, Cookie Policy modals.
- **Mobile Bottom Navigation Bar**: Floating bottom navigation bar matching mobile reference (`Home`, `Jobs`, `Alerts` with badge, `Login`, `More`).
- **Statistics Counter**: Animated number counters for verified milestones:
  - **2000+** Candidates Placed
  - **20+** Clients
  - **5000+** Website Visitors
  - **Since 2022**

---

## 🏢 Company Profile

- **Business Name**: AKSHA Infotech Pvt Ltd
- **Established**: 2022
- **Address**: Mallapur Main Road, Opp. to Shiva Hotel, Mallapur, Nacharam, Hyderabad – 500076, Telangana, India
- **Phone**: +91 9701310634
- **Email**: Mnkumar@akshainfotech.com

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm / pnpm / yarn

### Installation

```bash
# Clone repository
git clone https://github.com/shaikmuzammil2905/Aksha-infotech.git
cd Aksha-infotech

# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build
```

---

## 🛠️ Technology Stack

- **React 18** with **TypeScript**
- **Vite 5** for blazing fast bundling
- **Tailwind CSS 3** with custom brand color palettes and animations
- **React Router DOM 6** for routing
- **Lucide React** for icons
