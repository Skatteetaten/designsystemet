///* eslint-disable sonarjs/no-duplicate-string */
import { Table } from '@skatteetaten/ds-table';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Table.Row,
  title: 'komponenter/Table/Row',
  argTypes: {
    //  // Props
    children: { table: { category: category.props } },
    //  expandedContent: {
    //    table: {
    //      category: category.props,
    //    },
    //  },
  },
  //} as ComponentMeta<typeof Table.Row>;
  parameters: {
    version: getVersion('ds-table'),
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table.Row>;
//} as Meta<RowProps>;

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
//const baseArgs = {
//  //caption: 'Jeg er en tabell.',
//  //children: 'Klikk',
//};

//TableRowDefault.args = {
//  ...baseArgs,
//};
