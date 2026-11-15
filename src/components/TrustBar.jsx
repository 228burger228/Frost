import React from 'react';

export default function TrustBar() {
  const items = [
    {
      icon: '/assets/icons/truck.svg',
      title: 'Доставка по всей РФ',
      desc: 'Отгрузка в день оплаты'
    },
    {
      icon: '/assets/icons/shield.svg',
      title: '1 год гарантии',
      desc: 'Комплектующие в наличии'
    },
    {
      icon: '/assets/icons/tool.svg',
      title: 'Заводской запуск',
      desc: 'Проверка перед отгрузкой'
    },
    {
      icon: '/assets/icons/pin.svg',
      title: 'Осмотр в демо-зале',
      desc: 'Покажем работу оборудования'
    }
  ];

  return (
    <section className="trustbar-section">
      <div className="container">
        <div className="trustbar-grid">
          {items.map((item, idx) => (
            <div key={idx} className="trustbar-item">
              <div className="trustbar-icon-wrap">
                <img src={item.icon} alt="" className="trustbar-icon" />
              </div>
              <div className="trustbar-text">
                <span className="trustbar-title">{item.title}</span>
                <span className="trustbar-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
