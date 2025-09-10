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
export const Snapshots = createSingleStory(TopBannerExternalStories, meta);
