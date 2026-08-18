import { type ReactElement } from 'react';

import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function RoleBannerMegSelvExample(): ReactElement {
  return (
    <>
      <RoleBanner
        user={{
          name: 'Ola Nordmann',
          role: 'meg',
          identifier: formatNationalIdentityNumber('12345678901'),
        }}
      />
      <main>
        <Paragraph>{'Hovedinnhold'}</Paragraph>
      </main>
    </>
  );
}
