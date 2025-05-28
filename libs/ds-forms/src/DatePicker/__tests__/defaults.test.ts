import { expect } from '@storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getDatePickerDateFormat,
  getDatePickerPlaceholderDefault,
} from '../defaults';

describe('DatePicker defaults', () => {
  it('Når getDatePickerDateFormat kalles, så returnerer den riktig verdi', () => {
    expect(getDatePickerDateFormat()).toBe('dd.MM.yyyy');
  });
  it('Når getDatePickerPlaceholderDefault kalles, så returnerer den riktig verdi', () => {
    expect(getDatePickerPlaceholderDefault()).toBe(
      dsI18n.t('ds_forms.datepicker.TypeOrSelect')
    );
  });
});
