import { Meta } from '@storybook/react-vite';

import { Tabs } from '@skatteetaten/ds-collections';

import * as TabsTabStories from './TabsTab.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Tabs/Tab',
  component: Tabs.Tab,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Tabs.Tab>;
export default meta;
export const Snapshots = createSingleStory(TabsTabStories, meta);
