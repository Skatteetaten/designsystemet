import { JSX, useRef, useState, MouseEvent } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@skatteetaten/ds-buttons';
import { TopBannerExternal, User } from '@skatteetaten/ds-layout';
import {
  Business,
  Entity,
  Person,
  RolePicker,
  Paginated,
  OnEntitySelectHandler,
} from '@skatteetaten/ds-overlays';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { Alert } from '@skatteetaten/ds-status';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';

const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1990-01-01'),
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
      dateOfBirth: new Date('1964-02-28'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('1932-10-10'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('1944-01-26'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('1981-07-04'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

const meta = {
  component: RolePicker,
  title: 'Komponenter/RolePicker',
  render: (_args): JSX.Element => {
    const [user, setUser] = useState<User>();
    const rolePickerRef = useRef<HTMLDialogElement>(null);

    const handleEntitySelect: OnEntitySelectHandler = async (
      entity: Entity
    ) => {
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

      rolePickerRef.current?.close();
    };

    return (
      <>
        <Button onClick={() => rolePickerRef.current?.showModal()}>
          {!user
            ? 'Åpne representasjonsvelger'
            : user?.role === 'meg'
              ? 'Meg selv'
              : user?.name}
        </Button>
        <RolePicker
          ref={rolePickerRef}
          me={me}
          businesses={businesses}
          people={people}
          {..._args}
          onEntitySelect={handleEntitySelect}
        ></RolePicker>
      </>
    );
  },
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    me: { control: 'object', table: { category: category.props } },
    people: { control: 'object', table: { category: category.props } },
    businesses: { control: 'object', table: { category: category.props } },
    dismissOnEsc: { table: { category: category.props } },
    dismissOnOutsideClick: { table: { category: category.props } },
    hideCloseButton: { table: { category: category.props } },
    minimumEntitiesForSearch: { table: { category: category.props } },
    showInactiveBusinesses: { table: { category: category.props } },
    showSubunits: { table: { category: category.props } },
    showDeceasedPeople: { table: { category: category.props } },
    title: { table: { category: category.props } },
    // Events
    onClose: { ...htmlEventDescription },
    onEntitySelect: { ...htmlEventDescription },
    onLogout: { ...htmlEventDescription },
  },
  args: {
    me,
    people,
    businesses,
  },
} satisfies Meta<typeof RolePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const WithExternalTopBanner: Story = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        type: 'auto',
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [user, setUser] = useState<User>();

    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
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
  },
} satisfies Story;

export const WithAlert: Story = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        type: 'auto',
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
  render: (_args): JSX.Element => {
    const rolePickerRef = useRef<HTMLDialogElement>(null);
    return (
      <>
        <Button
          onClick={() => {
            rolePickerRef.current?.showModal();
          }}
        >
          {'Åpne representasjonsvelger'}
        </Button>
        <RolePicker ref={rolePickerRef} me={me} people={people}>
          <Alert variant={'warning'} showAlert>
            {
              'Vi kan dessverre ikke vise alle tilgangene dine nå. Vi jobber med å løse feilen. Prøv igjen eller kom tilbake senere.'
            }
          </Alert>
        </RolePicker>
      </>
    );
  },
} satisfies Story;
