import { Meta, StoryObj } from '@storybook/react';

import {
  getDataCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
} from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.DataCell,
  title: 'Komponenter/Table/DataCell',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    as: {
      table: {
        defaultValue: { summary: getDataCellAsDefault() },
        category: category.props,
      },
    },
    alignment: {
      table: {
        defaultValue: { summary: getTableCellAlignmentDefault() },
        category: category.props,
      },
    },
    // HTML
    colSpan: { table: { category: category.htmlAttribute } },
    rowSpan: { table: { category: category.htmlAttribute } },
    scope: { table: { category: category.htmlAttribute } },
  },
  args: {
    children: 'cell 1',
  },
} satisfies Meta<typeof Table.DataCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
