import { Meta } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import * as CardAlertStories from './CardAlert.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Card/Alert',
  component: Card.Alert,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Card.Alert>;
export default meta;
export const Snapshots = createSingleStory(CardAlertStories, meta);
