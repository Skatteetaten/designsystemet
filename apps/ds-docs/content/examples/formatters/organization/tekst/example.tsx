import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
    initialValue: '987654321',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Organisasjonsnummer'}>
        {organisationNumberFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
