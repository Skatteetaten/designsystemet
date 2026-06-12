import { Meta } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import * as CardStories from './Card.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Card',
  component: Card,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Card>;
export default meta;
export const Snapshots = createSingleStory(CardStories, meta);
