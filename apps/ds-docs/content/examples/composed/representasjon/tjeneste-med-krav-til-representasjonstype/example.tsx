import { useRef, useState, type ReactElement } from 'react';

import { formatOrganisationNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Business, Entity, RolePicker } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, mapBusinessToUser } from './data';

export default function ServiceWithRequiredRepresentationExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  const [business, setBusiness] = useState<Business | undefined>(undefined);

  const handleBusinessSelect = async (entity: Entity): Promise<void> => {
    const business = entity as Business;

    setBusiness(business);
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
        user={business ? mapBusinessToUser(business) : undefined}
        onLogInClick={() => rolePickerRef.current?.showModal()}
        onLogOutClick={() => setBusiness(undefined)}
      >
        {business && (
          <TopBannerExternal.UserMenu
            user={mapBusinessToUser(business)}
            onLogOutClick={() => setBusiness(undefined)}
            onSwitchUserClick={() => rolePickerRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      {business && (
        <RoleBanner
          user={{
            name: business.name ?? '',
            role: 'virksomhet',
            identifier: formatOrganisationNumber(
              business.organizationNumber ?? '123456789'
            ),
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
