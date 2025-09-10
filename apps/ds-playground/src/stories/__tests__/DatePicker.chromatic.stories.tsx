import { Meta } from '@storybook/react-vite';

import { DatePicker } from '@skatteetaten/ds-forms';

import * as DatePickerStories from './DatePicker.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/DatePicker',
  component: DatePicker,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof DatePicker>;
export default meta;
export const Snapshots = createSingleStory(DatePickerStories, meta);
