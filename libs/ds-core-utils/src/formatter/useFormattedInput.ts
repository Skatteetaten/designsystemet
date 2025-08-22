import { useCallback, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { formatter } from './formatter';
import { FormatTypes } from './formatter.types';

const NON_BREAKING_SPACE = '\u00A0';

const MAX_LENGTHS = {
  nationalIdentityNumber: 11,
  organisationNumber: 9,
  bankAccountNumber: 11,
  phoneNumber: 10,
} as const;

const getMaxLength = (type: FormatTypes): number | undefined => {
  if (type === 'number') return undefined;
  return MAX_LENGTHS[type as keyof typeof MAX_LENGTHS];
};

interface UseFormatterMaskOptions {
  type: FormatTypes;
  initialValue?: string;
}

interface UseFormatterMaskReturn {
  value: string;
  displayValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  rawValue: string;
}

const positionCursorAfterDigits = (
  input: HTMLInputElement,
  formattedValue: string,
  targetDigitCount: number
): void => {
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
};

export const useFormattedInput = ({
  type,
  initialValue = '',
}: UseFormatterMaskOptions): UseFormatterMaskReturn => {
  const [rawValue, setRawValue] = useState(() => {
    if (type === 'number') {
      // For numbers, preserve the original value structure
      return initialValue;
    } else {
      // For other types, clean to digits only and limit length
      const cleaned = initialValue.replace(/[^\d]/g, '');
      const maxLength = getMaxLength(type);
      return maxLength ? cleaned.substring(0, maxLength) : cleaned;
    }
  });

  const displayValue = formatter({
    value: rawValue,
    type,
  }).value;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      // Skip special handling for number type - let browser handle it naturally
      if (type === 'number') {
        return;
      }

      const input = event.currentTarget;
      const cursorPosition = input.selectionStart || 0;
      const value = input.value;
      const isPreviousCharacterSeparator =
        value[cursorPosition - 1] === NON_BREAKING_SPACE;
      const isNextCharacterSeparator =
        value[cursorPosition] === NON_BREAKING_SPACE;

      const selectionLength =
        (input.selectionEnd || 0) - (input.selectionStart || 0);

      const modifierKeys = [
        'Alt',
        'AltGraph',
        'Control',
        'Meta',
        'Shift',
      ] as const;
      const isAnyModifierKeyPressed = modifierKeys.some((key) =>
        event.getModifierState(key)
      );

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

          // Remove the last digit before the separator (at position digitCount-1)
          if (digitCount > 0) {
            const newDigits =
              rawValue.slice(0, digitCount - 1) + rawValue.slice(digitCount);
            setRawValue(newDigits);

            const formattedValue = formatter({
              value: newDigits,
              type,
            }).value;

            // Position cursor after the remaining digits before where separator was
            positionCursorAfterDigits(input, formattedValue, digitCount - 1);
          }
        }
        // Normal backspace behavior - delete the digit before cursor
        else if (cursorPosition > 0 && !isPreviousCharacterSeparator) {
          // Let default behavior handle this case for digits
          if (/\d/.test(value[cursorPosition - 1])) {
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
        // If cursor is before a separator, delete the digit after the separator
        if (isNextCharacterSeparator) {
          event.preventDefault();

          // Count digits up to the cursor position (before separator)
          let digitsBeforeSeparator = 0;
          for (let i = 0; i < cursorPosition; i++) {
            if (/\d/.test(value[i])) {
              digitsBeforeSeparator++;
            }
          }

          // The digit to remove is at position digitsBeforeSeparator in rawValue
          // (this is the first digit after the separator)
          if (digitsBeforeSeparator < rawValue.length) {
            const newDigits =
              rawValue.slice(0, digitsBeforeSeparator) +
              rawValue.slice(digitsBeforeSeparator + 1);
            setRawValue(newDigits);

            const formattedValue = formatter({
              value: newDigits,
              type,
            }).value;

            // Position cursor at the same position (before where the separator now is)
            positionCursorAfterDigits(
              input,
              formattedValue,
              digitsBeforeSeparator
            );
          }
        }
        // If cursor is after a digit and delete is pressed, delete the next digit
        else if (
          cursorPosition < value.length &&
          /\d/.test(value[cursorPosition])
        ) {
          event.preventDefault();

          // Count digits up to the cursor position
          let digitsBeforeCursor = 0;
          for (let i = 0; i < cursorPosition; i++) {
            if (/\d/.test(value[i])) {
              digitsBeforeCursor++;
            }
          }

          // Remove the digit at the cursor position
          if (digitsBeforeCursor < rawValue.length) {
            const newDigits =
              rawValue.slice(0, digitsBeforeCursor) +
              rawValue.slice(digitsBeforeCursor + 1);
            setRawValue(newDigits);

            const formattedValue = formatter({
              value: newDigits,
              type,
            }).value;

            // Keep cursor at the same position
            positionCursorAfterDigits(
              input,
              formattedValue,
              digitsBeforeCursor
            );
          }
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
    [rawValue, type]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;
      const inputValue = input.value;

      if (type === 'number') {
        // For numbers, store the raw input value and let formatter handle it
        setRawValue(inputValue);
        return;
      }

      // For other types, maintain existing logic
      const cursorPosition = input.selectionStart || 0;
      const oldValue = inputValue;

      const digitsBeforeCursor = oldValue
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

      positionCursorAfterDigits(input, formattedValue, digitsBeforeCursor);
    },
    [type]
  );

  return {
    value: displayValue,
    displayValue,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    rawValue,
  };
};
