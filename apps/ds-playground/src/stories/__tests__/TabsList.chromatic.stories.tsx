import { Meta } from '@storybook/react-vite';

import { Tabs } from '@skatteetaten/ds-collections';

import * as TabsListStories from './TabsList.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Tabs/List',
  component: Tabs.List,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Tabs.List>;
export default meta;
export const Snapshots = createSingleStory(TabsListStories, meta);
