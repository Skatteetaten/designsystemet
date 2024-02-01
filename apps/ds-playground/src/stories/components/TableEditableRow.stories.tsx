import { JSX } from 'react';

import { positionArr } from '@skatteetaten/ds-core-utils';
import {
  Table,
  getTableRowExpandButtonPositionDefault,
} from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Table.EditableRow,
  title: 'komponenter/Table/EditableRow',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    editableContent: { table: { category: category.props } },
    editButtonPosition: {
      control: 'radio',
      options: [...positionArr],
      table: {
        category: category.props,
        defaultValue: { summary: getTableRowExpandButtonPositionDefault() },
        type: { summary: positionArr },
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
  parameters: {
    version: getVersion('ds-table'),
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
};
