import { Table } from '@skatteetaten/ds-table';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const meta = {
  component: Table.HeaderCell,
  title: 'Tester/Table/HeaderCell',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    alignment: { table: { disable: true } },
    as: { table: { disable: true } },
    children: { table: { disable: true } },
    colSpan: { table: { disable: true } },
    isSortable: { table: { disable: true } },
    scope: { table: { disable: true } },
    sortKey: { table: { disable: true } },
  },
} satisfies Meta<typeof Table.HeaderCell>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'cake',
};

const Template: StoryFn<typeof Table.HeaderCell> = (args) => (
  <table>
    <Table.Header>
      <Table.Row>
        {/* eslint-disable-next-line testing-library/no-node-access */}
        <Table.HeaderCell {...args}>{args.children}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  </table>
);

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',

  args: {
    ...defaultArgs,
    ref: (instance: HTMLTableCellElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },

  argTypes: {
    ref: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('columnheader');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes (FA2-5)',

  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },

  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByRole('columnheader');
    await expect(dataCell).toHaveClass('dummyClassname');
    await expect(dataCell).toHaveAttribute('id', 'htmlId');
    await expect(dataCell).toHaveAttribute('lang', 'nb');
    await expect(dataCell).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithChildren = {
  render: Template,
  name: 'With Children (Table A8)',

  args: {
    children: 'columnheader',
  },

  argTypes: {
    children: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByText('columnheader');
    await expect(dataCell).toBeInTheDocument();
  },
} satisfies Story;
