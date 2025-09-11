import { Meta } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import * as CardHeaderStories from './CardHeader.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Card/Header',
  component: Card.Header,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Card.Header>;
export default meta;
export const Snapshots = createSingleStory(CardHeaderStories, meta);
