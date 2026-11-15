import React, { useState, useEffect } from 'react';

export default function LeadModal({ isOpen, onClose, productTitle = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      newErrors.phone = 'Проверьте номер телефона';
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

    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="modal-success-state">
            <div className="success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#243C31" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="modal-title">Заявка принята</h3>
            <p className="modal-desc">
              Инженер проверит наличие и свяжется с вами в рабочее время для согласования спецификации и доставки.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={onClose}
            >
              Закрыть окно
            </button>
          </div>
        ) : (
          <div>
            <span className="modal-eyebrow font-mono">РАСЧЁТ СТОИМОСТИ И ДОСТАВКИ</span>
            <h3 className="modal-title">
              {productTitle ? `Запрос: ${productTitle}` : 'Запрос расчёта оборудования'}
            </h3>
            <p className="modal-desc">
              Оставьте контакты — инженер уточнит параметры вашей сети (220/380 В), габариты проёмов и рассчитает доставку до вашего адреса.
            </p>

            <form onSubmit={handleSubmit} noValidate className="modal-form">
              <div className="form-group">
                <label className="form-label" htmlFor="modal-name">Ваше имя *</label>
                <input
                  id="modal-name"
                  type="text"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Иван"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                  }}
                  disabled={status === 'submitting'}
                />
                {errors.name && <span className="field-error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-phone">Номер телефона *</label>
                <input
                  id="modal-phone"
                  type="tel"
                  className={`form-input font-mono ${errors.phone ? 'input-error' : ''}`}
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  disabled={status === 'submitting'}
                />
                {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-comment">Город / адрес доставки или комментарий</label>
                <input
                  id="modal-comment"
                  type="text"
                  className="form-input"
                  placeholder="Например: Санкт-Петербург или Москва"
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  disabled={status === 'submitting'}
                />
              </div>

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
                    Согласен на обработку персональных данных
                  </span>
                </label>
                {errors.consent && <span className="field-error-msg">{errors.consent}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '10px' }}
                disabled={status === 'submitting'}
              >
                <span>{status === 'submitting' ? 'Отправляем…' : 'Получить расчёт'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
