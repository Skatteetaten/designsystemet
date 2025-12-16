import { useRef, useState, MouseEvent, JSX } from 'react';

import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import { TopBannerExternal, User } from '@skatteetaten/ds-layout';
import {
  Business,
  Paginated,
  Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';

const RolePickerWithTopBannerExternalExample = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [user, setUser] = useState<User>();

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  const me: Person = {
    name: 'Ola Nordmann',
    personId: '10101012345',
    type: 'Person',
  };

  const businesses: Paginated<Business> = {
    total: 12,
    list: [
      {
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization',
        subunits: [
          {
            name: 'Google ASA',
            organizationNumber: '123456789',
            isDeleted: false,
            type: 'Organization',
            unitType: 'ASA',
          },
          {
            name: 'Facebook RHF',
            organizationNumber: '123456790',
            isDeleted: true,
            type: 'Organization',
            unitType: 'RHF',
          },
        ],
      },
      {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization',
        subunits: [
          {
            name: 'Snapchat AS',
            organizationNumber: '123456623',
            isDeleted: true,
            type: 'Organization',
            unitType: 'AS',
          },
          {
            name: 'Statoil ASA',
            organizationNumber: '312849218',
            isDeleted: false,
            type: 'Organization',
            unitType: 'ASA',
          },
        ],
      },
      {
        name: 'Samsung DA',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'DA',
      },
      {
        name: 'Toshiba AS',
        organizationNumber: '312643218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
      },
      {
        name: 'Hitachi AS',
        organizationNumber: '312743218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
      },
      {
        name: 'Vanguard AS',
        organizationNumber: '332843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
      },
      {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA',
      },
      {
        name: 'Meta ANS',
        organizationNumber: '212843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ANS',
      },
    ],
  };

  const people: Paginated<Person> = {
    total: 4,
    list: [
      {
        name: 'Antikvitet presis',
        personId: '13889999726',
        type: 'Person',
        isDeleted: false,
      },
      {
        name: 'Bønne elegant',
        personId: '18849574503',
        type: 'Person',
        isDeleted: true,
      },
      {
        name: 'Lomme filosofisk',
        personId: '08889674513',
        type: 'Person',
        isDeleted: true,
      },
      {
        name: 'Adelsmann varm',
        personId: '14892449911',
        type: 'Person',
        isDeleted: false,
      },
    ],
  };

  return (
    <>
      <TopBannerExternal
        user={user}
        onLanguageClick={handleLanguageClick}
        onLogInClick={
          !user ? (): void => modalRef.current?.showModal() : undefined
        }
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => modalRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      <RolePicker
        ref={modalRef}
        me={me}
        businesses={businesses}
        people={people}
        onEntitySelect={async (entity) => {
          let role: User['role'];
          if (entity.name === me.name) {
            role = 'meg';
          } else if (entity.type === 'Organization') {
            role = 'virksomhet';
          } else {
            role = 'andre';
          }

          setUser({
            role: role,
            name: entity.name,
          });
          modalRef.current?.close();
        }}
      />
    </>
  );
};

export default RolePickerWithTopBannerExternalExample;
