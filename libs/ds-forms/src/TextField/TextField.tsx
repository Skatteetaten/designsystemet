import {
  ChangeEvent,
  JSX,
  ModifierKey,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import {
  getCommonAutoCompleteDefault,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
  useValidateFormRequiredProps,
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
  const textboxId = externalId ?? generatedId;

  const textboxRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => textboxRef.current as HTMLInputElement);

  // History stack for undo/redo functionality
  const historyRef = useRef<{
    past: { value: string; cursorPosition: number }[];
    future: { value: string; cursorPosition: number }[];
    current: { value: string; cursorPosition: number };
  }>({
    past: [],
    future: [],
    current: {
      value: value?.toString() || defaultValue?.toString() || '',
      cursorPosition: 0,
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
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
    if (!historyRef.current.past.length && !historyRef.current.future.length) {
      historyRef.current.current = {
        value: inputValue,
        cursorPosition,
      };
    }

    // Handle redo (Ctrl+Y / Command+Y or Ctrl+Shift+Z / Command+Shift+Z)
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'y' || (e.shiftKey && e.key === 'z'))
    ) {
      if (historyRef.current.future.length > 0) {
        e.preventDefault();

        // Get the first item from future
        const nextState = historyRef.current.future.shift();

        // Move current value to past stack
        const currentState = {
          value: historyRef.current.current.value,
          cursorPosition,
        };

        const newPast = [...historyRef.current.past, currentState];

        // Update history ref
        historyRef.current = {
          past: newPast,
          future: [...historyRef.current.future],
          current: nextState || { value: '', cursorPosition: 0 },
        };

        // Update input value
        if (textboxRef.current && nextState !== undefined) {
          textboxRef.current.value = nextState.value || '';

          // Set cursor position
          requestAnimationFrame(() => {
            if (textboxRef.current) {
              const pos = Math.min(
                nextState.cursorPosition,
                nextState.value?.length || 0
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
      }
      return;
    }

    // Handle undo (Ctrl+Z / Command+Z)
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      if (historyRef.current.past.length > 0) {
        e.preventDefault();

        // Move current value to future stack
        const currentState = {
          value: historyRef.current.current.value,
          cursorPosition,
        };

        const newFuture = [currentState, ...historyRef.current.future];

        const previousState = historyRef.current.past.pop();

        // Update history ref
        historyRef.current = {
          past: [...historyRef.current.past],
          future: newFuture,
          current: previousState || { value: '', cursorPosition: 0 },
        };

        // Update input value
        if (textboxRef.current && previousState !== undefined) {
          textboxRef.current.value = previousState.value || '';

          // Set cursor position
          requestAnimationFrame(() => {
            if (textboxRef.current) {
              const pos = Math.min(
                previousState.cursorPosition,
                previousState.value?.length || 0
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
      }
      return;
    }

    if (!thousandSeparator) return;

    const isPreviousCharacterSeparator = /[, ]/.test(
      inputValue[cursorPosition - 1]
    );
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
      if (historyRef.current.current.value !== formattedValue) {
        historyRef.current = {
          past: [
            ...historyRef.current.past,
            {
              value: historyRef.current.current.value || '',
              cursorPosition: cursorPosition,
            },
          ],
          future: [],
          current: {
            value: formattedValue,
            cursorPosition: newPosition,
          },
        };
      }

      input.value = formattedValue;
      requestAnimationFrame(() => {
        input.setSelectionRange(newPosition, newPosition);
      });
    }
    //Update cursor position in case of arrow keys or other movement
    historyRef.current.current.cursorPosition = cursorPosition;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    if (thousandSeparator) {
      const cursorPosition = input.selectionStart || 0;

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
      const oldValue = historyRef.current.current?.value || '';
      if (oldValue !== formattedValue) {
        // Add the previous value to the past stack
        historyRef.current = {
          past: [
            ...historyRef.current.past,
            {
              value: oldValue || '',
              cursorPosition: historyRef.current.current.cursorPosition,
            },
          ],
          future: [], // Clear future stack on new changes
          current: { value: input.value || '', cursorPosition: newPosition },
        };
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
    [errorMessage && errorId, characterLimit && characterCounterId]
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
