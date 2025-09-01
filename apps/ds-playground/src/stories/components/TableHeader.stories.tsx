import { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.Header,
  title: 'Komponenter/Table/Header',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
  },
  args: {
    children: [
      <Table.Row key={'row1'}>
        <Table.HeaderCell scope={'col'}>{'header cell 1'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'header cell 2'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'header cell 3'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'header cell 4'}</Table.HeaderCell>
      </Table.Row>,
    ],
  },
} satisfies Meta<typeof Table.Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
