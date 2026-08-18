import {
  ChangeEvent,
  JSX,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import { TextAreaProps } from './TextArea.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { InputCounter } from '../InputCounter/InputCounter';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import { getAriaInvalid } from '../utils';

import styles from './TextArea.module.scss';

/**
 * TextArea
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-textarea--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/textarea/) - Brukerveiledning
 */
export const TextArea = ({
  ref,
  id: externalId,
  className = '',
  classNames,
  lang,
  'data-testid': dataTestId,
  autosize,
  description,
  errorMessage,
  helpSvgPath,
  helpText,
  label,
  titleHelpSvg,
  ariaDescribedBy,
  autoComplete = 'off',
  autoCorrect,
  characterLimit,
  defaultValue,
  disabled = false,
  form,
  maxLength,
  minLength,
  name,
  placeholder,
  readOnly = false,
  required = false,
  rows,
  spellCheck,
  value,
  hasSpacing = false,
  hideLabel = false,
  onBlur,
  onChange,
  onFocus,
  onHelpToggle,
}: TextAreaProps): JSX.Element => {
  const errorId = `textAreaErrorId-${useId()}`;
  const generatedId = `textAreaTextboxId-${useId()}`;
  const characterCounterId = `textAreaCharacterCounter-${useId()}`;
  const descriptionId = `descId-${useId()}`;
  const textboxId = externalId ?? generatedId;

  const textboxRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => textboxRef.current as HTMLTextAreaElement);

  useLayoutEffect(() => {
    if (autosize) {
      resizeTextArea();
    }
  }, [autosize, value]);

  const resizeTextArea = (): void => {
    const textArea = textboxRef.current as HTMLTextAreaElement;
    textArea.style.height = 'inherit';
    const { scrollHeight } = textArea;
    const includeBorderAndMore = textArea.offsetHeight - textArea.clientHeight;
    textArea.style.height = `${scrollHeight + includeBorderAndMore}px`;
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (autosize && value === undefined) {
      resizeTextArea();
    }
    onChange?.(e);
  };

  const autosizeTextarea = autosize ? styles.textarea_autosize : '';
  const textboxClassName = `${styles.textarea}  ${autosizeTextarea} ${
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
      <textarea
        ref={textboxRef}
        id={textboxId}
        className={textboxClassName}
        data-testid={dataTestId}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        defaultValue={defaultValue}
        disabled={disabled}
        form={form}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        rows={rows}
        spellCheck={spellCheck}
        value={value}
        aria-describedby={resolvedAriaDescribedBy}
        aria-invalid={getAriaInvalid(errorMessage, required)}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
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

TextArea.displayName = 'TextArea';
