import { type ReactElement } from 'react';

import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner } from '@skatteetaten/ds-layout';

export default function RoleBannerSomAndreExample(): ReactElement {
  return (
    <RoleBanner
      user={{
        name: 'Kari Nordmann',
        role: 'andre',
        identifier: formatNationalIdentityNumber('10101012345'),
      }}
    />
  );
}
