import { format, isValid, parse } from 'date-fns';

export const formatDateForInput = (dateFormat: string, date?: Date): string => {
  return !isValid(date) ? '' : format(date as Date, dateFormat);
};

const ALLOWED_INPUT_FORMATS = [
  'dd.MM.yyyy',
  'dd/MM/yyyy',
  'dd-MM-yyyy',
  'ddMM',
  'ddMMyy',
  'ddMMyyyy',
];

export const parseDateFromInput = (value: string): Date => {
  for (const format of ALLOWED_INPUT_FORMATS) {
    const date = parse(value, format, new Date());
    if (isValid(date)) {
      return date;
    }
  }

  return new Date('');
};
