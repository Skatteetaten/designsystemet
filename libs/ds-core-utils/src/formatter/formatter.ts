import { t } from 'i18next';

const numberOptions: Intl.NumberFormatOptions = {
  style: 'decimal',
};

export const NON_BREAKING_SPACE = '\u00A0';

/* const currencyOptions: Intl.NumberFormatOptions = {
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  trailingZeroDisplay: 'stripIfInteger',
}; */

type Conversion = {
  message?: string;
  code?: string;
};

type Formatter = {
  parsed?: string;
  value: string;
  maxLength?: number;
  conversions?: Conversion[];
};

//TODO formattype amount byttes til 'currency'?
//TODO norske eller engelske typer? number/nummer
type FormatTypes =
  | 'number'
  | 'amount'
  | 'personnummer'
  | 'organisasjonsnummer'
  | 'kontonummer'
  | 'telefonnummer';

export type FormatterProps = {
  value: string;
  type: FormatTypes;
  lang?: string;
  isCurrency?: boolean;
  //   options?: Intl.NumberFormatOptions;
};

type ValidData = {
  [key in FormatTypes]?: number;
};

const maxLengths: ValidData = {
  personnummer: 11,
  organisasjonsnummer: 9,
  kontonummer: 11,
  telefonnummer: 10,
};

type ValidLengths = keyof typeof maxLengths;

type Converted = { value: string; conversions: Conversion[] };

