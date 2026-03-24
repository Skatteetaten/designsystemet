import { dsI18n } from '@skatteetaten/ds-core-utils';

import { getComboboxPlaceholderDefault } from '../defaults';

describe('Combobox defaults', () => {
  it('Når getComboboxPlaceholderDefault kalles med minSearchLength 0, så returnerer den riktig verdi', () => {
    const placeholder = getComboboxPlaceholderDefault(0);
    expect(placeholder).toBe(dsI18n.t('ds_forms:combobox.TypeOrSelect'));
  });
  it('Når getComboboxPlaceholderDefault kalles med minSearchLength 1, så returnerer den riktig verdi', () => {
    const placeholder = getComboboxPlaceholderDefault(1);
    expect(placeholder).toBeUndefined();
  });
});
