import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Beløp (NOK)'}>
        {amountFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
