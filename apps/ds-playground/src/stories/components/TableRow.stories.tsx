import { JSX, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getTableRowExpandButtonPositionDefault,
  getTableRowExpandButtonTitleDefault,
  getTableRowIsExpandedDefault,
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
    isExpandable: {
      control: 'boolean',
      table: { category: category.props },
      description: 'Om raden er utvidbar.',
    },
    isExpanded: {
      control: 'boolean',
      table: {
        defaultValue: { summary: getTableRowIsExpandedDefault().toString() },
        category: category.props,
      },
    },
    expandButtonAriaDescribedby: { table: { category: category.aria } },
    expandButtonTitle: {
      table: {
        defaultValue: { summary: getTableRowExpandButtonTitleDefault() },
        category: category.props,
      },
    },
    expandButtonPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
      table: {
        defaultValue: { summary: getTableRowExpandButtonPositionDefault() },
        category: category.props,
      },
      description: 'Posisjonen til utvidelsesknappen.',
    },
    expandableContent: {
      control: 'text',
      table: { category: category.props },
    },
    showExpandButtonTitle: { table: { category: category.props } },
    // Event
    onExpand: {
      control: false,
      table: { category: category.event },
      description: 'Callback når raden utvides.',
    },
    onClose: {
      control: false,
      table: { category: category.event },
      description: 'Callback når raden lukkes.',
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
