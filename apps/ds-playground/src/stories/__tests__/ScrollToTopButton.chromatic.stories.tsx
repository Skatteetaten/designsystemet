import { Meta } from '@storybook/react-vite';

import { ScrollToTopButton } from '@skatteetaten/ds-buttons';

import * as ScrollToTopButtonStories from './ScrollToTopButton.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/ScrollToTopButton',
  component: ScrollToTopButton,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'div > main:nth-child(1) > div:nth-child(2) > button',
  },
} satisfies Meta<typeof ScrollToTopButton>;
export default meta;
export const Snapshots = createSingleStory(ScrollToTopButtonStories, meta);
export const BreakpointXS = createSingleStory(ScrollToTopButtonStories, meta, {
  viewport: '--breakpoint-xs',
});
export const BreakpointXL = createSingleStory(ScrollToTopButtonStories, meta, {
  viewport: '--breakpoint-xl',
});
