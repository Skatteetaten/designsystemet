import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListEmphasizedTextExample(): JSX.Element {
  return (
    <DescriptionList
      termWeight={'regular'}
      descriptionWeight={'bold'}
      descriptionDirection={'vertical'}
    >
      <DescriptionList.Element term={'Beløp til gode'}>
        {'4 250 kr'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
