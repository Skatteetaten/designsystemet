import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { defaultTableSumText } from 'libs/ds-table/src/TableSum/TableSum';

import { Table } from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.Sum,
  title: 'Komponenter/Table/Sum',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    sumText: {
      table: {
        category: category.props,
        defaultValue: { summary: defaultTableSumText },
      },
    },
    labelAlignment: { table: { category: category.props } },
    valueAlignment: { table: { category: category.props } },
    hasTopSeparator: { table: { category: category.props } },
    // HTML
    colSpan: { table: { category: category.htmlAttribute } },
  },
  args: {
    children: '1 000kr',
  },
} satisfies Meta<typeof Table.Sum>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  decorators: [
    (Story): JSX.Element => (
      <Table caption={'sum example'} className={'width100'}>
        <Story />
      </Table>
    ),
  ],
} satisfies Story;
