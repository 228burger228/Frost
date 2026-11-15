import React, { useState } from 'react';
import { categories } from '../data/products';

export default function LeadForm({ defaultProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    equipment: defaultProduct || 'blast-freezers',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // Format phone number with +7 mask
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.startsWith('7') || input.startsWith('8')) {
      input = input.substring(1);
    }
    input = input.substring(0, 10);

    let formatted = '+7';
    if (input.length > 0) formatted += ' (' + input.substring(0, 3);
    if (input.length >= 3) formatted += ') ' + input.substring(3, 6);
    if (input.length >= 6) formatted += '-' + input.substring(6, 8);
    if (input.length >= 8) formatted += '-' + input.substring(8, 10);

    setFormData(prev => ({ ...prev, phone: formatted }));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Укажите имя — от 2 до 80 символов';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 11) {
      newErrors.phone = 'Проверьте номер телефона (10 цифр после +7)';
    }

    if (!formData.consent) {
      newErrors.consent = 'Нужно согласие на обработку персональных данных';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Simulate sending lead to API / backend
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section id="lead-form" className="lead-section">
      <div className="container lead-grid">
        {/* Left Column */}
        <div className="lead-content">
          <span className="section-eyebrow eyebrow-light font-mono">РАСЧЁТ ПО ТЕХНОЛОГИЧЕСКОЙ КАРТЕ</span>
          <h2 className="lead-title title-light">
            Холод —<br />
            под нагрузку.<br />
            Цена — заранее.
          </h2>
          <p className="lead-subtitle">
            Укажите примерные объёмы и меню. Инженер рассчитает точную холодопроизводительность и пришлёт официальное коммерческое предложение.
          </p>

          <div className="lead-direct-contacts font-mono">
            <span>Санкт-Петербург · Пн–Вс 10:00–20:00</span>
            <p>Отгрузка в день оплаты со склада</p>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lead-form-card">
          <h3 className="form-card-title">Получить подбор и стоимость</h3>

          {status === 'success' ? (
            <div className="form-success-box" role="alert">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#243C31" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="success-title">Заявка принята</h4>
              <p className="success-desc">
                Инженер проверит наличие и свяжется с вами в рабочее время для согласования спецификации.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: '16px', width: '100%' }}
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', phone: '', equipment: 'blast-freezers', consent: false });
                }}
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="lead-form">
              <div className="form-row">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="lead-name" className="form-label">Ваше имя *</label>
                  <input
                    id="lead-name"
                    type="text"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Дмитрий"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                    }}
                    disabled={status === 'submitting'}
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="lead-phone" className="form-label">Телефон *</label>
                  <input
                    id="lead-phone"
                    type="tel"
                    className={`form-input font-mono ${errors.phone ? 'input-error' : ''}`}
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={status === 'submitting'}
                  />
                  {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                </div>
              </div>

              {/* Equipment Type */}
              <div className="form-group">
                <label htmlFor="lead-equipment" className="form-label">Тип оборудования</label>
                <select
                  id="lead-equipment"
                  className="form-select font-mono"
                  value={formData.equipment}
                  onChange={(e) => setFormData(prev => ({ ...prev, equipment: e.target.value }))}
                  disabled={status === 'submitting'}
                >
                  <option value="blast-freezers">Шкафы шоковой заморозки (10 / 12 уровней)</option>
                  <option value="salad-bars">Салат-бары охлаждаемые</option>
                  <option value="display-cases">Холодильные витрины</option>
                  <option value="custom">Индивидуальный размер / под заказ</option>
                </select>
              </div>

              {/* Consent Checkbox */}
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={formData.consent}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, consent: e.target.checked }));
                      if (errors.consent) setErrors(prev => ({ ...prev, consent: null }));
                    }}
                    disabled={status === 'submitting'}
                  />
                  <span className="checkbox-text">
                    Согласен на обработку персональных данных в соответствии с регламентом конфиденциальности.
                  </span>
                </label>
                {errors.consent && <span className="field-error-msg">{errors.consent}</span>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-accent btn-submit"
                disabled={status === 'submitting'}
              >
                <span>{status === 'submitting' ? 'Отправляем…' : 'Получить расчёт цены'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
