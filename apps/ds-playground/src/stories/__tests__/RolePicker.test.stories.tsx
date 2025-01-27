import { useRef } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, within } from '@storybook/test';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  Entity,
  OnEntitySelectHandler,
  Business,
  Paginated,
  Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';

const me: Person = {
  name: 'Ola Nordmann',
  personId: '101010 12345',
  type: 'Person',
};

const businesses: Paginated<Business> = {
  total: 16,
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
    {
      name: 'Apple',
      organizationNumber: '412843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Microsoft',
      organizationNumber: '512843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Netflix',
      organizationNumber: '612843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Tesla',
      organizationNumber: '712843218',
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

const people11: Paginated<Person> = {
  total: 11,
  list: [
    {
      name: 'Frisk Elefant',
      personId: '100908 12345',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Melankolsk Aldrende Ape',
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
    {
      name: 'Kari Nordmann',
      personId: '101010 54321',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Per Hansen',
      personId: '202020 12345',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lise Olsen',
      personId: '303030 67890',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Nina Johansen',
      personId: '404040 11223',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Ole Pettersen',
      personId: '505050 44556',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Eva Nilsen',
      personId: '606060 77889',
      type: 'Person',
      isDeleted: false,
    },
  ],
};

const meta = {
  component: RolePicker,
  title: 'Tester/RolePicker',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    me: {
      table: { disable: true },
      control: 'object',
    },
    people: {
      table: { disable: true },
      control: 'object',
    },
    businesses: {
      table: { disable: true },
      control: 'object',
    },
    title: {
      table: { disable: true },
      control: 'text',
    },
    dismissOnEsc: {
      table: { disable: true },
      control: 'boolean',
    },
    dismissOnOutsideClick: {
      table: { disable: true },
      control: 'boolean',
    },
    hideCloseButton: {
      table: { disable: true },
      control: 'boolean',
    },
    showSubunits: {
      table: { disable: true },
      control: 'boolean',
    },
    showInactiveBusinesses: {
      table: { disable: true },
      control: 'boolean',
    },
    onClose: {
      table: { disable: true },
    },
    onEntitySelect: {
      table: { disable: true },
    },
    onLogout: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
      control: 'object',
    },
  },
  parameters: {
    viewport: {
      viewPortHeight: 1400,
    },
  },
} satisfies Meta<typeof RolePicker>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  me,
  businesses,
  people,
};

const DefaultTemplate: StoryFn<typeof RolePicker> = (args) => {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async (entity: Entity) => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjonsvelger'}
      </Button>
      <RolePicker
        {...args}
        ref={rolePickerRef}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
};

const ErrorTemplate: StoryFn<typeof RolePicker> = (args) => {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async (entity: Entity) => {
    return {
      error:
        'Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.',
    };
  };

  return (
    <>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjonsvelger'}
      </Button>
      <RolePicker
        {...args}
        ref={rolePickerRef}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
};

const SlowTemplate: StoryFn<typeof RolePicker> = (args) => {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async (entity: Entity) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        rolePickerRef.current?.close();
        resolve();
      }, 2000);
    });
  };

  return (
    <>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjonsvelger'}
      </Button>
      <RolePicker
        {...args}
        ref={rolePickerRef}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
};

export const Defaults = {
  name: 'Defaults (A1, A2, A14, B3, B2)',
  args: {
    ...defaultArgs,
    businesses,
    people,
  },
  render: DefaultTemplate,
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
};

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID',
    ...defaultArgs,
  },
  render: DefaultTemplate,
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    const container = await canvas.findByRole('dialog');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithShowInactiveOrganizations = {
  name: 'With Show Inactive Organizations (A11, B4)',
  args: {
    ...defaultArgs,
    people: undefined,
    me: undefined,
    showInactiveBusinesses: true,
    showSubunits: false,
  },
  render: DefaultTemplate,
  argTypes: {
    showInactiveBusinesses: { table: { disable: false } },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');
    const checkBox = await within(modal).findByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowInactiveBusinessesHeader'),
    });

    expect(checkBox).toBeChecked();

    const button = await within(modal).findByRole('button', {
      name: /vis alle/i,
    });

    await fireEvent.click(button);

    const links = await within(modal).findAllByRole('link');
    expect(links.length).toEqual(args.businesses?.list.length);
  },
} satisfies Story;

