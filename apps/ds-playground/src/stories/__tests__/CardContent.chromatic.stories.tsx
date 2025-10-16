import { Meta } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import * as CardContentStories from './CardContent.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Card/Content',
  component: Card.Content,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Card.Content>;
export default meta;
export const Snapshots = createSingleStory(CardContentStories, meta);
