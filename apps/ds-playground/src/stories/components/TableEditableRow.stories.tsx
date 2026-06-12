import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import { category, htmlEventDescription } from '../../../.storybook/helpers';

const meta = {
  component: Table.EditableRow,
  title: 'Komponenter/Table/EditableRow',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    editButtonRef: { control: false, table: { category: category.props } },
    editableContent: { table: { category: category.props } },
    editableContentRef: { control: false, table: { category: category.props } },
    editButtonPosition: { table: { category: category.props } },
    isNew: { table: { category: category.props } },
    // Aria
    editButtonAriaDescribedby: { table: { category: category.aria } },
    // Event
    onEdit: { ...htmlEventDescription },
  },
  args: {
    children: [
      <Table.DataCell key={'cell1'}>{'cell 1'}</Table.DataCell>,
      <Table.DataCell key={'cell2'}>{'cell 2'}</Table.DataCell>,
    ],
  },
} satisfies Meta<typeof Table.EditableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  decorators: [
    (Story): JSX.Element => (
      <Table caption={'editable row example'}>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>
    ),
  ],
} satisfies Story;
