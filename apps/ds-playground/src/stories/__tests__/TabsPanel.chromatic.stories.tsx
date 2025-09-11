import { Meta } from '@storybook/react-vite';

import { Tabs } from '@skatteetaten/ds-collections';

import * as TabsPanelStories from './TabsPanel.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Tabs/Panel',
  component: Tabs.Panel,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Tabs.Panel>;
export default meta;
export const Snapshots = createSingleStory(TabsPanelStories, meta);
