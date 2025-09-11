import { Meta } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import * as TableRowStories from './TableRow.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Table/Row',
  component: Table.Row,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Table.Row>;
export default meta;
export const Snapshots = createSingleStory(TableRowStories, meta);
