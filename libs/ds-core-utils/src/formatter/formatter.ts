import {
  FormattingResponse,
  FormatTypes,
  FormatOptions,
  ValidData,
  Converted,
} from './formatter.types';

export const NON_BREAKING_SPACE = '\u00A0';

const maxLengths: ValidData = {
  nationalIdentityNumber: 11,
  organisationNumber: 9,
  bankAccountNumber: 11,
  phoneNumber: 10,
};

const cleanInput = ({
  value,
  type,
}: {
  value: string;
  type: FormatTypes;
}): Converted => {
  if (
    [
      'nationalIdentityNumber',
      'organisationNumber',
      'bankAccountNumber',
      'phoneNumber',
    ].includes(type)
  ) {
    /* Seksjon for å håndtere alt annet en number-format */
    let newValue = value.replace(/[^\d]/g, '');
    if (type in maxLengths) {
      newValue = newValue.substring(0, maxLengths[type]);
    }
    return {
      value: newValue,
    };
  } else {
    return {
      value: '',
    };
  }
};

const insertSpaces = ({
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

const formatGeneric = ({
  value,
  type,
  positions,
}: {
  value: string;
  type: FormatTypes;
  positions: number[];
}): FormattingResponse => {
  let reformatted = value;
  reformatted = cleanInput({ value: reformatted, type }).value;
  reformatted = insertSpaces({ value: reformatted, positions });
  return {
    value: reformatted,
  };
};

export const formatter = ({
  value,
  type,
}: FormatOptions): FormattingResponse => {
  if (type === 'nationalIdentityNumber') {
    return formatGeneric({
      value,
      type,
      positions: [6],
    });
  } else if (type === 'organisationNumber') {
    return formatGeneric({
      value,
      type,
      positions: [3, 6],
    });
  } else if (type === 'bankAccountNumber') {
    return formatGeneric({ value, type, positions: [4, 6] });
  } else if (type === 'phoneNumber') {
    return formatGeneric({
      value,
      type,
      positions: [2, 4, 6, 8],
    });
  }

  return { value: value };
};
