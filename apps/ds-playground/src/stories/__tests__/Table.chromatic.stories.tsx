import { Meta } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import * as TableStories from './Table.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Table',
  component: Table,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Table>;
export default meta;
export const Snapshots = createSingleStory(TableStories, meta);
export const BreakpointM = createSingleStory(TableStories, meta, {
  viewport: '--breakpoint-m',
});
