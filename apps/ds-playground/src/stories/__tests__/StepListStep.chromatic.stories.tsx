import { Meta } from '@storybook/react-vite';

import { StepList } from '@skatteetaten/ds-collections';

import * as StepListStepStories from './StepListStep.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/StepList/Step',
  component: StepList.Step,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof StepList.Step>;
export default meta;
export const Snapshots = createSingleStory(StepListStepStories, meta);
