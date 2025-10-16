import { Meta } from '@storybook/react-vite';

import * as TopBannerLangPickerStories from './TopBannerLangPicker.test.stories';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLangPicker } from '../../../../../libs/ds-layout/src/TopBannerLangPicker/TopBannerLangPicker';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/LangPicker',
  component: TopBannerLangPicker,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TopBannerLangPicker>;
export default meta;
export const Snapshots = createSingleStory(TopBannerLangPickerStories, meta);
