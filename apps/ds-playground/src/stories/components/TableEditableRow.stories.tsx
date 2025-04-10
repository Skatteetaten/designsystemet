import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  Table,
  getTableRowExpandButtonPositionDefault,
} from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.EditableRow,
  title: 'Komponenter/Table/EditableRow',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    editButtonRef: { control: false, table: { category: category.props } },
    editableContent: { table: { category: category.props } },
    editableContentRef: { control: false, table: { category: category.props } },
    editButtonPosition: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTableRowExpandButtonPositionDefault() },
      },
    },
    // Aria
    editButtonAriaDescribedby: { table: { category: category.aria } },
    // Event
    onEdit: { table: { category: category.event } },
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
