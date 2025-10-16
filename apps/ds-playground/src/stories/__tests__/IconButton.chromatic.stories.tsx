import { Meta } from '@storybook/react-vite';

import { IconButton } from '@skatteetaten/ds-buttons';

import * as IconButtonStories from './IconButton.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/IconButton',
  component: IconButton,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: '> button',
  },
} satisfies Meta<typeof IconButton>;
export default meta;
export const Snapshots = createSingleStory(IconButtonStories, meta);
