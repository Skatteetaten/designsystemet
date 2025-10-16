import { Meta } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import * as CardActionsStories from './CardActions.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Card/Actions',
  component: Card.Actions,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Card.Actions>;
export default meta;
export const Snapshots = createSingleStory(CardActionsStories, meta);
