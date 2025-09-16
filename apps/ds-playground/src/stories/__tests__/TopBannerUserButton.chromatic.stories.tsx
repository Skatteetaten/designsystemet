/* eslint-disable import/order */
import { Meta } from '@storybook/react-vite';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerUserButton } from '../../../../../libs/ds-layout/src/TopBannerUserButton/TopBannerUserButton';

import * as TopBannerUserButtonStories from './TopBannerUserButton.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerUserButton',
  component: TopBannerUserButton,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerUserButton>;
export default meta;
export const Snapshots = createSingleStory(TopBannerUserButtonStories, meta);
export const Mobile = createSingleStory(TopBannerUserButtonStories, meta, {
  viewport: '--mobile',
});
export const BreakpointXS = createSingleStory(
  TopBannerUserButtonStories,
  meta,
  {
    viewport: '--breakpoint-xs',
  }
);
export const BreakpointS = createSingleStory(TopBannerUserButtonStories, meta, {
  viewport: '--breakpoint-s',
});
export const BreakpointM = createSingleStory(TopBannerUserButtonStories, meta, {
  viewport: '--breakpoint-m',
});
