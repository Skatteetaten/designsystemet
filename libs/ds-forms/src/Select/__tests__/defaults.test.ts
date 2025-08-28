import { dsI18n } from '@skatteetaten/ds-core-utils';

import { getSelectPlaceholderDefault } from '../defaults';

describe('Select defaults', () => {
  it('Når getSelectPlaceholderDefault kalles, så returnerer den riktig verdi', () => {
    expect(getSelectPlaceholderDefault()).toBe(
      dsI18n.t('Shared:shared.ChooseValue')
    );
  });
});
