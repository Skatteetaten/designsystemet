// formatter.types.ts
export type Transformation = {
  message?: string;
  code?: string;
};

export type FormattingResponse = {
  /* Tallet som er utgangspunkt etter fjerning av ulovlige tegn.
  Dette tallet er også utgangspunktet for telling av antall siffer slik at lengde på streng
  er mindre en maksverdiene satt i maxLengths. */
  parsed?: string;
  /* Formatert tall som brukes for visning.
  NB. value returnerer bindestrek som minustegn. Ikke unikode \u2212 som 
  Intl.NumberFormat returnerer */
  value: string;
  /* Formatert tall som beløp. Dvs aldri ett siffer som desimal. Enten to eller ingen */
  valueAsCurrency?: string;
  /* Formatert tall med optional desimaltegn hvis tall er delvis skrevet. f.eks '2500,' */
  valueWithDecimalTail?: string;
  /* Makslengde begrenser antall siffer for hvert enkelt format. Dette er en prop
  som ikke MÅ eksponeres ut. Påvirker ikke number-formatet.
  //TODO Returneres ikke enda. Kanskje ikke bruk for det */
  maxLength?: number;
  /* liste med endringer som formateringsfunkjsonen har gjort med input-tallet.
  Brukt til debugging. Mulig vi fjerner   */
  transformations?: Transformation[];
  /* tillater at et returnert tall skal inneholde desimalskilletegn. Skjer 
  i de tilfeller hvor formatering har skjedd før bruker er ferdig med å skrive tallet
  F.eks når bruker vil skrive tallet "300,5" og bare har skrevet "300," */
};

export type FormatTypes =
  | 'number'
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
  /* 
  //TODO Endre prop-navn fra lang til locale?
  lang/locale bestemmer hvordan tall skal formateres.
  I teorien kan Intl.NumberFormat bruke default innstilling men vi ønsker at konsument skal sette denne verdien
  */
  locale?: string;
  //   options?: Intl.NumberFormatOptions;
};

export type ValidData = {
  [key in FormatTypes]?: number;
};

export type Converted = { value: string; transformations: Transformation[] };

export type FormatNumberProps = {
  value: string;
  locale?: string;
  options?: Intl.NumberFormatOptions;
};

export type FormatPicks = Extract<
  FormatTypes,
  | 'nationalIdentityNumber'
  | 'organisationNumber'
  | 'bankAccountNumber'
  | 'phoneNumber'
>;
