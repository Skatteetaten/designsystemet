/* eslint-disable import/order */
import { Meta } from '@storybook/react-vite';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerSkipLink } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/TopBannerSkipLink';
import * as TopBannerSkipLinkStories from './TopBannerSkipLink.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerSkipLink',
  component: TopBannerSkipLink,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'a',
  },
} satisfies Meta<typeof TopBannerSkipLink>;
export default meta;
export const Snapshots = createSingleStory(TopBannerSkipLinkStories, meta);
