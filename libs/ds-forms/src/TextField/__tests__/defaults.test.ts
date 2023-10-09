import { expect } from '@storybook/jest';

import { getTextFieldAsDefault, getTextFieldVariantDefault } from '../defaults';

describe('TextField defaults', () => {
  it('Når getTextFieldAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTextFieldAsDefault()).toBe('input');
  });
  it('Når getTextFieldVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getTextFieldVariantDefault();
    expect(renderDefault).toBe('medium');
  });
});
