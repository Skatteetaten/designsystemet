import { Meta } from '@storybook/react-vite';

import { Select } from '@skatteetaten/ds-forms';

import * as SelectStories from './Select.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Select',
  component: Select,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Select>;
export default meta;
export const Snapshots = createSingleStory(SelectStories, meta);
export const Mobile = createSingleStory(SelectStories, meta, {
  viewport: '--mobile',
});
