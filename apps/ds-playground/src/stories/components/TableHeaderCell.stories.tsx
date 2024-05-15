import {
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
} from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.HeaderCell,
  title: 'Komponenter/Table/HeaderCell',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    isSortable: { table: { category: category.props } },
    sortKey: { table: { category: category.props } },
    alignment: {
      table: {
        defaultValue: { summary: getTableCellAlignmentDefault() },
        category: category.props,
      },
    },
    as: {
      control: 'inline-radio',
      table: {
        defaultValue: { summary: getHeaderCellAsDefault() },
        category: category.props,
      },
    },
    // HTML
    colSpan: { table: { category: category.htmlAttribute } },
    scope: { table: { category: category.htmlAttribute } },
  },
  args: {
    children: 'header celle',
    className: 'headerCellWidth',
  },
} satisfies Meta<typeof Table.HeaderCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
