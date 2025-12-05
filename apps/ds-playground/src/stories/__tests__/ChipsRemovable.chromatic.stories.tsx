import { Meta } from '@storybook/react-vite';

import { ChipsRemovable } from '@skatteetaten/ds-collections';

import * as ChipsRemovableStories from './ChipsRemovable.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Chips/Removable',
  component: ChipsRemovable,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof ChipsRemovable>;
export default meta;
export const Snapshots = createSingleStory(ChipsRemovableStories, meta);
