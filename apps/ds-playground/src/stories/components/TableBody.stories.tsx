import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.Body,
  title: 'Komponenter/Table/Body',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  args: {
    children: [
      <Table.Row key={'row1'}>
        <Table.DataCell>{'cell 11'}</Table.DataCell>
        <Table.DataCell>{'cell 12'}</Table.DataCell>
      </Table.Row>,
      <Table.Row key={'row2'}>
        <Table.DataCell>{'cell 21'}</Table.DataCell>
        <Table.DataCell>{'cell 22'}</Table.DataCell>
      </Table.Row>,
    ],
  },
} satisfies Meta<typeof Table.Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
