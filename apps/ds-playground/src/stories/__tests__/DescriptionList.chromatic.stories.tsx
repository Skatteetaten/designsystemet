import { Meta } from '@storybook/react-vite';

import { DescriptionList } from '@skatteetaten/ds-content';

import * as DescriptionListStories from './DescriptionList.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/DescriptionList',
  component: DescriptionList,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof DescriptionList>;
export default meta;
export const Snapshots = createSingleStory(DescriptionListStories, meta);
export const BreakpointXS = createSingleStory(DescriptionListStories, meta, {
  viewport: '--breakpoint-xs',
});
