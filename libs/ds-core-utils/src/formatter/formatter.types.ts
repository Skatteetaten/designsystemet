export type FormattingResponse = {
  /* Tallet som er utgangspunkt etter fjerning av ulovlige tegn.
  Dette tallet er også utgangspunktet for telling av antall siffer slik at lengde på streng
  er mindre en maksverdiene satt i maxLengths. */
  parsed?: string;
  /* Formatert tall som brukes for visning.
  NB. value returnerer bindestrek som minustegn. Ikke unikode \u2212 som 
  Intl.NumberFormat returnerer */
  value: string;
  /* Makslengde begrenser antall siffer for hvert enkelt format. Dette er en prop
  som ikke MÅ eksponeres ut. Påvirker ikke number-formatet.
  //TODO Returneres ikke enda. Kanskje ikke bruk for det */
  maxLength?: number;
};

export type FormatTypes =
  | 'nationalIdentityNumber'
  | 'organisationNumber'
  | 'bankAccountNumber'
  | 'phoneNumber';

export type FormatOptions = {
  /* nummberlignende streng som parses av formateringsrutinen etter bestemte regler
  //TODO Beskriv reglene
  // */
  value: string;
  /* bestemmer formatet og noen ganger maksimium-lengden på verdien som returneres */
  type: FormatTypes;
};

export type ValidData = {
  [key in FormatTypes]?: number;
};

export type Converted = { value: string };

export type FormatNumberProps = {
  value: string;
  options?: Intl.NumberFormatOptions;
};
