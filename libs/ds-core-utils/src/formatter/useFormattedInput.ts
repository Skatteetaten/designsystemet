import {
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { formatter } from './formatter';
import { FormatTypes } from './formatter.types';
import { NumberParser } from './NumberParser';
import { useInputHistory } from './useInputHistory';
import {
  escapeRegExp,
  maxLengths,
  NON_BREAKING_SPACE,
  removeDuplicateCharsExceptFirstOccurrence,
} from './utils';

const MAX_FRACTION_DIGITS = 2;

/**
 * Oppretter regex som matcher tillatte symboler i input.
 *
 * @param decimalSeparator - Desimalskilletegnet basert på lokalitet
 * @param allowDecimals - Om desimaltall er tillatt
 * @returns Regex som matcher siffer, minus og eventuelt desimalskilletegn
 */
const createAllowedSymbolsRegex = (
  decimalSeparator: string,
  allowDecimals: boolean
): RegExp => {
  if (allowDecimals) {
    return new RegExp(`\\d|-|${escapeRegExp(decimalSeparator)}`);
  }
  return /\d|-/;
};

/**
 * Oppretter regex som matcher ikke-tillatte symboler i input.
 *
 * @param decimalSeparator - Desimalskilletegnet basert på lokalitet
 * @param allowDecimals - Om desimaltall er tillatt
 * @returns Regex med global flagg som matcher alle tegn unntatt siffer, minus
 *   og eventuelt desimalskilletegn
 */
const createDisallowedSymbolsRegex = (
  decimalSeparator: string,
  allowDecimals: boolean
): RegExp => {
  if (allowDecimals) {
    return new RegExp(`[^\\d-${escapeRegExp(decimalSeparator)}]`, 'g');
  }
  return /[^\d-]/g;
};

/**
 * Henter maksimalt tillatt lengde for en gitt formattype.
 *
 * @param type - Formattypen å hente maksimallengde for
 * @returns Maksimallengde
 */
const getMaxLength = (type: FormatTypes): number | undefined => {
  return maxLengths[type as keyof typeof maxLengths];
};

/**
 * Renser input-streng ved å fjerne ugyldige tegn basert på formattype.
 * Håndterer desimaltall, begrenser antall desimaler og respekterer
 * maksimallengde.
 *
 * @param input - Rå input-streng fra bruker
 * @param type - Formattypen som bestemmer tillatte tegn
 * @param decimalSeparator - Desimalskilletegnet basert på lokalitet
 * @param allowDecimals - Om desimaltall er tillatt for type 'number'
 * @returns Renset streng med kun gyldige tegn
 */
const cleanInput = (
  input: string,
  type: FormatTypes,
  decimalSeparator: string,
  allowDecimals: boolean
): string => {
  const digitsOnly = /[^\d]/g;
  const escapedDecimal = escapeRegExp(decimalSeparator);
  const digitsAndDecimal = new RegExp(`[^\\d${escapedDecimal}-]|(?!^)-`, 'g');
  const digitsAndMinus = /[^\d-]|(?!^)-/g;

  let cleanedInput: string;
  if (type === 'number') {
    cleanedInput = allowDecimals
      ? input.replace(digitsAndDecimal, '')
      : input.replace(digitsAndMinus, '');

    if (allowDecimals) {
      cleanedInput = removeDuplicateCharsExceptFirstOccurrence(
        cleanedInput,
        decimalSeparator
      );

      const parts = cleanedInput.split(decimalSeparator);
      if (parts.length === 2) {
        parts[1] = parts[1].substring(0, MAX_FRACTION_DIGITS);
        cleanedInput = parts.join(decimalSeparator);
      }
    }
  } else {
    cleanedInput = input.replace(digitsOnly, '');
  }

  const maxLength = getMaxLength(type);
  if (maxLength && cleanedInput.length > maxLength) {
    cleanedInput = cleanedInput.substring(0, maxLength);
  }
  return cleanedInput;
};

/**
 * Teller antall siffer etter desimalskilletegnet. Begrenset til maksimalt 2
 * siffer.
 *
 * @param rawValue - Råverdien som inneholder desimaltall
 * @param decimalSeparator - Desimalskilletegnet basert på lokalitet
 * @returns Antall desimalsiffer (maks 2)
 */
function countDecimalDigits(
  rawValue: string,
  decimalSeparator: string
): number {
  const desimalIndex = rawValue.indexOf(decimalSeparator);
  if (desimalIndex === -1) return 0;
  const digitsAfterDecimal = rawValue.length - desimalIndex - 1;
  const minimumFractionDigits = Math.min(digitsAfterDecimal, 2);
  return minimumFractionDigits;
}

/**
 * Teller antall siffer før desimalskilletegnet (heltallsdelen). Inkluderer
 * ledende nuller for å bevare dem ved formatering.
 *
 * @param rawValue - Råverdien som kan inneholde ledende nuller
 * @param decimalSeparator - Desimalskilletegnet basert på lokalitet
 * @returns Antall heltallssiffer inkludert ledende nuller (minimum 1)
 */
function countIntegerDigits(
  rawValue: string,
  decimalSeparator: string
): number {
  const valueWithoutMinus = rawValue.replace(/^-/, '');
  const decimalIndex = valueWithoutMinus.indexOf(decimalSeparator);
  if (decimalIndex === -1) {
    return Math.max(valueWithoutMinus.length, 1);
  }
  return Math.max(decimalIndex, 1);
}

/** Konfigurasjonsalternativer for useFormattedInput-hooken. */
interface UseFormattedInputOptions {
  /** Typen formattering som skal anvendes */
  type: FormatTypes;
  /** Startverdi som skal formateres og vises (valgfritt) */
  initialValue?: string;
  /** Lokalitet for tallformatering (valgfritt, standard er 'nb-NO') */
  locale?: string;
  /** Tillat desimaltall for type 'number' (valgfritt, standard er false) */
  allowDecimals?: boolean;
}

/** Returtype for useFormattedInput-hooken. */
interface UseFormattedInputReturn {
  /** Den formaterte verdien for visning */
  value: string;
  /** Endringshåndterer for input-hendelser */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Key down-håndterer for spesiell tasteatferd */
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  /** Den rå uformaterte verdien (bare tall) */
  rawValue: string;
  /**
   * Parsed tallverdi. Kun tilgjengelig når type er 'number', ellers undefined.
   * Returnerer NaN for ugyldig input.
   */
  numberValue: number | undefined;
}

/**
 * Sjekker om en modifikatortast (Alt, Ctrl, Meta, Shift) er trykket.
 *
 * @param event - Tastaturhendelsen som skal sjekkes
 * @returns True hvis en modifikatortast er aktiv
 */
const isModifierKeyPressed = (
  event: KeyboardEvent<HTMLInputElement>
): boolean => {
  const modifierKeys = ['Alt', 'AltGraph', 'Control', 'Meta', 'Shift'] as const;
  return modifierKeys.some((key) => event.getModifierState(key));
};

/**
 * Posisjonerer markøren etter et bestemt antall siffer i et formatert input.
 * Bruker requestAnimationFrame for å sikre riktig timing med
 * DOM-oppdateringer.
 *
 * @param input - HTML input-elementet
 * @param formattedValue - Den formaterte strengverdien
 * @param targetDigitCount - Antall siffer markøren skal posisjoneres etter
 * @param allowedSymbols - Regex for lovlige symboler
 * @returns New cursor position
 */
const positionCursorAfterDigits = (
  input: HTMLInputElement,
  formattedValue: string,
  targetDigitCount: number,
  allowedSymbols: RegExp
): number => {
  let newPosition = 0;
  let digitCount = 0;
  let i = 0;
  while (digitCount < targetDigitCount && i < formattedValue.length) {
    if (allowedSymbols.test(formattedValue[i])) {
      digitCount++;
      newPosition = i + 1;
    }
    i++;
  }

  requestAnimationFrame(() => {
    input.setSelectionRange(newPosition, newPosition);
  });
  return newPosition;
};

/**
 * Teller antall lovlige tegn (siffer/desimal/minus) frem til en gitt posisjon.
 *
 * @param value - Strengen som skal analyseres
 * @param countUntil - Posisjonen å telle frem til
 * @param disallowedSymbols - Regex for ulovlige symboler som skal fjernes
 * @returns Antall lovlige tegn
 */
function countAllowedSymbols(
  value: string,
  countUntil: number,
  disallowedSymbols: RegExp
): number {
  return value.substring(0, countUntil).replace(disallowedSymbols, '').length;
}
/**
 * (BETA - kan komme endringer) Hook for å administrere formaterte inputfelt med
 * automatisk formatering og markørposisjonering. Støtter norske personnummer,
 * organisasjonsnummer, kontonummer og telefonnummer.
 *
 * Funksjoner:
 *
 * - Automatisk formatering under skriving
 * - Smart markørposisjonering etter formatendringer
 * - Korrekt håndtering av backspace/delete ved separatorgrenser
 * - Utvinning av råverdi (bare siffer)
 * - Lengdevalidering for spesifikke formater
 *
 * @example
 *   ```tsx
 *   const phoneFormatter = useFormattedInput({
 *     type: 'phoneNumber',
 *     initialValue: '12345678'
 *   });
 *
 *   return (
 *     <TextField
 *       value={phoneFormatter.value}
 *       onChange={phoneFormatter.onChange}
 *       onKeyDown={phoneFormatter.onKeyDown}
 *     />
 *   );
 *   ```;
 *
 * @param options - Konfigurasjonsobjekt
 * @param options.type - Typen formatering som skal anvendes
 * @param options.initialValue - Startverdi som skal formateres og vises
 * @param options.locale - Språk som bestemmer symboler for desimal og
 *   tusenskille
 * @param options.allowDecimals - Tillat desimaltall for type 'number'
 * @returns Objekt med formatert verdi, hendelseshåndterere og råverdi
 */
export const useFormattedInput = ({
  type,
  initialValue = '',
  locale = 'nb-NO',
  allowDecimals = false,
}: UseFormattedInputOptions): UseFormattedInputReturn => {
  const localeRef = useRef(locale);
  const numberParser = useMemo(() => new NumberParser(locale), [locale]);
  const decimalSeparator = numberParser.getDecimalSeparator();
  const thousandSeparator =
    type === 'number'
      ? numberParser.getThousandSeparator()
      : NON_BREAKING_SPACE;

  const allowedSymbols = useMemo(
    () => createAllowedSymbolsRegex(decimalSeparator, allowDecimals),
    [decimalSeparator, allowDecimals]
  );
  const disallowedSymbols = useMemo(
    () => createDisallowedSymbolsRegex(decimalSeparator, allowDecimals),
    [decimalSeparator, allowDecimals]
  );
  const [rawValue, setRawValue] = useState(() => {
    return cleanInput(initialValue, type, decimalSeparator, allowDecimals);
  });
  const hasDecimal = rawValue.includes(decimalSeparator);

  const onLocaleChange = useEffectEvent((locale: string) => {
    const separatorForCounting = new NumberParser(
      localeRef.current
    ).getDecimalSeparator();
    const hasDecimal = rawValue.includes(separatorForCounting);
    const maximumFractionDigits = allowDecimals ? MAX_FRACTION_DIGITS : 0;
    const minimumFractionDigits =
      allowDecimals && hasDecimal
        ? countDecimalDigits(rawValue, separatorForCounting)
        : 0;
    const minimumIntegerDigits = countIntegerDigits(
      rawValue,
      separatorForCounting
    );
    const newRawValue = formatter({
      value: new NumberParser(localeRef.current).parse(rawValue).toString(),
      type,
      locale,
      options: {
        maximumFractionDigits,
        minimumFractionDigits,
        minimumIntegerDigits,
      },
    }).value;
    setRawValue(cleanInput(newRawValue, type, decimalSeparator, allowDecimals));
    localeRef.current = locale;
  });

  //TODO: oppdatere eslint-plugin-react-hooks
  useEffect(() => {
    onLocaleChange(locale);
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const maximumFractionDigits = allowDecimals ? MAX_FRACTION_DIGITS : 0;
  const minimumFractionDigits =
    allowDecimals && hasDecimal
      ? countDecimalDigits(rawValue, decimalSeparator)
      : 0;
  const minimumIntegerDigits = countIntegerDigits(rawValue, decimalSeparator);
  const formatted = formatter({
    value: rawValue,
    type,
    locale,
    options: {
      maximumFractionDigits,
      minimumFractionDigits,
      minimumIntegerDigits,
    },
  });
  const displayValue =
    'valueWithDecimalTail' in formatted
      ? (formatted.valueWithDecimalTail ?? '')
      : formatted.value;

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

        const newRawValue = cleanInput(
          previousState.value,
          type,
          decimalSeparator,
          allowDecimals
        );
        setRawValue(newRawValue);

        requestAnimationFrame(() => {
          const pos = Math.min(
            previousState.cursorPosition,
            previousState.value.length
          );
          input.setSelectionRange(pos, pos);
        });
      }
    },
    [inputHistory, type, decimalSeparator, allowDecimals]
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

        const newRawValue = cleanInput(
          nextState.value,
          type,
          decimalSeparator,
          allowDecimals
        );
        setRawValue(newRawValue);

        requestAnimationFrame(() => {
          const pos = Math.min(
            nextState.cursorPosition,
            nextState.value.length
          );
          input.setSelectionRange(pos, pos);
        });
      }
    },
    [inputHistory, type, decimalSeparator, allowDecimals]
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
          locale,
        }).value;

        const newPosition = positionCursorAfterDigits(
          input,
          formattedValue,
          digitsBeforeSeparator - 1,
          allowedSymbols
        );

        inputHistory.pushState(formattedValue, newPosition, input);
      }
    },
    [rawValue, type, locale, allowedSymbols, inputHistory]
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
          locale,
        }).value;

        const newPosition = positionCursorAfterDigits(
          input,
          formattedValue,
          digitsBeforeSeparator,
          allowedSymbols
        );

        inputHistory.pushState(formattedValue, newPosition, input);
      }
    },
    [rawValue, type, locale, allowedSymbols, inputHistory]
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
          locale,
        }).value;

        const newPosition = positionCursorAfterDigits(
          input,
          formattedValue,
          digitsBeforeCursor,
          allowedSymbols
        );

        inputHistory.pushState(formattedValue, newPosition, input);
      }
    },
    [rawValue, type, locale, allowedSymbols, inputHistory]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const input = event.currentTarget;
      const cursorPosition = input.selectionEnd || 0;
      const value = input.value;
      const isPreviousCharacterSeparator =
        value[cursorPosition - 1] === thousandSeparator;
      const isNextCharacterSeparator =
        value[cursorPosition] === thousandSeparator;

      const selectionLength =
        (input.selectionEnd || 0) - (input.selectionStart || 0);

      const isAnyModifierKeyPressed = isModifierKeyPressed(event);

      inputHistory.initialize(value, cursorPosition);

      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === 'y' || (event.shiftKey && event.key === 'z'))
      ) {
        handleRedo(event, input, cursorPosition);
        return;
      }

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
        if (isPreviousCharacterSeparator && cursorPosition > 1) {
          event.preventDefault();

          const digitCount = countAllowedSymbols(
            value,
            cursorPosition - 1,
            disallowedSymbols
          );

          handleBackspaceAtSeparator(input, digitCount);
        } else if (cursorPosition > 0 && !isPreviousCharacterSeparator) {
          if (allowedSymbols.test(value[cursorPosition - 1])) {
            inputHistory.updateCursorPosition(cursorPosition);
            return;
          }
        }
      }

      if (
        event.key === 'Delete' &&
        !isAnyModifierKeyPressed &&
        selectionLength === 0
      ) {
        const digitsBeforeCursor = countAllowedSymbols(
          value,
          cursorPosition,
          disallowedSymbols
        );

        if (isNextCharacterSeparator) {
          event.preventDefault();
          handleDeleteAtSeparator(input, digitsBeforeCursor);
        } else if (
          cursorPosition < value.length &&
          allowedSymbols.test(value[cursorPosition])
        ) {
          event.preventDefault();
          handleDeleteAtDigit(input, digitsBeforeCursor);
        }
      }

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
      thousandSeparator,
      inputHistory,
      allowedSymbols,
      disallowedSymbols,
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
      const digitsBeforeCursor = countAllowedSymbols(
        inputValue,
        cursorPosition,
        disallowedSymbols
      );
      const cleanedInput = cleanInput(
        inputValue,
        type,
        decimalSeparator,
        allowDecimals
      );
      setRawValue(cleanedInput);

      const maximumFractionDigits = allowDecimals ? MAX_FRACTION_DIGITS : 0;
      const minimumFractionDigits = allowDecimals
        ? countDecimalDigits(cleanedInput, decimalSeparator)
        : 0;
      const minimumIntegerDigits = countIntegerDigits(
        cleanedInput,
        decimalSeparator
      );
      const formatted = formatter({
        value: cleanedInput,
        type,
        locale,
        options: {
          maximumFractionDigits,
          minimumFractionDigits,
          minimumIntegerDigits,
        },
      });
      const formattedValue =
        'valueWithDecimalTail' in formatted
          ? (formatted.valueWithDecimalTail ?? '')
          : formatted.value;

      const newPosition = positionCursorAfterDigits(
        input,
        formattedValue,
        digitsBeforeCursor,
        allowedSymbols
      );

      const previousFormattedValue = inputHistory.getCurrentValue();
      if (previousFormattedValue !== formattedValue) {
        inputHistory.pushState(formattedValue, newPosition);
      } else {
        const lastPosition = cursorPosition - 1;
        requestAnimationFrame(() => {
          input.setSelectionRange(lastPosition, lastPosition);
        });
      }
    },
    [
      type,
      locale,
      decimalSeparator,
      allowDecimals,
      allowedSymbols,
      disallowedSymbols,
      inputHistory,
    ]
  );

  return {
    value: displayValue,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    rawValue,
    numberValue: type === 'number' ? numberParser.parse(rawValue) : undefined,
  };
};
