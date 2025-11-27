import { Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface DatePickerCalendarProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  selectedDate?: Date;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  onSelectDate: (date: Date) => void;
  onTabKeyOut?: () => void;
}
