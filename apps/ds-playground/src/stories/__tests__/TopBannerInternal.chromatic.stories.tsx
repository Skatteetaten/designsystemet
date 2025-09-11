import { Meta } from '@storybook/react-vite';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

import * as TopBannerInternalStories from './TopBannerInternal.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerInternal',
  component: TopBannerInternal,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerInternal>;
export default meta;
export const Snapshots = createSingleStory(TopBannerInternalStories, meta);
