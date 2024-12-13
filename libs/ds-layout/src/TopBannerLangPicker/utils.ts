import { Languages } from '@skatteetaten/ds-core-utils';

import { TopBannerLangPickerProps } from './TopBannerLangPicker.types';

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

export const isLanguages = (value: unknown): value is Languages => {
  return Object.values(Languages).includes(value as Languages);
};

export const getCurrentLanguages = (
  includeSami: boolean,
  additionalLanguages: TopBannerLangPickerProps['additionalLanguages'] = []
): LanguageItems => {
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

  const additionalLanguagesAsObject =
    additionalLanguages?.reduce<LanguageItems>((acc, curr) => {
      acc[curr.lang] = curr;
      return acc;
    }, {});

  return includeSami
    ? { ...defaultLanguages, ...se, ...additionalLanguagesAsObject }
    : { ...defaultLanguages, ...additionalLanguagesAsObject };
};
