import {
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  Table,
  tableCellAsArr,
} from '@skatteetaten/ds-table';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-table'),
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table.HeaderCell>;

const TemplateDefault: ComponentStory<typeof Table.HeaderCell> = (args) => (
  <Table.HeaderCell {...args} />
);

export const DataCellDefault = TemplateDefault.bind({});
DataCellDefault.storyName = 'Default';

DataCellDefault.args = {
  children: 'Example TableHeaderCell',
};
