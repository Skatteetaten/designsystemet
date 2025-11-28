import { JSX, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@skatteetaten/ds-buttons';
import { User } from '@skatteetaten/ds-layout';
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
  getRolePickerShowDeceasedPeopleDefault,
  getRolePickerMinimumEntitiesForSearchDefault,
} from '@skatteetaten/ds-overlays';

import RolePickerWithAlertExample from './RolePickerWithAlertExample';
import rolePickerWithAlertExample from './RolePickerWithAlertExample?raw';
import RolePickerWithTopBannerExternalExample from './RolePickerWithTopBannerExternalExample';
import rolePickerWithTopBannerExternalExample from './RolePickerWithTopBannerExternalExample?raw';
import { category } from '../../../../.storybook/helpers';

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
    minimumEntitiesForSearch: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getRolePickerMinimumEntitiesForSearchDefault().toString(),
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
    showDeceasedPeople: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getRolePickerShowDeceasedPeopleDefault().toString(),
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

export const WithExternalTopBanner: Story = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        code: rolePickerWithTopBannerExternalExample,
        type: 'auto',
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
  render: (_args): JSX.Element => <RolePickerWithTopBannerExternalExample />,
} satisfies Story;

export const WithAlert: Story = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        code: rolePickerWithAlertExample,
        type: 'auto',
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
  render: (_args): JSX.Element => <RolePickerWithAlertExample />,
} satisfies Story;
