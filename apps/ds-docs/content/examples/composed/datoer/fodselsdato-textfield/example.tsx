import { type JSX, useState } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

import styles from './FodselsdatoTextfield.module.scss';

export default function FodselsdatoTextfieldExample(): JSX.Element {
  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 2) {
      value = `${value.slice(0, 2)}.${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}.${value.slice(5, 9)}`;
    }

    setDateValue(value);
  };

  return (
    <TextField
      label={'Fødselsdato (dd.mm.åååå)'}
      value={dateValue}
      maxLength={10}
      classNames={{
        textbox: styles.dateInput,
      }}
      onChange={handleDateChange}
    />
  );
}
