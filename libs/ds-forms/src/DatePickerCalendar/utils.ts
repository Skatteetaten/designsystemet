import { dsI18n } from '@skatteetaten/ds-core-utils';
import { getWeekOfMonth, isAfter, isBefore, isSunday, isToday } from 'date-fns';

const lastValidYear: number = 9999;
const sunday: number = 0;

function getDaysFromPrevMonth(datesInSelectedMonth: Date[]): number {
  const firstDayInSelectedMonth = datesInSelectedMonth[0].getDay();
  let daysFromPrevMonthInFirstWeekOfSelectedMonth;
  if (firstDayInSelectedMonth === sunday) {
    daysFromPrevMonthInFirstWeekOfSelectedMonth = 6;
  } else {
    daysFromPrevMonthInFirstWeekOfSelectedMonth = firstDayInSelectedMonth - 1;
  }

  return daysFromPrevMonthInFirstWeekOfSelectedMonth;
}

function getDaysFromNextMonth(datesInSelectedMonth: Date[]): number {
  const lastDayInSelectedMonth =
    datesInSelectedMonth[datesInSelectedMonth.length - 1].getDay();
  let daysFromNextMonthInLastWeekOfSelectedMonth;
  if (lastDayInSelectedMonth === sunday) {
    daysFromNextMonthInLastWeekOfSelectedMonth = 0;
  } else {
    daysFromNextMonthInLastWeekOfSelectedMonth = 7 - lastDayInSelectedMonth;
  }

  return daysFromNextMonthInLastWeekOfSelectedMonth;
}

function getLastDateInPrevMonth(year: number, monthIndex: number): Date {
  const lastDateInPrevMonth = new Date(year, monthIndex, 0);
  lastDateInPrevMonth.setFullYear(lastDateInPrevMonth.getFullYear());

  return lastDateInPrevMonth;
}

function getFirstDateInNextMonth(year: number, monthIndex: number): Date {
  const firstDateInNextMonth = new Date(year, monthIndex + 1, 1);
  firstDateInNextMonth.setFullYear(firstDateInNextMonth.getFullYear());

  return firstDateInNextMonth;
}

interface Cell {
  date: Date;
  isAdjacentMonth: boolean;
  isToday: boolean;
  text: string;
  disabled: boolean;
}

const makeCell = (
  date: Date,
  isToday: boolean,
  isAdjacentMonth: boolean,
  minDate?: Date,
  maxDate?: Date
): Cell => {
  const text = String(date.getDate());
  const disabled = isDisabled(date, minDate, maxDate);
  return {
    date,
    text,
    disabled,
    isAdjacentMonth,
    isToday,
  };
};

function getCalendarCells(
  year: number,
  monthIndex: number,
  minDate?: Date,
  maxDate?: Date
): Cell[] {
  const dates = getDatesInMonth(year, monthIndex);
  const cells: Cell[] = [];

  const daysFromPrevMonth = getDaysFromPrevMonth(dates);
  const lastDateInPrevMonth = getLastDateInPrevMonth(year, monthIndex);
  for (let i = 0; i < daysFromPrevMonth; i++) {
    const date = new Date(lastDateInPrevMonth);
    cells.unshift(makeCell(date, isToday(date), true, minDate, maxDate));
    lastDateInPrevMonth.setDate(lastDateInPrevMonth.getDate() - 1);
  }

  dates.forEach((date) => {
    cells.push(makeCell(date, isToday(date), false, minDate, maxDate));
  });

  const daysFromNextMonth = getDaysFromNextMonth(dates);
  const firstDateInNextMonth = getFirstDateInNextMonth(year, monthIndex);
  for (let i = 0; i < daysFromNextMonth; i++) {
    const date = new Date(firstDateInNextMonth);
    cells.push(makeCell(date, isToday(date), true, minDate, maxDate));
    firstDateInNextMonth.setDate(firstDateInNextMonth.getDate() + 1);
  }

  return cells;
}

function getDatesInMonth(year: number, monthIndex: number): Date[] {
  const date = new Date(year, monthIndex);
  date.setFullYear(year);
  date.setDate(1);

  const month = date.getMonth();
  const dates: Date[] = [];
  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0);
  }
  return dates;
}

export function getCalendarRows(
  year: number | string,
  monthIndex: number,
  minDate?: Date,
  maxDate?: Date
): Array<Cell>[] {
  year = findValidYear(year);
  const cells = getCalendarCells(year, monthIndex, minDate, maxDate);
  const rows: Array<Cell>[] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
}

export const isDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  minDate && minDate.setHours(0, 0, 0);
  return (
    (minDate ? isBefore(date, minDate) : false) ||
    (maxDate ? isAfter(date, maxDate) : false) ||
    date.getFullYear() > lastValidYear
  );
};

export const getNameOfMonthsAndDays = (): {
  monthNames: string[];
  dayNames: string[];
} => {
  return {
    monthNames: [
      dsI18n.t('ds_forms:datepicker.January'),
      dsI18n.t('ds_forms:datepicker.February'),
      dsI18n.t('ds_forms:datepicker.March'),
      dsI18n.t('ds_forms:datepicker.April'),
      dsI18n.t('ds_forms:datepicker.May'),
      dsI18n.t('ds_forms:datepicker.June'),
      dsI18n.t('ds_forms:datepicker.July'),
      dsI18n.t('ds_forms:datepicker.August'),
      dsI18n.t('ds_forms:datepicker.September'),
      dsI18n.t('ds_forms:datepicker.October'),
      dsI18n.t('ds_forms:datepicker.November'),
      dsI18n.t('ds_forms:datepicker.December'),
    ],
    dayNames: [
      dsI18n.t('ds_forms:datepicker.Mon'),
      dsI18n.t('ds_forms:datepicker.Tue'),
      dsI18n.t('ds_forms:datepicker.Wed'),
      dsI18n.t('ds_forms:datepicker.Thu'),
      dsI18n.t('ds_forms:datepicker.Fri'),
      dsI18n.t('ds_forms:datepicker.Sat'),
      dsI18n.t('ds_forms:datepicker.Sun'),
    ],
  };
};

export function findValidYear(year: string | number): number {
  return year === '' || year === 0 ? new Date().getFullYear() : Number(year);
}

export function initialGridIdx(date: Date): string {
  const colIdx = isSunday(date) ? 6 : date.getDay() - 1;
  const rowIdx = getWeekOfMonth(date, { weekStartsOn: 1 }) - 1;

  return `${rowIdx}${colIdx}`;
}

export const initialSelectableDate = (
  selectedDate: Date,
  minDate?: Date,
  maxDate?: Date
): Date => {
  if (isDisabled(selectedDate, minDate, maxDate)) {
    let newSelectedDate = undefined;
    if (maxDate && isAfter(selectedDate, maxDate)) {
      newSelectedDate = maxDate;
    } else if (minDate && isBefore(selectedDate, minDate)) {
      newSelectedDate = minDate;
    }

    if (newSelectedDate && !isDisabled(newSelectedDate, minDate, maxDate)) {
      return newSelectedDate;
    }
  }

  return selectedDate;
};
