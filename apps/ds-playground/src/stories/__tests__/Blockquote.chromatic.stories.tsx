import { Meta } from '@storybook/react-vite';

import { Blockquote } from '@skatteetaten/ds-typography';

import * as BlockquoteStories from './Blockquote.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Blockquote',
  component: Blockquote,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Blockquote>;
export default meta;
export const Snapshots = createSingleStory(BlockquoteStories, meta);
