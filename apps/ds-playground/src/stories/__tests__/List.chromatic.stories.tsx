import { Meta } from '@storybook/react-vite';

import { List } from '@skatteetaten/ds-typography';

import * as ListStories from './List.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/List/List',
  component: List,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof List>;
export default meta;
export const Snapshots = createSingleStory(ListStories, meta);
