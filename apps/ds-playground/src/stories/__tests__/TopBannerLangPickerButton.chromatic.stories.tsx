import { Meta } from '@storybook/react-vite';

import * as TopBannerLangPickerButtonStories from './TopBannerLangPickerButton.test.stories';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLangPickerButton } from '../../../../../libs/ds-layout/src/TopBannerExternal/TopBannerLangPickerButton/TopBannerLangPickerButton';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TopBanner/LangPickerButton',
  component: TopBannerLangPickerButton,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: '> button',
  },
} satisfies Meta<typeof TopBannerLangPickerButton>;
export default meta;
export const Snapshots = createSingleStory(
  TopBannerLangPickerButtonStories,
  meta
);
