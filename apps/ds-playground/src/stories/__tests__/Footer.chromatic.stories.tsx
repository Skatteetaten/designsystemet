import { Meta } from '@storybook/react-vite';

import { Footer } from '@skatteetaten/ds-layout';

import * as FooterStories from './Footer.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Footer',
  component: Footer,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Footer>;
export default meta;
export const Snapshots = createSingleStory(FooterStories, meta);
