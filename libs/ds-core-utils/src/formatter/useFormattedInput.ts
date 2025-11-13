import { useCallback, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { formatter } from './formatter';
import { FormatTypes } from './formatter.types';
import { useInputHistory } from './useInputHistory';
import { maxLengths } from './utils';

type InputFormatTypes = Exclude<FormatTypes, 'number'>;

/**
 * Ikke-bryteromstegn brukt som separator i formaterte verdier.
 * Brukes for å forhindre linjeskift innenfor formaterte tall.
 */
const NON_BREAKING_SPACE = '\u00A0';

/**
 * Henter maksimalt tillatt lengde for en gitt formattype.
 * @param type - Formattypen å hente maksimallengde for
 * @returns Maksimallengde
 */
const getMaxLength = (type: FormatTypes): number | undefined => {
  return maxLengths[type as keyof typeof maxLengths];
};

/**
 * Konfigurasjonsalternativer for useFormattedInput-hooken.
 */
interface UseFormattedInputOptions {
  /** Typen formattering som skal anvendes */
  type: InputFormatTypes;
  /** Startverdi som skal formateres og vises (valgfritt) */
  initialValue?: string;
}

/**
 * Returtype for useFormattedInput-hooken.
 */
interface UseFormattedInputReturn {
  /** Den formaterte verdien for visning */
  value: string;
  /** Endringshåndterer for input-hendelser */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Key down-håndterer for spesiell tasteatferd */
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  /** Den rå uformaterte verdien (bare tall) */
  rawValue: string;
}

const checkIfAnyModifierKeyPressed = (
  event: KeyboardEvent<HTMLInputElement>
): boolean => {
  const modifierKeys = ['Alt', 'AltGraph', 'Control', 'Meta', 'Shift'] as const;
  return modifierKeys.some((key) => event.getModifierState(key));
};

/**
 * Posisjonerer markøren etter et bestemt antall siffer i et formatert input.
 * Bruker requestAnimationFrame for å sikre riktig timing med DOM-oppdateringer.
 * @param input - HTML input-elementet
 * @param formattedValue - Den formaterte strengverdien
 * @param targetDigitCount - Antall siffer markøren skal posisjoneres etter
 * @returns new cursor position
 */
const positionCursorAfterDigits = (
  input: HTMLInputElement,
  formattedValue: string,
  targetDigitCount: number
): number => {
  let newPosition = 0;
  let digitCount = 0;
  for (let i = 0; i < formattedValue.length; i++) {
    if (/\d/.test(formattedValue[i])) {
      digitCount++;
      if (digitCount > targetDigitCount) {
        break;
      }
    }
    newPosition = i + 1;
  }

  requestAnimationFrame(() => {
    input.setSelectionRange(newPosition, newPosition);
  });
  return newPosition;
};

/**
 * (BETA - kan komme endringer)
 * Hook for å administrere formaterte inputfelt med automatisk formatering og markørposisjonering.
 * Støtter norske personnummer, organisasjonsnummer, kontonummer og telefonnummer.
 *
 * Funksjoner:
 * - Automatisk formatering under skriving
 * - Smart markørposisjonering etter formatendringer
 * - Korrekt håndtering av backspace/delete ved separatorgrenser
 * - Utvinning av råverdi (bare siffer)
 * - Lengdevalidering for spesifikke formater
 * @param options - Konfigurasjonsobjekt
 * @param options.type - Typen formatering som skal anvendes
 * @param options.initialValue - Startverdi som skal formateres og vises
 * @returns Objekt med formatert verdi, hendelseshåndterere og råverdi
 * @example
 * ```tsx
 * const phoneFormatter = useFormattedInput({
 *   type: 'phoneNumber',
 *   initialValue: '12345678'
 * });
 *
 * return (
 *   <TextField
 *     value={phoneFormatter.value}
 *     onChange={phoneFormatter.onChange}
 *     onKeyDown={phoneFormatter.onKeyDown}
 *   />
 * );
 * ```
 */
export const useFormattedInput = ({
  type,
  initialValue = '',
}: UseFormattedInputOptions): UseFormattedInputReturn => {
  const [rawValue, setRawValue] = useState(() => {
    const cleaned = initialValue.replace(/[^\d]/g, '');
    const maxLength = getMaxLength(type);
    return maxLength ? cleaned.substring(0, maxLength) : cleaned;
  });

  const displayValue = formatter({
    value: rawValue,
    type,
  }).value;

  const inputHistory = useInputHistory({
    initialValue: displayValue,
  });

  const handleUndo = useCallback(
    (
      event: KeyboardEvent<HTMLInputElement>,
      input: HTMLInputElement,
      cursorPosition: number
    ) => {
      const previousState = inputHistory.undo(cursorPosition);
      if (previousState) {
        event.preventDefault();

        // Extract raw value from formatted value
        const newRawValue = previousState.value.replace(/[^\d]/g, '');
        setRawValue(newRawValue);

        // Set cursor position
        requestAnimationFrame(() => {
          const pos = Math.min(
            previousState.cursorPosition,
            previousState.value.length
          );
          input.setSelectionRange(pos, pos);
        });
      }
    },
    [inputHistory]
  );

  const handleRedo = useCallback(
    (
      event: KeyboardEvent<HTMLInputElement>,
      input: HTMLInputElement,
      cursorPosition: number
    ) => {
      const nextState = inputHistory.redo(cursorPosition);
      if (nextState) {
        event.preventDefault();

        // Extract raw value from formatted value
        const newRawValue = nextState.value.replace(/[^\d]/g, '');
        setRawValue(newRawValue);

        // Set cursor position
        requestAnimationFrame(() => {
          const pos = Math.min(
            nextState.cursorPosition,
            nextState.value.length
          );
          input.setSelectionRange(pos, pos);
        });
      }
    },
    [inputHistory]
  );

  const handleBackspaceAtSeparator = useCallback(
    (input: HTMLInputElement, digitsBeforeSeparator: number) => {
      if (digitsBeforeSeparator > 0) {
        const newDigits =
          rawValue.slice(0, digitsBeforeSeparator - 1) +
          rawValue.slice(digitsBeforeSeparator);
        setRawValue(newDigits);

        const formattedValue = formatter({
          value: newDigits,
          type,
        }).value;

        const newPosition = positionCursorAfterDigits(
          input,
          formattedValue,
          digitsBeforeSeparator - 1
        );

        // Save to history after formatting
        inputHistory.pushState(formattedValue, newPosition, input);
      }
    },
    [rawValue, type, inputHistory]
  );

  const handleDeleteAtSeparator = useCallback(
    (input: HTMLInputElement, digitsBeforeSeparator: number) => {
      if (digitsBeforeSeparator < rawValue.length) {
        const newDigits =
          rawValue.slice(0, digitsBeforeSeparator) +
          rawValue.slice(digitsBeforeSeparator + 1);
        setRawValue(newDigits);

        const formattedValue = formatter({
          value: newDigits,
          type,
        }).value;

        const newPosition = positionCursorAfterDigits(
          input,
          formattedValue,
          digitsBeforeSeparator
        );

        // Save to history after formatting
        inputHistory.pushState(formattedValue, newPosition, input);
      }
    },
    [rawValue, type, inputHistory]
  );

  const handleDeleteAtDigit = useCallback(
    (input: HTMLInputElement, digitsBeforeCursor: number) => {
      if (digitsBeforeCursor < rawValue.length) {
        const newDigits =
          rawValue.slice(0, digitsBeforeCursor) +
          rawValue.slice(digitsBeforeCursor + 1);
        setRawValue(newDigits);

        const formattedValue = formatter({
          value: newDigits,
          type,
        }).value;

        const newPosition = positionCursorAfterDigits(
          input,
          formattedValue,
          digitsBeforeCursor
        );

        // Save to history after formatting
        inputHistory.pushState(formattedValue, newPosition, input);
      }
    },
    [rawValue, type, inputHistory]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const input = event.currentTarget;
      const cursorPosition = input.selectionEnd || 0;
      const value = input.value;
      const isPreviousCharacterSeparator =
        value[cursorPosition - 1] === NON_BREAKING_SPACE;
      const isNextCharacterSeparator =
        value[cursorPosition] === NON_BREAKING_SPACE;

      const selectionLength =
        (input.selectionEnd || 0) - (input.selectionStart || 0);

      const isAnyModifierKeyPressed = checkIfAnyModifierKeyPressed(event);

      // Initialize history if empty (first interaction)
      inputHistory.initialize(value, cursorPosition);

      // Handle redo (Ctrl+Y / Command+Y or Ctrl+Shift+Z / Command+Shift+Z)
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === 'y' || (event.shiftKey && event.key === 'z'))
      ) {
        handleRedo(event, input, cursorPosition);
        return;
      }

      // Handle undo (Ctrl+Z / Command+Z)
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === 'z' &&
        !event.shiftKey
      ) {
        handleUndo(event, input, cursorPosition);
        return;
      }

      if (
        event.key === 'Backspace' &&
        !isAnyModifierKeyPressed &&
        selectionLength === 0
      ) {
        // If cursor is right after a separator, delete the digit before the separator
        if (isPreviousCharacterSeparator && cursorPosition > 1) {
          event.preventDefault();

          // Count digits before the separator to find which digit to remove
          let digitCount = 0;
          for (let i = 0; i < cursorPosition - 1; i++) {
            if (/\d/.test(value[i])) {
              digitCount++;
            }
          }

          handleBackspaceAtSeparator(input, digitCount);
        }
        // Normal backspace behavior - delete the digit before cursor
        else if (cursorPosition > 0 && !isPreviousCharacterSeparator) {
          // Let default behavior handle this case for digits
          if (/\d/.test(value[cursorPosition - 1])) {
            inputHistory.updateCursorPosition(cursorPosition);
            // This will be handled by the default browser behavior and onChange
            return;
          }
        }
      }

      if (
        event.key === 'Delete' &&
        !isAnyModifierKeyPressed &&
        selectionLength === 0
      ) {
        // Count digits up to the cursor position (before separator)
        let digitsBeforeCursor = 0;
        for (let i = 0; i < cursorPosition; i++) {
          if (/\d/.test(value[i])) {
            digitsBeforeCursor++;
          }
        }

        // If cursor is before a separator, delete the digit after the separator
        if (isNextCharacterSeparator) {
          event.preventDefault();
          handleDeleteAtSeparator(input, digitsBeforeCursor);
        }
        // If cursor is before a digit and delete is pressed, delete the next digit
        else if (
          cursorPosition < value.length &&
          /\d/.test(value[cursorPosition])
        ) {
          event.preventDefault();
          handleDeleteAtDigit(input, digitsBeforeCursor);
        }
      }

      // Prevent typing digits when max length is reached
      const maxLength = getMaxLength(type);
      if (
        maxLength &&
        rawValue.length >= maxLength &&
        /^[0-9]$/.test(event.key) &&
        !isAnyModifierKeyPressed &&
        selectionLength === 0
      ) {
        event.preventDefault();
      }
    },
    [
      rawValue,
      type,
      inputHistory,
      handleUndo,
      handleRedo,
      handleBackspaceAtSeparator,
      handleDeleteAtSeparator,
      handleDeleteAtDigit,
    ]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;
      const inputValue = input.value;

      const cursorPosition = input.selectionStart || 0;

      const digitsBeforeCursor = inputValue
        .substring(0, cursorPosition)
        .replace(/[^\d]/g, '').length;

      let digitsOnly = inputValue.replace(/[^\d]/g, '');

      // Limit length based on type
      const maxLength = getMaxLength(type);
      if (maxLength && digitsOnly.length > maxLength) {
        digitsOnly = digitsOnly.substring(0, maxLength);
      }

      setRawValue(digitsOnly);

      const formattedValue = formatter({
        value: digitsOnly,
        type,
      }).value;

      const newPosition = positionCursorAfterDigits(
        input,
        formattedValue,
        digitsBeforeCursor
      );

      // Update history after formatting and positioning cursor
      const previousFormattedValue = inputHistory.getCurrentValue();
      if (previousFormattedValue !== formattedValue) {
        inputHistory.pushState(formattedValue, newPosition);
      }
    },
    [type, inputHistory]
  );

  return {
    value: displayValue,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    rawValue,
  };
};
