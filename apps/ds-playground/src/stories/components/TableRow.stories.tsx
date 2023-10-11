import { positionArr } from '@skatteetaten/ds-core-utils';
import {
  getTableRowExpandButtonPositionDefault,
  Table,
} from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Table.Row,
  title: 'Komponenter/Table/Row',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    isExpandable: {
      table: {
        category: category.props,
      },
    },
    isExpanded: {
      table: {
        category: category.props,
      },
    },
    expandButtonAriaDescribedby: {
      table: {
        category: category.aria,
      },
    },
    expandButtonTitle: {
      table: {
        category: category.props,
      },
    },
    expandButtonPosition: {
      options: [...positionArr],
      control: 'radio',
      table: {
        defaultValue: { summary: getTableRowExpandButtonPositionDefault() },
        category: category.props,
      },
    },
    onExpand: {
      control: false,
      table: {
        category: category.props,
      },
    },
    onClose: {
      control: false,
      table: {
        category: category.props,
      },
    },
    expandableContent: {
      control: 'text',
      table: {
        category: category.props,
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { code: null } },
    version: getVersion('ds-table'),
  },
} as Meta<typeof Table.Row>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Table.Row> = (args) => (
  <Table caption={'row example'}>
    <Table.Body>
      <Table.Row {...args}>
        <Table.DataCell>{'example'}</Table.DataCell>
        <Table.DataCell>{'row'}</Table.DataCell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const TableRowDefault = {
  render: TemplateDefault,
  name: 'Default',
} satisfies Story;
