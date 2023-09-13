import { Table } from '@skatteetaten/ds-table';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
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
    labelAlignment: {
      table: { category: category.props },
    },
    valueAlignment: {
      table: { category: category.props },
    },
    hasTopSeparator: {
      table: { category: category.props },
    },
    colSpan: {
      table: { category: category.htmlAttribute },
    },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-table'),
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} satisfies Meta<typeof Table.Sum>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Table.Sum> = (args) => (
  <Table caption={'testTable'}>
    <Table.Sum {...args} />
  </Table>
);

export const DataCellDefault = {
  render: TemplateDefault,
  name: 'Default',
  args: {
    children: '1 000kr',
  },
} satisfies Story;
