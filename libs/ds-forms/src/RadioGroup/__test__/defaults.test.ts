import { expect } from '@storybook/jest';

import { getRadioGroupVariantDefault } from '../defaults';

describe('RadioGroup defaults', () => {
  it('Når getRadioGroupVariantDefault kalles, så returnerer den riktig verdi', () => {
    expect(getRadioGroupVariantDefault()).toBe('standard');
  });
});
