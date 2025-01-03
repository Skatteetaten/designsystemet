import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface DatePickerCalendarProps extends BaseProps {
  selectedDate?: Date;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  onSelectDate: (date: Date) => void;
  onTabKeyOut?: () => void;
}
