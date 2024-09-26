import {
  ChangeEvent,
  forwardRef,
  JSX,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
  getCommonAutoCompleteDefault,
  Languages,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';

import { getTextFieldAsDefault } from './defaults';
import { TextboxRefHandle, TextFieldProps } from './TextField.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './TextField.module.scss';

export const TextField = forwardRef<TextboxRefHandle, TextFieldProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      as: Tag = getTextFieldAsDefault(),
      autosize,
      description,
      errorMessage,
      helpSvgPath,
      helpText,
      label,
      thousandSeparator,
      titleHelpSvg,
      variant = getCommonFormVariantDefault(),
      autoComplete = getCommonAutoCompleteDefault(),
      defaultValue,
      disabled,
      form,
      inputMode,
      maxLength,
      minLength,
      list,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      rows,
      value,
      hideLabel,
      showRequiredMark,
      onBlur,
      onChange,
      onFocus,
      onHelpToggle,
    },
    ref
  ): JSX.Element => {
    useValidateFormRequiredProps({ required, showRequiredMark });
    const errorId = `textFieldErrorId-${useId()}`;
    const generatedId = `textFieldTextboxId-${useId()}`;
    const textboxId = externalId ?? generatedId;

    const textboxRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      textboxRef: textboxRef,
    }));

    useLayoutEffect(() => {
      if (autosize) {
        resizeTextArea();
      }
    }, [autosize, value]);

    const resizeTextArea = (): void => {
      const textArea = textboxRef.current as HTMLTextAreaElement;
      textArea.style.height = 'inherit';
      const { scrollHeight } = textArea;
      const includeBorderAndMore =
        textArea.offsetHeight - textArea.clientHeight;
      textArea.style.height = `${scrollHeight + includeBorderAndMore}px`;
    };

    const separator = dsI18n.language === Languages.Engelsk ? ',' : ' ';
    const addSpacesOrCommas = (value: string): string =>
      value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    const removeNonNumeric = (value: string): string => {
      const trimmed = value.trim();
      const isNegative = /^-/.test(trimmed);
      const numberOnly = trimmed.replaceAll(/\D+/g, '');
      return isNegative ? `-${numberOnly}` : numberOnly;
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      if (!thousandSeparator) return;

      const input = e.currentTarget;
      const cursorPosition = input.selectionStart || 0;
      const value = input.value;

      const isPreviousCharacterSeparator = /[, ]/.test(
        value[cursorPosition - 1]
      );

      const selectionLength =
        (input.selectionEnd || 0) - (input.selectionStart || 0);

      if (
        e.key === 'Backspace' &&
        cursorPosition > 0 &&
        isPreviousCharacterSeparator &&
        selectionLength === 0
      ) {
        e.preventDefault();

        const deletePosition = cursorPosition - 1;

        const newValue =
          value.slice(0, deletePosition - 1) + value.slice(cursorPosition);

        const formattedValue = addSpacesOrCommas(removeNonNumeric(newValue));

        const separatorsInOldValue = value.match(/[, ]/g)?.length || 0;
        const separatorsInNewValue = formattedValue.match(/[, ]/g)?.length || 0;

        // hvis det ble fjernet en separator, må vi flytte markøren et ekstra hopp til venstre, med mindre vi sletter den første separatoren.
        const separatorWasRemoved =
          separatorsInOldValue > separatorsInNewValue && cursorPosition > 2;

        input.value = formattedValue;

        const newPosition = deletePosition - 1 - (separatorWasRemoved ? 1 : 0);

        requestAnimationFrame(() => {
          input.setSelectionRange(newPosition, newPosition);
        });
      }
    };

    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
      if (thousandSeparator) {
        const input = e.target as HTMLInputElement;
        const cursorPosition = input.selectionStart || 0;
        const oldValue = input.value;

        const digitsBeforeCursor = oldValue
          .substring(0, cursorPosition)
          .replace(/\D/g, '').length;

        const formattedValue = addSpacesOrCommas(removeNonNumeric(input.value));
        input.value = formattedValue;

        let newPosition = 0;
        let digitCount = 0;
        for (let i = 0; i < formattedValue.length; i++) {
          if (/\d/.test(formattedValue[i])) {
            digitCount++;
            if (digitCount > digitsBeforeCursor) {
              break;
            }
          }
          newPosition = i + 1;
        }

        input.setSelectionRange(newPosition, newPosition);
      }

      if (autosize && defaultValue !== undefined) {
        resizeTextArea();
      }
      onChange?.(e);
    };

    /* Slik at value har riktig format også før bruker begynner å skrive i feltet */
    if (thousandSeparator && value) {
      value = addSpacesOrCommas(removeNonNumeric(value.toString()));
    }

    if (thousandSeparator && defaultValue) {
      defaultValue = addSpacesOrCommas(
        removeNonNumeric(defaultValue.toString())
      );
    }

    const isLarge = variant === 'large';
    const multilineTextboxClassName =
      Tag === 'textarea' ? styles.textbox_multiline : '';
    const autosizeTextarea = autosize ? styles.textbox_autosize : '';
    const textboxClassName = `${styles.textbox} ${
      isLarge ? styles.textbox_large : ''
    } ${multilineTextboxClassName} ${autosizeTextarea} ${
      classNames?.textbox ?? ''
    }`.trim();

    return (
      <div
        className={`${className} ${classNames?.container ?? ''}`.trim()}
        lang={lang}
      >
        <LabelWithHelp
          classNames={classNames}
          htmlFor={textboxId}
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
        <Tag
          ref={textboxRef}
          id={textboxId}
          className={textboxClassName}
          data-testid={dataTestId}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          disabled={disabled}
          form={form}
          inputMode={inputMode}
          list={list}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={rows}
          value={value}
          aria-describedby={errorMessage ? errorId : undefined}
          aria-invalid={!!errorMessage || undefined}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          onKeyDown={handleKeyDown}
        />
        <ErrorMessage
          id={errorId}
          showError={!!errorMessage}
          className={classNames?.errorMessage}
        >
          {errorMessage}
        </ErrorMessage>
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export { getTextFieldAsDefault };
