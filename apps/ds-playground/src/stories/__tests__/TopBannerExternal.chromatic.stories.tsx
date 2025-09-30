import { Meta } from '@storybook/react-vite';

import { TopBannerExternal } from '@skatteetaten/ds-layout';

import * as TopBannerExternalStories from './TopBannerExternal.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerExternal',
  component: TopBannerExternal,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerExternal>;
export default meta;
export const Snapshots = createSingleStory(TopBannerExternalStories, meta, {});
export const Mobile = createSingleStory(TopBannerExternalStories, meta, {
  viewport: '--mobile',
});
export const BreakpointXS = createSingleStory(TopBannerExternalStories, meta, {
  viewport: '--breakpoint-xs',
});
export const BreakpointS = createSingleStory(TopBannerExternalStories, meta, {
  viewport: '--breakpoint-s',
});
export const BreakpointM = createSingleStory(TopBannerExternalStories, meta, {
  viewport: '--breakpoint-m',
});
export const BreakpointL = createSingleStory(TopBannerExternalStories, meta, {
  viewport: '--breakpoint-l',
});

export const SearchOpen = createSingleStory(
  {
    ClickSearchOpen: TopBannerExternalStories.ClickSearchOpen,
    default: TopBannerExternalStories.default,
  },
  meta,
  { runPlayFunctions: true }
);
