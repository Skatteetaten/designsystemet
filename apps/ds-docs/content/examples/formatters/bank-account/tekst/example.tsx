import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const bankAccountNumberFormatter = useFormattedInput({
    type: 'bankAccountNumber',
    initialValue: '1234678910',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Kontonummer'}>
        {bankAccountNumberFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
