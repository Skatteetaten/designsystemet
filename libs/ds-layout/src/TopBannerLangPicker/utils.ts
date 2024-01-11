import { Languages } from '@skatteetaten/ds-core-utils';

export const convertLocaleToLang = (locale: Languages): string => {
  return locale.substring(0, locale.indexOf('_'));
};

export type LanguageItem = {
  lang: string;
  displayName: string;
};

export type LanguageItems = {
  [key: string]: LanguageItem;
};

export const getCurrentLanguages = (includeSami: boolean): LanguageItems => {
  const defaultLanguages: LanguageItems = {
    nb: {
      lang: 'nb',
      displayName: 'Bokmål',
    },
    nn: {
      lang: 'nn',
      displayName: 'Nynorsk',
    },
    en: {
      lang: 'en',
      displayName: 'English',
    },
  };
  const se = {
    se: {
      lang: 'se',
      displayName: 'Sámegiella',
    },
  };

  return includeSami ? { ...defaultLanguages, ...se } : defaultLanguages;
};
