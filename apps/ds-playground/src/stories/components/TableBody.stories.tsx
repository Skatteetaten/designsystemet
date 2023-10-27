import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Body,
  title: 'Komponenter/Table/Body',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.Body>;

const Template: StoryFn<typeof Table.Body> = (args) => (
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

export const Preview = {
  render: Template,
} satisfies StoryObj<typeof Table.Body>;
