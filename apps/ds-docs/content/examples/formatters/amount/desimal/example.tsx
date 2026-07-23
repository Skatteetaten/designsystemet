import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400,32',
    allowDecimals: true,
  });

  return (
    <TextField
      label={'Beløp (NOK)'}
      value={amountFormatter.value}
      hideLabel={false}
      onChange={amountFormatter.onChange}
      onKeyDown={amountFormatter.onKeyDown}
    />
  );
}
