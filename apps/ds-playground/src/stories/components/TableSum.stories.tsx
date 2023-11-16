import { Table } from '@skatteetaten/ds-table';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

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
      table: { category: category.props, defaultValue: { summary: 'Sum' } },
    },
    labelAlignment: {
      table: { category: category.props, defaultValue: { summary: 'right' } },
    },
    valueAlignment: {
      table: { category: category.props, defaultValue: { summary: 'right' } },
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
  },
} satisfies Meta<typeof Table.Sum>;

const TemplateDefault: StoryFn<typeof Table.Sum> = (args) => (
  <Table caption={'testTable'}>
    <Table.Sum {...args} />
  </Table>
);

export const Preview = {
  render: TemplateDefault,
  args: {
    children: '1 000kr',
  },
} satisfies StoryObj<typeof Table.Sum>;
