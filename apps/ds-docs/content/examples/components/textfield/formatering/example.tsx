import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
    initialValue: '974761076',
  });

  const nationalIdentityNumberFormatter = useFormattedInput({
    type: 'nationalIdentityNumber',
    initialValue: '26301518292',
  });

  const bankAccountNumberFormatter = useFormattedInput({
    type: 'bankAccountNumber',
    initialValue: '76940524802',
  });

  const phoneNumberFormatter = useFormattedInput({
    type: 'phoneNumber',
    initialValue: '12345678',
  });

  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400,32',
    allowDecimals: true,
  });

  return (
    <>
      <TextField
        label={'Organisasjonsnummer (9 siffer)'}
        value={organisationNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={organisationNumberFormatter.onChange}
        onKeyDown={organisationNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Fødselsnummer (11 siffer)'}
        value={nationalIdentityNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={nationalIdentityNumberFormatter.onChange}
        onKeyDown={nationalIdentityNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Bankkontonummer'}
        value={bankAccountNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={bankAccountNumberFormatter.onChange}
        onKeyDown={bankAccountNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Telefonnummer'}
        value={phoneNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={phoneNumberFormatter.onChange}
        onKeyDown={phoneNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Beløp (NOK)'}
        value={amountFormatter.value}
        hideLabel={false}
        onChange={amountFormatter.onChange}
        onKeyDown={amountFormatter.onKeyDown}
      />
    </>
  );
}
