import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Table } from '@skatteetaten/ds-table';

const meta = {
  component: Table.DataCell,
  title: 'Tester/Table/DataCell',
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
    colSpan: { table: { disable: true } },
    rowSpan: { table: { disable: true } },
    scope: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Table.DataCell>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'cake',
};

export const WithRef = {
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
    const table = canvas.getByRole('cell');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
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
    const dataCell = canvas.getByRole('cell');
    await expect(dataCell).toHaveClass('dummyClassname');
    await expect(dataCell).toHaveAttribute('id', 'htmlId');
    await expect(dataCell).toHaveAttribute('lang', 'nb');
    await expect(dataCell).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithThAndScope = {
  name: 'With Scope And As th (TableRow B2, TableHeader B1)',
  args: {
    ...defaultArgs,
    as: 'th',
    scope: 'row',
  },
  argTypes: {
    as: { table: { disable: false } },
    scope: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByRole('rowheader');
    await expect(dataCell).toHaveAttribute('scope', 'row');
  },
} satisfies Story;

export const WithChildren = {
  name: 'With children (TableRow A1)',
  args: {
    children: 'cellChildren',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('cellChildren')).toBeInTheDocument();
  },
} satisfies Story;
