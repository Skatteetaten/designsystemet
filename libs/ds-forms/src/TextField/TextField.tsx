import {
  ChangeEvent,
  JSX,
  ModifierKey,
  useId,
  useImperativeHandle,
  useRef,
  KeyboardEvent,
} from 'react';

import {
  getCommonAutoCompleteDefault,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
  useValidateFormRequiredProps,
  useInputHistory,
} from '@skatteetaten/ds-core-utils';

import { TextFieldProps } from './TextField.types';
import { addSpacesOrCommas, removeNonNumeric } from './utils';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { InputCounter } from '../InputCounter/InputCounter';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './TextField.module.scss';

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
  value,
  hasSpacing,
  hideLabel,
  showRequiredMark,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onHelpToggle,
}: TextFieldProps): JSX.Element => {
  useValidateFormRequiredProps({ required, showRequiredMark });
  const errorId = `textFieldErrorId-${useId()}`;
  const generatedId = `textFieldTextboxId-${useId()}`;
  const characterCounterId = `textFieldCharacterCounter-${useId()}`;
  const descriptionId = `descId-${useId()}`;
  const textboxId = externalId ?? generatedId;

  const textboxRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => textboxRef.current as HTMLInputElement);

  const inputHistory = useInputHistory({
    initialValue: value?.toString() || defaultValue?.toString() || '',
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (onKeyDown) {
      onKeyDown(e);
      return;
    }

    if (!thousandSeparator) {
      return;
    }

    const input = e.currentTarget;
    const cursorPosition = input.selectionEnd || 0;
    const inputValue = input.value;

    // Initialize history if empty (first interaction)
    inputHistory.initialize(inputValue, cursorPosition);

    // Handle redo (Ctrl+Y / Command+Y or Ctrl+Shift+Z / Command+Shift+Z)
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'y' || (e.shiftKey && e.key === 'z'))
    ) {
      const nextState = inputHistory.redo(cursorPosition);
      if (nextState && textboxRef.current) {
        e.preventDefault();
        textboxRef.current.value = nextState.value;

        // Set cursor position
        requestAnimationFrame(() => {
          if (textboxRef.current) {
            const pos = Math.min(
              nextState.cursorPosition,
              nextState.value.length
            );
            textboxRef.current.setSelectionRange(pos, pos);
          }
        });

        // Trigger onChange to keep external state in sync
        if (onChange) {
          const syntheticEvent = {
            target: textboxRef.current,
            currentTarget: textboxRef.current,
          } as ChangeEvent<HTMLInputElement>;
          onChange(syntheticEvent);
        }
      }
      return;
    }

    // Handle undo (Ctrl+Z / Command+Z)
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      const previousState = inputHistory.undo(cursorPosition);
      if (previousState && textboxRef.current) {
        e.preventDefault();
        textboxRef.current.value = previousState.value;

        // Set cursor position
        requestAnimationFrame(() => {
          if (textboxRef.current) {
            const pos = Math.min(
              previousState.cursorPosition,
              previousState.value.length
            );
            textboxRef.current.setSelectionRange(pos, pos);
          }
        });

        // Trigger onChange to keep external state in sync
        if (onChange) {
          const syntheticEvent = {
            target: textboxRef.current,
            currentTarget: textboxRef.current,
          } as ChangeEvent<HTMLInputElement>;
          onChange(syntheticEvent);
        }
      }
      return;
    }

    if (!thousandSeparator) return;

    const isPreviousCharacterSeparator = /[, ]/.test(
      inputValue[cursorPosition - 1]
    );

    const isNextCharacterSeparator = /[, ]/.test(inputValue[cursorPosition]);

    const selectionLength =
      (input.selectionEnd || 0) - (input.selectionStart || 0);

    const modifierKeys: readonly ModifierKey[] = [
      'Alt',
      'AltGraph',
      'Control',
      'Meta',
      'Shift',
    ] as const;
    const isAnyModifierKeyPressed = modifierKeys.some((key) =>
      e.getModifierState(key)
    );

    if (
      e.key === 'Backspace' &&
      !isAnyModifierKeyPressed &&
      cursorPosition > 0 &&
      isPreviousCharacterSeparator &&
      selectionLength === 0
    ) {
      e.preventDefault();

      const deletePosition = cursorPosition - 1;

      const newValue =
        inputValue.slice(0, deletePosition - 1) +
        inputValue.slice(cursorPosition);

      const formattedValue = addSpacesOrCommas(removeNonNumeric(newValue));

      const separatorsInOldValue = inputValue.match(/[, ]/g)?.length || 0;
      const separatorsInNewValue = formattedValue.match(/[, ]/g)?.length || 0;

      // hvis det ble fjernet en separator, må vi flytte markøren et ekstra hopp til venstre, med mindre vi sletter den første separatoren.
      const separatorWasRemoved =
        separatorsInOldValue > separatorsInNewValue && cursorPosition > 2;

      const newPosition = deletePosition - 1 - (separatorWasRemoved ? 1 : 0);

      // Save the current value to history before making changes
      inputHistory.pushState(formattedValue, newPosition, input);

      input.value = formattedValue;
      requestAnimationFrame(() => {
        input.setSelectionRange(newPosition, newPosition);
      });
    }

    if (
      e.key === 'Delete' &&
      !isAnyModifierKeyPressed &&
      selectionLength === 0
    ) {
      // If cursor is before a separator, delete the digit after the separator
      if (isNextCharacterSeparator) {
        e.preventDefault();

        const deletePosition = cursorPosition + 1;

        const newValue =
          inputValue.slice(0, cursorPosition) +
          inputValue.slice(deletePosition + 1);

        const formattedValue = addSpacesOrCommas(removeNonNumeric(newValue));

        const separatorsInOldValue = inputValue.match(/[, ]/g)?.length || 0;
        const separatorsInNewValue = formattedValue.match(/[, ]/g)?.length || 0;

        // hvis det ble fjernet en separator, må vi flytte markøren et ekstra hopp til høyre, med mindre vi sletter den første separatoren.
        const separatorWasRemoved = separatorsInOldValue > separatorsInNewValue;

        const newPosition = deletePosition + (separatorWasRemoved ? 1 : 0);

        // Save the current value to history before making changes
        inputHistory.pushState(formattedValue, newPosition, input);

        input.value = formattedValue;
        requestAnimationFrame(() => {
          input.setSelectionRange(newPosition, newPosition);
        });
      }
    }

    // Update cursor position in case of arrow keys or other movement
    inputHistory.updateCursorPosition(cursorPosition);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    if (thousandSeparator) {
      const cursorPosition = input.selectionEnd || 0;

      const digitsBeforeCursor = newValue
        .substring(0, cursorPosition)
        .replace(/\D/g, '').length;

      const formattedValue = addSpacesOrCommas(removeNonNumeric(input.value));
      input.value = formattedValue;

      let digitCount = 0;

      // Calculate new cursor position

      let newPosition = 0;
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

      // Update current in history after formatting and positioning cursor
      // Only update if value actually changed and if thousandSeparator is set
      const oldValue = inputHistory.getCurrentValue();
      if (oldValue !== formattedValue) {
        inputHistory.pushState(formattedValue, newPosition);
      }

      // Vi trenger ikke å kalle onChange dersom bruker har
      // skrevet inn ikke numeriske symboler som er filtrert bort igjen.
      if (oldValue !== formattedValue) {
        onChange?.(e);
      }
    } else {
      onChange?.(e);
    }
  };

  /* Slik at value har riktig format også før bruker begynner å skrive i feltet */
  const formattedValue =
    thousandSeparator && value
      ? addSpacesOrCommas(removeNonNumeric(value.toString()))
      : value;
  const formattedDefaultValue =
    thousandSeparator && defaultValue
      ? addSpacesOrCommas(removeNonNumeric(defaultValue.toString()))
      : defaultValue;

  const textboxClassName =
    `${styles.textbox} $ ${label && !hideLabel ? styles.textboxMarginTop : ''} ${
      classNames?.textbox ?? ''
    }`.trim();

  const ariaDescribedBy =
    [
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
        showRequiredMark={showRequiredMark}
        description={description}
        descriptionId={descriptionId}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        titleHelpSvg={titleHelpSvg}
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
        data-variant={variant}
        autoComplete={autoComplete}
        defaultValue={formattedDefaultValue}
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
        value={formattedValue}
        aria-describedby={ariaDescribedBy}
        aria-invalid={!!errorMessage || undefined}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
      />
      {characterLimit ? (
        <InputCounter
          inputRef={textboxRef}
          id={characterCounterId}
          characterLimit={characterLimit}
          value={formattedValue ? String(formattedValue) : undefined}
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
