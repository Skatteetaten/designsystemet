import { Meta } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import * as TableHeaderCellStories from './TableHeaderCell.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Table/HeaderCell',
  component: Table.HeaderCell,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'button',
  },
} satisfies Meta<typeof Table.HeaderCell>;
export default meta;
export const Snapshots = createSingleStory(TableHeaderCellStories, meta);
