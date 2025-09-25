import { useRef } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test';

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
      name: 'Meta',
      organizationNumber: '212843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ApS',
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
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
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
      personId: '10090812345',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Melankolsk Aldrende Ape',
      personId: '13889999726',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Kari Nordmann',
      personId: '10101054321',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Per Hansen',
      personId: '20202012345',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lise Olsen',
      personId: '30303067890',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Nina Johansen',
      personId: '40404011223',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Ole Pettersen',
      personId: '50505044556',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Eva Nilsen',
      personId: '60606077889',
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
    minimumEntitiesForSearch: { table: { disable: true } },
    title: { table: { disable: true } },
    dismissOnEsc: { table: { disable: true } },
    dismissOnOutsideClick: { table: { disable: true } },
    hideCloseButton: { table: { disable: true } },
    showSubunits: { table: { disable: true } },
    showInactiveBusinesses: { table: { disable: true } },
    showDeceasedPeople: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onEntitySelect: { table: { disable: true } },
    onLogout: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: 'object',
    },
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const searchInput = within(modal).queryByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  },
} satisfies Story;

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
  parameters: {
    a11y: {
      test: 'off',
    },
    chromatic: { disableSnapshot: true },
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
  name: 'With Show Inactive Organizations And Show Less Button (A11, A18, B4)',
  args: {
    ...defaultArgs,
    people: undefined,
    me: undefined,
    showInactiveBusinesses: true,
    showSubunits: false,
  },
  parameters: { chromatic: { disableSnapshot: true } },
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

    const showMoreButton = await within(modal).findByRole('button', {
      name: /vis alle/i,
    });

    await fireEvent.click(showMoreButton);

    const links = await within(modal).findAllByRole('link');
    expect(links.length).toEqual(args.businesses?.list.length);
    expect(showMoreButton).toBeInTheDocument();
    const showLessButton = await within(modal).findByText(
      dsI18n.t('ds_overlays:rolepicker.ShowLess')
    );
    expect(showLessButton).toBeInTheDocument();
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
  parameters: { chromatic: { disableSnapshot: true } },
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

export const WithHideCloseIcon = {
  name: 'With Hide Close Icon (A3)',
  args: {
    ...defaultArgs,
    hideCloseButton: true,
  },
  render: DefaultTemplate,
  argTypes: {
    hideCloseButton: { table: { disable: false } },
  },
  parameters: { chromatic: { disableSnapshot: true } },
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
  parameters: { chromatic: { disableSnapshot: true } },
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');
    const button = within(modal).queryByRole('button', {
      name: /vis alle personer/i,
    });

    expect(button).toBeInTheDocument();

    const searchFields = within(modal).queryAllByRole('searchbox');
    expect(searchFields.length).toBe(1);
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');
    const button = within(modal).queryByRole('button', {
      name: /vis alle virksomheter/i,
    });

    expect(button).toBeInTheDocument();

    const searchFields = within(modal).queryAllByRole('searchbox');
    expect(searchFields.length).toBe(1);
  },
} satisfies Story;

export const WithoutSearch = {
  name: 'Without Search (A6)',
  args: {
    ...defaultArgs,
    businesses: { total: 4, list: businesses.list.slice(1, 3) },
    showSubunits: false,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');
    const buttons = within(modal).queryAllByRole('button', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowAll'),
    });

    expect(buttons.length).toBe(0);

    const searchFields = within(modal).queryAllByRole('searchbox');
    expect(searchFields.length).toBe(0);
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
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
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
    chromatic: {
      disableSnapshot: true,
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
    chromatic: {
      disableSnapshot: true,
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
          name: 'Samsung AS',
          organizationNumber: '312943218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS',
          subunits: [
            {
              name: 'Snapchat AS',
              organizationNumber: '123456623',
              isDeleted: false,
              type: 'Organization',
              unitType: 'AS',
            },
            {
              name: 'Statoil AS',
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
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
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
          name: 'Samsung AS',
          organizationNumber: '312943218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Vanguard AS',
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
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
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

const peopleWithDeceased = {
  ...people11,
  list: people11.list.map((person, index) => ({
    ...person,
    isDeleted: index % 2 === 0,
  })),
};

export const WithDeceasedPeople = {
  name: 'With Deceased People',
  args: {
    ...defaultArgs,
    businesses: undefined,
    me: undefined,
    people: peopleWithDeceased,
    showDeceasedPeople: true,
  },
  render: DefaultTemplate,
  argTypes: {
    showDeceasedPeople: { table: { disable: false } },
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');
    const checkBox = await within(modal).findByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowDeceasedPersons'),
    });

    expect(checkBox).toBeChecked();

    const button = await within(modal).findByRole('button', {
      name: /vis alle/i,
    });

    await fireEvent.click(button);

    const links = await within(modal).findAllByRole('link');
    expect(links.length).toEqual(people11?.list.length);
  },
} satisfies Story;

export const WithNoDoubleUnitTypes = {
  name: 'With No Double Unit Types',
  args: {
    ...defaultArgs,
    showSubunits: false,
    people: undefined,
    me: undefined,
  },
  render: DefaultTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const titles = await within(modal).findAllByRole('heading', { level: 3 });

    titles.forEach((title) => {
      const titleText = title.textContent?.toUpperCase() || '';
      const words = title.textContent?.split(' ') || [];
      const unitType = words[words.length - 1];
      expect(titleText.endsWith(` ${unitType} ${unitType}`)).toBe(false);
    });
  },
} satisfies Story;

export const WithMinimumEntitiesForSearch = {
  name: 'With Minimum Entities For Search (A19)',
  args: {
    ...defaultArgs,
    minimumEntitiesForSearch: 17, // Det finnes 16 personer/virksomheter i rollevelgeren, så søkefeltet vises ikke
  },
  render: DefaultTemplate,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const searchInput = within(modal).queryByRole('searchbox');
    expect(searchInput).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithCloseError = {
  name: 'With Close Error',
  args: {
    ...defaultArgs,
  },
  render: ErrorTemplate,
  argTypes: {
    me: { table: { disable: false } },
    people: { table: { disable: false } },
    businesses: { table: { disable: false } },
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);

    const modal = await canvas.findByRole('dialog');

    const firstLink = within(modal).getAllByRole('link')[0];

    await fireEvent.click(firstLink);

    const alertText = await within(modal).findByText(
      'Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.'
    );

    const alert = alertText.parentElement as HTMLDivElement;

    expect(alert).toBeInTheDocument();

    const iconButton = within(alert).getByRole('button');
    expect(iconButton).toBeInTheDocument();
    await fireEvent.click(iconButton);
    await waitFor(() => expect(alert).not.toBeInTheDocument());

    expect(firstLink).toHaveFocus();
  },
} satisfies Story;
