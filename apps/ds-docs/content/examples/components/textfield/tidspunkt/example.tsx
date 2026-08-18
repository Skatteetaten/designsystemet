import {
  type ChangeEvent,
  type FocusEvent,
  type ReactElement,
  useState,
} from 'react';

import { TextField } from '@skatteetaten/ds-forms';

const formatTimeOnBlur = (raw: string): string => {
  const digits = raw.replace(/\D/g, '');

  if (digits.length === 0) return '';

  let hh = 0;
  let mm = 0;

  if (digits.length === 1) {
    hh = Number(digits);
  } else if (digits.length === 2) {
    hh = Number(digits.slice(0, 2));
  } else if (digits.length === 3) {
    hh = Number(digits.slice(0, 1));
    mm = Number(digits.slice(1, 3));
  } else {
    hh = Number(digits.slice(0, 2));
    mm = Number(digits.slice(2, 4));
  }

  const formattedHours = String(hh).padStart(2, '0');
  const formattedMinutes = String(mm).padStart(2, '0');

  if (hh > 23 || mm > 59) return raw;

  return `${formattedHours}:${formattedMinutes}`;
};

export default function TextFieldTimeExample(): ReactElement {
  const [timeValue, setTimeValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setErrorMessage('');
    setTimeValue(event.target.value);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const raw = event.currentTarget.value.trim();
    const formatted = formatTimeOnBlur(raw);
    const isValid = /^([01]?\d|2[0-3]):([0-5]\d)$/.test(formatted);

    if (!isValid) {
      setTimeValue(raw);
      setErrorMessage('Skriv tiden med 24-timersformat, for eksempel 14:30.');
      return;
    }

    setTimeValue(formatted);
    setErrorMessage('');
  };

  return (
    <>
      <TextField
        label={'Tidspunkt (tt:mm)'}
        list={'time-suggestions'}
        value={timeValue}
        inputMode={'numeric'}
        errorMessage={errorMessage}
        hideLabel={false}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <datalist id={'time-suggestions'}>
        <option value={'08:00'} />
        <option value={'08:30'} />
        <option value={'09:00'} />
        <option value={'09:30'} />
        <option value={'10:00'} />
        <option value={'10:30'} />
        <option value={'11:00'} />
        <option value={'11:30'} />
        <option value={'12:00'} />
        <option value={'12:30'} />
        <option value={'13:00'} />
        <option value={'13:30'} />
        <option value={'14:00'} />
        <option value={'14:30'} />
        <option value={'15:00'} />
        <option value={'15:30'} />
        <option value={'16:00'} />
      </datalist>
    </>
  );
}
