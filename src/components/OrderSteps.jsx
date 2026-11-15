import React from 'react';

export default function OrderSteps() {
  const steps = [
    {
      num: '01',
      title: 'Уточняем задачу',
      desc: 'Габариты помещения, тип меню, интенсивность смены и требуемый объём циклов заморозки.'
    },
    {
      num: '02',
      title: 'Смета и замеры',
      desc: 'Подбираем точную модель, проверяем выделенную мощность (220/380 В) и ширину проёмов.'
    },
    {
      num: '03',
      title: 'Заказ и бронь',
      desc: 'Оборудование бронируется на складе в Санкт-Петербурге. Фиксируем цену и сроки в договоре.'
    },
    {
      num: '04',
      title: 'Отгрузка и запуск',
      desc: 'Отправка в жесткой обрешетке по всей РФ или самовывоз. Полный пакет паспортов и сертификатов.'
    }
  ];

  return (
    <section id="steps" className="steps-section">
      <div className="container">
        <div className="steps-header">
          <span className="section-eyebrow font-mono">ПОРЯДОК РАБОТЫ</span>
          <h2 className="section-title">Сначала расчёт. Потом покупка.</h2>
          <p className="steps-subtitle">Без навязывания лишней мощности и скрытых платежей за доставку.</p>
        </div>

        <div className="steps-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="step-card">
              <div className="step-num font-mono">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
