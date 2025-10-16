import { Meta } from '@storybook/react-vite';

import { Icon } from '@skatteetaten/ds-icons';

import * as IconStories from './Icon.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Icon',
  component: Icon,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Icon>;
export default meta;
export const Snapshots = createSingleStory(IconStories, meta);
