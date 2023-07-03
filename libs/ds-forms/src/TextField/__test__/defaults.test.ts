import { expect } from '@storybook/jest';

import { getTextFieldAsDefault } from '../defaults';

describe('TextField defaults', () => {
  it('Når getTextFieldVariantDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTextFieldAsDefault()).toBe('input');
  });
});
