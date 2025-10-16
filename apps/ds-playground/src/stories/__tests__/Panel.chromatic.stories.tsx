import { Meta } from '@storybook/react-vite';

import { Panel } from '@skatteetaten/ds-content';

import * as PanelStories from './Panel.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Panel',
  component: Panel,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Panel>;
export default meta;
export const Snapshots = createSingleStory(PanelStories, meta);
export const Mobile = createSingleStory(PanelStories, meta, {
  viewport: '--mobile',
});
export const BreakpointXS = createSingleStory(PanelStories, meta, {
  viewport: '--breakpoint-xs',
});
