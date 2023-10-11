import {
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
  tableCellAsArr,
} from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

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
      options: [...tableCellAsArr],
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
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.HeaderCell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DataCellDefault = {
  name: 'Default',
  args: {
    children: 'Example TableHeaderCell',
  },
} satisfies Story;
