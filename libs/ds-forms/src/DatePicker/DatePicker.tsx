import React, { forwardRef, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { CalendarIcon } from '@skatteetaten/ds-icons';

import { DatePickerProps } from './DatePicker.types';
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
      description,
      errorMessage,
      helpSvgPath,
      helpText,
      label,
      titleHelpSvg,
      variant = getCommonFormVariantDefault(),
      autoComplete,
      disabled,
      name,
      placeholder,
      readOnly,
      required,
      value,
      hasError,
      hideLabel,
      showRequiredMark,
      onBlur,
      onChange,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });

    const errorId = `datepickerErrorId-${useId()}`;
    const generatedId = `datepickerInputId-${useId()}`;
    const datepickerId = externalId ?? generatedId;

    const [showCalendar, setShowCalendar] = useState(false);

    const toggleCalendar = (): void => {
      setShowCalendar(!showCalendar);
    };

    // TODO FRONT-1346 - mangler riktig tekstvariabel
    const placeholderValue =
      placeholder?.trim() === ''
        ? undefined
        : placeholder ?? t('shared.ChooseValue');

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
          htmlFor={datepickerId}
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
          className={`${styles.date_container} ${
            classNames?.dateContainer ?? ''
          }`}
        >
          <input
            ref={ref}
            id={datepickerId}
            className={inputClassName}
            data-testid={dataTestId}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            disabled={disabled}
            name={name}
            placeholder={placeholderValue}
            readOnly={readOnly}
            required={required}
            value={value}
            aria-describedby={hasError ? errorId : undefined}
            aria-invalid={hasError ?? undefined}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
          />
          {!readOnly && (
            <button
              className={calendarButtonClassName}
              disabled={disabled}
              aria-expanded={showCalendar}
              onClick={(): void => toggleCalendar()}
            >
              {/* TODO FRONT-1346 - mangler tekstvariabel */}
              <CalendarIcon className={styles.icon} title={'Velg dato'} />
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
          <div className={styles.calendar_container}>
            {'TODO - FRONT-1346 Her kommer kalendervisning'}
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
