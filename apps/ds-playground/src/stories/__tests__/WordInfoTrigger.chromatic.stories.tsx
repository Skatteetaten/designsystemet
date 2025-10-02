import { Meta } from '@storybook/react-vite';

import { WordInfo } from '@skatteetaten/ds-overlays';

import * as WordInfoTriggerStories from './WordInfoTrigger.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/WordInfo/Trigger',
  component: WordInfo.Trigger,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: '> button',
  },
} satisfies Meta<typeof WordInfo.Trigger>;
export default meta;
export const Snapshots = createSingleStory(WordInfoTriggerStories, meta);
