import {
  getDataCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
} from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

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
    scope: {
      table: { category: category.htmlAttribute },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.DataCell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DataCellDefault = {
  name: 'Default',
  args: {
    children: 'Example DataCell',
  },
} satisfies Story;
