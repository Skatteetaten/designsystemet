import { Meta } from '@storybook/react-vite';

import { Radio } from '@skatteetaten/ds-forms';

import * as RadioStories from './Radio.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/RadioGroup/Radio',
  component: Radio,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'input',
  },
} satisfies Meta<typeof Radio>;
export default meta;
export const Snapshots = createSingleStory(RadioStories, meta);
