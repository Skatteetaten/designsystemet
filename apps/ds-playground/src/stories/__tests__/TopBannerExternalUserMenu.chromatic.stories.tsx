import { Meta } from '@storybook/react-vite';

import { TopBannerExternalUserMenu } from '@skatteetaten/ds-layout';

import * as TopBannerExternalUserMenuStories from './TopBannerExternalUserMenu.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerExternalUserMenu',
  component: TopBannerExternalUserMenu,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerExternalUserMenu>;
export default meta;
export const Snapshots = createSingleStory(
  TopBannerExternalUserMenuStories,
  meta
);
