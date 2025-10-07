import {
  FormattingResponse,
  FormatTypes,
  FormatNumberFullProps,
  FormatNumberOptions,
  Formatter,
  FormattingResponseWithTail,
} from './formatter.types';
import { NumberParser } from './NumberParser';
import { cleanInput, insertSpaces, minusToHyphen } from './utils';

type FormatGenericProps = {
  value: string | number;
  type: FormatTypes;
  positions: number[];
};

const formatGeneric = ({
  value,
  type,
  positions,
}: FormatGenericProps): FormattingResponse => {
  let reformatted = value;
  reformatted = cleanInput({ value: reformatted, type }).value;
  reformatted = insertSpaces({ value: reformatted, positions });
  return {
    value: reformatted,
  };
};

export const formatter: Formatter = ({ value, type, locale, options }) => {
  if (type === 'number') {
    return formatNumberFull({
      input: value,
      locale,
      options,
    }) satisfies FormattingResponseWithTail;
  }

  if (type === 'nationalIdentityNumber') {
    return formatGeneric({
      value,
      type,
      positions: [6],
    }) satisfies FormattingResponse;
  } else if (type === 'organisationNumber') {
    return formatGeneric({
      value,
      type,
      positions: [3, 6],
    }) satisfies FormattingResponse;
  } else if (type === 'bankAccountNumber') {
    return formatGeneric({ value, type, positions: [4, 6] });
  } else if (type === 'phoneNumber') {
    return formatGeneric({
      value,
      type,
      positions: [2, 4, 6, 8],
    }) satisfies FormattingResponse;
  }

  return { value: value } satisfies FormattingResponse;
};

export const formatOrganisationNumber = (
  organisationNumber: string
): string => {
  const result = formatter({
    type: 'organisationNumber',
    value: organisationNumber,
  });

  return result.value;
};

export const formatNationalIdentityNumber = (
  nationalIdentityNumber: string
): string => {
  const result = formatter({
    type: 'nationalIdentityNumber',
    value: nationalIdentityNumber,
  });

  return result.value;
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  const result = formatter({
    type: 'phoneNumber',
    value: phoneNumber,
  });

  return result.value;
};

const numberOptions: Intl.NumberFormatOptions = {
  style: 'decimal',
  // hvis style = 'currency' så kaster den TypeError i runtime hvis currency ikke er definert
  currency: 'nok',
};

const formatNumberFull = ({
  input,
  locale = 'nb-NO',
  options = {},
}: FormatNumberFullProps): FormattingResponseWithTail => {
  const inputAsString = input.toString();
  const InputAsNumber =
    typeof input === 'number'
      ? input
      : new NumberParser(locale).parse(inputAsString);

  //Hvis input ikke er et gyldig tall så returnerer vi input uten endring.
  if (isNaN(InputAsNumber)) {
    return {
      value: inputAsString,
    };
  }

  const numberFormatter = new Intl.NumberFormat(locale, {
    ...numberOptions,
    ...options,
  });
  let formatted = numberFormatter.format(InputAsNumber);
  //Formatteren kan legge inn inn annet unicode symbol enn vanlig "-".
  formatted = minusToHyphen(formatted);

  const { decimalSeparator } = getSeparators(numberFormatter);
  const numberHasDecimal = new RegExp(`${decimalSeparator}`);
  const isDecimalTailInInput =
    numberHasDecimal.test(inputAsString) &&
    inputAsString.slice(-1) === decimalSeparator;

  const valueWithDecimalTail = isDecimalTailInInput
    ? `${formatted}${decimalSeparator}`
    : formatted;

  return {
    value: formatted ?? '',
    valueWithDecimalTail,
  };
};

export const formatNumber = (
  input: string | number,
  options?: FormatNumberOptions
): string => {
  const { value } = formatNumberFull({
    input: input,
    locale: options?.locale,
    options,
  });
  return value;
};

const getSeparators = (
  formatter: Intl.NumberFormat
): { decimalSeparator?: string; groupSeparator?: string } => {
  // Tallet -1234.5 er minste eksempeltall som returnerer group- og desimaltegnene.
  const separators = formatter.formatToParts(-1234.5);
  const decimalSeparator = separators?.find(
    (part) => part.type === 'decimal'
  )?.value;
  const groupSeparator = separators?.find(
    (part) => part.type === 'group'
  )?.value;
  return { decimalSeparator, groupSeparator };
};
