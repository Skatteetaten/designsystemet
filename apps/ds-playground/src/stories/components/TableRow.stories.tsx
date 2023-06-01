import { positionArr } from '@skatteetaten/ds-core-utils';
import {
  getTableRowExpandButtonPositionDefault,
  Table,
} from '@skatteetaten/ds-table';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Row,
  title: 'komponenter/Table/Row',
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
  parameters: {
    version: getVersion('ds-table'),
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table.Row>;

const TemplateDefault: ComponentStory<typeof Table.Row> = (args) => (
  <Table caption={'row example'}>
    <Table.Body>
      <Table.Row {...args}>
        <Table.DataCell>{'example'}</Table.DataCell>
        <Table.DataCell>{'row'}</Table.DataCell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const TableRowDefault = TemplateDefault.bind({});
TableRowDefault.storyName = 'Default';
