import { ReactElement } from 'react';

import { Languages } from '@skatteetaten/ds-core-utils';

export const convertLocaleToLang = (locale: Languages): string => {
  return locale.substring(0, locale.indexOf('_'));
};

export type LanguageItem = {
  lang: string;
  displayName: string;
  flagIcon: ReactElement;
};

export type LanguageItems = {
  [key: string]: LanguageItem;
};
