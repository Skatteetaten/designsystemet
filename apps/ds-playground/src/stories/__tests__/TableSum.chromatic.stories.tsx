import { Meta } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import * as TableSumStories from './TableSum.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Table/Sum',
  component: Table.Sum,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Table.Sum>;
export default meta;
export const Snapshots = createSingleStory(TableSumStories, meta);
