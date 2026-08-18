import { type ReactElement } from 'react';

import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import { roleBannerUser, topBannerUser } from './data';

export default function RoleBannerBusinessExample(): ReactElement {
  return (
    <>
      <TopBannerExternal user={topBannerUser} onLogOutClick={() => undefined}>
        <TopBannerExternal.UserMenu
          user={topBannerUser}
          onLogOutClick={() => undefined}
        />
      </TopBannerExternal>
      <RoleBanner user={roleBannerUser} />
      <main>
        <Paragraph>{'Hovedinnhold'}</Paragraph>
      </main>
    </>
  );
}
