import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldWithHelpTextExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
  });

  return (
    <TextField
      label={'Organisasjonsnummer (9 siffer)'}
      helpText={
        'Hvis du ikke vet organisasjonsnummeret, kan du søke det opp på Brønnøysundregistrene.'
      }
      value={organisationNumberFormatter.value}
      hideLabel={false}
      onChange={organisationNumberFormatter.onChange}
      onKeyDown={organisationNumberFormatter.onKeyDown}
    />
  );
}
