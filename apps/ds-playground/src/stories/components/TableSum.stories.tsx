import { Table } from '@skatteetaten/ds-table';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Sum,
  title: 'Komponenter/Table/Sum',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    sumText: {
      table: { category: category.props },
    },
    hasTopSeparator: {
      table: { category: category.props },
    },
    colSpan: {
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
} as ComponentMeta<typeof Table.Sum>;

const TemplateDefault: ComponentStory<typeof Table.Sum> = (args) => (
  <Table caption={'testTable'}>
    <Table.Sum {...args} />
  </Table>
);

export const DataCellDefault = TemplateDefault.bind({});
DataCellDefault.storyName = 'Default';

DataCellDefault.args = {
  children: '1 000kr',
};
