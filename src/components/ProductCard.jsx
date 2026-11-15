import React, { useState } from 'react';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, onSelectProduct, onOpenQuote, onToast }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const nextState = !isFavorite;
    setIsFavorite(nextState);
    if (onToast) {
      onToast(nextState ? `«${product.name}» добавлен в избранное` : `«${product.name}» удалён из избранного`);
    }
  };

  return (
    <article className="product-card">
      {/* Media Header */}
      <div 
        className="product-card-media"
        onClick={() => onSelectProduct(product.id)}
        role="button"
        tabIndex={0}
        aria-label={`Открыть характеристики товара ${product.name}`}
      >
        {product.badge && (
          <span className="product-card-badge font-mono">{product.badge}</span>
        )}

        <button
          type="button"
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          aria-pressed={isFavorite}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? '#24362D' : 'none'} stroke="#24362D" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-img"
          width="340"
          height="240"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Info Body */}
      <div className="product-card-body">
        <h3 
          className="product-card-title"
          onClick={() => onSelectProduct(product.id)}
          role="button"
          tabIndex={0}
        >
          {product.name}
        </h3>

        <div className="product-card-specs font-mono">
          <p>{product.dimensions}</p>
          <p>{product.power || product.capacity || product.levels}</p>
        </div>

        <div className="product-card-footer">
          <div className="product-card-price font-mono">
            {formatPrice(product.priceRub)}
          </div>

          <button
            type="button"
            className="btn btn-card-action"
            onClick={() => onOpenQuote(`Заявка на ${product.name}`)}
          >
            <span>Рассчитать с доставкой</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
