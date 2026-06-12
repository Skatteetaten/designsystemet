import { type ReactElement } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldWithDescriptionExample(): ReactElement {
  return (
    <TextField
      label={'Kontaktperson'}
      description={'Hvis vi trenger å kontakte noen om saken'}
      hideLabel={false}
    />
  );
}
