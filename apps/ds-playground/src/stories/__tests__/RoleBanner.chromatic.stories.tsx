import { Meta } from '@storybook/react-vite';

import { RoleBanner } from '@skatteetaten/ds-layout';

import * as RoleBannerStories from './RoleBanner.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/RoleBanner',
  component: RoleBanner,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof RoleBanner>;
export default meta;
export const Snapshots = createSingleStory(RoleBannerStories, meta);
export const Mobile = createSingleStory(RoleBannerStories, meta, {
  viewport: '--mobile',
  runPlayFunctions: true,
});
