import { format, isValid, parse } from 'date-fns';

/**
 * Formaterer et datoobjekt for visning i et input-felt.
 * @param dateFormat - Formatstrengen som skal brukes for å formatere datoen
 * @param date - Datoen som skal formateres, kan være undefined eller null
 * @returns Den formaterte datostrengen, eller tom streng hvis datoen er ugyldig
 */
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

/**
 * Parser en datostreng fra brukerinput ved å prøve ulike vanlige datoformater.
 * @param value - Input-strengen som skal parses
 * @param dateFormat - Det primære datoformatet som skal prøves først
 * @returns Et gyldig Date-objekt hvis parsing lykkes, null ellers
 */
export const parseDateFromInput = (
  value: string,
  dateFormat: string
): Date | null => {
  const dateFormats = Array.from(
    new Set([...COMMON_INPUT_FORMATS, dateFormat])
  );

  for (const format of dateFormats) {
    const date = parse(value, format, new Date(new Date().getFullYear(), 0, 1));
    if (isValid(date)) {
      return date;
    }
  }

  return null;
};
