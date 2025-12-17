import { Meta } from '@storybook/react-vite';

import * as DatePickerCalendarStories from './DatePickerCalendar.test.stories';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DatePickerCalendar } from '../../../../../libs/ds-forms/src/DatePicker/DatePickerCalendar/DatePickerCalendar';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/DatePicker/Calendar',
  component: DatePickerCalendar,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof DatePickerCalendar>;
export default meta;
export const Snapshots = createSingleStory(DatePickerCalendarStories, meta);
export const Mobile = createSingleStory(DatePickerCalendarStories, meta, {
  viewport: '--mobile',
});
