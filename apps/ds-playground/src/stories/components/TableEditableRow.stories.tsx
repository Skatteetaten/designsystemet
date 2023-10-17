import { positionArr } from '@skatteetaten/ds-core-utils';
import { Table } from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.EditableRow,
  title: 'komponenter/Table/EditableRow',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    onEdit: {
      table: { category: category.props },
    },
    editableContent: {
      table: { category: category.props },
    },
    editButtonPosition: {
      control: 'radio',
      options: [...positionArr],
      table: { category: category.props },
    },
    editButtonAriaDescribedby: {
      table: { category: category.aria },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-table'),
  },
} satisfies Meta<typeof Table.EditableRow>;

const TemplateDefault: StoryFn<typeof Table.EditableRow> = (args) => (
  <Table caption={'row example'}>
    <Table.Body>
      <Table.EditableRow {...args}>
        <Table.DataCell>{'example'}</Table.DataCell>
        <Table.DataCell>{'row'}</Table.DataCell>
      </Table.EditableRow>
    </Table.Body>
  </Table>
);

export const Preview = {
  render: TemplateDefault,
} satisfies StoryObj<typeof Table.EditableRow>;
