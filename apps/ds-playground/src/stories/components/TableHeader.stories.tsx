import { Table } from '@skatteetaten/ds-table';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Header,
  title: 'komponenter/Table/Header',
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
} as ComponentMeta<typeof Table.Header>;

const TemplateDefault: ComponentStory<typeof Table.Header> = (args) => (
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

export const TableRowDefault = TemplateDefault.bind({});
TableRowDefault.storyName = 'Default';
