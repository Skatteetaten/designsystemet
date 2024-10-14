import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  addDays,
  getWeekOfMonth,
  isAfter,
  isBefore,
  isSunday,
  isToday,
} from 'date-fns';

const lastValidYear = 9999;
const sunday = 0;

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

function getCalendarCells(
  year: number,
  monthIndex: number,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[]
): Cell[] {
  const dates = getDatesInMonth(year, monthIndex);
  const cells: Cell[] = [];

  const daysFromPrevMonth = getDaysFromPrevMonth(dates);
  const lastDateInPrevMonth = getLastDateInPrevMonth(year, monthIndex);

  for (let i = 0; i < daysFromPrevMonth; i++) {
    const date = new Date(lastDateInPrevMonth);

    const cell: Cell = {
      date,
      isAdjacentMonth: true,
      disabled:
        disabledDates?.some((d) => d.getTime() === date.getTime()) ||
        isNotInAllowedRange(date, minDate, maxDate),
      isToday: isToday(date),
      text: String(date.getDate()),
    };

    cells.unshift(cell);

    lastDateInPrevMonth.setDate(lastDateInPrevMonth.getDate() - 1);
  }

  dates.forEach((date) => {
    const cell: Cell = {
      date,
      isAdjacentMonth: false,
      disabled:
        disabledDates?.some((d) => d.getTime() === date.getTime()) ||
        isNotInAllowedRange(date, minDate, maxDate),
      isToday: isToday(date),
      text: String(date.getDate()),
    };

    cells.push(cell);
  });

  const daysFromNextMonth = getDaysFromNextMonth(dates);
  const firstDateInNextMonth = getFirstDateInNextMonth(year, monthIndex);
  for (let i = 0; i < daysFromNextMonth; i++) {
    const date = new Date(firstDateInNextMonth);

    const cell: Cell = {
      date,
      isAdjacentMonth: true,
      disabled:
        disabledDates?.some((d) => d.getTime() === date.getTime()) ||
        isNotInAllowedRange(date, minDate, maxDate),
      isToday: isToday(date),
      text: String(date.getDate()),
    };

    cells.push(cell);

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
  maxDate?: Date,
  disabledDates?: Date[]
): Array<Cell>[] {
  year = findValidYear(year);
  const cells = getCalendarCells(
    year,
    monthIndex,
    minDate,
    maxDate,
    disabledDates
  );
  const rows: Array<Cell>[] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
}

export const isNotInAllowedRange = (
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

export function getGridIdxForDate(focusableDate: Date): string {
  const colIdx = isSunday(focusableDate) ? 6 : focusableDate.getDay() - 1;
  const rowIdx = getWeekOfMonth(focusableDate, { weekStartsOn: 1 }) - 1;

  return `${rowIdx}${colIdx}`;
}

export const getFirstFocusableDate = (
  selectedDate: Date,
  minDate?: Date,
  maxDate?: Date
): Date => {
  if (isNotInAllowedRange(selectedDate, minDate, maxDate)) {
    let focusableDate = undefined;
    if (maxDate && isAfter(selectedDate, maxDate)) {
      focusableDate = maxDate;
    } else if (minDate && isBefore(selectedDate, minDate)) {
      focusableDate = minDate;
    }

    if (
      focusableDate &&
      !isNotInAllowedRange(focusableDate, minDate, maxDate)
    ) {
      return focusableDate;
    }
  }

  return selectedDate;
};

export const findNextAvailableDate = (
  startDate: Date,
  disabledDates?: Date[]
): Date => {
  if (!disabledDates || disabledDates.length === 0) {
    return addDays(startDate, 1);
  }

  const maxDate = new Date().setFullYear(lastValidYear);
  const disabledTimestamps = new Set(
    disabledDates.map((date) => date.getTime())
  );

  let currentDate = addDays(startDate, 1);
  let currentTimestamp = currentDate.getTime();

  while (
    disabledTimestamps.has(currentTimestamp) &&
    isBefore(currentDate, maxDate)
  ) {
    currentDate = addDays(currentDate, 1);
    currentTimestamp = currentDate.getTime();
  }

  return currentDate;
};

export const findPreviousAvailableDate = (
  startDate: Date,
  disabledDates?: Date[]
): Date => {
  if (!disabledDates || disabledDates.length === 0) {
    return addDays(startDate, -1);
  }

  const minDate = new Date('1000-01-01');
  const disabledTimestamps = new Set(
    disabledDates.map((date) => date.getTime())
  );

  let currentDate = addDays(startDate, -1);
  let currentTimestamp = currentDate.getTime();

  while (
    disabledTimestamps.has(currentTimestamp) &&
    isBefore(minDate, currentDate)
  ) {
    currentDate = addDays(currentDate, -1);
    currentTimestamp = currentDate.getTime();
  }

  return currentDate;
};
