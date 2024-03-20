import { JSX } from 'react';

import { positionArr } from '@skatteetaten/ds-core-utils';
import {
  getTableRowExpandButtonPositionDefault,
  Table,
} from '@skatteetaten/ds-table';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Table.Row,
  title: 'Komponenter/Table/Row',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    isExpandable: { table: { category: category.props } },
    isExpanded: { table: { category: category.props } },
    expandButtonAriaDescribedby: { table: { category: category.aria } },
    expandButtonTitle: { table: { category: category.props } },
    expandButtonPosition: {
      options: [...positionArr],
      control: 'radio',
      table: {
        defaultValue: { summary: getTableRowExpandButtonPositionDefault() },
        category: category.props,
        type: { summary: positionArr },
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
  parameters: {
    version: getVersion('ds-table'),
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
