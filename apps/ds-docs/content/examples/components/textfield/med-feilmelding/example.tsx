import { type FocusEvent, type ReactElement, useState } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldWithErrorExample(): ReactElement {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>(
    'Postnummer må fylles ut.'
  );

  return (
    <TextField
      label={'Postnummer'}
      value={value}
      errorMessage={errorMessage}
      pattern={'\\d{4}'}
      maxLength={4}
      hideLabel={false}
      required
      onChange={(event): void => {
        setValue(event.target.value);
        setErrorMessage('');
      }}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        if (event.target.validity.valueMissing) {
          setErrorMessage('Postnummer må fylles ut.');
          return;
        }

        if (event.target.validity.patternMismatch) {
          setErrorMessage('Postnummer må inneholde fire tall.');
        }
      }}
    />
  );
}
