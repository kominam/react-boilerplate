/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import enTranslationMessages from './translation/en.json';
import viTranslationMessages from './translation/vi.json';

addLocaleData([enTranslationMessages, viTranslationMessages]);

export const DEFAULT_LOCALE = 'en';

export const translationMessages = {
  en: enTranslationMessages,
  vi: viTranslationMessages
};
