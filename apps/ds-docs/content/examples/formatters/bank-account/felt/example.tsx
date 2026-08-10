import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const bankAccountNumberFormatter = useFormattedInput({
    type: 'bankAccountNumber',
    initialValue: '1234678910',
  });

  return (
    <TextField
      label={'Kontonummer (11 siffer)'}
      value={bankAccountNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={bankAccountNumberFormatter.onChange}
      onKeyDown={bankAccountNumberFormatter.onKeyDown}
    />
  );
}