export const WithShowAllClicked = {
  name: 'With Show All Clicked Focus (A12, B4)',
  args: {
    ...defaultArgs,
    businesses,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const button = await within(modal).findByRole('button', {
      name: /vis alle/i,
    });

    const links = await within(modal).findAllByRole('link');
    const indexToFocus = links.length - 1;
    // userEvent.click lukker modalen(!)
    await fireEvent.click(button);
    expect(links[indexToFocus]).toHaveFocus();
  },
} satisfies Story;

export const WithoutHideCloseIcon = {
  name: 'Without Hide Close Icon (A3)',
  args: {
    ...defaultArgs,
    hideCloseButton: true,
  },
  render: DefaultTemplate,
  argTypes: {
    hideCloseButton: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
  },
} satisfies Story;

const title = 'Custom title';

export const WithCustomTitle = {
  name: 'With Custom Title (A4 delvis)',
  args: {
    ...defaultArgs,
    title,
  },
  render: DefaultTemplate,
  argTypes: {
    title: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const titleElement = within(modal).getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent(title);
  },
} satisfies Story;

export const WithChildren = {
  name: 'With Children (A5)',
  args: {
    ...defaultArgs,
    people: undefined,
    children: <div>{'Children'}</div>,
  },
  render: DefaultTemplate,
  argTypes: {
    children: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const children = within(modal).getByText('Children');
    expect(children).toBeInTheDocument();
  },
} satisfies Story;

export const WithOnlyPeopleSearch = {
  name: 'With Only People Search (A6, A7)',
  args: {
    ...defaultArgs,
    businesses: undefined,
    people: people11,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithOnlyBusinessSearch = {
  name: 'With Only Business Search (A6, A7)',
  args: {
    ...defaultArgs,
    people: undefined,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithoutSearch = {
  name: 'Without Search (A6)',
  args: {
    ...defaultArgs,
    me: undefined,
    businesses: { total: 5, list: businesses.list.slice(0, 5) },
    showSubunits: false,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');
    const buttons = within(modal).queryAllByRole('button', {
      name: /vis alle/i,
    });

    expect(buttons.length).toBe(0);

    const textInputs = within(modal).queryAllByRole('textbox');
    expect(textInputs.length).toBe(0);
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithError = {
  name: 'With Error',
  args: {
    ...defaultArgs,
  },
  render: ErrorTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const firstLink = within(modal).getAllByRole('link')[0];

    await fireEvent.click(firstLink);

    const alert = await within(modal).findByText(
      'Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.'
    );

    expect(alert).toBeInTheDocument();
  },
} satisfies Story;

export const WithNoBusinesses = {
  name: 'With No Businesses',
  args: {
    ...defaultArgs,
    people: undefined,
    me: undefined,
    businesses: { total: 0, list: [] },
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const titleElement = within(modal).getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent(
      dsI18n.t('ds_overlays:rolepicker.NoBusinessesErrorTitle')
    );
  },
} satisfies Story;

export const WithSpinner = {
  name: 'With Spinner',
  args: {
    ...defaultArgs,
  },
  render: SlowTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

const businesses10000: Paginated<Business> = {
  total: 10000,
  list: Array.from({ length: 10000 }, (_, i) => ({
    name: `Organization ${i}`,
    organizationNumber: `${i}`,
    isDeleted: false,
    unitType: 'AS',
    type: 'Organization',
  })),
};

export const With10000Businesses = {
  name: 'With 10000 Businesses',
  args: {
    ...defaultArgs,
    businesses: businesses10000,
    people: undefined,
  },
  render: ErrorTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithNoDeletedBusinesses = {
  name: 'With No Deleted Businesses',
  args: {
    ...defaultArgs,
    businesses: {
      total: 3,
      list: [
        {
          name: 'Samsung',
          organizationNumber: '312943218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS',
          subunits: [
            {
              name: 'Snapchat',
              organizationNumber: '123456623',
              isDeleted: false,
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
      ],
    },
    people: undefined,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const checkBox = within(modal).queryByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowInactiveBusinessesHeader'),
    });

    expect(checkBox).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithNoSubunits = {
  name: 'With No SubUnits',
  args: {
    ...defaultArgs,
    businesses: {
      total: 2,
      list: [
        {
          name: 'Samsung',
          organizationNumber: '312943218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Vanguard',
          organizationNumber: '332843218',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
      ],
    },
    people: undefined,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const checkBox = within(modal).queryByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowSubBusinessesHeading'),
    });

    expect(checkBox).not.toBeInTheDocument();
  },
} satisfies Story;
