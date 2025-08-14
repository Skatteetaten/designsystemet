import { FormatTypes, Converted, ValidData } from './formatter.types';
import { NumberParser } from './NumberParser';

export const NON_BREAKING_SPACE = '\u00A0';

const maxLengths: ValidData = {
  nationalIdentityNumber: 11,
  organisationNumber: 9,
  bankAccountNumber: 11,
  phoneNumber: 10,
};

type ValidLengths = keyof typeof maxLengths;

// Kan risikere å motta matematiske tegnet unicode 2212 aka &minus;
// samme unicode returneres av Intl.NumberFormat. Vi bytter ut unicode med bindestrek i begge tilfeller
export const minusToHyphen = (input: string): string => {
  const valueAsString = input.toString();
  return valueAsString.replace(/\u2212/g, '-');
};

export const removeDuplicateCharsExceptFirstOccurrence = (
  input: string,
  char: string
): string => {
  let firstFound = false;
  const regex = new RegExp(char, 'g');
  return input.replace(regex, (match: string) => {
    if (!firstFound) {
      firstFound = true;
      return match;
    } else {
      return '';
    }
  });
};

/* Håndterer alt annet en number-format */
const cleanFormatType = ({
  value,
  type,
}: {
  value: string | number;
  type: FormatTypes;
  decimalSeparator?: string;
  groupSeparator?: string;
}): Converted => {
  let newValue = value.toString().replace(/[\D ]/g, '');
  const val = type as ValidLengths;
  if (val in maxLengths) {
    newValue = newValue.substring(0, maxLengths[val]);
  }
  return {
    value: newValue,
  };
};

export const cleanInput = ({
  value,
  type,
  locale,
}: {
  value: string | number;
  type: FormatTypes;
  locale?: string;
}): Converted => {
  if (type === 'number') {
    return {
      value: new NumberParser(locale ?? 'nb-NO')
        .parse(value.toString())
        .toString(),
    };
  } else if (
    [
      'nationalIdentityNumber',
      'organisationNumber',
      'bankAccountNumber',
      'phoneNumber',
    ].includes(type)
  ) {
    return cleanFormatType({
      value,
      type,
    });
  } else {
    return {
      value: '',
    };
  }
};

export const insertSpaces = ({
  value,
  positions,
}: {
  value: string;
  positions: number[];
}): string => {
  let result = value;
  const strIndex = value.length;
  const pos = positions.filter((e) => e < strIndex).sort((a, b) => a - b);
  for (const place of [...pos].reverse()) {
    result = `${result.slice(0, place)}${NON_BREAKING_SPACE}${result.slice(place)}`;
  }
  return result;
};
