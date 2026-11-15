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
import QuickContactWidget from './components/QuickContactWidget';
import Footer from './components/Footer';
import { products } from './data/products';
import './styles/tokens.css';
import './styles/alexprom.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'product'
  const [selectedProductId, setSelectedProductId] = useState('blast-freezer-12');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  // Dynamic SEO Title & Meta Management
  useEffect(() => {
    if (currentPage === 'product') {
      document.title = `${selectedProduct.name} — цена ${selectedProduct.priceRub ? selectedProduct.priceRub.toLocaleString('ru-RU') + ' ₽' : ''} | Алекспром СПб`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `${selectedProduct.name} для профессиональных кухонь: ${selectedProduct.dimensions}, ${selectedProduct.tempRange}. Официальная гарантия 1 год, склад в Санкт-Петербурге.`);
      }
    } else {
      document.title = 'Алекспром — Профессиональное холодильное оборудование | Санкт-Петербург';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Официальный каталог профессионального холодильного оборудования «Алекспром»: шкафы шоковой заморозки, салат-бары, витрины. Склад и демо-зал в Санкт-Петербурге.');
      }
    }
  }, [currentPage, selectedProduct]);

  // Sync state with URL Hash for history/back button & shareable links
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        const exists = products.some(p => p.id === prodId);
        if (exists) {
          setSelectedProductId(prodId);
          setCurrentPage('product');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash && hash !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Toast notification helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
    setCurrentPage('product');
    window.location.hash = `product/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = (target = 'top') => {
    setCurrentPage('home');
    if (target === 'catalog') {
      window.location.hash = 'catalog';
      setTimeout(() => {
        const el = document.getElementById('catalog');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = '';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (title = '') => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleNavigate = (page, anchor) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (anchor) {
        window.location.hash = anchor;
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', window.location.pathname);
        } else {
          window.location.hash = '';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

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
              onToast={showToast}
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
            onToast={showToast}
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

      {/* Floating Quick Contact Widget (WhatsApp / Telegram / Call) */}
      <QuickContactWidget onOpenQuote={handleOpenQuote} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span className="toast-icon">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
