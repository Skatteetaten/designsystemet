import { Meta } from '@storybook/react-vite';

import { List } from '@skatteetaten/ds-typography';

import * as ListElementStories from './ListElement.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/List/Element',
  component: List.Element,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof List.Element>;
export default meta;
export const Snapshots = createSingleStory(ListElementStories, meta);
