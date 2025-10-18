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
   ]
};
