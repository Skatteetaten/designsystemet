import { positionArr } from '@skatteetaten/ds-core-utils';
import {
  getTableRowExpandButtonPositionDefault,
  Table,
} from '@skatteetaten/ds-table';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Row,
  title: 'Komponenter/Table/Row',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
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
        type: { summary: positionArr },
      },
    },
    expandableContent: {
      control: 'text',
      table: {
        category: category.props,
      },
    },
    // Event
    onExpand: {
      control: false,
      table: {
        category: category.event,
      },
    },
    onClose: {
      control: false,
      table: {
        category: category.event,
      },
    },
  },
  parameters: {
    version: getVersion('ds-table'),
  },
} as Meta<typeof Table.Row>;

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

export const Preview = {
  render: TemplateDefault,
} satisfies StoryObj<typeof Table.Row>;
