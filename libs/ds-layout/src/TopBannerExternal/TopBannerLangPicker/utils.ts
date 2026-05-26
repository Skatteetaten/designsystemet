import { Languages } from '@skatteetaten/ds-core-utils';

import { TopBannerLangPickerProps } from './TopBannerLangPicker.types';
import {
  topBannerAnalyticsIds,
  TopBannerLanguageMenuAnalyticsId,
} from '../analyticsIds';

export const convertLocaleToLang = (locale: Languages): string => {
  return locale.substring(0, locale.indexOf('_'));
};

export type LanguageItem = {
  lang: string;
  displayName: string;
  webAnalyticsId?: TopBannerLanguageMenuAnalyticsId;
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
      webAnalyticsId: topBannerAnalyticsIds.languageMenu.norsk,
    },
    nn: {
      lang: 'nn',
      displayName: 'Nynorsk',
      webAnalyticsId: topBannerAnalyticsIds.languageMenu.nynorsk,
    },
    en: {
      lang: 'en',
      displayName: 'English',
      webAnalyticsId: topBannerAnalyticsIds.languageMenu.english,
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
