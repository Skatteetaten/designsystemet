import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const phoneNumberFormatter = useFormattedInput({
    type: 'phoneNumber',
    initialValue: '12345678',
  });

  return (
    <TextField
      label={'Telefon'}
      value={phoneNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={phoneNumberFormatter.onChange}
      onKeyDown={phoneNumberFormatter.onKeyDown}
    />
  );
}
