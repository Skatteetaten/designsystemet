import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Table.Header,
  title: 'Komponenter/Table/Header',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
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
  parameters: {
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
