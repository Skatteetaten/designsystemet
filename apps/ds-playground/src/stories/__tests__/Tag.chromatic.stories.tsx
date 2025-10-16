import { Meta } from '@storybook/react-vite';

import { Tag } from '@skatteetaten/ds-status';

import * as TagStories from './Tag.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Tag',
  component: Tag,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Tag>;
export default meta;
export const Snapshots = createSingleStory(TagStories, meta);
