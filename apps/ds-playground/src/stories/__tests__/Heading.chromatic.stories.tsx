import { Meta } from '@storybook/react-vite';

import { Heading } from '@skatteetaten/ds-typography';

import * as HeadingStories from './Heading.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Heading',
  component: Heading,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Heading>;
export default meta;
export const Snapshots = createSingleStory(HeadingStories, meta);
export const BreakpointXS = createSingleStory(HeadingStories, meta, {
  viewport: '--breakpoint-xs',
});
