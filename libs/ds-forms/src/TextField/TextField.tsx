import { forwardRef, useId, useImperativeHandle, useRef } from 'react';

import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
} from '@skatteetaten/ds-core-utils';

import { getTextFieldAsDefault } from './defaults';
import { TextboxRefHandle, TextFieldProps } from './TextField.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './TextField.module.scss';

export const TextField = forwardRef<TextboxRefHandle, TextFieldProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      autosize,
      description,
      errorMessage,
      label,
      thousandSeparator,
      as: Tag = getTextFieldAsDefault(),
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

    const textboxRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      textboxRef: textboxRef,
    }));

    const separator = dsI18n.language === Languages.Engelsk ? ',' : ' ';
    const addSpacesOrCommas = (value: string): string =>
      value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    const removeNonNumeric = (value: string): string =>
      value.replace(/[^0-9]/g, '');

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
      if (thousandSeparator) {
        const input = e.target as HTMLInputElement;
        input.value = addSpacesOrCommas(removeNonNumeric(input.value));
      }

      if (autosize) {
        const textArea = textboxRef.current as HTMLTextAreaElement;
        textArea.style.height = 'inherit';
        const { scrollHeight } = textArea;
        const includeBorderAndMore =
          textArea.offsetHeight - textArea.clientHeight;
        textArea.style.height = `${scrollHeight + includeBorderAndMore}px`;
      }

      onChange?.(e);
    };

    /* Slik at value har riktig format også før bruker begynner å skrive i feltet */
    if (thousandSeparator && value) {
      value = addSpacesOrCommas(removeNonNumeric(value.toString()));
    }

    const ariaDescribedbyInput = `${ariaDescribedby ?? ''} ${
      hasError ? errorId : ''
    }`.trim();

    const concatenatedClassName = `${className}`.trim();

    const hideLabelClassName = hideLabel ? styles.srOnly : '';
    const labelClassName = `${styles.label} ${hideLabelClassName}`.trim();
    const requiredClassName = showRequiredMark
      ? styles.label_required
      : undefined;

    const lagreTextboxClassName = isLarge ? styles.textbox_large : '';
    const multilineTextboxClassName =
      Tag === 'textarea' ? styles.textbox_multiline : '';
    const autosizeTextarea = autosize ? styles.textbox_autosize : '';
    const textboxClassName =
      `${styles.textbox} ${lagreTextboxClassName} ${multilineTextboxClassName} ${autosizeTextarea}`.trim();
    return (
      <div className={concatenatedClassName} lang={lang}>
        <label htmlFor={textboxId} className={labelClassName}>
          <span className={requiredClassName}>{label}</span>
          {description && (
            <span className={styles.labelDescription}>{description}</span>
          )}
        </label>
        <Tag
          ref={textboxRef}
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
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={rows}
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

export { getTextFieldAsDefault };
