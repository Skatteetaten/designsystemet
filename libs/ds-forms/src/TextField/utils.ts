import { dsI18n, Languages } from '@skatteetaten/ds-core-utils';

export const addSpacesOrCommas = (value: string): string => {
  const separator = dsI18n.language === Languages.Engelsk ? ',' : ' ';
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const removeNonNumeric = (value: string): string => {
  const trimmed = value.trim();
  const isNegative = /^-/.test(trimmed);
  const numberOnly = trimmed.replaceAll(/\D+/g, '');
  return isNegative ? `-${numberOnly}` : numberOnly;
};
