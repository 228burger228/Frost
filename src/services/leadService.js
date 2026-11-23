import { CONTACT_CONFIG } from '../config/contacts';

/**
 * Единая отправка лида в Telegram Bot и Formspree (на почту)
 * + формирование прямых ссылок для мгновенного дублирования клиентом
 */
export async function submitLead(payload) {
  const equipmentText = payload.equipment || payload.productTitle || 'подбор оборудования';
  const timeString = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
  let sentViaTelegram = false;
  let sentViaFormspree = false;

  // 1. Отправка в Telegram Bot (если токен и chat_id заполнены)
  if (CONTACT_CONFIG.telegramBotToken && CONTACT_CONFIG.telegramChatId) {
    try {
      const text = [
        '❄️ <b>Новая заявка с сайта Алекспром</b>',
        `👤 <b>Имя:</b> ${escapeHtml(payload.name)}`,
        `📞 <b>Телефон:</b> <code>${escapeHtml(payload.phone)}</code>`,
        `📦 <b>Оборудование:</b> ${escapeHtml(equipmentText)}`,
        payload.comment ? `📝 <b>Комментарий:</b> ${escapeHtml(payload.comment)}` : '',
        `⏰ <b>Время:</b> ${timeString} (МСК)`
      ].filter(Boolean).join('\n');

      const tgRes = await fetch(
        `https://api.telegram.org/bot${CONTACT_CONFIG.telegramBotToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CONTACT_CONFIG.telegramChatId,
            text,
            parse_mode: 'HTML'
          })
        }
      );
      if (tgRes.ok) {
        sentViaTelegram = true;
      }
    } catch (err) {
      console.warn('Telegram Bot dispatch error:', err);
    }
  }

  // 2. Отправка через Formspree на почту (если настроен ID)
  if (CONTACT_CONFIG.formspreeId && CONTACT_CONFIG.formspreeId !== 'YOUR_FORMSPREE_ID') {
    try {
      const formRes = await fetch(`https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Имя': payload.name,
          'Телефон': payload.phone,
          'Оборудование': equipmentText,
          'Комментарий': payload.comment || 'Заявка с сайта Алекспром',
          '_subject': `Новая заявка: ${payload.name} (${payload.phone})`,
          'Время': timeString
        })
      });
      if (formRes.ok) {
        sentViaFormspree = true;
      }
    } catch (err) {
      console.warn('Formspree dispatch error:', err);
    }
  }

  // 3. Формирование прямых ссылок в WhatsApp и Telegram для клиента
  const msgText = encodeURIComponent(
    `Здравствуйте! Оставил заявку на сайте «Алекспром».\n\n` +
    `👤 Имя: ${payload.name}\n` +
    `📞 Телефон: ${payload.phone}\n` +
    `❄ Оборудование: ${equipmentText}\n` +
    (payload.comment ? `📝 Комментарий: ${payload.comment}\n` : '')
  );

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappPhone}?text=${msgText}`;
  const telegramUrl = CONTACT_CONFIG.telegramUsername 
    ? `https://t.me/${CONTACT_CONFIG.telegramUsername}`
    : '';

  return {
    success: true,
    sentViaTelegram,
    sentViaFormspree,
    whatsappUrl,
    telegramUrl
  };
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
