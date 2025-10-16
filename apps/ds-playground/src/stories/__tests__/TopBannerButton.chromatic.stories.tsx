/* eslint-disable import/order */
import { Meta } from '@storybook/react-vite';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerButton } from '../../../../../libs/ds-layout/src/TopBannerButton/TopBannerButton';

import * as TopBannerButtonStories from './TopBannerButton.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/Button',
  component: TopBannerButton,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: '> button',
  },
} satisfies Meta<typeof TopBannerButton>;
export default meta;
export const Snapshots = createSingleStory(TopBannerButtonStories, meta);
export const Mobile = createSingleStory(TopBannerButtonStories, meta, {
  viewport: '--mobile',
});
export const BreakpointM = createSingleStory(TopBannerButtonStories, meta, {
  viewport: '--breakpoint-m',
});
