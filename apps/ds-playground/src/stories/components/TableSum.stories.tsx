import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  Table,
  getTableSumAlignmentDefault,
  getTableSumTextDefault,
} from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';

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
      table: {
        category: category.props,
        defaultValue: { summary: getTableSumTextDefault() },
      },
    },
    labelAlignment: {
      table: {
        category: category.props,
        defaultValue: { summary: getTableSumAlignmentDefault() },
      },
    },
    valueAlignment: {
      table: {
        category: category.props,
        defaultValue: { summary: getTableSumAlignmentDefault() },
      },
    },
    hasTopSeparator: { table: { category: category.props } },
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
