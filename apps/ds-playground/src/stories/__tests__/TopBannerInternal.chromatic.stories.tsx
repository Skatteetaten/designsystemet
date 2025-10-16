import { Meta } from '@storybook/react-vite';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

import * as TopBannerInternalStories from './TopBannerInternal.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerInternal',
  component: TopBannerInternal,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'a',
  },
} satisfies Meta<typeof TopBannerInternal>;
export default meta;
export const Snapshots = createSingleStory(TopBannerInternalStories, meta);
export const Mobile = createSingleStory(TopBannerInternalStories, meta, {
  viewport: '--mobile',
});
export const BreakpointS = createSingleStory(TopBannerInternalStories, meta, {
  viewport: '--breakpoint-s',
});
export const BreakpointM = createSingleStory(TopBannerInternalStories, meta, {
  viewport: '--breakpoint-m',
});
export const BreakpointL = createSingleStory(TopBannerInternalStories, meta, {
  viewport: '--breakpoint-l',
});
