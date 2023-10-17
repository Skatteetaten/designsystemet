import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Header,
  title: 'Komponenter/Table/Header',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.Header>;

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

export const Preview = {
  render: TemplateDefault,
} satisfies StoryObj<typeof Table.Header>;
