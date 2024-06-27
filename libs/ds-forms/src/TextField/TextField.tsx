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
      autoComplete,
      defaultValue,
      disabled,
      form,
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
    }, [autosize]);

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
    const removeNonNumeric = (value: string): string =>
      value.replace(/[^0-9-]|(?<=.)-/g, '');

    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
      if (thousandSeparator) {
        const input = e.target as HTMLInputElement;
        input.value = addSpacesOrCommas(removeNonNumeric(input.value));
      }

      if (autosize) {
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
    const largeTextboxClassName = isLarge ? styles.textbox_large : '';
    const multilineTextboxClassName =
      Tag === 'textarea' ? styles.textbox_multiline : '';
    const autosizeTextarea = autosize ? styles.textbox_autosize : '';
    const textboxClassName = `${
      styles.textbox
    } ${largeTextboxClassName} ${multilineTextboxClassName} ${autosizeTextarea} ${
      classNames?.textbox ?? ''
    }`.trim();

    return (
      <div
        className={`${className} ${classNames?.container ?? ''}`.trim()}
        lang={lang}
      >
        <LabelWithHelp
          className={classNames?.label ?? ''}
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
