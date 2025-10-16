import { Meta } from '@storybook/react-vite';

import { Icon } from '@skatteetaten/ds-icons';

import * as IconGalleryStories from './IconGallery.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/IconGallery',
  component: Icon,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Icon>;
export default meta;
export const Snapshots = createSingleStory(IconGalleryStories, meta);
