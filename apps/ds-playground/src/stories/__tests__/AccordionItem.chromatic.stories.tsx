import { Meta } from '@storybook/react-vite';

import { Accordion } from '@skatteetaten/ds-collections';

import * as AccordionItemStories from './AccordionItem.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Accordion/Item',
  component: Accordion.Item,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Accordion.Item>;
export default meta;
export const Snapshots = createSingleStory(AccordionItemStories, meta);
