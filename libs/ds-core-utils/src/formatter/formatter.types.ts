export type FormattingResponse = {
  /* Formatert tall som brukes for visning.
  NB. value returnerer bindestrek som minustegn. Ikke unikode \u2212 som 
  Intl.NumberFormat returnerer */
  value: string;
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
