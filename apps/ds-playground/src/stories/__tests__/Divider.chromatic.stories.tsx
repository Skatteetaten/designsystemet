import { Meta } from '@storybook/react-vite';

import { Divider } from '@skatteetaten/ds-content';

import * as DividerStories from './Divider.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Divider',
  component: Divider,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Divider>;
export default meta;
export const Snapshots = createSingleStory(DividerStories, meta);
