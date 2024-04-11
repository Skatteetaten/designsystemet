import React, {
  forwardRef,
  useId,
  useState,
  JSX,
  ChangeEvent,
  FocusEvent,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { CalendarIcon } from '@skatteetaten/ds-icons';
import { isValid } from 'date-fns';

import { DatePickerProps } from './DatePicker.types';
import { getDatePickerDateFormat } from './defaults';
import {
  formatDateForInput,
  initInputValue,
  parseDateFromInput,
} from './utils';
import { DatePickerCalendar } from '../DatePickerCalendar/DatePickerCalendar';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './DatePicker.module.scss';

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      defaultValue,
      dateFormat = getDatePickerDateFormat(),
      description,
      errorMessage,
      helpSvgPath,
      helpText,
      label,
      initialPickerDate,
      minDate,
      maxDate,
      titleHelpSvg,
      value,
      variant = getCommonFormVariantDefault(),
      autoComplete,
      disabled,
      name,
      placeholder,
      readOnly,
      required,
      hasError,
      hideLabel,
      showRequiredMark,
      onBlur,
      onChange,
      onFocus,
      onSelectDate,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    const errorId = `datepickerErrorId-${useId()}`;
    const generatedId = `datepickerInputId-${useId()}`;
    const datePickerId = externalId ?? generatedId;

    const calendarRef = useRef<HTMLDivElement>(null);
    const calenderButtonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

    const [showCalendar, setShowCalendar] = useState(false);

    const [selectedDate, setSelectedDate] = React.useState(value);
    const [inputValue, setInputValue] = React.useState(
      initInputValue(value, defaultValue, dateFormat)
    );

    const preselectedDate = selectedDate || initialPickerDate;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target as HTMLInputElement;
      const date = parseDateFromInput(value);

      setSelectedDate(isValid(date) ? date : undefined);
      setInputValue(value);
      onChange?.(e);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
      if (showCalendar) {
        setShowCalendar(false);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
      const { value } = e.target as HTMLInputElement;
      const date = parseDateFromInput(value);
      if (isValid(date)) {
        setSelectedDate(date);
        date && setInputValue(formatDateForInput(dateFormat, date));
      }
      onSelectDate?.(date);
      onBlur?.(e);
    };

    const handleSelectDate = (date: Date): void => {
      setSelectedDate(date);
      setInputValue(formatDateForInput(dateFormat, date));
      setShowCalendar(false);
      inputRef.current?.focus();
      onSelectDate?.(date);
    };

    const closeCalendar = (): void => {
      setShowCalendar(false);
      calenderButtonRef?.current?.focus();
    };

    useEffect(() => {
      if (value) {
        setSelectedDate(value);
        setInputValue(formatDateForInput(dateFormat, value));
      }
    }, [dateFormat, value]);

    useEffect(() => {
      if (!showCalendar) {
        return;
      }

      const handleOutside: EventListener = (event): void => {
        const node = event.target as Node;
        if (
          !calendarRef?.current?.contains(node) &&
          !calenderButtonRef?.current?.contains(node)
        ) {
          setShowCalendar(false);
          event.type === 'click' && calenderButtonRef?.current?.focus();
        }
      };

      const handleResize: EventListener = (e): void => {
        if (e.type === 'resize') {
          closeCalendar();
        }
      };

      const handleEscape = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
          closeCalendar();
        }
      };

      document.addEventListener('click', handleOutside);
      window.addEventListener('resize', handleResize);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('click', handleOutside);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [showCalendar]);

    const placeholderValue =
      placeholder?.trim() === ''
        ? undefined
        : placeholder ?? t('datepicker.TypeOrSelect');

    const isLarge = variant === 'large';
    const inputClassName = `${styles.input} ${
      isLarge ? styles.input_large : ''
    }`.trim();
    const calendarButtonClassName = `${styles.calendarButton} ${
      isLarge ? styles.calendarButton_large : ''
    }`.trim();

    return (
      <div
        className={`${className} ${classNames?.container ?? ''}`.trim()}
        lang={lang}
      >
        <LabelWithHelp
          className={classNames?.label ?? ''}
          htmlFor={datePickerId}
          hideLabel={hideLabel}
          showRequiredMark={showRequiredMark}
          description={description}
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          titleHelpSvg={titleHelpSvg}
        >
          {label}
        </LabelWithHelp>
        <div
          className={`${styles.dateContainer} ${
            classNames?.dateContainer ?? ''
          }`}
        >
          <input
            ref={inputRef}
            id={datePickerId}
            className={inputClassName}
            data-testid={dataTestId}
            autoComplete={autoComplete}
            disabled={disabled}
            name={name}
            placeholder={placeholderValue}
            readOnly={readOnly}
            required={required}
            defaultValue={
              defaultValue
                ? formatDateForInput(dateFormat, defaultValue)
                : undefined
            }
            value={inputValue}
            aria-describedby={hasError ? errorId : undefined}
            aria-invalid={hasError ?? undefined}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {!readOnly && (
            <button
              ref={calenderButtonRef}
              className={calendarButtonClassName}
              disabled={disabled}
              aria-expanded={showCalendar}
              onClick={(): void => setShowCalendar(!showCalendar)}
            >
              <CalendarIcon
                className={styles.icon}
                title={t('datepicker.ChooseDate')}
              />
            </button>
          )}
        </div>
        <ErrorMessage
          id={errorId}
          showError={hasError}
          className={classNames?.errorMessage ?? ''}
        >
          {errorMessage ?? ''}
        </ErrorMessage>
        {showCalendar && (
          <div className={styles.calendarContainer}>
            <DatePickerCalendar
              ref={calendarRef}
              selectedDate={preselectedDate}
              minDate={minDate}
              maxDate={maxDate}
              onSelectDate={handleSelectDate}
              onTabKeyOut={closeCalendar}
            />
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { getDatePickerDateFormat };
