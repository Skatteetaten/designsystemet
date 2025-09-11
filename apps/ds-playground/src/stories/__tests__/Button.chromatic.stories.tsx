import { Meta } from '@storybook/react-vite';

import { Button } from '@skatteetaten/ds-buttons';

import * as ButtonStories from './Button.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Button',
  component: Button,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Button>;
export default meta;
export const Snapshots = createSingleStory(ButtonStories, meta);
