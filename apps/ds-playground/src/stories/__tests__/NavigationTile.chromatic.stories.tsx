import { Meta } from '@storybook/react-vite';

import { NavigationTile } from '@skatteetaten/ds-navigation';

import * as NavigationTileStories from './NavigationTile.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/NavigationTile',
  component: NavigationTile,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof NavigationTile>;
export default meta;
export const Snapshots = createSingleStory(NavigationTileStories, meta);
