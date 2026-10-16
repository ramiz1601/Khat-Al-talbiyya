import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BusinessSolutionsPage } from './pages/BusinessSolutionsPage';
import { FleetPage } from './pages/FleetPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    // Exact or prefix matches
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      return <ServiceDetailPage slug={slug} />;
    }

    if (currentPath === '/services' || currentPath === '/services/') {
      return <ServicesPage />;
    }

    if (currentPath === '/business-solutions' || currentPath === '/business-solutions/') {
      return <BusinessSolutionsPage />;
    }

    if (currentPath === '/fleet' || currentPath === '/fleet/') {
      return <FleetPage />;
    }

    if (currentPath === '/about' || currentPath === '/about/') {
      return <AboutPage />;
    }

    if (currentPath === '/contact' || currentPath === '/contact/') {
      return <ContactPage />;
    }

    // Default fallback to HomePage if unknown route
    return <HomePage />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink selection:bg-gold selection:text-ink">
      <Navbar />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />
      <InquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
