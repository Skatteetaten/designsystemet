import { Meta } from '@storybook/react-vite';

import { Checkbox } from '@skatteetaten/ds-forms';

import * as CheckboxStories from './Checkbox.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Checkbox',
  component: Checkbox,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Checkbox>;
export default meta;
export const Snapshots = createSingleStory(CheckboxStories, meta);
export const BreakpointXS = createSingleStory(CheckboxStories, meta, {
  viewport: '--breakpoint-xs',
});
