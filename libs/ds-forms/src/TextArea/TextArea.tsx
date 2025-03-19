import {
  ChangeEvent,
  JSX,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import {
  getCommonAutoCompleteDefault,
  getCommonClassNameDefault,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';

import { TextAreaProps } from './TextArea.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './TextArea.module.scss';

export const TextArea = ({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  autosize,
  autoCorrect,
  description,
  errorMessage,
  helpSvgPath,
  helpText,
  label,
  titleHelpSvg,
  autoComplete = getCommonAutoCompleteDefault(),
  defaultValue,
  disabled,
  form,
  maxLength,
  minLength,
  name,
  placeholder,
  readOnly,
  required,
  rows,
  spellCheck,
  value,
  hideLabel,
  showRequiredMark,
  onBlur,
  onChange,
  onFocus,
  onHelpToggle,
}: TextAreaProps): JSX.Element => {
  useValidateFormRequiredProps({ required, showRequiredMark });
  const errorId = `textAreaErrorId-${useId()}`;
  const generatedId = `textAreaTextboxId-${useId()}`;
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
  const textboxClassName =
    `${styles.textarea}  ${autosizeTextarea} ${label && !hideLabel ? styles.textareaMarginTop : ''} ${
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
};

TextArea.displayName = 'TextArea';
