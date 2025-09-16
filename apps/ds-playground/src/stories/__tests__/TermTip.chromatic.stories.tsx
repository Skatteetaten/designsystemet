import { Meta } from '@storybook/react-vite';

import { TermTip } from '@skatteetaten/ds-overlays';

import * as TermTipStories from './TermTip.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TermTip',
  component: TermTip,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: '> a',
  },
} satisfies Meta<typeof TermTip>;
export default meta;
export const Snapshots = createSingleStory(TermTipStories, meta);
