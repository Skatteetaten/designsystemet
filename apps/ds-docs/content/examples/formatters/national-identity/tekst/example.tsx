import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { formatter } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const nationalIdentityNumber = formatter({
    value: '22113344566',
    type: 'nationalIdentityNumber',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Fødselsnummer'}>
        {nationalIdentityNumber.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
