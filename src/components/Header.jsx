import React, { useState } from 'react';

export default function Header({ onOpenQuote, activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchor) => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <div className="logo-group" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
          <span className="logo-title">АЛЕКСПРОМ</span>
          <span className="logo-subtitle">профессиональный холод</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Основное меню">
          <button type="button" className="nav-link" onClick={() => handleNavClick('catalog')}>Каталог</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('performance')}>Технологии</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('benefits')}>Преимущества</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('steps')}>Этапы</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('faq')}>Доставка и FAQ</button>
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
            <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('catalog')}>Каталог оборудования</button>
            <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('performance')}>Шоковая заморозка (ТТХ)</button>
            <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('benefits')}>Экономика и надежность</button>
            <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('steps')}>Порядок заказа</button>
            <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('faq')}>Вопросы и гарантия</button>
            <button type="button" className="mobile-nav-link" onClick={() => handleNavClick('lead-form')}>Контакты</button>
            
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
