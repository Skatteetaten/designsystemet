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
export const BreakpointXS = createSingleStory(FooterStories, meta, {
  viewport: '--breakpoint-xs',
});
export const BreakpointS = createSingleStory(FooterStories, meta, {
  viewport: '--breakpoint-s',
});
export const BreakpointM = createSingleStory(FooterStories, meta, {
  viewport: '--breakpoint-m',
});
export const BreakpointL = createSingleStory(FooterStories, meta, {
  viewport: '--breakpoint-l',
});
