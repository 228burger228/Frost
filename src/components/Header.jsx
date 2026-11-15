import React, { useState, useEffect } from 'react';

export default function Header({ onOpenQuote, activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 1. Calculate overall scroll progress (0-100%)
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));

          // 2. ScrollSpy (only active on 'home' page)
          if (activePage !== 'home') {
            setActiveSection('');
            ticking = false;
            return;
          }

          if (scrollY < 200) {
            setActiveSection('');
            ticking = false;
            return;
          }

          const sections = ['catalog', 'performance', 'benefits', 'steps', 'faq'];
          const scrollPosition = scrollY + 180;

          let current = '';
          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                current = sectionId;
                break;
              }
            }
          }

          // Bottom of page threshold
          if (!current && window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
            current = 'faq';
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const handleNavClick = (anchor) => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      onNavigate('home', anchor);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      {/* Scroll Progress Bar at Header Bottom Edge */}
      <div 
        className="header-progress-track"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Прогресс прокрутки страницы"
      >
        <div 
          className="header-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container header-inner">
        {/* Logo */}
        <div 
          className="logo-group" 
          onClick={() => onNavigate('home')} 
          role="button" 
          tabIndex={0}
          aria-label="Перейти на главную страницу Алекспром"
        >
          <span className="logo-title">АЛЕКСПРОМ</span>
          <span className="logo-subtitle">профессиональный холод</span>
        </div>

        {/* Desktop Nav with ScrollSpy indicators */}
        <nav className="desktop-nav" aria-label="Основное меню">
          {activePage === 'product' ? (
            <div className="header-breadcrumbs-nav">
              <button 
                type="button" 
                className="nav-link header-back-link" 
                onClick={() => onNavigate('home', 'catalog')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>В каталог</span>
              </button>
              <span className="header-pdp-hint font-mono">Карточка оборудования</span>
            </div>
          ) : (
            <>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'catalog' ? 'active' : ''}`} 
                onClick={() => handleNavClick('catalog')}
              >
                Каталог
              </button>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'performance' ? 'active' : ''}`} 
                onClick={() => handleNavClick('performance')}
              >
                Технологии
              </button>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'benefits' ? 'active' : ''}`} 
                onClick={() => handleNavClick('benefits')}
              >
                Преимущества
              </button>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'steps' ? 'active' : ''}`} 
                onClick={() => handleNavClick('steps')}
              >
                Этапы
              </button>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`} 
                onClick={() => handleNavClick('faq')}
              >
                Доставка и FAQ
              </button>
            </>
          )}
        </nav>

        {/* Right Contacts & CTA */}
        <div className="header-right">
          <div className="location-box">
            <span className="location-city">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Санкт-Петербург
            </span>
            <span className="location-hours font-mono">10:00–20:00</span>
          </div>

          <button 
            type="button" 
            className="btn btn-primary btn-header"
            onClick={() => onOpenQuote('Запрос подбора оборудования')}
          >
            <span>Подобрать</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            type="button" 
            className="mobile-burger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Переключить меню"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`burger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <button 
              type="button" 
              className={`mobile-nav-link ${activeSection === 'catalog' ? 'active' : ''}`} 
              onClick={() => handleNavClick('catalog')}
            >
              Каталог оборудования
            </button>
            <button 
              type="button" 
              className={`mobile-nav-link ${activeSection === 'performance' ? 'active' : ''}`} 
              onClick={() => handleNavClick('performance')}
            >
              Шоковая заморозка (ТТХ)
            </button>
            <button 
              type="button" 
              className={`mobile-nav-link ${activeSection === 'benefits' ? 'active' : ''}`} 
              onClick={() => handleNavClick('benefits')}
            >
              Экономика и надежность
            </button>
            <button 
              type="button" 
              className={`mobile-nav-link ${activeSection === 'steps' ? 'active' : ''}`} 
              onClick={() => handleNavClick('steps')}
            >
              Порядок заказа
            </button>
            <button 
              type="button" 
              className={`mobile-nav-link ${activeSection === 'faq' ? 'active' : ''}`} 
              onClick={() => handleNavClick('faq')}
            >
              Вопросы и гарантия
            </button>
            <button 
              type="button" 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('lead-form')}
            >
              Контакты
            </button>
            
            <div className="mobile-drawer-footer">
              <p className="font-mono">Склад и демо-зал: г. Санкт-Петербург</p>
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '16px' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote('Консультация инженера');
                }}
              >
                Получить расчёт стоимости
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
