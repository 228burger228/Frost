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
            <a href="tel:+78123857460" className="footer-phone font-mono">+7 (812) 385-74-60</a>
            <p className="contact-time font-mono">Ежедневно 10:00–20:00</p>
            
            <div className="footer-messengers-row">
              <a 
                href="https://wa.me/79219001234?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%BF%D1%80%D0%BE%D0%BC" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-messenger-badge font-mono"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/alexprom_cold" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-messenger-badge font-mono"
              >
                Telegram
              </a>
              <a 
                href="https://www.avito.ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-messenger-badge font-mono"
              >
                Авито
              </a>
            </div>

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
