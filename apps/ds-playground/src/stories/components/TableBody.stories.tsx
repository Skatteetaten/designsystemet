import { Table } from '@skatteetaten/ds-table';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Body,
  title: 'komponenter/Table/Body',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  parameters: {
    version: getVersion('ds-table'),
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table.Body>;

const TemplateDefault: ComponentStory<typeof Table.Body> = (args) => (
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

export const TableRowDefault = TemplateDefault.bind({});
TableRowDefault.storyName = 'Default';
