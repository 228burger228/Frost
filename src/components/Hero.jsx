import React from 'react';

export default function Hero({ onSelectProduct, onOpenQuote }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Offer */}
        <div className="hero-content">
          <div className="hero-eyebrow font-mono">
            ПРОФЕССИОНАЛЬНЫЙ ХОЛОД · САНКТ-ПЕТЕРБУРГ
          </div>

          <h1 className="hero-title">
            Холод держит.<br />
            Работа идёт.
          </h1>

          <p className="hero-subtitle">
            Шоковая заморозка, охлаждение и хранение для кухонь и производств с непрерывной загрузкой.
          </p>

          <div className="hero-actions">
            <a href="#catalog" className="btn btn-primary">
              <span>Выбрать оборудование</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => onOpenQuote('Подбор под нагрузку кухни')}
            >
              Купить под нагрузку
            </button>
          </div>

          <p className="hero-note">
            Подбор и отгрузка в день оплаты. Склад и демо-зал в СПб.
          </p>
        </div>

        {/* Right Column: Flagship Showcase Card */}
        <div 
          className="hero-showcase-card"
          onClick={() => onSelectProduct('blast-freezer-12')}
          role="button"
          tabIndex={0}
          title="Открыть характеристики модели на 12 уровней"
        >
          <div className="showcase-top">
            <span className="showcase-badge font-mono">−35 °C</span>
          </div>

          <div className="showcase-media">
            <img 
              src="/assets/images/Шкаф на прозрачном фоне.png" 
              alt="Шкаф шоковой заморозки 12 уровней" 
              className="showcase-img"
            />
          </div>

          <div className="showcase-bottom">
            <div className="showcase-metric">
              <span className="metric-val font-mono">24 кг</span>
              <span className="metric-desc">за 75 минут</span>
            </div>

            <div className="showcase-price-box">
              <span className="showcase-price font-mono">465 000 ₽</span>
              <span className="showcase-name">Шкаф шоковой заморозки · 12 уровней</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
