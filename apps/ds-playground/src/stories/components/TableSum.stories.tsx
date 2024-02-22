import { JSX } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Table, getTableSumAlignmentDefault } from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

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
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('ds_tables:tablesum.Sum') },
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
  parameters: {
    version: getVersion('ds-table'),
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
