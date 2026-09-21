import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    locale: 'en-GB',
    initialValue: '50400',
  });

  return (
    <TextField
      label={'Amount (NOK)'}
      value={amountFormatter.value}
      hideLabel={false}
      onChange={amountFormatter.onChange}
      onKeyDown={amountFormatter.onKeyDown}
    />
  );
}
