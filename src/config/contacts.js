/**
 * Конфигурация каналов приёма заявок и контактов «Алекспром».
 */
export const CONTACT_CONFIG = {
  // 1. Telegram Bot (для мгновенной отправки в Telegram)
  // Получите токен в @BotFather и ваш chat_id в @userinfobot
  telegramBotToken: '', // например: '123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ'
  telegramChatId: '',   // например: '987654321' или '-1001234567890' (для группы)

  // 2. Formspree ID (для отправки на email)
  // Форма создается на https://formspree.io
  formspreeId: '', // например: 'xvgopkzw'

  // 3. Прямые каналы для связи клиента
  whatsappPhone: '79219001234',
  telegramUsername: 'alexprom_cold',

  // 4. Телефон и реквизиты компании
  phoneDisplay: '+7 (812) 385-74-60',
  phoneHref: '+78123857460',
  email: 'info@alexprom-cold.ru'
};
