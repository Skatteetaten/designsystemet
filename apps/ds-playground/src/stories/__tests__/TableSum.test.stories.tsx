import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const meta = {
  component: Table.Sum,
  title: 'Tester/Table/Sum',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    colSpan: { table: { disable: true } },
    hasTopSeparator: { table: { disable: true } },
    labelAlignment: { table: { disable: true } },
    sumText: { table: { disable: true } },
    valueAlignment: { table: { disable: true } },
  },
} satisfies Meta<typeof Table.Sum>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Table.Sum> = (args) => (
  <Table.Sum {...args}>{'9 000 kr'}</Table.Sum>
);

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLTableRowElement | null): void => {
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
    const table = canvas.getByRole('row');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
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
    const sum = canvas.getByTestId('123ID');
    await expect(sum).toHaveClass('dummyClassname');
    await expect(sum).toHaveAttribute('id', 'htmlId');
    await expect(sum).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;
