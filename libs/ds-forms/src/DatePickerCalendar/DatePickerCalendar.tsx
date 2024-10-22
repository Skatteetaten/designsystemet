import {
  ChangeEvent,
  createRef,
  FocusEvent,
  forwardRef,
  JSX,
  KeyboardEvent,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ArrowBackSVGpath, ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { addDays, getWeek, isEqual } from 'date-fns';

import { DatePickerCalendarProps, GridIdx } from './DatePickerCalendar.types';
import { getDatePickerCalendarSelectedDateDefault } from './defaults';
import {
  findValidYear,
  getCalendarRows,
  getNameOfMonthsAndDays,
  getGridIdxForDate,
  getFirstFocusableDate,
  isWithinMinMaxRange,
  findNextAvailableDate,
  findPreviousAvailableDate,
} from './utils';
import { Select } from '../Select/Select';
import { TextField } from '../TextField/TextField';

import styles from './DatePickerCalendar.module.scss';

export const DatePickerCalendar = forwardRef<
  HTMLDivElement,
  DatePickerCalendarProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      disabledDates,
      minDate,
      maxDate,
      selectedDate = getDatePickerCalendarSelectedDateDefault(),
      onSelectDate,
      onTabKeyOut,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    const disabledDateTimestamps = useMemo(
      () =>
        new Set(
          disabledDates?.map((date) => {
            date.setHours(0, 0, 0);
            return date.getTime();
          })
        ),
      [disabledDates]
    );

    const firstFocusableDate = getFirstFocusableDate(
      selectedDate,
      minDate,
      maxDate,
      disabledDateTimestamps
    );

    const focusableDateGridIdxRef = useRef<string>(
      getGridIdxForDate(firstFocusableDate)
    );
    const dateButtonRefs = useRef<GridIdx>({});

    const [selectedMonthIndex, setSelectedMonthIndex] = useState(
      firstFocusableDate.getMonth()
    );
    const [selectedYear, setSelectedYear] = useState<number | string>(
      firstFocusableDate.getFullYear()
    );
    const [isPrevMonthInvalid, setIsPrevMonthInvalid] = useState(false);
    const [isNextMonthInvalid, setIsNextMonthInvalid] = useState(false);

    const [firstValidYear, lastValidYear] = [1, 9999];
    const [january, december] = [0, 11];
    const { monthNames, dayNames } = getNameOfMonthsAndDays();

    const isMonthInvalid = (
      monthIndex: number,
      year: number,
      isPrevMonth: boolean
    ): boolean => {
      return isPrevMonth
        ? monthIndex === january && year === firstValidYear
        : monthIndex === december && year === lastValidYear;
    };

    const onPrevMonth = (): void => {
      let prevMonthIndex = selectedMonthIndex - 1;
      const year: number = findValidYear(selectedYear);
      setIsPrevMonthInvalid(isMonthInvalid(prevMonthIndex, year, true));
      setIsNextMonthInvalid(false);

      const isPrevMonthNewYear = prevMonthIndex === -1;
      if (isPrevMonthNewYear) {
        prevMonthIndex = december;
        setSelectedYear(year - 1);
      }
      setSelectedMonthIndex(prevMonthIndex);
    };

    const onNextMonth = (): void => {
      let nextMonthIndex = selectedMonthIndex + 1;
      const year: number = findValidYear(selectedYear);
      setIsNextMonthInvalid(isMonthInvalid(nextMonthIndex, year, false));
      setIsPrevMonthInvalid(false);

      const isNextMonthNewYear = nextMonthIndex === 12;
      if (isNextMonthNewYear) {
        nextMonthIndex = january;
        setSelectedYear(year + 1);
      }
      setSelectedMonthIndex(nextMonthIndex);
    };

    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      const monthIndex = Number(e.target.value);
      const year: number = findValidYear(selectedYear);
      setSelectedMonthIndex(monthIndex);
      setIsPrevMonthInvalid(isMonthInvalid(monthIndex, year, true));
      setIsNextMonthInvalid(isMonthInvalid(monthIndex, year, false));
    };

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const year = Number(e.target.value);
      const isNotValid =
        isNaN(year) || year < firstValidYear || year > lastValidYear;
      setSelectedYear(isNotValid ? '' : year);
      setIsPrevMonthInvalid(isMonthInvalid(selectedMonthIndex, year, true));
      setIsNextMonthInvalid(isMonthInvalid(selectedMonthIndex, year, false));
    };

    const handleYearBlur = (e: FocusEvent<HTMLInputElement>): void => {
      const input = e.target as HTMLInputElement;
      if (input.value === '') {
        setSelectedYear(new Date().getFullYear());
        /* onBlur med mutating state gjør at onClick til dato-knappene ikke utløses derfor gjøres dette */
        const target = e.relatedTarget
          ? (e.relatedTarget as HTMLButtonElement)
          : null;
        target?.click();
      }
    };

    const updateFocus = (currentDate: Date, dateToFocus: Date): void => {
      if (!isWithinMinMaxRange(dateToFocus, minDate, maxDate)) {
        return;
      }

      const isDifferentMonth =
        dateToFocus.getMonth() !== currentDate.getMonth();
      const isNewYear = dateToFocus.getFullYear() !== currentDate.getFullYear();

      if (
        isDifferentMonth &&
        !isMonthInvalid(
          dateToFocus.getMonth(),
          dateToFocus.getFullYear(),
          dateToFocus.getMonth() < currentDate.getMonth()
        )
      ) {
        setSelectedMonthIndex(dateToFocus.getMonth());
        if (isNewYear) {
          setSelectedYear(dateToFocus.getFullYear());
        }
      }

      setTimeout(() => {
        const gridIdx = getGridIdxForDate(dateToFocus);
        if (gridIdx) {
          focusableDateGridIdxRef.current = gridIdx;
          const btnRef = dateButtonRefs.current[gridIdx].current;
          btnRef?.focus();
        }
      }, 0);
    };

    const handleKeyboardNavigation = (
      event: KeyboardEvent<HTMLButtonElement>,
      currentDate: Date
    ): void => {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          const newFocusableDate = findPreviousAvailableDate(
            addDays(currentDate, -6),
            disabledDateTimestamps,
            minDate
          );
          updateFocus(currentDate, newFocusableDate);
          break;
        }
        case 'ArrowDown': {
          event.preventDefault();
          const newFocusableDate = findNextAvailableDate(
            addDays(currentDate, 6),
            disabledDateTimestamps,
            maxDate
          );
          updateFocus(currentDate, newFocusableDate);
          break;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          const newFocusableDate = findPreviousAvailableDate(
            currentDate,
            disabledDateTimestamps,
            minDate
          );
          updateFocus(currentDate, newFocusableDate);
          break;
        }
        case 'ArrowRight': {
          event.preventDefault();
          const newFocusableDate = findNextAvailableDate(
            currentDate,
            disabledDateTimestamps,
            maxDate
          );
          updateFocus(currentDate, newFocusableDate);
          break;
        }
        case 'Tab': {
          if (!event.shiftKey) {
            event.preventDefault();
            onTabKeyOut && onTabKeyOut();
          }
          break;
        }
        default:
          return;
      }
    };

    const grid = useMemo(
      () =>
        getCalendarRows(
          selectedYear,
          selectedMonthIndex,
          minDate,
          maxDate,
          disabledDates
        ),
      [selectedYear, selectedMonthIndex, minDate, maxDate, disabledDates]
    );

    const concatenatedClassName = `${styles.calendar} ${className}`;

    return (
      <div
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
      >
        <div className={styles.calendarNavigation}>
          <IconButton
            className={styles.calendarNavigationArrowIcon}
            svgPath={ArrowBackSVGpath}
            title={`${t('datepicker.PreviousMonth')} ${
              monthNames[selectedMonthIndex === 0 ? 11 : selectedMonthIndex - 1]
            } ${
              selectedMonthIndex === 0 ? Number(selectedYear) - 1 : selectedYear
            }`}
            type={'button'}
            disabled={isPrevMonthInvalid}
            onClick={(): void => onPrevMonth()}
          />
          <div className={styles.calendarNavigationMonthAndYearContainer}>
            <Select
              classNames={{ selectContainer: styles.calendarNavigationMonth }}
              value={selectedMonthIndex}
              label={t('datepicker.SelectMonth')}
              hidePlaceholder
              hideLabel
              onChange={handleMonthChange}
            >
              {monthNames.map((month: string, index: number): JSX.Element => {
                return (
                  <Select.Option key={month} value={index}>
                    {month}
                  </Select.Option>
                );
              })}
            </Select>
            <TextField
              className={styles.calendarNavigationYear}
              value={selectedYear}
              label={t('datepicker.Year')}
              inputMode={'numeric'}
              hideLabel
              onChange={handleYearChange}
              onBlur={handleYearBlur}
            />
          </div>
          <IconButton
            className={styles.calendarNavigationArrowIcon}
            svgPath={ArrowForwardSVGpath}
            title={`${t('datepicker.NextMonth')} ${
              monthNames[selectedMonthIndex === 11 ? 0 : selectedMonthIndex + 1]
            } ${
              selectedMonthIndex === 11
                ? Number(selectedYear) + 1
                : selectedYear
            }`}
            type={'button'}
            disabled={isNextMonthInvalid}
            onClick={(): void => onNextMonth()}
          />
        </div>
        <table className={styles.calendarTable}>
          <caption
            className={styles.srOnly}
          >{`${monthNames[selectedMonthIndex]} ${selectedYear}`}</caption>
          <thead>
            <tr>
              {dayNames.map((day: string): JSX.Element => {
                return (
                  <th key={day} className={styles.calendarTableHeaderCell}>
                    {day}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {grid.map((cells, rowIdx) => {
              const weekIdx = getWeek(grid[rowIdx][0].date);
              return (
                <tr
                  key={`row-${selectedYear}-${selectedMonthIndex}-${weekIdx}`}
                >
                  {cells.map((cell, colIdx) => {
                    const adjancentMonthClassName = cell.isAdjacentMonth
                      ? styles.calendarTableDateButton_adjacentMonth
                      : '';
                    const todayClassName = cell.isToday
                      ? styles.calendarTableDateButton_today
                      : '';
                    const buttonClassName =
                      `${styles.calendarTableDateButton} ${adjancentMonthClassName} ${todayClassName}`.trim();

                    const ariaLabel = `${
                      cell.isToday ? t('datepicker.Today') : ''
                    } ${cell.date.getDate()}. ${
                      monthNames[cell.date.getMonth()]
                    } ${cell.date.getFullYear()}`;

                    const ariaCurrent = isEqual(
                      cell.date,
                      firstFocusableDate.setHours(0, 0, 0, 0)
                    )
                      ? 'true'
                      : undefined;

                    const gridIdx = `${rowIdx}${colIdx}`;

                    if (!dateButtonRefs.current[gridIdx]) {
                      dateButtonRefs.current[gridIdx] = createRef();
                    }

                    const hasFocus =
                      focusableDateGridIdxRef.current === gridIdx;

                    return (
                      <td key={`cell-${cell.date.toLocaleDateString()}`}>
                        <button
                          ref={dateButtonRefs.current[gridIdx]}
                          className={buttonClassName}
                          type={'button'}
                          disabled={cell.disabled}
                          tabIndex={hasFocus ? 0 : -1}
                          aria-current={ariaCurrent}
                          aria-label={ariaLabel}
                          onClick={(): void => {
                            onSelectDate(cell.date);
                          }}
                          onKeyDown={(event): void => {
                            handleKeyboardNavigation(event, cell.date);
                          }}
                        >
                          {`${cell.text}`}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
);

DatePickerCalendar.displayName = 'DatePickerCalender';
