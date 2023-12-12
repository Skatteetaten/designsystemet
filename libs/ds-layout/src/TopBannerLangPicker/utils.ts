import { Languages } from '@skatteetaten/ds-core-utils';

export const convertLocaleToLang = (locale: Languages): string => {
  return locale.substring(0, locale.indexOf('_'));
};
