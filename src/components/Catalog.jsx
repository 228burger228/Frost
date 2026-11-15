import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

export default function Catalog({ onSelectProduct, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const filteredProducts = useMemo(() => {
    let list = activeCategory === 'all' 
      ? [...products] 
      : products.filter(p => p.category === activeCategory);

    if (sortOrder === 'price-asc') {
      list.sort((a, b) => (a.priceRub || 0) - (b.priceRub || 0));
    } else if (sortOrder === 'price-desc') {
      list.sort((a, b) => (b.priceRub || 0) - (a.priceRub || 0));
    }

    return list;
  }, [activeCategory, sortOrder]);

  return (
    <section id="catalog" className="catalog-section">
      <div className="container">
        {/* Header of catalog */}
        <div className="catalog-header">
          <div className="catalog-header-left">
            <span className="section-eyebrow font-mono">КАТАЛОГ ОБОРУДОВАНИЯ</span>
            <h2 className="section-title">Платите за нужную производительность</h2>
          </div>

          <div className="catalog-header-right">
            <p>Оборудование в наличии на складе в Санкт-Петербурге. Доставка по всей России.</p>
          </div>
        </div>

        {/* Controls: Tabs & Sort */}
        <div className="catalog-controls">
          <div className="category-tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tab-count font-mono">({cat.count})</span>
              </button>
            ))}
          </div>

          <div className="catalog-sort">
            <label htmlFor="sort-select" className="sort-label">Сортировка:</label>
            <select
              id="sort-select"
              className="sort-select font-mono"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">По умолчанию</option>
              <option value="price-asc">По возрастанию цены</option>
              <option value="price-desc">По убыванию цены</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="catalog-bottom-banner">
          <div className="banner-text">
            <strong>Не нашли нужные параметры?</strong>
            <span> Подберём или изготовим по вашим технологическим размерам.</span>
          </div>
          <button
            type="button"
            className="btn btn-secondary banner-cta"
            onClick={() => onOpenQuote('Индивидуальный подбор оборудования')}
          >
            <span>Запросить подбор</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
