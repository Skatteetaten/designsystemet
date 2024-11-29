const numberOptions: Intl.NumberFormatOptions = {
  style: 'decimal',
};

type Formatter = {
  parsed?: number;
  value?: string;
};

export const formatter = ({
  inputnumber,
}: {
  inputnumber: string;
}): Formatter => {
  let anumber = inputnumber.replace(/\D-+,.]/, '');
  const parsedInput = parseFloat(anumber);
  const formatterNorwegian = new Intl.NumberFormat('no-nb', numberOptions);
  const separators = formatterNorwegian.formatToParts(1111.1);
  const decimalSeparator = separators?.find(
    (part) => part.type === 'decimal'
  )?.value;
  const groupSeparator = separators?.find(
    (part) => part.type === 'group'
  )?.value;
  if (groupSeparator) anumber = anumber.replace(groupSeparator, '');
  if (decimalSeparator) anumber = anumber.replace(decimalSeparator, '.');

  anumber = formatterNorwegian.format(parsedInput);
  return {
    parsed: parsedInput ?? parsedInput,
    value: anumber ? anumber : '',
  };
};