const cleanInput = ({
  value,
  type,
  decimalSeparator,
}: {
  value: string;
  type: FormatTypes;
  decimalSeparator?: string;
}): Converted => {
  const conversions: Conversion[] = [];
  if (type === 'number') {
    /******* Hvis norsk tall *********/
    // Fjern alle space fra input. Space er støy og påvirker aldri verdien av tallet
    // 2 500 -> 2500
    let last: string | number = '';
    let parsed: string | number = value.replace(/\s/g, '');
    if (value !== parsed) {
      conversions.push({ message: 'fjernet whitespace', code: 'whitespace' });
    }
    last = parsed;

    // Norsk format
    if (decimalSeparator === ',') {
      // Fjern alle komma bortsett fra den siste (vi behandler tall med norskt format i denne rekken med replace)
      // Tall skal aldri ha to eller flere komma i seg. Vi kan ikke fjerne komma hvis det er siste tegn
      // i rekken fordi det kan være at bruker fyller ut og ikke har tastet desimaltegn enda
      // "2,500,500" -> "2500,500", "2500," -> "2500,"
      //TODO Husk å teste denne på Safari < v15.6
      parsed = parsed.replace(/(,)(?=.*,)/g, '');
      if (last !== parsed) {
        conversions.push({
          message: `fjernet for mange komma input: '${last}', parsed: '${parsed}'`,
          code: 'commaremoved',
        });
      }
      last = parsed;

      // Hvis norsk tall -> Fjern alle punktum. Punktum skal ikke finnes i tall med norsk format
      // 2.500,50 -> 2500,5

      parsed = parsed.replace(/\./g, '');
      if (last !== parsed) {
        conversions.push({
          message: `fjernet punktum fra norsk tall input: '${last}', parsed: '${parsed}'`,
          code: 'removedpunktum',
        });
      }
      last = parsed;

      // 1,2,345.7

      // Konverter eventuelle tall som nå har ett komma til engelsk format.
      // Dvs bytt komma med punktum 2500,00 -> 2500.00
      parsed = parsed.replace(/,/, '.');
      if (last !== parsed) {
        conversions.push({
          message: `konvertert norsk desimaltegn til engelsk desimaltegn input: '${last}', parsed: '${parsed}'`,
          code: 'kommareplace',
        });
      }
      last = parsed;
    }

    // Nå kan vi behandle tallet med parseFloat
    // parseFloat bruker fra venstre mot høyre alle tegn som er siffer og returnerer et nummer eller NaN
    // Ved første treff på ikke-tall så forkastes resten av strengen
    // "123 3" -> 123, "987G123" -> 987, "123.543-432":string -> 123.543, "2,500." -> 2,500
    // Fjerner også desimaltall hvis disse er null
    // "234.00" -> 234, "- 234DEL678.4" ->
    parsed = parseFloat(parsed);
    if (last !== parsed.toString()) {
      conversions.push({
        message: `parseFloat endret input value. input: '${last}', parsed: '${parsed}'`,
        code: 'parsefloated',
      });
    }

    // Fordi vi velger å bruke parseFloat som gjør opprensking for oss så behøver vi ikke sjekke om string
    // inneholder andre tegn enn /[\D-+,.]/

    /******* Hvis engelsk tall *********/
    console.log(conversions);
    if (parsed) {
      return {
        value: parsed.toString(),
        conversions: conversions,
      };
    } else {
      return {
        value,
        conversions,
      };
    }
  } else if (
    [
      'personnummer',
      'organisasjonsnummer',
      'kontonummer',
      'telefonnummer',
    ].includes(type)
  ) {
    let newValue = value.replace(/[\D ]/g, '');
    const val = type as ValidLengths;
    if (val in maxLengths) {
      newValue = newValue.substring(0, maxLengths[val]);
    }
    return {
      value: newValue,
      conversions: conversions,
    };
  }
  return {
    value,
    conversions: [],
  };
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

type FormatNumberProps = {
  value: string;
  lang?: string;
  options?: Intl.NumberFormatOptions;
};
const formatNumber = ({
  value,
  lang,
  options,
}: FormatNumberProps): Formatter => {
  const formatterUsingLanguage = new Intl.NumberFormat(lang ?? 'no-nb', {
    ...numberOptions,
  });
  const currencyFormatterUsingLanguage = new Intl.NumberFormat(
    lang ?? 'no-nb',
    {
      ...numberOptions,
      ...(options ?? {}),
    }
  );
  console.log('formatter options: ');
  console.log({
    ...numberOptions,
    ...(options ?? {}),
  });

  // Det er denne metoden som blir brukt for å returnerer hvilke separatorer og
  // skilletegn som blir brukt med valg språk. Tallet 1111.1 er minste eksempeltall som
  // brukes for å kunne hente ut group- og decimalverdiene.
  const separators = formatterUsingLanguage.formatToParts(1111.1);
  // return value:
  /* [
    { type: 'integer', value: '1' },
    { type: 'group', value: ' ' },
    { type: 'integer', value: '111' },
    { type: 'decimal', value: ',' },
    { type: 'fraction', value: '1' },
]; */

  const decimalSeparator = separators?.find(
    (part) => part.type === 'decimal'
  )?.value;
  const groupSeparator = separators?.find(
    (part) => part.type === 'group'
  )?.value;
  const converted = cleanInput({ value, type: 'number', decimalSeparator });
  let anumber = converted.value;
  const parsedInput = parseFloat(anumber);

  if (groupSeparator) anumber = anumber.replace(groupSeparator, '');
  if (decimalSeparator) anumber = anumber.replace(decimalSeparator, '.');
  if (Number.isInteger(parsedInput)) {
    console.log('formatterUsingLanguage');
    anumber = formatterUsingLanguage.format(parsedInput);
  } else {
    console.log('currencyFormatterUsingLanguage');
    anumber = currencyFormatterUsingLanguage.format(parsedInput);
  }
  return {
    parsed: parsedInput.toString() ?? '',
    value: anumber ?? '',
    conversions: converted.conversions,
  };
};

const formatPersonnummer = ({ value }: { value: string }): Formatter => {
  let reformatted = value;
  reformatted = cleanInput({ value: reformatted, type: 'personnummer' }).value;
  reformatted = insertSpaces({ value: reformatted, positions: [5] });
  return {
    parsed: value,
    value: reformatted,
  };
};

const formatOrgnummer = ({ value }: { value: string }): Formatter => {
  let reformatted = value;
  reformatted = cleanInput({
    value: reformatted,
    type: 'organisasjonsnummer',
  }).value;
  reformatted = insertSpaces({ value: reformatted, positions: [3, 6] });
  return {
    parsed: value,
    value: reformatted,
  };
};

const formatKontonummer = ({ value }: { value: string }): Formatter => {
  let reformatted = value;
  reformatted = cleanInput({ value: reformatted, type: 'kontonummer' }).value;
  reformatted = insertSpaces({ value: reformatted, positions: [4, 6] });
  return {
    parsed: value,
    value: reformatted,
  };
};

const formatTelefonnummer = ({ value }: { value: string }): Formatter => {
  let reformatted = value;
  reformatted = cleanInput({ value: reformatted, type: 'telefonnummer' }).value;
  reformatted = insertSpaces({ value: reformatted, positions: [2, 4, 6, 8] });
  //TODO Add optional country-code
  return {
    parsed: value,
    value: reformatted,
  };
};

export const formatter = ({
  value,
  type,
  lang,
  isCurrency,
}: FormatterProps): Formatter => {
  if (type === 'number') {
    let options = {};
    if (isCurrency) {
      options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
      console.log(`type er number og isCurrency er satt. value er ${value}`);
    }
    return formatNumber({ value, lang, options });
  } else if (type === 'personnummer') {
    return formatPersonnummer({ value });
  } else if (type === 'organisasjonsnummer') {
    return formatOrgnummer({ value });
  } else if (type === 'kontonummer') {
    return formatKontonummer({ value });
  } else if (type === 'telefonnummer') {
    return formatTelefonnummer({ value });
  }

  return { value: value };
};

/*
Intl formatter brukes i de tilfeller hvor det er forskjell
på returnert string pga forskjellig språk. I første omgang gjelder det tall
Kan senere også gjelde dato og kanskje telefonnummer

formatter skal kunne returnere:
- tall med tusenskille - type string (språkavhengig)
- beløp (språkavhengig) - type string (typisk tall i tillegg til valuta)
- fødselsnummer 123456 12345
- organisasjonsnummer 123 123 123
- kontonummer 1234 12 12345
- telefonnummer
    - 12 12 12 12 (hovedregel). 
    - 800 12 123 (800 serien)
    - +47 hva da? En optional landkode. Del av option-prop

Regler for formatering av tall:
- default språk på input tall er nb-NO
- default språk på output tall er at det skal være lik input-språk
- språk kan settes på input. output vil ha samme språk som input
Regler for formatering av beløp

Flyt: 
1. input streng (kan være bla norsk og engelsk format)
2. konverter til tall (må være engelsk format)
3. konfigurer Intl.NumberFormat (velg output språk)
4. hvis type number så kjør egen regex for å fjerne ikke-lovlige number tegn
5. tell tegn og sjekk om innenfor max allowed (prop ikke bestemt enda)

Man kan velge om man skal bruke to-tegns språkkoder eller territorie-land språkkode.

options:
- Tving to nuller selv om desimal ikke er satt eller er satt til '00'
- Forhindre konvertering hvis input inneholder ulovlige tegn
- lang - Overstyrer satt språk / default språket norsk

//TODO
// Datoformat
// Tidspunkt
*/
