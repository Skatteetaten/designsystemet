/* 
Vi tilbyr generisk funksjon som grupperer en rekke typer tall.
Fødselsnummer, organisasjonsnummer, kontonummer og telefonnummer viser 
grupperte siffer som skilles med mellomrom. Grupperingen er lik for alle 
språk. F.eks så grupperes organisasjonsnummer med tre og tre siffer. 123 456 789
Den generiske funksjonen tar imot alle typer tegn og retunerer siffer
som er gruppert.
F.eks "234,456-890" => "123 456 789"
Fordi formateringsfunksjonen ikke er en controlled component så må vi regne med
at input til funksjonen alltid kan inneholde alle typer tegn.

Vi tilbyr også en funksjon som formaterer nummer med riktig tusenskilletegn og
desigmaltegn. Regler for formatering er basert på Intl.NumberFormat og 
det er språkavhengig. Standardformatet er det samme som norsk format hvor
tusenskilletegn er mellomrom og desimaltegn er et komma. Engelsk format er
også utbredt og da er tusenskilletegn et komma mens desimalskilletegn er 
punktum. Javascript sitt standardformat brukt ved behandling av nummer er 
det samme som engelsk format. Dvs at desimalskilletegn er punktum og det 
betyr at vi alltid må konvertere input til engelsk format før vi kan
la Intl.NumberFormat.format formatere tallet med riktig gruppering.

I tillegg så finnes andre nummerformat hvor man ikke grupperer tall pr tusen.
Noen format bruker heller ikke komma eller punktum som skilletegn. Øst-Arabisk
har verken komma eller desimaltegn som tusenskille- eller desimalskilletegn.

Våre formateringsfunksjoner støtter ikke input med øst-arabiske tegn '٫' (U+066B) 
eller '٬' (U+066C). Vår nummerformat-funksjon og Intl.NumberFormat vil returnere
øst-arabiske tall korrekt, men det krever at input er på et format hvor 
desimalskilletegn er med punktum eller komma. Tusenskilletegn må være mellomrom
eller komma.

Bruker kan ikke taste inn group-separator (tusenskilletegn). Dvs det er mulig å skrive inn, men 
det blir ikke tatt hensyn til tegnet ved konvertering fra input-string til tall som skal formateres
Maksimum 3 desimaler vises

Hvordan lage tall av random input-value er: 
1. Hent desimalskilletegn fra Intl.NumberFormat.formatToParts
2. Fjern alt fra streng bortsett fra siste desimalskilletegn.
3. Formater med NumberFormat.format

// Fikset:
//TODO Fiks parsing hvis input har komma som tusenskille og format er engelsk. F.eks 
// 1,234 burde være lov men blir konvertert til '1'


//TODO Det er nå tillatt å ha to punktum i engelsk tall hvis allowDesimalAtEnd er satt:
// 34.344. er grei. Skulle ikke vært det. Første punktum skulle vært fjernet

// Fikset:
//TODO Utfordring. Hvordan sikre at et engelsk halvskrevet tall validere.
// F.eks tallet "1,23" Her er bruker på vei til å skrive "1,234" ettusentohundreogtrettifire
// Løsning: Vi forkaster tusenskilletegn skrevet av konsument. Tar kun vare på desimaltegn
// Derfor: 
// HVIS engelsk format 
// OG input er "1,23" 
// SÅ forkaster vi komma slik at tall blir "123"

*/
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
  /* Tallet som er utgangspunkt etter fjerning av ulovlige tegn.
  Dette tallet er også utgangpunktet for telling av antall siffer */
  parsed?: string;
  /* Formatert tall som brukes for visning */
  value: string;
  /* Makslengde begrenser antall siffer for hvert enkelt format. Dette er en prop
  som ikke MÅ eksponeres ut. Påvirker ikke number-formatet */
  maxLength?: number;
  /* liste med endringer som formateringsfunkjsonen har gjort med input-tallet  */
  conversions?: Conversion[];
  /* tillater at et returnert tall skal inneholde desimalskilletegn. Skjer 
  i de tilfeller hvor formatering har skjedd før bruker er ferdig med å skrive tallet
  F.eks når bruker vil skrive tallet "300,5" og bare har skrevet "300," */
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
  allowDesimalAtEnd?: boolean;
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

