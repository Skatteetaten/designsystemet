import { Meta } from '@storybook/react-vite';

import { Chips } from '@skatteetaten/ds-collections';

import * as ChipsStories from './Chips.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Chips',
  component: Chips,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Chips>;
export default meta;
export const Snapshots = createSingleStory(ChipsStories, meta);
