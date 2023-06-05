import {
  getDataCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
} from '@skatteetaten/ds-table';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table.DataCell>;

const TemplateDefault: ComponentStory<typeof Table.DataCell> = (args) => (
  <Table.DataCell {...args} />
);

export const DataCellDefault = TemplateDefault.bind({});
DataCellDefault.storyName = 'Default';

DataCellDefault.args = {
  children: 'Example DataCell',
};
