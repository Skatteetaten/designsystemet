import { expect } from '@storybook/jest';

import { getSelectVariantDefault } from '../defaults';

describe('Select defaults', () => {
  it('Når getSelectVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSelectVariantDefault();
    expect(renderDefault).toBe('medium');
  });
});
