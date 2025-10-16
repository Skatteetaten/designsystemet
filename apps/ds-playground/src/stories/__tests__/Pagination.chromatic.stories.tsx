import { Meta } from '@storybook/react-vite';

import { Pagination } from '@skatteetaten/ds-navigation';

import * as PaginationStories from './Pagination.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Pagination',
  component: Pagination,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Pagination>;
export default meta;
export const Snapshots = createSingleStory(PaginationStories, meta);
