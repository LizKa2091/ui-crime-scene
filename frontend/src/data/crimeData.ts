import { type IErrorItem } from "../types/crimeTypes";

export const crimeErrors: Record<string, IErrorItem[]> = {
   login: [
      {
         id: 1, // 'missing-labels'
         element: 'input-login',
         description: 'Поля логина и пароля не имеют label — это ухудшает доступность (a11y).'
      },
      {
         id: 2, // 'tiny-button'
         element: 'login-btn',
         description: 'Кнопка входа слишком маленькая — нарушен принцип Fitts (трудно кликнуть).'
      },
      {
         id: 3, // 'wrong-error-placement',
         element: 'error-message',
         description: 'Сообщение об ошибке появляется далеко от поля, где она возникла — пользователю сложно понять, к чему оно относится.'
      }
   ],

   shop: [
      {
         id: 1, // 'too-many-variants',
         element: 'color-selector',
         description: 'Слишком много вариантов без фильтрации — пользователь перегружается визуально.'
      },
      {
         id: 2, // 'missing-price',
         element: 'price-block',
         description: 'На карточке товара нет цены до наведения — нарушает прозрачность UX.'
      },
      {
         id: 3, // 'hidden-cart',
         element: 'cart-button',
         description: 'Иконка корзины без подписи — может быть непонятна пользователю.'
      }
   ],

   blog: [
      {
         id: 1, // 'long-line-length',
         element: 'article-text',
         description: 'Строки текста слишком длинные — ухудшают читаемость.'
      },
      {
         id: 2, // 'poor-contrast',
         element: 'subtitle',
         description: 'Серый текст на белом фоне — низкий контраст, трудночитаемость.'
      },
      {
         id: 3, // 'missing-search',
         element: 'header',
         description: 'На странице блога нет поиска — ухудшает навигацию по контенту.'
      }
   ],

   dashboard: [
      {
         id: 1, // "overloaded-sidebar"
         element: 'sidebar',
         description: 'Сайдбар перегружен пунктами без визуальной иерархии — пользователю сложно ориентироваться.'
      },
      {
         id: 2, // "unclear-icons"
         element: 'top-buttons',
         description: 'Кнопки без подписей — непонятно, что они делают. UX-преступление против ясности.'
      },
      {
         id: 3, // "no-empty-state"
         element: 'table',
         description: 'При отсутствии данных таблица пуста без пояснения (“Нет проектов”) — нарушен принцип информативной обратной связи.'
      },
      {
         id: 4, // "color-only-status"
         element: 'status-badges',
         description: 'Статусы задач различаются только по цвету — недоступно для людей с дальтонизмом (нарушение WCAG).'
      },
      {
         id: 5, // "scroll-within-scroll"
         element: 'chart-container',
         description: 'Виджет статистики прокручивается внутри страницы — двойной скролл ломает UX.'
      }
   ],
   
   landing: [
      {
         id: 1, // "weak-cta-contrast"
         element: 'hero-button',
         description: 'Основная кнопка CTA почти не видна на фоне — нарушен принцип визуальной иерархии.'
      },
      {
         id: 2, // "bad-placeholder"
         element: 'subscribe-input',
         description: 'Поле ввода с плейсхолдером “Type something…” — не объясняет, что именно вводить. Нарушен принцип явности.'
      },
      {
         id: 3, // "icon-only-button"
         element: 'subscribe-button',
         description: 'Кнопка отправки — просто стрелка без подписи. Непонятно, что она делает.'
      },
      {
         id: 4, // "tiny-footer-text"
         element: 'footer',
         description: 'Текст в футере слишком мелкий и с низким контрастом — неудобно читать.'
      }
   ]
};
