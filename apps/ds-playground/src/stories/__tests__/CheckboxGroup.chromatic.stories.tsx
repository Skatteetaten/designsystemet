import { Meta } from '@storybook/react-vite';

import { CheckboxGroup } from '@skatteetaten/ds-forms';

import * as CheckboxGroupStories from './CheckboxGroup.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof CheckboxGroup>;
export default meta;
export const Snapshots = createSingleStory(CheckboxGroupStories, meta);
