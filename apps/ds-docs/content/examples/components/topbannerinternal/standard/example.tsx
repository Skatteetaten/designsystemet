import { type ReactElement } from 'react';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

export default function TopBannerInternalStandardExample(): ReactElement {
  return (
    <TopBannerInternal
      title={'MVA'}
      description={'Arbeidsliste'}
      logoHref={'/home'}
      user={'Etternavnesen Fornavn'}
    />
  );
}
