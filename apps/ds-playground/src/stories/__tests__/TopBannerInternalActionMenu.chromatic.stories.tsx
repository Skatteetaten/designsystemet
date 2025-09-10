import { Meta } from '@storybook/react-vite';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

import * as TopBannerInternalActionMenuStories from './TopBannerInternalActionMenu.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/TopBannerInternalActionMenu',
  component: TopBannerInternal.ActionMenu,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerInternal.ActionMenu>;
export default meta;
export const Snapshots = createSingleStory(
  TopBannerInternalActionMenuStories,
  meta
);
