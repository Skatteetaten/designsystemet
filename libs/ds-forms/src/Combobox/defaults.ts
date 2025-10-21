import { dsI18n } from '@skatteetaten/ds-core-utils';

export const getComboboxPlaceholderDefault = (): string =>
  dsI18n.t('ds_forms:combobox.TypeOrSelect');

export const getComboboxLoadingMessageDefault = (): string =>
  dsI18n.t('ds_forms:combobox.Loading');

export const getComboboxIsMultiSelectDefault = (): boolean => false;
export const getComboboxIsLoadingDefault = (): boolean => false;
export const getCombobboxMinSearchLengthDefault = (): number => 0;
