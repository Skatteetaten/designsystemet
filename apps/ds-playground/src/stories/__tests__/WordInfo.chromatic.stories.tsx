import { Meta } from '@storybook/react-vite';

import { WordInfo } from '@skatteetaten/ds-overlays';

import * as WordInfoStories from './WordInfo.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/WordInfo',
  component: WordInfo,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: ['button', 'a'],
  },
} satisfies Meta<typeof WordInfo>;
export default meta;
export const Snapshots = createSingleStory(WordInfoStories, meta);
