import { Meta } from '@storybook/react-vite';

import { Popover } from '@skatteetaten/ds-overlays';

import * as PopoverContentStories from './PopoverContent.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Popover/Content',
  component: Popover.Content,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Popover.Content>;
export default meta;
export const Snapshots = createSingleStory(PopoverContentStories, meta);
