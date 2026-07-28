import { type ReactElement, useRef, useState } from 'react';

import { formatOrganisationNumber } from '@skatteetaten/ds-core-utils';
import {
  RoleBanner,
  TopBannerExternal,
  type User,
} from '@skatteetaten/ds-layout';
import { RolePicker, type Entity } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, mapBusinessToUser } from './data';

export default function ServiceWithRequiredRepresentationExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleBusinessSelect = async (entity: Entity): Promise<void> => {
    if (entity.type !== 'Organization') {
      return;
    }

    setUser(mapBusinessToUser(entity.name, entity.organizationNumber));
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {
          'Tjenesten krever at brukeren representerer en virksomhet før hen kan fortsette:'
        }
      </Paragraph>
      <TopBannerExternal
        user={user}
        onLogInClick={() => rolePickerRef.current?.showModal()}
        onLogOutClick={() => setUser(undefined)}
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => rolePickerRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      {user && (
        <RoleBanner
          user={{
            name: user.name,
            role: 'virksomhet',
            identifier: formatOrganisationNumber(user.orgnr ?? '123456789'),
          }}
        />
      )}

      <RolePicker
        ref={rolePickerRef}
        businesses={businesses}
        onEntitySelect={handleBusinessSelect}
      />
    </>
  );
}
