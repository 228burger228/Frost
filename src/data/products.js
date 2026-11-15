import { getAssetUrl } from '../utils/assets';

export const formatPrice = (value) => {
  if (value === null || value === undefined) return 'Цена по запросу';
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(value);
};

export const categories = [
  { id: 'all', label: 'Все', count: 4 },
  { id: 'blast-freezers', label: 'Шоковая заморозка', count: 2 },
  { id: 'salad-bars', label: 'Салат-бары', count: 1 },
  { id: 'display-cases', label: 'Витрины', count: 1 }
];

export const products = [
  {
    id: 'blast-freezer-12',
    slug: 'shkaf-shokovoj-zamorozki-12-urovnej',
    name: 'Шкаф шоковой заморозки · 12 уровней',
    shortName: 'Шкаф шоковой заморозки',
    badge: 'Лидер',
    category: 'blast-freezers',
    priceRub: 465000,
    availability: 'in-stock',
    image: getAssetUrl('assets/images/blast-freezer-12.png'),
    detailImage: getAssetUrl('assets/images/blast-freezer-transparent.png'),
    dimensions: '780 × 850 × 1750 мм',
    power: '3600 Вт · 380 В, 3 фазы',
    weight: '195 кг',
    capacity: '0.26 м³',
    levels: '12 · GN 1/1, 600 × 400 мм',
    tempRange: 'от −35 до +10 °C',
    cycleFreeze: '24 кг / 75 мин (+20 → −18 °C)',
    cycleCool: '55 мин (+90 → +3 °C)',
    defrost: 'Горячим газом · 10 минут',
    shelfLoad: 'до 40 кг на полку',
    warranty: '1 год официальной гарантии',
    specs: [
      { label: 'Количество уровней', value: '12 · GN 1/1, 600 × 400 мм' },
      { label: 'Габариты (Ш × Г × В)', value: '780 × 850 × 1750 мм' },
      { label: 'Объём камеры', value: '0.26 м³' },
      { label: 'Вес', value: '195 кг' },
      { label: 'Мощность / питание', value: '3600 Вт, 380 В, 3 фазы' },
      { label: 'Температура в камере', value: 'от −35 до +10 °C' },
      { label: 'Система управления', value: 'Интеллектуальный контроль вентиляции' },
      { label: 'Оттайка', value: 'Горячим газом, 10 минут' },
      { label: 'Хладагент', value: 'R404A / R452A' },
      { label: 'Материал корпуса', value: 'Пищевая нержавеющая сталь AISI 304' }
    ]
  },
  {
    id: 'blast-freezer-10',
    slug: 'shkaf-shokovoj-zamorozki-10-urovnej',
    name: 'Шкаф шоковой заморозки · 10 уровней',
    shortName: 'Шкаф шоковой заморозки',
    category: 'blast-freezers',
    priceRub: 290000,
    availability: 'in-stock',
    image: getAssetUrl('assets/images/blast-freezer-10.png'),
    detailImage: getAssetUrl('assets/images/blast-freezer-10.png'),
    dimensions: '780 × 800 × 1450 мм',
    power: '2800 Вт · 220/380 В',
    weight: '160 кг',
    capacity: '0.22 м³',
    levels: '10 · GN 1/1, 600 × 400 мм',
    tempRange: 'от −35 до +10 °C',
    cycleFreeze: '18 кг / 75 мин (+20 → −18 °C)',
    cycleCool: '50 мин (+90 → +3 °C)',
    defrost: 'Горячим газом · 10 минут',
    shelfLoad: 'до 40 кг на полку',
    warranty: '1 год официальной гарантии',
    specs: [
      { label: 'Количество уровней', value: '10 · GN 1/1, 600 × 400 мм' },
      { label: 'Габариты (Ш × Г × В)', value: '780 × 800 × 1450 мм' },
      { label: 'Объём камеры', value: '0.22 м³' },
      { label: 'Вес', value: '160 кг' },
      { label: 'Мощность / питание', value: '2800 Вт, 220/380 В' },
      { label: 'Температура в камере', value: 'от −35 до +10 °C' },
      { label: 'Система управления', value: 'Электронный контроллер' },
      { label: 'Материал корпуса', value: 'Нержавеющая сталь AISI 304' }
    ]
  },
  {
    id: 'salad-bar-m35',
    slug: 'salat-bar-holodilnyj-m35',
    name: 'Салат-бар холодильный М3,5',
    shortName: 'Салат-бар холодильный',
    category: 'salad-bars',
    priceRub: 67000,
    availability: 'in-stock',
    image: getAssetUrl('assets/images/salad-bar-m35.png'),
    detailImage: getAssetUrl('assets/images/salad-bar-m35.png'),
    dimensions: '1205 × 595 × 850 мм',
    power: '450 Вт · 220 В',
    weight: '75 кг',
    capacity: 'Вместимость под GN',
    levels: 'Гастроёмкости (перекладины в комплекте)',
    tempRange: 'от +2 до +8 °C',
    warranty: '1 год гарантии',
    specs: [
      { label: 'Габариты (Ш × Г)', value: '1205 × 595 мм' },
      { label: 'Температурный режим', value: 'от +2 до +8 °C' },
      { label: 'Комплектация', value: 'Перекладины в комплекте (гастроёмкости отдельно)' },
      { label: 'Питание', value: '220 В / 50 Гц' },
      { label: 'Материал', value: 'Пищевая нержавеющая сталь' }
    ]
  },
  {
    id: 'display-case',
    slug: 'holodilnaya-vitrina',
    name: 'Холодильная витрина',
    shortName: 'Холодильная витрина',
    category: 'display-cases',
    priceRub: 87500,
    availability: 'in-stock',
    image: getAssetUrl('assets/images/display-case.png'),
    detailImage: getAssetUrl('assets/images/vitrina-shkaf.png'),
    dimensions: '1200 × 700 × 1250 мм',
    power: '550 Вт · 220 В',
    weight: '90 кг',
    capacity: 'Экспозиционная площадь 0.85 м²',
    levels: 'Стеклянные полки + LED подсветка',
    tempRange: 'от 0 до +7 °C',
    warranty: '1 год гарантии',
    specs: [
      { label: 'Остекление', value: 'Гнутое панорамное стекло' },
      { label: 'Подсветка', value: 'Светодиодная LED подсветка полок' },
      { label: 'Охлаждение', value: 'Статическое, бережное к выпечке и блюдам' },
      { label: 'Температурный режим', value: 'от 0 до +7 °C' },
      { label: 'Питание', value: '220 В / 50 Гц' }
    ]
  }
];

