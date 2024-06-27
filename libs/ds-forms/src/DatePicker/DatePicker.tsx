import React, {
  ChangeEvent,
  FocusEvent,
  JSX,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';
import { CalendarIcon } from '@skatteetaten/ds-icons';
import { isValid } from 'date-fns';

import { DatePickerProps } from './DatePicker.types';
import { getDatePickerDateFormat } from './defaults';
import { formatDateForInput, parseDateFromInput } from './utils';
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
      hideLabel,
      showRequiredMark,
      onBlur,
      onChange,
      onFocus,
      onHelpToggle,
      onSelectDate,
    },
    ref
  ): JSX.Element => {
    useValidateFormRequiredProps({ required, showRequiredMark });
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    const errorId = `datepickerErrorId-${useId()}`;
    const generatedId = `datepickerInputId-${useId()}`;
    const datePickerId = externalId ?? generatedId;

    const calendarRef = useRef<HTMLDivElement>(null);
    const calenderButtonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);
    const [showCalendar, setShowCalendar] = useState(false);

    const [inputValue, setInputValue] = React.useState(
      formatDateForInput(dateFormat, value)
    );

    useEffect(() => {
      setInputValue(formatDateForInput(dateFormat, value));
    }, [dateFormat, value]);

    const parsedDateFromInput = parseDateFromInput(inputValue) ?? undefined;
    const preselectedDate = isValid(parsedDateFromInput)
      ? parsedDateFromInput
      : initialPickerDate;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(e.target.value);
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
        date && setInputValue(formatDateForInput(dateFormat, date));
      }
      onSelectDate?.(date);
      onBlur?.(e);
    };

    const handleSelectDate = (date: Date): void => {
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
      if (!showCalendar) {
        return;
      }

      const handleOutside: EventListener = (event): void => {
        const composedPath = event.composedPath();
        const node = (
          composedPath.length > 0 ? composedPath[0] : event.target
        ) as Node;
        if (
          !calendarRef?.current?.contains(node) &&
          !calenderButtonRef?.current?.contains(node)
        ) {
          setShowCalendar(false);
          event.type === 'click' && calenderButtonRef?.current?.focus();
        }
      };

      let previousWidth = window.innerWidth;
      const handleResize: EventListener = (e): void => {
        const newWidth = window.innerWidth;

        if (e.type === 'resize' && newWidth < previousWidth) {
          closeCalendar();
        }
        previousWidth = newWidth;
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
          onHelpToggle={onHelpToggle}
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
            value={inputValue}
            aria-describedby={errorMessage ? errorId : undefined}
            aria-invalid={!!errorMessage || undefined}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {!readOnly && (
            <button
              ref={calenderButtonRef}
              type={'button'}
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
          showError={!!errorMessage}
          className={classNames?.errorMessage ?? ''}
        >
          {errorMessage}
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
