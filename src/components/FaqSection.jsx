import React, { useState } from 'react';
import { faqItems } from '../data/products';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-grid">
        {/* Left Side: Rating & Title */}
        <div className="faq-left">
          <span className="section-eyebrow font-mono">ПРОЗРАЧНЫЙ РАСЧЁТ</span>
          <h2 className="section-title">Цена понятна.<br />Условия — тоже.</h2>

          <div className="rating-card">
            <div className="rating-top">
              <span className="rating-num font-mono">5,0</span>
              <div className="rating-stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="star-icon">{star}</span>
                ))}
              </div>
            </div>
            <p className="rating-text">
              Рейтинг продавца на Авито на основе более 140 подтверждённых отзывов рестораторов и производств.
            </p>
            <a 
              href="https://www.avito.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rating-link font-mono"
            >
              <span>Профиль на Авито</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-right">
          <div className="accordion-list">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="accordion-trigger"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="accordion-question">{item.question}</span>
                    <span className="accordion-icon font-mono">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${idx}`} className="accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
