import { Meta } from '@storybook/react-vite';

import { OpenClose } from '@skatteetaten/ds-collections';

import * as OpenCloseStories from './OpenClose.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/OpenClose',
  component: OpenClose,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'button',
  },
} satisfies Meta<typeof OpenClose>;
export default meta;
export const Snapshots = createSingleStory(OpenCloseStories, meta);
export const BreakpointXS = createSingleStory(OpenCloseStories, meta, {
  viewport: '--breakpoint-xs',
});
