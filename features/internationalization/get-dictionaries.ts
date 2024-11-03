import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
  'en-US': () =>
    import('@/features/internationalization/dictionaries/en-us.json').then(
      module => module.default,
    ),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries['en-US']();
