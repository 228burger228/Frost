import React from 'react';

export default function Footer({ onNavigate, onOpenQuote }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Col */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="logo-title">АЛЕКСПРОМ</span>
            <span className="logo-subtitle">Холод для ежедневной работы</span>
          </div>
          <p className="footer-brand-desc">
            Поставка промышленного и коммерческого холодильного оборудования для предприятий общепита, производств и гастрономии.
          </p>
        </div>

        {/* Links Col 1 */}
        <div className="footer-links-col">
          <h4 className="footer-col-title font-mono">Оборудование</h4>
          <ul className="footer-links-list">
            <li><button type="button" onClick={() => onNavigate('home', 'catalog')}>Шоковая заморозка</button></li>
            <li><button type="button" onClick={() => onNavigate('home', 'catalog')}>Салат-бары и витрины</button></li>
            <li><button type="button" onClick={() => onNavigate('home', 'catalog')}>Охлаждаемые ванны</button></li>
            <li><button type="button" onClick={() => onOpenQuote('Заказ нестандартных размеров')}>Нестандартные размеры</button></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="footer-links-col">
          <h4 className="footer-col-title font-mono">Покупателям</h4>
          <ul className="footer-links-list">
            <li><button type="button" onClick={() => onNavigate('home', 'faq')}>Доставка по всей России</button></li>
            <li><button type="button" onClick={() => onNavigate('home', 'benefits')}>Гарантия и сервис</button></li>
            <li><button type="button" onClick={() => onNavigate('home', 'faq')}>Вопросы и ответы</button></li>
            <li><button type="button" onClick={() => onNavigate('home', 'steps')}>Порядок оформления</button></li>
          </ul>
        </div>

        {/* Links Col 3: Contacts */}
        <div className="footer-links-col">
          <h4 className="footer-col-title font-mono">На связи каждый день</h4>
          <div className="footer-contacts">
            <p className="contact-time font-mono">10:00–20:00</p>
            <a 
              href="https://www.avito.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-avito-link"
            >
              <span>Написать на Авито</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <p className="contact-city">Склад и демо-зал: Санкт-Петербург</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="copy-text font-mono">© Алекспром 2026</span>
        <span className="copy-center font-mono">Технический класс: шкафы 2017+</span>
        <button type="button" className="privacy-btn font-mono" onClick={() => alert('Политика конфиденциальности: персональные данные используются исключительно для расчета стоимости и связи менеджера по заявке.')}>
          Политика конфиденциальности
        </button>
      </div>
    </footer>
  );
}
