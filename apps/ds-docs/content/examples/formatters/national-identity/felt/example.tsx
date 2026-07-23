import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
    initialValue: '987654321',
  });

  return (
    <TextField
      label={'Organisasjonsnummer (9 siffer)'}
      value={organisationNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={organisationNumberFormatter.onChange}
      onKeyDown={organisationNumberFormatter.onKeyDown}
    />
  );
}
