import { Meta } from '@storybook/react-vite';

import { TextArea } from '@skatteetaten/ds-forms';

import * as TextAreaStories from './TextArea.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TextArea',
  component: TextArea,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TextArea>;
export default meta;
export const Snapshots = createSingleStory(TextAreaStories, meta);
export const BreakpointXS = createSingleStory(TextAreaStories, meta, {
  viewport: '--breakpoint-xs',
});
