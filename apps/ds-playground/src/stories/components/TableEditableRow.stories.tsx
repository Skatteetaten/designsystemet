import { positionArr } from '@skatteetaten/ds-core-utils';
import { Table } from '@skatteetaten/ds-table';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
  parameters: {
    version: getVersion('ds-table'),
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table.EditableRow>;

const TemplateDefault: ComponentStory<typeof Table.EditableRow> = (args) => (
  <Table caption={'row example'}>
    <Table.Body>
      <Table.EditableRow {...args}>
        <Table.DataCell>{'example'}</Table.DataCell>
        <Table.DataCell>{'row'}</Table.DataCell>
      </Table.EditableRow>
    </Table.Body>
  </Table>
);

export const TableRowDefault = TemplateDefault.bind({});
TableRowDefault.storyName = 'Default';
