import { JSX } from 'react';

import { DatePicker } from '@skatteetaten/ds-forms';

const minDate = new Date(2026, 0, 1);
const maxDate = new Date(2026, 11, 31);

export default function DatePickerWithMinMaxStateExample(): JSX.Element {
  return (
    <DatePicker
      label={'Velg dato i 2026'}
      minDate={minDate}
      maxDate={maxDate}
      helpText={'Du kan bare velge datoer i inneværende år.'}
    />
  );
}
