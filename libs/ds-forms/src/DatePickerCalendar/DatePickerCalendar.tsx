import {
  ChangeEvent,
  createRef,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ArrowBackSVGpath, ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import {
  addDays,
  getWeek,
  getWeeksInMonth,
  isEqual,
  isMonday,
  isSunday,
  lastDayOfMonth,
  startOfMonth,
} from 'date-fns';

import { DatePickerCalendarProps, GridIdx } from './DatePickerCalendar.types';
import { getDatePickerCalendarSelectedDateDefault } from './defaults';
import {
  findValidYear,
  getCalendarRows,
  getNameOfMonthsAndDays,
  initialGridIdx,
  initialFocusableDate,
  isDisabled,
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
      minDate,
      maxDate,
      selectedDate = getDatePickerCalendarSelectedDateDefault(),
      onSelectDate,
      onTabKeyOut,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    const [firstFocusableDate] = useState(
      initialFocusableDate(selectedDate, minDate, maxDate)
    );
    const focusableDateGridIdxRef = useRef<string>(
      initialGridIdx(firstFocusableDate)
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
    const [shouldResetFocus, setShouldResetFocus] = useState(false);

    useEffect(() => {
      if (shouldResetFocus) {
        const btnRef = dateButtonRefs.current[focusableDateGridIdxRef.current];
        btnRef?.current?.focus();
        setShouldResetFocus(false);
      }
    }, [shouldResetFocus]);

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

    const handleKeyboardNavigation = (
      event: KeyboardEvent<HTMLButtonElement>,
      currentDate: Date
    ): void => {
      const [cols, rows] = [7, grid.length];
      const { currentRowIdx, currentColIdx } = parseRowAndColIdx();

      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          const newFocusableDate = addDays(currentDate, -7);
          if (isDisabled(newFocusableDate, minDate, maxDate)) {
            break;
          }

          const isPrevMonth =
            newFocusableDate.getMonth() !== currentDate.getMonth();
          if (isPrevMonth) {
            const rowsInPrevMonth = getWeeksInMonth(newFocusableDate, {
              weekStartsOn: 1,
            });
            const [
              secondRowIdx,
              secondLastRowIdxInPrevMonth,
              lastRowIdxInPrevMonth,
            ] = [1, rowsInPrevMonth - 2, rowsInPrevMonth - 1];

            const isFirstDayInMonthMonday = isMonday(startOfMonth(currentDate));
            const newRowIdx =
              currentRowIdx === secondRowIdx || isFirstDayInMonthMonday
                ? lastRowIdxInPrevMonth
                : secondLastRowIdxInPrevMonth;

            updateFocus(newRowIdx, currentColIdx);
            onPrevMonth();
            setShouldResetFocus(true);
          } else if (currentRowIdx > 0) {
            updateFocus(currentRowIdx - 1, currentColIdx);
          }
          break;
        }
        case 'ArrowDown': {
          event.preventDefault();
          const newFocusableDate = addDays(currentDate, 7);
          if (isDisabled(newFocusableDate, minDate, maxDate)) {
            break;
          }

          const isNextMonth =
            newFocusableDate.getMonth() !== currentDate.getMonth();
          if (isNextMonth) {
            const [
              secondLastRowIdx,
              secondRowIdxInNextMonth,
              firstRowIdxInNextMonth,
            ] = [rows - 2, 1, 0];

            const isLastDayInMonthSunday = isSunday(
              lastDayOfMonth(currentDate)
            );
            const newRowIdx =
              currentRowIdx === secondLastRowIdx || isLastDayInMonthSunday
                ? firstRowIdxInNextMonth
                : secondRowIdxInNextMonth;
            updateFocus(newRowIdx, currentColIdx);
            onNextMonth();
            setShouldResetFocus(true);
          } else if (currentRowIdx < rows - 1) {
            updateFocus(currentRowIdx + 1, currentColIdx);
          }
          break;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          const newFocusableDate = addDays(currentDate, -1);
          if (isDisabled(newFocusableDate, minDate, maxDate)) {
            break;
          }

          const isPrevMonth =
            newFocusableDate.getMonth() !== currentDate.getMonth();
          if (isPrevMonth) {
            const rowsInPrevMonth = getWeeksInMonth(newFocusableDate, {
              weekStartsOn: 1,
            });
            updateFocus(
              rowsInPrevMonth - 1,
              isSunday(newFocusableDate) ? 6 : newFocusableDate.getDay() - 1
            );
            onPrevMonth();
            setShouldResetFocus(true);
          } else if (currentColIdx > 0) {
            updateFocus(currentRowIdx, currentColIdx - 1);
          } else if (currentRowIdx > 0) {
            updateFocus(currentRowIdx - 1, cols - 1);
          }
          break;
        }
        case 'ArrowRight': {
          event.preventDefault();
          const newFocusableDate = addDays(currentDate, 1);
          if (isDisabled(newFocusableDate, minDate, maxDate)) {
            break;
          }

          const isNextMonth =
            newFocusableDate.getMonth() !== currentDate.getMonth();
          if (isNextMonth) {
            updateFocus(
              0,
              isSunday(newFocusableDate) ? 6 : newFocusableDate.getDay() - 1
            );
            onNextMonth();
            setShouldResetFocus(true);
          } else if (currentColIdx < cols - 1) {
            updateFocus(currentRowIdx, currentColIdx + 1);
          } else if (currentRowIdx < rows - 1) {
            updateFocus(currentRowIdx + 1, 0);
          }
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

    const parseRowAndColIdx = (): {
      currentRowIdx: number;
      currentColIdx: number;
    } => {
      const rowIdx = parseInt(focusableDateGridIdxRef.current[0]);
      const colIdx = parseInt(focusableDateGridIdxRef.current[1]);
      return { currentRowIdx: rowIdx, currentColIdx: colIdx };
    };

    const updateFocus = (rowIdx: number, colIdx: number): void => {
      const gridIdx = `${rowIdx}${colIdx}`;
      focusableDateGridIdxRef.current = gridIdx;
      const btnRef = dateButtonRefs.current[gridIdx];
      btnRef?.current?.focus();
    };

    const grid = useMemo(
      () => getCalendarRows(selectedYear, selectedMonthIndex, minDate, maxDate),
      [selectedYear, selectedMonthIndex, minDate, maxDate]
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

                    const ariaCurrent = isEqual(cell.date, firstFocusableDate)
                      ? 'date'
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
