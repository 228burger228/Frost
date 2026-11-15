import React, { useState } from 'react';
import { formatPrice } from '../data/products';

export default function ProductDetailPage({ product, onBack, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('specs'); // specs | delivery
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="product-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs font-mono" aria-label="Хлебные крошки">
          <button type="button" className="breadcrumb-btn" onClick={onBack}>Главная</button>
          <span className="breadcrumb-sep">/</span>
          <button type="button" className="breadcrumb-btn" onClick={onBack}>Каталог</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>
      </div>

      {/* Main PDP Grid */}
      <section className="pdp-main-section">
        <div className="container pdp-grid">
          {/* Gallery Column */}
          <div className="pdp-gallery">
            <div className="pdp-main-image-wrap">
              <span className="pdp-image-badge font-mono">12 УРОВНЕЙ</span>
              <img 
                src={product.detailImage || product.image} 
                alt={product.name} 
                className="pdp-main-img" 
              />
            </div>
            
            <div className="pdp-thumbs-row">
              <div className="pdp-thumb-item active">
                <img src={product.image} alt="Миниатюра 1" />
              </div>
              <span className="thumb-note font-mono">Фото образца в демо-зале СПб</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="pdp-summary">
            <div className="pdp-category-tag font-mono">
              БЫСТРЫЙ ХОЛОД · ШОКОВАЯ ЗАМОРОЗКА
            </div>

            <h1 className="pdp-title">{product.shortName || product.name}</h1>
            <p className="pdp-subtitle font-mono">{product.levels} · гарантия 1 год</p>

            {/* 4 Key Metric Tiles */}
            <div className="pdp-metrics-grid">
              <div className="pdp-metric-tile">
                <span className="tile-val font-mono">−35 °C</span>
                <span className="tile-label">температура в камере</span>
              </div>

              <div className="pdp-metric-tile">
                <span className="tile-val font-mono">24 кг / 75 мин</span>
                <span className="tile-label">аккумуляция +20 → −18 °C</span>
              </div>

              <div className="pdp-metric-tile">
                <span className="tile-val font-mono">{product.dimensions}</span>
                <span className="tile-label">габариты (Ш × Г × В)</span>
              </div>

              <div className="pdp-metric-tile">
                <span className="tile-val font-mono">1 год</span>
                <span className="tile-label">гарантия производителя</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="pdp-price-box">
              <div className="pdp-price font-mono">{formatPrice(product.priceRub)}</div>
              <div className="pdp-price-sub">Комплектация и доставка — в расчёте до заказа</div>
            </div>

            {/* Primary Action Button */}
            <div className="pdp-action-group">
              <button 
                type="button" 
                className="btn btn-primary pdp-btn-order"
                onClick={() => onOpenQuote(`Заявка на ${product.name}`)}
              >
                <span>Рассчитать с доставкой</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <div className="pdp-secondary-actions">
                <button type="button" className="pdp-text-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span>Сравнить</span>
                </button>

                <button 
                  type="button" 
                  className="pdp-text-btn"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>{isFavorite ? 'В избранном' : 'В избранное'}</span>
                </button>
              </div>
            </div>

            {/* Checkpoints */}
            <div className="pdp-checkpoints">
              <div className="chk-item">
                <span className="chk-icon">✓</span>
                <span>Можно посмотреть в Санкт-Петербурге (демо-зал)</span>
              </div>
              <div className="chk-item">
                <span className="chk-icon">✓</span>
                <span>Отправка по всей России в жесткой обрешетке</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section: Specifications & Guarantee */}
      <section className="pdp-specs-section">
        <div className="container">
          <div className="pdp-tabs-nav" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'specs'}
              className={`pdp-tab-trigger ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Характеристики
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'delivery'}
              className={`pdp-tab-trigger ${activeTab === 'delivery' ? 'active' : ''}`}
              onClick={() => setActiveTab('delivery')}
            >
              Доставка и гарантия
            </button>
          </div>

          {activeTab === 'specs' ? (
            <div className="pdp-specs-block">
              <h2 className="specs-section-title">Нагрузка. Размеры. Подключение.</h2>

              <div className="specs-layout">
                {/* Left Table */}
                <div className="specs-table-wrap">
                  <table className="specs-table">
                    <tbody>
                      {product.specs?.map((spec, i) => (
                        <tr key={i}>
                          <td className="spec-label">{spec.label}</td>
                          <td className="spec-val font-mono">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="specs-disclaimer font-mono">
                    Точность данных — по паспорту завода. Гарантия действует с момента отгрузки.
                  </p>
                </div>

                {/* Right Dark Widget */}
                <div className="pdp-dark-widget">
                  <h3 className="widget-title">Планируйте загрузку на смену</h3>

                  <div className="widget-cycle">
                    <span className="cycle-type font-mono">ЗАМОРОЗКА</span>
                    <div className="cycle-temp font-mono">+20 → −18 °C</div>
                    <div className="cycle-time font-mono">24 кг за 75 минут</div>
                  </div>

                  <div className="widget-cycle" style={{ marginTop: '20px' }}>
                    <span className="cycle-type font-mono">ОХЛАЖДЕНИЕ</span>
                    <div className="cycle-temp font-mono">+90 → +3 °C</div>
                    <div className="cycle-time font-mono">55 минут</div>
                  </div>

                  <p className="widget-note">
                    Автоматическая оттайка горячим газом за 10 минут между циклами.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="pdp-specs-block">
              <h2 className="specs-section-title">Условия доставки и сервисный регламент</h2>
              <div className="delivery-info-grid">
                <div className="delivery-card">
                  <h4>Доставка по РФ</h4>
                  <p>Отправляем через проверенные ТК («Деловые Линии», «ПЭК», «Байкал Сервис») с обязательным страхованием и жесткой деревянной обрешеткой.</p>
                </div>
                <div className="delivery-card">
                  <h4>Самовывоз в СПб</h4>
                  <p>Возможен самовывоз со склада: Санкт-Петербург. Поможем с погрузкой на ваш грузовой транспорт.</p>
                </div>
                <div className="delivery-card">
                  <h4>Сервис и запчасти</h4>
                  <p>В наличии компрессоры, вентиляторы, уплотнители и платы управления. Официальный сервисный инженер на связи.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3 Value Cards */}
      <section className="pdp-trust-cards-section">
        <div className="container">
          <h2 className="section-title">Понятная стоимость. Доступный сервис.</h2>

          <div className="pdp-trust-grid">
            <div className="pdp-trust-card">
              <span className="trust-eyebrow font-mono">ДОСТАВКА</span>
              <h3 className="trust-card-title">Доставка с расчётом</h3>
              <p>Уточним стоимость и сроки доставки до вашего объекта. Согласуем отправку до подтверждения заказа.</p>
            </div>

            <div className="pdp-trust-card">
              <span className="trust-eyebrow font-mono">ГАРАНТИЯ</span>
              <h3 className="trust-card-title">Детали в наличии</h3>
              <p>Гарантия производителя — 1 год. Комплектующие для регулярного обслуживания на складе.</p>
            </div>

            <div className="pdp-trust-card">
              <span className="trust-eyebrow font-mono">ОСМОТР</span>
              <h3 className="trust-card-title">Осмотр перед покупкой</h3>
              <p>Посмотрите оборудование в Петербурге. Согласуем время и покажем нужное в реальной работе.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pdp-bottom-cta">
        <div className="container">
          <div className="pdp-cta-card">
            <div className="cta-left">
              <span className="section-eyebrow font-mono">ПОЛНАЯ СТОИМОСТЬ ДО ЗАКАЗА</span>
              <h2 className="cta-title">Рассчитайте полную стоимость до покупки.</h2>
              <p className="cta-sub">Уточним загрузку, проверим подключение и учтём доставку.</p>
            </div>

            <div className="cta-right">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenQuote(`Расчёт полной стоимости: ${product.name}`)}
              >
                <span>Получить расчёт</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <span className="cta-hours font-mono">Ежедневно, 10:00–20:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
