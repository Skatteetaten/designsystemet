import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getComboboxPlaceholderDefault,
  getComboboxLoadingMessageDefault,
  getComboboxIsMultiSelectDefault,
  getComboboxIsLoadingDefault,
  getCombobboxMinSearchLengthDefault,
} from '../defaults';

describe('defaults', () => {
  it('Når getComboboxPlaceholderDefault kalles, så returnerer den riktig verdi', () => {
    expect(getComboboxPlaceholderDefault()).toBe(
      dsI18n.t('ds_forms:combobox.TypeOrSelect')
    );
  });

  it('Når getComboboxLoadingMessageDefault kalles, så returnerer den riktig verdi', () => {
    expect(getComboboxLoadingMessageDefault()).toBe(
      dsI18n.t('ds_forms:combobox.Loading')
    );
  });

  it('Når getComboboxIsMultiSelectDefault kalles, så returnerer den riktig verdi', () => {
    expect(getComboboxIsMultiSelectDefault()).toBe(false);
  });

  it('Når getComboboxIsLoadingDefault kalles, så returnerer den riktig verdi', () => {
    expect(getComboboxIsLoadingDefault()).toBe(false);
  });

  it('Når getCombobboxMinSearchLengthDefault kalles, så returnerer den riktig verdi', () => {
    expect(getCombobboxMinSearchLengthDefault()).toBe(0);
  });
});
