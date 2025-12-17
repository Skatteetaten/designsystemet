import { Meta } from '@storybook/react-vite';

import { TopBannerExternal } from '@skatteetaten/ds-layout';

import * as TopBannerExternalUserMenuStories from './TopBannerExternalUserMenu.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBannerExternal/UserMenu',
  component: TopBannerExternal.UserMenu,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerExternal.UserMenu>;
export default meta;
export const Snapshots = createSingleStory(
  TopBannerExternalUserMenuStories,
  meta
);
