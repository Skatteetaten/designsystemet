import { RefObject } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface GridIdx {
  [idx: string]: RefObject<HTMLButtonElement>;
}

export interface DatePickerCalendarProps extends BaseProps {
  selectedDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  onSelectDate: (date: Date) => void;
  onLastTabKey?: () => void;
}
