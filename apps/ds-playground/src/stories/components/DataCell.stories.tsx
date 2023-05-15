import { Table } from '@skatteetaten/ds-table';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';

export default {
  component: Table.DataCell,
  title: 'Komponenter/Table/DataCell',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
  },
} as ComponentMeta<typeof Table.DataCell>;

const TemplateDefault: ComponentStory<typeof Table.DataCell> = (args) => (
  <Table.DataCell {...args} />
);

export const DataCellDefault = TemplateDefault.bind({});
DataCellDefault.storyName = 'Default';

DataCellDefault.args = {
  children: 'Dette er en td',
};
