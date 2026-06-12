/* eslint-disable import/order */
import { Meta } from '@storybook/react-vite';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLogo } from '../../../../../libs/ds-layout/src/TopBannerExternal/TopBannerLogo/TopBannerLogo';

import * as TopBannerLogoStories from './TopBannerLogo.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBannerExternal/Logo (intern)',
  component: TopBannerLogo,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'a',
  },
} satisfies Meta<typeof TopBannerLogo>;
export default meta;
export const Snapshots = createSingleStory(TopBannerLogoStories, meta);
