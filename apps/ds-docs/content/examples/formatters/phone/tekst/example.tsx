import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const phoneNumberFormatter = useFormattedInput({
    type: 'phoneNumber',
    initialValue: '12345678',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Telefon'}>
        {phoneNumberFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
