import { Meta } from '@storybook/react-vite';

import { Table } from '@skatteetaten/ds-table';

import * as TableEditableRowStories from './TableEditableRow.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Table/EditableRow',
  component: Table.EditableRow,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Table.EditableRow>;
export default meta;
export const Snapshots = createSingleStory(TableEditableRowStories, meta);
