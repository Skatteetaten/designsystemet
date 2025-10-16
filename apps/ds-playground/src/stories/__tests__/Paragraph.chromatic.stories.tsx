import { Meta } from '@storybook/react-vite';

import { Paragraph } from '@skatteetaten/ds-typography';

import * as ParagraphStories from './Paragraph.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Paragraph',
  component: Paragraph,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Paragraph>;
export default meta;
export const Snapshots = createSingleStory(ParagraphStories, meta);
