import { format, isValid, parse } from 'date-fns';

export const formatDateForInput = (
  dateFormat: string,
  date?: Date | null
): string => {
  return !isValid(date) ? '' : format(date as Date, dateFormat);
};

const COMMON_INPUT_FORMATS = [
  'dd.MM.yy',
  'dd/MM/yy',
  'dd-MM-yy',
  'dd.MM.yyyy',
  'dd/MM/yyyy',
  'dd-MM-yyyy',
  'ddMM',
  'ddMMyy',
  'ddMMyyyy',
];

export const parseDateFromInput = (
  value: string,
  dateFormat: string
): Date | null => {
  const dateFormats = Array.from(
    new Set([...COMMON_INPUT_FORMATS, dateFormat])
  );

  for (const format of dateFormats) {
    const date = parse(value, format, new Date());
    if (isValid(date)) {
      return date;
    }
  }

  return null;
};
