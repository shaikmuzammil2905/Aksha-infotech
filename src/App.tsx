import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { ApplyModal } from './components/modals/ApplyModal';
import { PostJobModal } from './components/modals/PostJobModal';
import { AuthModal } from './components/modals/AuthModal';
import { PolicyModal, PolicyType } from './components/modals/PolicyModal';
import { FloatingContactPopup } from './components/common/FloatingContactPopup';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { HiringPage } from './pages/HiringPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { ContactPage } from './pages/ContactPage';
import { CollaboratePage } from './pages/CollaboratePage';
import { AlertsPage } from './pages/AlertsPage';
import { LoginPage } from './pages/LoginPage';
import { MorePage } from './pages/MorePage';
import { Job } from './types/job';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const App: React.FC = () => {
  // Modal states
  const [selectedJobForApply, setSelectedJobForApply] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; tab: 'login' | 'register' }>({
    isOpen: false,
    tab: 'login'
  });
  const [policyModalState, setPolicyModalState] = useState<{ isOpen: boolean; type: PolicyType }>({
    isOpen: false,
    type: 'privacy'
  });

  const handleOpenApply = (job: Job) => {
    setSelectedJobForApply(job);
    setIsApplyModalOpen(true);
  };

  const handleOpenAuth = (tab: 'login' | 'register' = 'login') => {
    setAuthModalState({ isOpen: true, tab });
  };

  const handleOpenPolicy = (type: PolicyType) => {
    setPolicyModalState({ isOpen: true, type });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased selection:bg-brand-red selection:text-white pb-14 md:pb-0">
      <ScrollToTop />

      {/* Main Header */}
      <Navbar
        onOpenPostJob={() => setIsPostJobModalOpen(true)}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Router Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenApply={handleOpenApply} onOpenAuth={handleOpenAuth} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onOpenPostJob={() => setIsPostJobModalOpen(true)} />} />
          
          {/* Individual Category Routes */}
          <Route path="/services/kpo-jobs" element={<CategoryDetailPage onOpenApply={handleOpenApply} categorySlug="kpo-jobs" />} />
          <Route path="/services/bpo-jobs" element={<CategoryDetailPage onOpenApply={handleOpenApply} categorySlug="bpo-jobs" />} />
          <Route path="/services/healthcare-jobs" element={<CategoryDetailPage onOpenApply={handleOpenApply} categorySlug="healthcare-jobs" />} />
          <Route path="/services/finance-jobs" element={<CategoryDetailPage onOpenApply={handleOpenApply} categorySlug="finance-jobs" />} />
          <Route path="/services/non-it-jobs" element={<CategoryDetailPage onOpenApply={handleOpenApply} categorySlug="non-it-jobs" />} />
          <Route path="/services/it-software-jobs" element={<CategoryDetailPage onOpenApply={handleOpenApply} categorySlug="it-software-jobs" />} />
          <Route path="/services/:slug" element={<CategoryDetailPage onOpenApply={handleOpenApply} />} />

          {/* Hiring & Job Detail */}
          <Route path="/hiring" element={<HiringPage onOpenApply={handleOpenApply} />} />
          <Route path="/jobs/:jobId" element={<JobDetailPage onOpenApply={handleOpenApply} />} />

          {/* Dedicated Alerts, Login, and More Pages */}
          <Route path="/alerts" element={<AlertsPage onOpenApply={handleOpenApply} />} />
          <Route path="/notifications" element={<AlertsPage onOpenApply={handleOpenApply} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/more" element={<MorePage onOpenPostJob={() => setIsPostJobModalOpen(true)} onOpenPolicy={handleOpenPolicy} />} />

          {/* Collaborate With Us Route */}
          <Route path="/collaborate" element={<CollaboratePage />} />
          <Route path="/collaborate-with-us" element={<CollaboratePage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback */}
          <Route path="*" element={<HiringPage onOpenApply={handleOpenApply} />} />
        </Routes>
      </main>

      {/* Main Footer */}
      <Footer onOpenPolicy={handleOpenPolicy} />

      {/* Mobile Bottom Navigation Bar (Matches image copy.png) */}
      <MobileBottomBar />

      {/* Floating Action Quick Contact Popup */}
      <FloatingContactPopup />

      {/* Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={selectedJobForApply}
      />

      <PostJobModal
        isOpen={isPostJobModalOpen}
        onClose={() => setIsPostJobModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        defaultTab={authModalState.tab}
        onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
      />

      <PolicyModal
        isOpen={policyModalState.isOpen}
        type={policyModalState.type}
        onClose={() => setPolicyModalState({ ...policyModalState, isOpen: false })}
      />
    </div>
  );
};
export default App;

