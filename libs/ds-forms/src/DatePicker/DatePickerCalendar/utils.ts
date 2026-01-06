import {
  addDays,
  isAfter,
  isBefore,
  isSameDay,
  isToday,
  isValid,
  isWithinInterval,
} from 'date-fns';

import { dsI18n } from '@skatteetaten/ds-core-utils';

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
        disabledDates?.some((d) => isSameDay(d, date)) ||
        !isWithinMinMaxRange(date, minDate, maxDate),
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
        disabledDates?.some((d) => isSameDay(d, date)) ||
        !isWithinMinMaxRange(date, minDate, maxDate),
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
        disabledDates?.some((d) => isSameDay(d, date)) ||
        !isWithinMinMaxRange(date, minDate, maxDate),
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
    date.setHours(0, 0, 0, 0);
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

export const isWithinMinMaxRange = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  const firstValidDate = new Date('0001-01-01');
  const lastValidDate = new Date();
  lastValidDate.setMonth(11);
  lastValidDate.setDate(31);
  lastValidDate.setFullYear(lastValidYear);

  minDate?.setHours(0, 0, 0, 0);
  maxDate?.setHours(0, 0, 0, 0);

  const start = minDate && isValid(minDate) ? minDate : firstValidDate;
  const end = maxDate && isValid(maxDate) ? maxDate : lastValidDate;

  return isWithinInterval(date, { start, end });
};

export const getNameOfMonthsAndDays = (): {
  monthNames: string[];
  dayNames: string[];
  longDayNames: string[];
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
    longDayNames: [
      dsI18n.t('ds_forms:datepicker.Monday'),
      dsI18n.t('ds_forms:datepicker.Tuesday'),
      dsI18n.t('ds_forms:datepicker.Wednesday'),
      dsI18n.t('ds_forms:datepicker.Thursday'),
      dsI18n.t('ds_forms:datepicker.Friday'),
      dsI18n.t('ds_forms:datepicker.Saturday'),
      dsI18n.t('ds_forms:datepicker.Sunday'),
    ],
  };
};

export function findValidYear(year: string | number): number {
  return year === '' || year === 0 ? new Date().getFullYear() : Number(year);
}

export const getFirstFocusableDate = (
  selectedDate: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDatesTimestamps?: Set<number>
): Date => {
  let focusableDate = selectedDate;
  focusableDate.setHours(0, 0, 0, 0);

  if (maxDate && isAfter(selectedDate, maxDate)) {
    focusableDate = maxDate;
    if (disabledDatesTimestamps?.has(focusableDate.getTime())) {
      focusableDate = findPreviousAvailableDate(
        focusableDate,
        disabledDatesTimestamps,
        minDate
      );
    }

    return focusableDate;
  } else if (minDate && isBefore(selectedDate, minDate)) {
    focusableDate = minDate;
    if (disabledDatesTimestamps?.has(focusableDate.getTime())) {
      focusableDate = findNextAvailableDate(
        focusableDate,
        disabledDatesTimestamps,
        minDate
      );
    }
    return focusableDate;
  }

  if (disabledDatesTimestamps?.has(focusableDate.getTime())) {
    focusableDate = findNextAvailableDate(
      focusableDate,
      disabledDatesTimestamps,
      maxDate
    );
  }

  return focusableDate;
};

export const findNextAvailableDate = (
  startDate: Date,
  disabledDatesTimestamps?: Set<number>,
  maxDate?: Date
): Date => {
  if (!disabledDatesTimestamps || disabledDatesTimestamps.size === 0) {
    return addDays(startDate, 1);
  }

  startDate.setHours(0, 0, 0, 0);
  maxDate?.setHours(0, 0, 0, 0);

  const maxNextDate =
    maxDate && isValid(maxDate)
      ? maxDate
      : new Date().setFullYear(lastValidYear);

  let currentDate = addDays(startDate, 1);
  let currentTimestamp = currentDate.getTime();

  while (
    disabledDatesTimestamps.has(currentTimestamp) &&
    isBefore(currentDate, maxNextDate)
  ) {
    currentDate = addDays(currentDate, 1);
    currentTimestamp = currentDate.getTime();
  }

  return currentDate;
};

export const findPreviousAvailableDate = (
  startDate: Date,
  disabledDatesTimestamps?: Set<number>,
  minDate?: Date
): Date => {
  if (!disabledDatesTimestamps || disabledDatesTimestamps.size === 0) {
    return addDays(startDate, -1);
  }
  startDate.setHours(0, 0, 0, 0);
  minDate?.setHours(0, 0, 0, 0);

  const minPrevDate =
    minDate && isValid(minDate) ? minDate : new Date('0001-01-01');

  let currentDate = addDays(startDate, -1);
  let currentTimestamp = currentDate.getTime();

  while (
    disabledDatesTimestamps.has(currentTimestamp) &&
    isBefore(minPrevDate, currentDate)
  ) {
    currentDate = addDays(currentDate, -1);
    currentTimestamp = currentDate.getTime();
  }

  return currentDate;
};

export const areAllSelectableDatesDisabled = (grid: Array<Cell>[]): boolean => {
  return grid.every((row) =>
    row.every((cell) => cell.disabled || cell.isAdjacentMonth)
  );
};
