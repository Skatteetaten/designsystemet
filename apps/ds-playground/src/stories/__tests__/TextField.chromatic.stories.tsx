import { Meta } from '@storybook/react-vite';

import { TextField } from '@skatteetaten/ds-forms';

import * as TextFieldStories from './TextField.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/TextField',
  component: TextField,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof TextField>;
export default meta;
export const Snapshots = createSingleStory(TextFieldStories, meta);
