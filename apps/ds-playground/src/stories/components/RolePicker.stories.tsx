import { JSX, useRef, useState, MouseEvent } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, LinkGroup } from '@skatteetaten/ds-buttons';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import {
  User,
  TopBannerExternal,
  TopBannerExternalHandle,
} from '@skatteetaten/ds-layout';
import {
  Business,
  Entity,
  Person,
  RolePicker,
  getModalDismissOnEscDefault,
  getModalDismissOnOutsideClickDefault,
  getRolePickerHideCloseButtonDefault,
  Paginated,
  OnEntitySelectHandler,
  getRolePickerShowInactiveBusinessesDefault,
  getRolePickerShowSubunitsDefault,
} from '@skatteetaten/ds-overlays';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const me: Person = {
  name: 'Ola Nordmann',
  personId: '101010 12345',
  type: 'Person',
};

const businesses: Paginated<Business> = {
  total: 12,
  list: [
    {
      name: 'Costco',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Google',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Facebook',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
      ],
    },
    {
      name: 'Instagram',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Snapchat',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Statoil',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS',
        },
      ],
    },
    {
      name: 'Samsung',
      organizationNumber: '312943218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },

    {
      name: 'Toshiba',
      organizationNumber: '312643218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },

    {
      name: 'Hitachi',
      organizationNumber: '312743218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },

    {
      name: 'Vanguard',
      organizationNumber: '332843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },

    {
      name: 'Amazon',
      organizationNumber: '112843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Meta',
      organizationNumber: '212843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
  ],
};

const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '138899 99726',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '188495 74503',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '088896 74513',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '148924 49911',
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
    dismissOnEsc: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalDismissOnEscDefault().toString() },
      },
    },
    dismissOnOutsideClick: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getModalDismissOnOutsideClickDefault().toString(),
        },
      },
    },
    hideCloseButton: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getRolePickerHideCloseButtonDefault().toString(),
        },
      },
    },
    showInactiveBusinesses: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getRolePickerShowInactiveBusinessesDefault().toString(),
        },
      },
    },
    showSubunits: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getRolePickerShowSubunitsDefault().toString(),
        },
      },
    },
    title: {
      table: {
        category: category.props,
      },
    },
    // Events
    onClose: { control: false, table: { category: category.event } },
    onEntitySelect: { control: false, table: { category: category.event } },
    onLogout: { control: false, table: { category: category.event } },
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

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [user, setUser] = useState<User>();

    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };

    const handleLogOut = (): void => {
      setUser(undefined);
    };

    const handleLogIn = (): void => {
      modalRef.current?.showModal();
    };

    return (
      <>
        <TopBannerExternal
          user={user}
          onLanguageClick={handleLanguageClick}
          onLogInClick={handleLogIn}
          onLogOutClick={handleLogOut}
          onUserClick={(): void => modalRef.current?.showModal()}
        />
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

Examples.parameters = exampleParameters;
