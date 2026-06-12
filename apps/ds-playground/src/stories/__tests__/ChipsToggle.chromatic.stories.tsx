import { Meta } from '@storybook/react-vite';

import { ChipsToggle } from '@skatteetaten/ds-collections';

import * as ChipsToggleStories from './ChipsToggle.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Chips/Toggle',
  component: ChipsToggle,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof ChipsToggle>;
export default meta;
export const Snapshots = createSingleStory(ChipsToggleStories, meta);
