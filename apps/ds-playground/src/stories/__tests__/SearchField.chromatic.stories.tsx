import { Meta } from '@storybook/react-vite';

import { SearchField } from '@skatteetaten/ds-forms';

import * as SearchFieldStories from './SearchField.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/SearchField',
  component: SearchField,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof SearchField>;
export default meta;
export const Snapshots = createSingleStory(SearchFieldStories, meta);
export const Mobile = createSingleStory(SearchFieldStories, meta, {
  viewport: '--mobile',
});
