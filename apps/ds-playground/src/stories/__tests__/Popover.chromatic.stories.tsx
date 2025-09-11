import { Meta } from '@storybook/react-vite';

import { Popover } from '@skatteetaten/ds-overlays';

import * as PopoverStories from './Popover.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Popover',
  component: Popover,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Popover>;
export default meta;
export const Snapshots = createSingleStory(PopoverStories, meta);
