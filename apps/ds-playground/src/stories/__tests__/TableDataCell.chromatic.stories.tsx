import { Meta } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import * as TableDataCellStories from './TableDataCell.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Table/DataCell',
  component: Table.DataCell,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Table.DataCell>;
export default meta;
export const Snapshots = createSingleStory(TableDataCellStories, meta);
