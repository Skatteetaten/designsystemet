import { Meta } from '@storybook/react-vite';

import { Tabs } from '@skatteetaten/ds-collections';

import * as TabsStories from './Tabs.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Tabs',
  component: Tabs,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Tabs>;
export default meta;
export const Snapshots = createSingleStory(TabsStories, meta);
export const Mobile = createSingleStory(TabsStories, meta, {
  viewport: '--mobile',
});
