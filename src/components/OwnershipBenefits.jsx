import React from 'react';

export default function OwnershipBenefits() {
  const cards = [
    {
      num: '01',
      title: 'Меньше потерь',
      desc: 'При обычной медленной заморозке продукт теряет до 8% веса из-за разрушения клеточных стенок и вымораживания влаги. Шоковая сохраняет плотность, сочность и массу сырья.',
      dark: false
    },
    {
      num: '02',
      title: 'Нужный темп',
      desc: 'Пока повара ждут естественного остывания заготовок, смена простаивает. Быстрый цикл охлаждения до +3 °C за 55 минут сразу освобождает мощности горячего цеха.',
      dark: true
    },
    {
      num: '03',
      title: 'Меньше простоев',
      desc: 'Простая модульная замена узлов и агрегаты с запасом мощности. Если потребуется обслуживание — оригинальные датчики, вентиляторы и реле всегда на складе в СПб.',
      dark: false
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <span className="section-eyebrow font-mono">ЭКОНОМИКА ВЛАДЕНИЯ</span>
          <h2 className="section-title">Считайте не только цену покупки</h2>
        </div>

        <div className="benefits-grid">
          {cards.map((card, idx) => (
            <div key={idx} className={`benefit-card ${card.dark ? 'benefit-card-dark' : ''}`}>
              <div className="benefit-card-top">
                <span className="benefit-num font-mono">{card.num}</span>
                <span className="benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              <h3 className="benefit-title">{card.title}</h3>
              <p className="benefit-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
