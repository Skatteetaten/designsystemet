import {
  FormattingResponse,
  FormatTypes,
  FormatOptions,
  ValidData,
  Converted,
} from './formatter.types';

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
det blir ikke tatt hensyn til tegnet ved konvertering fra input-string til tall som 
brukes som grunnalt for formateringen
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

//TODO TJA Oppgi hvor cursor skal være etter at man har mottat cursor position og gjort
// formatering

// Fikset:
//TODO Utfordring. Hvordan sikre at et engelsk halvskrevet tall validere.
// F.eks tallet "1,23" Her er bruker på vei til å skrive "1,234" ettusentohundreogtrettifire
// Løsning: Vi forkaster tusenskilletegn skrevet av konsument. Tar kun vare på desimaltegn
// Derfor: 
// HVIS engelsk format 
// OG input er "1,23" 
// SÅ forkaster vi komma slik at tall blir "123"

*/

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
    /* Ingen kjente format-typer. returnerer input-value */
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
  //TODO Add optional country-code
  return {
    parsed: value,
    value: reformatted,
  };
};

// simple formatter
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
// IBAN (siffrene i)
// SWIFT (siffrene i)
// Siffrene i norske kontonummer
// Custom mask fra konsumenter
// Validering med mod11-algoritme for kontonummer, fødselsnummer og organisasjonsnummer?
//   - med mod11 reduseres sannsynlighet for feil kontonummer til 9%
// Hvor mange desimaler skal være lov? Har økt standardverdien fra 3 til uendelig
/*
Referanser:
https://www.skatteetaten.no/person/folkeregister/identitetsnummer/fodselsnummer/



Demoting:
locale inn må matche locale ut
På engelsk så vil 123.345. representere tallet 123e345

Er det viktig at ikke-siffer bare fjernes.



Hva hvis to komma i norsk nummer? Nå fjernes alle bortsett fra siste
Tilsvarende Hva hvis to punktum i engelsk nummer? Nå fjernes alle bortsett fra siste

Regler nå
Alle tegn bortsett fra minus, siffer og desimalskilletegn fjernes.
- Dette betyr at man ikke kan formatere tall skrevet med eksponentiell notasjon
  (23e2 == 10 000 000 000 / 1e-8 == 0.00000001)


Det er forskjell på minustegnene som returneres av Intl.NumberFormat formateringsmetoden
new Intl.NumberFormat('en-GB').format(-2) === new Intl.NumberFormat('nb-NO').format(-2)

Har informert Philipp om nbsp og REALT vil adoptere dette.
https://wiki.sits.no/display/VFA/Kodesynk+frontend+i+REALT

formatter skal eksportere tilstand om type feil med tall. Noe lignende det vi har tenkt
på med DatePicker https://jira.sits.no/browse/FRONT-1681

Skal det returneres noe som indikere om tallet er fullstendig. Uten å bekrefte om
innholdet i tallet er gyldig? Feks om org-nummer returnert har alle 9 siffrene.
Gjøres enkelt av konsumentkode

Validering med mod11-algoritme for kontonummer, fødselsnummer og organisasjonsnummer?
   - med mod11 reduseres sannsynlighet for feil tall til 9%. Ikke til 0%. For 
  bankkontonummer gjør banker er validering i backend. Første fire siffer representerer
  hvilken bank det gjelder
Spørsmålet er jo om det skal bygges inn validering i det hele tatt.

Skal det returneres hvilke locale som er brukt for å formatere tallet?

Avrundingsregler hvis beløp - ikke tema. 

Hva med positive tegn? Plusstegnet forkastes som ikke nummeriske tegn
+234 vs -432.

Skal vi gi konsumenten mulighet for å oppgi egen gruppering av tall. 
F.eks utenlandske bankkontonummer, BIC/SWIFT el.

navn på funksjonen er formatter. Hva med formatNumber, formatNationalIdentityNumber

Hva med undo / redo 

*/
