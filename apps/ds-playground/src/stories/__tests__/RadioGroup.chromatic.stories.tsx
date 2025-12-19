import { Meta } from '@storybook/react-vite';

import { RadioGroup } from '@skatteetaten/ds-forms';

import * as RadioGroupStories from './RadioGroup.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/RadioGroup',
  component: RadioGroup,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'input',
  },
} satisfies Meta<typeof RadioGroup>;
export default meta;
export const Snapshots = createSingleStory(RadioGroupStories, meta);
