import { expect } from '@storybook/test';

import { getDatePickerDateFormat } from '../defaults';

describe('DatePicker defaults', () => {
  it('Når getDatePickerDateFormat kalles, så returnerer den riktig verdi', () => {
    expect(getDatePickerDateFormat()).toBe('dd.MM.yyyy');
  });
});
