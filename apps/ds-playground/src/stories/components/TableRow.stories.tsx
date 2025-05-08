import { JSX, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  getTableRowExpandButtonPositionDefault,
  Table,
} from '@skatteetaten/ds-table';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

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
    expandText: { control: 'text', table: { category: category.props } },
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

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [expandText, setexpandText] = useState('Vis mer');

    return (
      <Table caption={'row example'}>
        <Table.Body>
          <Table.Row
            expandText={expandText}
            expandButtonPosition={'right'}
            expandableContent={'Ekstra innhold'}
            isExpandable
            onExpand={() => setexpandText('Vis mindre')}
            onClose={() => setexpandText('Vis mer')}
          >
            <Table.DataCell key={'cell1'}>{'cell 1'}</Table.DataCell>
            <Table.DataCell key={'cell2'}>{'cell 2'}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
