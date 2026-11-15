import React from 'react';

export default function PerformanceSection({ onSelectProduct }) {
  return (
    <section id="performance" className="performance-section">
      <div className="container">
        {/* Header */}
        <div className="performance-header">
          <div className="performance-header-left">
            <span className="section-eyebrow eyebrow-light font-mono">ТЕХНОЛОГИЯ ШОКОВОЙ ЗАМОРОЗКИ</span>
            <h2 className="section-title title-light">Меньше ожидания.<br />Больше рабочих циклов.</h2>
          </div>
          <div className="performance-header-right">
            <p>Шоковое охлаждение останавливает размножение бактерий и сохраняет клеточную структуру продукта без потери массы.</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="performance-grid">
          {/* Left Media Card */}
          <div className="perf-media-card">
            <div className="perf-media-inner">
              <img 
                src="/assets/images/Шкаф на прозрачном фоне.png" 
                alt="Шкаф шоковой заморозки в разрезе"
                className="perf-img"
              />
            </div>
            <div className="perf-media-badge font-mono">
              Выход на режим за 2 минуты
            </div>
          </div>

          {/* Right Metrics & Timeline */}
          <div className="perf-data-box">
            {/* Timeline Item 1: Freeze */}
            <div className="perf-timeline-item">
              <div className="timeline-title-row">
                <span className="timeline-title font-mono">От +20 °C до −18 °C</span>
                <span className="timeline-tag font-mono">24 кг за 75 минут</span>
              </div>
              <div className="timeline-bar">
                <div className="timeline-fill" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Timeline Item 2: Cool */}
            <div className="perf-timeline-item">
              <div className="timeline-title-row">
                <span className="timeline-title font-mono">+90 → +3 °C</span>
                <span className="timeline-tag font-mono">55 минут</span>
              </div>
              <div className="timeline-bar">
                <div className="timeline-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* 3 Key Metrics */}
            <div className="perf-metrics-row">
              <div className="metric-box">
                <span className="metric-num font-mono">2 минуты</span>
                <span className="metric-label">до рабочего режима</span>
              </div>
              <div className="metric-box">
                <span className="metric-num font-mono">10 минут</span>
                <span className="metric-label">оттайка горячим газом</span>
              </div>
              <div className="metric-box">
                <span className="metric-num font-mono">40 кг</span>
                <span className="metric-label">нагрузка на полку</span>
              </div>
            </div>

            <div className="perf-action-row">
              <button
                type="button"
                className="perf-spec-link"
                onClick={() => onSelectProduct('blast-freezer-12')}
              >
                <span>Полная спецификация флагмана</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
