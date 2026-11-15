import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Catalog from './components/Catalog';
import PerformanceSection from './components/PerformanceSection';
import OwnershipBenefits from './components/OwnershipBenefits';
import OrderSteps from './components/OrderSteps';
import FaqSection from './components/FaqSection';
import LeadForm from './components/LeadForm';
import ProductDetailPage from './components/ProductDetailPage';
import LeadModal from './components/LeadModal';
import Footer from './components/Footer';
import { products } from './data/products';
import './styles/tokens.css';
import './styles/alexprom.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'product'
  const [selectedProductId, setSelectedProductId] = useState('blast-freezer-12');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
    setCurrentPage('product');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleOpenQuote = (title = '') => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleNavigate = (page, anchor) => {
    setCurrentPage(page);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  return (
    <div className="site-wrapper">
      <Header
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      <main id="main-content">
        {currentPage === 'home' ? (
          <>
            <Hero
              onSelectProduct={handleSelectProduct}
              onOpenQuote={handleOpenQuote}
            />
            <TrustBar />
            <Catalog
              onSelectProduct={handleSelectProduct}
              onOpenQuote={handleOpenQuote}
            />
            <PerformanceSection
              onSelectProduct={handleSelectProduct}
            />
            <OwnershipBenefits />
            <OrderSteps />
            <FaqSection />
            <LeadForm />
          </>
        ) : (
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToHome}
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={modalTitle}
      />
    </div>
  );
}
