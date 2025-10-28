import { dsI18n } from '@skatteetaten/ds-core-utils';

import { ComboboxSize } from './Combobox.types';

export const getComboboxPlaceholderDefault = (): string =>
  dsI18n.t('ds_forms:combobox.TypeOrSelect');

export const getComboboxLoadingMessageDefault = (): string =>
  dsI18n.t('ds_forms:combobox.Loading');

export const getComboboxIsMultiSelectDefault = (): boolean => false;
export const getComboboxIsLoadingDefault = (): boolean => false;
export const getComboboxMinSearchLengthDefault = (): number => 0;
export const getComboboxVariantDefault = (): ComboboxSize => 'medium';
