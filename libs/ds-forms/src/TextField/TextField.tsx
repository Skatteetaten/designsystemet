import { forwardRef, useId } from 'react';

import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
} from '@skatteetaten/ds-core-utils';

import { getTextFieldVariantDefault } from './defaults';
import { TextFieldProps } from './TextField.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './TextField.module.scss';

export const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      description,
      errorMessage,
      label,
      thousandSeparator,
      variant = getTextFieldVariantDefault(),
      autoComplete,
      defaultValue,
      disabled,
      inputMode,
      maxLength,
      minLength,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      rows,
      value,
      ariaDescribedby,
      isLarge,
      hideLabel,
      hasError,
      showRequiredMark,
      onBlur,
      onChange,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const errorId = `textFieldErrorId-${useId()}`;
    const uniqueTextboxId = `textFieldTextboxId-${useId()}`;
    const textboxId = externalId ?? uniqueTextboxId;

    const addSpaces = (value: string): string =>
      value.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        dsI18n.language === Languages.Engelsk ? ',' : ' '
      );
    const removeNonNumeric = (value: string): string =>
      value.replace(/[^0-9]/g, '');

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
      if (thousandSeparator && (e.target as HTMLInputElement)) {
        const input = e.target as HTMLInputElement;
        input.value = addSpaces(removeNonNumeric(input.value));
      }

      onChange?.(e);
    };

    const ariaDescribedbyInput = `${ariaDescribedby ?? ''} ${
      hasError ? errorId : ''
    }`.trim();

    const isMultiline = variant === 'multiline';

    const concatenatedClassName = `${className}`.trim();

    const hideLabelClassName = hideLabel ? styles.srOnly : '';
    const labelClassName = `${styles.label} ${hideLabelClassName}`.trim();
    const requiredClassName = showRequiredMark
      ? styles.label_required
      : undefined;

    const lagreTextboxClassName = isLarge ? styles.textbox_large : '';
    const multilineTextboxClassName = isMultiline
      ? styles.textbox_multiline
      : '';
    const textboxClassName =
      `${styles.textbox} ${lagreTextboxClassName} ${multilineTextboxClassName}`.trim();

    const Tag = isMultiline ? 'textarea' : 'input';
    return (
      <div className={concatenatedClassName} lang={lang}>
        <label htmlFor={textboxId} className={labelClassName}>
          <span className={requiredClassName}>{label}</span>
          {description && (
            <span className={styles.labelDescription}>{description}</span>
          )}
        </label>
        <Tag
          ref={
            ref as (
              instance: HTMLInputElement | HTMLTextAreaElement | null
            ) => void
          }
          id={textboxId}
          className={textboxClassName}
          data-testid={dataTestId}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          disabled={disabled}
          inputMode={inputMode}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          pattern={isMultiline ? undefined : pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={isMultiline ? rows : undefined}
          value={value}
          aria-describedby={ariaDescribedbyInput || undefined}
          aria-invalid={hasError ?? undefined}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
        />
        <ErrorMessage
          id={errorId}
          showError={hasError && errorMessage !== undefined}
        >
          {errorMessage ?? ''}
        </ErrorMessage>
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export { getTextFieldVariantDefault };
