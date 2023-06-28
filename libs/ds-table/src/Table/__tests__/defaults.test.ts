import { expect } from '@storybook/jest';

import { getDataCellAsDefault, getTableVariantDefault } from '../defaults';

describe('Table defaults', () => {
  it('Når getListAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableVariantDefault()).toBe('standard');
  });

  it('Når getDataCellAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getDataCellAsDefault()).toBe('td');
  });
});
