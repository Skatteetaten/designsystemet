import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getComboboxPlaceholderDefault,
  getComboboxLoadingMessageDefault,
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
});
