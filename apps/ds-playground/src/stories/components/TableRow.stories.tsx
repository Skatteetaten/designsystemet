import { JSX, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
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
    expandButtonPosition: { table: { category: category.props } },
    expandableContent: { control: 'text', table: { category: category.props } },
    expandButtonProps: { control: false, table: { category: category.props } },
    showExpandButtonTitle: { table: { category: category.props } },
    // Event
    onExpand: { ...htmlEventDescription },
    onClose: { ...htmlEventDescription },
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
    const [expandButtonTitle, setExpandButtonTitle] = useState('Vis mer');

    return (
      <Table caption={'row example'}>
        <Table.Body>
          <Table.Row
            expandButtonTitle={expandButtonTitle}
            expandableContent={'Ekstra innhold'}
            showExpandButtonTitle
            isExpandable
            onExpand={() => setExpandButtonTitle('Vis mindre')}
            onClose={() => setExpandButtonTitle('Vis mer')}
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
