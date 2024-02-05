import { expect } from '@storybook/jest';

import { getSearchFieldHasSearchButtonIconDefault } from '../defaults';

describe('TextField defaults', () => {
  it('Når getTextFieldAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getSearchFieldHasSearchButtonIconDefault()).toBe(true);
  });
});
