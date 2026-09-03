import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListHorizontalStateExample(): JSX.Element {
  return (
    <DescriptionList variant={'horizontal'} isVerticalOnMobile={false}>
      <DescriptionList.Element term={'Referansenummer'}>
        {'123456'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Status'}>
        {'Sendt inn'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
