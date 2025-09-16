import { Meta } from '@storybook/react-vite';

import { Fieldset } from '@skatteetaten/ds-forms';

import * as FieldsetStories from './Fieldset.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Fieldset',
  component: Fieldset,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Fieldset>;
export default meta;
export const Snapshots = createSingleStory(FieldsetStories, meta);
export const Mobile = createSingleStory(FieldsetStories, meta, {
  viewport: '--mobile',
});
