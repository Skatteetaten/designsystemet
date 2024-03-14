import { ChangeEvent, FocusEvent, forwardRef, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ArrowBackSVGpath, ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { isEqual } from 'date-fns';

import { DatePickerCalendarProps } from './DatePickerCalendar.types';
import {
  getCalendarRows,
  getNameOfMonthsAndDays,
  findValidYear,
} from './utils';
import { Select } from '../Select/Select';
import { TextField } from '../TextField/TextField';

import styles from './DatePickerCalendar.module.scss';
import { getDatePickerCalendarSelectedDateDefault } from './defaults';

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
      selectedDate = getDatePickerCalendarSelectedDateDefault(),
      minDate,
      maxDate,
      onSelectDate,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

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

    const rows = useMemo(
      () => getCalendarRows(selectedYear, selectedMonthIndex, minDate, maxDate),
      [selectedMonthIndex, selectedYear, minDate, maxDate]
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
            {rows.map((cells, index) => (
              <tr key={`row-${selectedYear}-${selectedMonthIndex}-${index}`}>
                {cells.map((cell) => {
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

                  return (
                    <td key={`cell-${cell.date}`}>
                      <button
                        className={buttonClassName}
                        type={'button'}
                        disabled={cell.disabled}
                        aria-current={ariaCurrent}
                        aria-label={ariaLabel}
                        onClick={(): void => {
                          onSelectDate(cell.date);
                        }}
                      >
                        {`${cell.text}`}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

DatePickerCalendar.displayName = 'DatePickerCalender';
