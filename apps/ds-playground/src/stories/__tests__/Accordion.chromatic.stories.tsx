import { Meta } from '@storybook/react-vite';

import { Accordion } from '@skatteetaten/ds-collections';

import * as AccordionStories from './Accordion.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Accordion/Accordion',
  component: Accordion,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Accordion>;
export default meta;

export const Snapshots = createSingleStory(AccordionStories, meta);
