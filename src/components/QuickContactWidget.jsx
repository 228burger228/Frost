import React, { useState, useEffect, useRef } from 'react';

export default function QuickContactWidget({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Close on outside click or ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOpenModal = () => {
    setIsOpen(false);
    if (onOpenQuote) {
      onOpenQuote('Экспресс-консультация по подбору');
    }
  };

  return (
    <div className="quick-contact-container" ref={widgetRef}>
      {/* Expanded Popup Menu */}
      {isOpen && (
        <div 
          className="quick-contact-popup"
          role="dialog"
          aria-label="Каналы связи с инженером"
        >
          <div className="quick-contact-popup-header">
            <div className="popup-header-info">
              <span className="popup-title">Отдел подбора</span>
              <span className="popup-status">
                <span className="status-dot"></span>
                Инженеры онлайн
              </span>
            </div>
            <button 
              type="button" 
              className="popup-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть меню связи"
            >
              ✕
            </button>
          </div>

          <p className="popup-desc">
            Склад и демо-зал в СПб. Отвечаем за 5–10 минут:
          </p>

          <div className="quick-contact-links">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/79219001234?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%BF%D1%80%D0%BE%D0%BC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="quick-link-item quick-link-whatsapp"
            >
              <div className="quick-link-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="quick-link-text">
                <span className="quick-link-label">Написать в WhatsApp</span>
                <span className="quick-link-sub font-mono">Прямой чат с инженером</span>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/alexprom_cold" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="quick-link-item quick-link-telegram"
            >
              <div className="quick-link-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </div>
              <div className="quick-link-text">
                <span className="quick-link-label">Чат в Telegram</span>
                <span className="quick-link-sub font-mono">@alexprom_cold</span>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+78123857460" 
              className="quick-link-item quick-link-phone"
            >
              <div className="quick-link-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="quick-link-text">
                <span className="quick-link-label">+7 (812) 385-74-60</span>
                <span className="quick-link-sub font-mono">Санкт-Петербург · 10:00–20:00</span>
              </div>
            </a>
          </div>

          <div className="quick-contact-action">
            <button 
              type="button" 
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '13px', padding: '10px 14px' }}
              onClick={handleOpenModal}
            >
              Заказать обратный звонок
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button 
        type="button" 
        className={`quick-contact-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть каналы связи и контакты"
        aria-expanded={isOpen}
      >
        <span className="trigger-pulse"></span>
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        <span className="trigger-badge font-mono">Связь</span>
      </button>
    </div>
  );
}
