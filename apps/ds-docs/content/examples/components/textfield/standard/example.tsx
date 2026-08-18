import { type ReactElement } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldStandardExample(): ReactElement {
  return <TextField label={'Navn'} hideLabel={false} />;
}
