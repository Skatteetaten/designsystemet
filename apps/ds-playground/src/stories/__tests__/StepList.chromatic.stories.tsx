import { Meta } from '@storybook/react-vite';

import { StepList } from '@skatteetaten/ds-collections';

import * as StepListStories from './StepList.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/StepList',
  component: StepList,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof StepList>;
export default meta;
export const Snapshots = createSingleStory(StepListStories, meta);
