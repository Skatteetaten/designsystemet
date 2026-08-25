import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const nationalIdentityNumberFormatter = useFormattedInput({
    type: 'nationalIdentityNumber',
    initialValue: '22113344566',
  });

  return (
    <TextField
      label={'Fødselsnummer (11 siffer)'}
      value={nationalIdentityNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={nationalIdentityNumberFormatter.onChange}
      onKeyDown={nationalIdentityNumberFormatter.onKeyDown}
    />
  );
}
