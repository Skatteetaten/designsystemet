import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  getTableRowExpandButtonPositionDefault,
  Table,
} from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Table.Row,
  title: 'Komponenter/Table/Row',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    isExpandable: { table: { category: category.props } },
    isExpanded: { table: { category: category.props } },
    expandButtonAriaDescribedby: { table: { category: category.aria } },
    expandButtonTitle: { table: { category: category.props } },
    expandButtonPosition: {
      control: 'inline-radio',
      table: {
        defaultValue: { summary: getTableRowExpandButtonPositionDefault() },
        category: category.props,
      },
    },
    expandableContent: {
      control: 'text',
      table: { category: category.props },
    },
    // Event
    onExpand: {
      control: false,
      table: { category: category.event },
    },
    onClose: {
      control: false,
      table: { category: category.event },
    },
  },
  args: {
    children: [
      <Table.DataCell key={'cell1'}>{'cell 1'}</Table.DataCell>,
      <Table.DataCell key={'cell2'}>{'cell 2'}</Table.DataCell>,
    ],
  },
} satisfies Meta<typeof Table.Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  decorators: [
    (Story): JSX.Element => (
      <Table caption={'row example'}>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>
    ),
  ],
} satisfies Story;
