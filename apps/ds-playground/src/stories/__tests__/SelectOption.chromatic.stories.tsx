import { Meta } from '@storybook/react-vite';

import { Select } from '@skatteetaten/ds-forms';

import * as SelectOptionStories from './SelectOption.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Select/Option',
  component: Select.Option,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Select.Option>;
export default meta;
export const Snapshots = createSingleStory(SelectOptionStories, meta);
