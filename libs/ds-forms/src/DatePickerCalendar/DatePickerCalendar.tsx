import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  forwardRef,
  useMemo,
  useState,
  useRef,
  createRef,
  RefObject,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ArrowBackSVGpath, ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { getWeek, isEqual } from 'date-fns';

import { DatePickerCalendarProps } from './DatePickerCalendar.types';
import { getDatePickerCalendarSelectedDateDefault } from './defaults';
import {
  getCalendarRows,
  getNameOfMonthsAndDays,
  findValidYear,
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
      onLastTabKey,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    // TODO - hvordan initialisere ref-en her, finne riktig gridIdx
    const currentFocusGridIdxRef = useRef<string>('31');
    interface gridIdx {
      [idx: string]: RefObject<HTMLButtonElement>;
    }
    const dateButtonRefs = useRef<gridIdx>({});

    const [selectedMonthIndex, setSelectedMonthIndex] = useState(
      selectedDate.getMonth()
    );
    const [selectedYear, setSelectedYear] = useState<number | string>(
      selectedDate.getFullYear()
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

    const grid = useMemo(
      () => getCalendarRows(selectedYear, selectedMonthIndex, minDate, maxDate),
      [selectedMonthIndex, selectedYear, minDate, maxDate]
    );

    const parseRowCol = (): { row: number; col: number } => {
      const row = parseInt(currentFocusGridIdxRef.current[0]);
      const col = parseInt(currentFocusGridIdxRef.current[1]);
      console.log('parseRowCol row og col=' + row + ' ' + col);
      return { row, col };
    };

    const updateFocus = (rowIdx: number, colIdx: number, date: Date): void => {
      const weekIdx = getWeek(date);
      currentFocusGridIdxRef.current = `${rowIdx}${colIdx}`;

      console.log(
        'updateFocus date and week og currentDateRef=' +
          date +
          ' ' +
          weekIdx +
          ' ' +
          currentFocusGridIdxRef.current
      );

      const btnRef = dateButtonRefs.current[currentFocusGridIdxRef.current];
      btnRef?.current?.focus();
    };

    const handleKeyDown = (
      e: KeyboardEvent<HTMLButtonElement>,
      calendarDate: Date
    ): void => {
      const cols = 7;
      const rows = grid.length;
      const { row, col } = parseRowCol();

      // e.preventDefault();
      // e.stopPropagation();

      switch (e.key) {
        case 'ArrowUp':
          if (row > 0) {
            updateFocus(row - 1, col, calendarDate);
          } else {
            onPrevMonth();
            // TODO - skal settes til neste dato
            updateFocus(grid.length - 1, col, calendarDate);
          }
          break;
        case 'ArrowDown':
          if (row < rows - 1) {
            updateFocus(row + 1, col, calendarDate);
          } else {
            onNextMonth();
            // TODO - skal settes til neste dato
            updateFocus(0, col, calendarDate);
          }
          break;
        case 'ArrowLeft':
          if (col > 0) {
            updateFocus(row, col - 1, calendarDate);
          } else if (row > 0) {
            updateFocus(row - 1, cols - 1, calendarDate);
          } else {
            onPrevMonth();
            // TODO - skal settes til neste dato
            updateFocus(grid.length - 1, 6, calendarDate);
          }
          break;
        case 'ArrowRight':
          if (col < cols - 1) {
            updateFocus(row, col + 1, calendarDate);
          } else if (row < rows - 1) {
            updateFocus(row + 1, 0, calendarDate);
          } else {
            onNextMonth();
            // TODO - skal settes til neste dato
            updateFocus(0, 0, calendarDate);
          }
          break;
        case 'Enter':
          onSelectDate(calendarDate);
          break;
        case 'Tab':
          e.preventDefault();
          onLastTabKey && onLastTabKey();
          break;
        default:
          return;
      }
    };

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
            title={t('datepicker.PreviousMonth')}
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
            title={t('datepicker.NextMonth')}
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

                    const ariaCurrent = isEqual(cell.date, selectedDate)
                      ? 'date'
                      : undefined;

                    const ariaLabel = `${
                      cell.isToday ? t('datepicker.Today') : ''
                    } ${cell.date.getDate()}. ${
                      monthNames[cell.date.getMonth()]
                    } ${cell.date.getFullYear()}`;

                    const gridIdx = `${rowIdx}${colIdx}`;
                    if (!dateButtonRefs.current[gridIdx]) {
                      // TODO - test ut med Map() med key=gridIdx og value lik node og ikke createRef
                      dateButtonRefs.current[gridIdx] = createRef();
                    }
                    if (ariaCurrent === 'date') {
                      // currentDateRef.current = gridIdx;
                    }
                    const hasFocus = currentFocusGridIdxRef.current === gridIdx;
                    if (hasFocus) {
                      console.log(`HasFocus button=${cell.text} ${cell.date}`);
                    }

                    return (
                      <td key={`cell-${cell.date}`}>
                        <button
                          key={`btn-${cell.date}`}
                          ref={dateButtonRefs.current[gridIdx]}
                          /*ref={() => {
                            if (!dateButtonRefs.current[gridIdx]) {
                              // TODO - test ut med Map() med key=gridIdx og value lik node og ikke createRef
                              dateButtonRefs.current[gridIdx] = createRef();
                            }
                          }}*/
                          className={buttonClassName}
                          type={'button'}
                          disabled={cell.disabled}
                          aria-current={ariaCurrent}
                          aria-label={ariaLabel}
                          tabIndex={hasFocus ? 0 : -1}
                          onClick={(): void => {
                            onSelectDate(cell.date);
                          }}
                          onKeyDown={(e): void => {
                            handleKeyDown(e, cell.date);
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
