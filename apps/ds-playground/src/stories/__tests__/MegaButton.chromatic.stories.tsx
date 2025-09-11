import { Meta } from '@storybook/react-vite';

import { MegaButton } from '@skatteetaten/ds-buttons';

import * as MegaButtonStories from './MegaButton.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/MegaButton',
  component: MegaButton,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof MegaButton>;
export default meta;
export const Snapshots = createSingleStory(MegaButtonStories, meta);
