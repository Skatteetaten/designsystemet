import { Meta } from '@storybook/react-vite';

import { Popover } from '@skatteetaten/ds-overlays';

import * as PopoverTriggerStories from './PopoverTrigger.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Popover/Trigger',
  component: Popover.Trigger,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Popover.Trigger>;
export default meta;
export const Snapshots = createSingleStory(PopoverTriggerStories, meta);
