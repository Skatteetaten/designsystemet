import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Table.Body,
  title: 'komponenter/Table/Body',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.Body>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Table.Body> = (args) => (
  <Table caption={'body example'}>
    <Table.Body {...args}>
      <Table.Row>
        <Table.DataCell>{'example'}</Table.DataCell>
        <Table.DataCell>{'body'}</Table.DataCell>
      </Table.Row>
      <Table.Row>
        <Table.DataCell>{'example'}</Table.DataCell>
        <Table.DataCell>{'body'}</Table.DataCell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const TableRowDefault = {
  render: TemplateDefault,
  name: 'Default',
} satisfies Story;
