import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListPreviewStateExample(): JSX.Element {
  return (
    <DescriptionList>
      <DescriptionList.Element term={'Saksbehandler'}>
        {'Kenneth Performance'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Status'}>
        {'Under behandling'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Sist endret'}>
        {'30.12.2013'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