export const faqItems = [
  {
    question: 'Сколько времени занимает доставка?',
    answer: 'Оборудование в наличии на складе в Санкт-Петербурге отгружается в течение 24 часов после оплаты. Доставка по Санкт-Петербургу и ЛО занимает 1–2 рабочих дня, отправка транспортными компаниями (Деловые Линии, ПЭК) по всей России — от 2 до 6 дней с жесткой обрешеткой.'
  },
  {
    question: 'Есть гарантия на оборудование?',
    answer: 'Да, официальная заводская гарантия составляет 1 год со дня поставки. Все оригинальные комплектующие, датчики и узлы компрессоров хранятся на складе в СПб, поэтому при необходимости ремонт не затягивается.'
  },
  {
    question: 'Что делать, если оборудование не подойдёт по параметрам?',
    answer: 'До оформления договора наш инженер бесплатно проверит совместимость габаритов, дверных проёмов и мощности электросети (220В / 380В) на вашей кухне. Если всё же оборудование не подошло, действует регламент возврата и обмена.'
  },
  {
    question: 'Можно ли посмотреть оборудование перед покупкой?',
    answer: 'Да, в Санкт-Петербурге открыт наш постоянный демо-зал и склад. Вы можете приехать, осмотреть качество сборки и стали AISI 304, протестировать контроллеры и увидеть оборудование в реальной работе.'
  },
  {
    question: 'Как происходит оплата и согласование заказа?',
    answer: 'Работаем с юридическими и физическими лицами по безналичному расчету с НДС и без НДС. После согласования спецификации выставляем счет. Возможна рассрочка и лизинг через банки-партнеры.'
  }
];
