import { dsI18n } from '@skatteetaten/ds-core-utils';

export const getDatePickerDateFormat = (): string => 'dd.MM.yyyy';
export const getDatePickerPlaceholderDefault = (): string =>
  dsI18n.t('ds_forms:datepicker.TypeOrSelect');
