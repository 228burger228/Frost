import { CONTACT_CONFIG } from '../config/contacts';

/**
 * Отправка лида через Formspree или формирование прямой ссылки в WhatsApp
 */
export async function submitLead(payload) {
  const isFormspreeConfigured = Boolean(
    CONTACT_CONFIG.formspreeId && 
    CONTACT_CONFIG.formspreeId !== 'YOUR_FORMSPREE_ID'
  );

  let formspreeSuccess = false;

  if (isFormspreeConfigured) {
    try {
      const response = await fetch(`https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Имя': payload.name,
          'Телефон': payload.phone,
          'Оборудование': payload.equipment || payload.productTitle || 'Консультация',
          'Комментарий': payload.comment || 'Заявка с сайта Алекспром',
          '_subject': `Новая заявка с сайта: ${payload.name} (${payload.phone})`,
          'Время': new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })
        })
      });

      if (response.ok) {
        formspreeSuccess = true;
      }
    } catch (err) {
      console.warn('Formspree dispatch error:', err);
    }
  }

  // Генерация прямой WhatsApp-ссылки для дублирования клиентом
  const equipmentText = payload.equipment || payload.productTitle || 'подбор оборудования';
  const waText = encodeURIComponent(
    `Здравствуйте! Оставил заявку на сайте «Алекспром».\n\n` +
    `👤 Имя: ${payload.name}\n` +
    `📞 Телефон: ${payload.phone}\n` +
    `❄ Оборудование: ${equipmentText}\n` +
    (payload.comment ? `📝 Комментарий: ${payload.comment}\n` : '')
  );

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappPhone}?text=${waText}`;
  const telegramUrl = `https://t.me/${CONTACT_CONFIG.telegramUsername}`;

  return {
    success: true,
    sentViaFormspree: formspreeSuccess,
    whatsappUrl,
    telegramUrl
  };
}
