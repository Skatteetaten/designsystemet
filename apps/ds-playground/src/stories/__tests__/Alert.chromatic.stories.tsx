import { Meta } from '@storybook/react-vite';

import { Alert } from '@skatteetaten/ds-status';

import * as AlertStories from './Alert.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Alert',
  component: Alert,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Alert>;
export default meta;
export const Snapshots = createSingleStory(AlertStories, meta);