const minusToHyphen = (value: string): string => {
  return value.replace(/\u2212/g, '-');
};

const cleanInput = ({
  value,
  type,
  decimalSeparator,
  groupSeparator,
}: {
  value: string;
  type: FormatTypes;
  decimalSeparator?: string;
  groupSeparator?: string;
}): Converted => {
  const conversions: Conversion[] = [];
  if (type === 'number') {
    // console.log(
    //   `type er number, deci er ${decimalSeparator} og group er ${groupSeparator}`
    // );
    // Fjern alle space fra input. Space er støy og påvirker aldri verdien av tallet
    // 2 500 -> 2500
    let last: string | number = '';
    let parsed: string | number = value.replace(/(\s+)(?!\s$)/g, '');
    if (value !== parsed) {
      conversions.push({
        message: `fjernet whitespace fra '${value}' til '${parsed}'`,
        code: 'whitespace',
      });
    }
    last = parsed;

    parsed = minusToHyphen(parsed);
    if (last !== parsed) {
      conversions.push({
        message: `byttet ut unicode minustegn \u2212 med bindestrek: '${last}', parsed: '${parsed}'`,
        code: 'minustohyphen',
      });
    }
    last = parsed;

    /******* Hvis norsk tall *********/
    // Norsk og hyppig brukte format
    if (decimalSeparator === ',') {
      // Fjern alle komma bortsett fra den siste (vi behandler tall med norskt format i denne rekken med replace)
      // Tall skal aldri ha to eller flere komma i seg. Vi kan ikke fjerne komma hvis det er siste tegn
      // i rekken fordi det kan være at bruker fyller ut og ikke har tastet desimaltegn enda
      // "2,500,500" -> "2500,500", "2500," -> "2500,"
      //TODO Husk å teste denne på Safari < v15.6
      const regExpRemoveAllButLast = new RegExp(
        `(${decimalSeparator})(?=.*${decimalSeparator})`,
        'g'
      );
      parsed = parsed.replace(regExpRemoveAllButLast, '');
      if (last !== parsed) {
        conversions.push({
          message: `fjernet for mange komma input: '${last}', parsed: '${parsed}'`,
          code: 'commaremoved',
        });
      }
      last = parsed;

      // Hvis norsk tall -> Fjern alle punktum. Punktum skal ikke finnes i tall med norsk format
      // 2.500,50 -> 2500,5
      if (groupSeparator === NON_BREAKING_SPACE) {
        // nbsp / mellomrom
        parsed = parsed.replace(/\./g, '');
        if (last !== parsed) {
          conversions.push({
            message: `fjernet punktum fra norsk tall input: '${last}', parsed: '${parsed}'`,
            code: 'removedpunktum',
          });
        }
        last = parsed;
      }

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
    } else if (decimalSeparator === '.') {
      parsed = parsed.replace(/,/g, '');
      if (last !== parsed) {
        conversions.push({
          message: `fjernet komma fra engeske tall input: '${last}', parsed: '${parsed}'`,
          code: 'removedkommaasthousand',
        });
      }
      last = parsed;
    }

    // Nå kan vi behandle tallet med parseFloat
    // parseFloat bruker fra venstre mot høyre: alle tegn som er siffer og returnerer et nummer eller NaN
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

    //    console.log(`parsed er ${parsed}`);
    if (isNaN(parsed)) {
      const notANumber: Conversion = {
        message: 'input ble ikke gjenkjent som et tall',
        code: 'NaN',
      };
      return {
        value: '',
        conversions: [notANumber],
      };
    } else {
      return {
        value: parsed.toString(),
        conversions: conversions,
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
    /* Seksjon for å håndtere alt annet en number-format */
    let newValue = value.replace(/[\D ]/g, '');
    const val = type as ValidLengths;
    if (val in maxLengths) {
      newValue = newValue.substring(0, maxLengths[val]);
    }
    return {
      value: newValue,
      conversions: conversions,
    };
  } else {
    /* Ingen kjente format-typer. returnerer input-value */
    return {
      value: '1',
      conversions: [{ message: 'ikke kjent format-type: ' + type }],
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

type FormatNumberProps = {
  value: string;
  lang?: string;
  allowDesimalAtEnd?: boolean;
  options?: Intl.NumberFormatOptions;
};
const formatNumber = ({
  value,
  lang,
  options,
  allowDesimalAtEnd,
}: FormatNumberProps): Formatter => {
  const formatterUsingLanguage = new Intl.NumberFormat(lang ?? 'nb', {
    ...numberOptions,
  });
  const currencyFormatterUsingLanguage = new Intl.NumberFormat(lang ?? 'nb', {
    ...numberOptions,
    ...(options ?? {}),
  });
  /*   console.log('formatter options: ');
  console.log({
    ...numberOptions,
    ...(options ?? {}),
  }); */

  // Det er denne metoden som blir brukt for å returnerer hvilke separatorer og
  // skilletegn som blir brukt med valg språk. Tallet 1111.1 er minste eksempeltall som
  // brukes for å kunne hente ut group- og decimalverdiene.
  const separators = formatterUsingLanguage.formatToParts(-1111.1);
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
  const minusSign = separators?.find(
    (part) => part.type === 'minusSign'
  )?.value;
  const converted = cleanInput({
    value,
    type: 'number',
    decimalSeparator,
    groupSeparator,
  });
  console.log(converted);
  let anumber = converted.value;
  const isValidNumber = (value: string): boolean => {
    return !isNaN(parseFloat(value));
  };
  const parsedInput = parseFloat(anumber);
  //  console.log(`parsedInput er ${parsedInput}`);

  // if (groupSeparator) anumber = anumber.replace(groupSeparator, '');
  // if (decimalSeparator) anumber = anumber.replace(decimalSeparator, '.');

  // Denne avgjør om vi skal formatere med eksakt to desimaler hvis float
  //  if (Number.isInteger(parsedInput)) {
  if (!isNaN(parsedInput) && options && !Number.isInteger(parsedInput)) {
    //    console.log('currencyFormatterUsingLanguage');
    anumber = currencyFormatterUsingLanguage.format(parsedInput);
  } else if (isValidNumber(anumber)) {
    // Utelukker 'NaN'
    //    console.log('formatterUsingLanguage');
    anumber = formatterUsingLanguage.format(parsedInput);
  } else {
    // NaN
    anumber = '';
  }
  anumber = minusToHyphen(anumber);
  if (
    allowDesimalAtEnd &&
    decimalSeparator &&
    value.length > 0 &&
    value.slice(-1) === decimalSeparator
  ) {
    anumber = `${anumber}${decimalSeparator}`;
  }
  //  console.log(JSON.stringify(converted, null, 2));
  return {
    parsed: parsedInput.toString() ?? '',
    value: anumber ?? '',
    conversions: converted.conversions,
  };
};

const formatPersonnummer = ({ value }: { value: string }): Formatter => {
  let reformatted = value;
  reformatted = cleanInput({ value: reformatted, type: 'personnummer' }).value;
  reformatted = insertSpaces({ value: reformatted, positions: [6] });
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
  allowDesimalAtEnd,
}: FormatterProps): Formatter => {
  if (type === 'number') {
    let options = {};
    if (isCurrency) {
      options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    }
    return formatNumber({ value, lang, allowDesimalAtEnd, options });
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
