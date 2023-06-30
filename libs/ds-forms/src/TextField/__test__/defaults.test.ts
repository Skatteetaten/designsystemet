import { expect } from '@storybook/jest';

import { getTextFieldVariantDefault } from '../defaults';

describe('TextField defaults', () => {
  it('Når getTextFieldVariantDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTextFieldVariantDefault()).toBe('standard');
  });
});
