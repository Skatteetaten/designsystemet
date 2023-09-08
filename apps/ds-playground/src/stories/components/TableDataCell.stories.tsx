import {
  getDataCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
} from '@skatteetaten/ds-table';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

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
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.DataCell>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Table.DataCell> = (args) => (
  <Table.DataCell {...args} />
);

export const DataCellDefault = {
  render: TemplateDefault,
  name: 'Default',

  args: {
    children: 'Example DataCell',
  },
} satisfies Story;
