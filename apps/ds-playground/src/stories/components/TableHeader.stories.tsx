import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Table.Header,
  title: 'komponenter/Table/Header',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.Header>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Table.Header> = (args) => (
  <Table caption={'header example'}>
    <Table.Header {...args}>
      <Table.Row>
        <Table.HeaderCell scope={'col'}>{'example'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'header'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'with'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'some'}</Table.HeaderCell>
        <Table.HeaderCell scope={'col'}>{'columns'}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  </Table>
);

export const TableRowDefault = {
  render: TemplateDefault,
  name: 'Default',
} satisfies Story;
