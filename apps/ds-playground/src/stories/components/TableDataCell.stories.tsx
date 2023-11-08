import {
  getDataCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
} from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.DataCell>;

export const Preview = {
  args: {
    children: 'Example DataCell',
  },
} satisfies StoryObj<typeof Table.DataCell>;
