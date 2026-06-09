import { JSX, useId, useImperativeHandle, useRef } from 'react';

import {
  getCommonAutoCompleteDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';

import { TextFieldProps } from './TextField.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { InputCounter } from '../InputCounter/InputCounter';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import { getAriaInvalid } from '../utils';

import styles from './TextField.module.scss';

/**
 * TextField
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-textfield--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/textfield/) - Brukerveiledning
 */
export const TextField = ({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  characterLimit,
  description,
  errorMessage,
  helpSvgPath,
  helpText,
  label,
  titleHelpSvg,
  ariaDescribedBy,
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
  value,
  hasSpacing,
  hideLabel,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onHelpToggle,
}: TextFieldProps): JSX.Element => {
  const errorId = `textFieldErrorId-${useId()}`;
  const generatedId = `textFieldTextboxId-${useId()}`;
  const characterCounterId = `textFieldCharacterCounter-${useId()}`;
  const descriptionId = `descId-${useId()}`;
  const textboxId = externalId ?? generatedId;

  const textboxRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => textboxRef.current as HTMLInputElement);

  const textboxClassName =
    `${styles.textbox} $ ${!hideLabel ? styles.textboxMarginTop : ''} ${
      classNames?.textbox ?? ''
    }`.trim();

  const resolvedAriaDescribedBy =
    [
      ariaDescribedBy,
      description && descriptionId,
      errorMessage && errorId,
      characterLimit && characterCounterId,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div
      className={`${styles.wrapper} ${className} ${classNames?.container ?? ''}`.trim()}
      lang={lang}
      data-has-spacing={hasSpacing}
    >
      <LabelWithHelp
        classNames={classNames}
        htmlFor={textboxId}
        hideLabel={hideLabel}
        description={description}
        descriptionId={descriptionId}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        titleHelpSvg={titleHelpSvg}
        disabled={disabled}
        onHelpToggle={onHelpToggle}
      >
        {label}
      </LabelWithHelp>
      <input
        ref={(node) => {
          // Handle both the external ref and our internal ref
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          textboxRef.current = node;
        }}
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
        value={value}
        aria-describedby={resolvedAriaDescribedBy}
        aria-invalid={getAriaInvalid(errorMessage, required)}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      {characterLimit ? (
        <InputCounter
          inputRef={textboxRef}
          id={characterCounterId}
          characterLimit={characterLimit}
          value={value !== undefined ? String(value) : undefined}
        />
      ) : null}
      <ErrorMessage
        id={errorId}
        showError={!!errorMessage}
        className={classNames?.errorMessage}
      >
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

TextField.displayName = 'TextField';
