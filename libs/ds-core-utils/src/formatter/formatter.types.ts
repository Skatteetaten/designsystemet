export type FormatTypes =
  | 'number'
  | 'nationalIdentityNumber'
  | 'organisationNumber'
  | 'bankAccountNumber'
  | 'phoneNumber';

export type FormattingResponse = {
  /* Formatert tall som brukes for visning.
  NB. value returnerer bindestrek som minustegn. Ikke unikode \u2212 som
  Intl.NumberFormat returnerer */
  value: string;
  //TODO endre typedefinisjon slik at valueWithDecimalTail bare returneres når FormatOptions.type === 'number'
  /* Formatert tall med optional desimaltegn hvis tall er delvis skrevet. f.eks '2500,' */
  valueWithDecimalTail?: string;
  /* tillater at et returnert tall skal inneholde desimalskilletegn. Skjer
  i de tilfeller hvor formatering har skjedd før bruker er ferdig med å skrive tallet
  F.eks når bruker vil skrive tallet "300,5" og bare har skrevet "300," */
};

export type FormatOptions = {
  /* nummberlignende streng som parses av formateringsrutinen etter bestemte regler
  // */
  value: string;
  /* bestemmer formatet og noen ganger maksimium-lengden på verdien som returneres */
  type: FormatTypes;

  /*
  locale bestemmer hvordan tall skal formateres.
  I teorien kan Intl.NumberFormat bruke default innstilling men vi ønsker at konsument skal sette denne verdien
  */
  locale?: string;
  // Hvis man ønsker å overstyre IntlNumberFormatOptions
  options?: Intl.NumberFormatOptions;
};

export type ValidData = {
  [key in FormatTypes]?: number;
};

export type Converted = { value: string };

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
  locale?: string;
}

export type FormatNumberFullProps = {
  input: string | number;
  locale?: string;
  options?: Intl.NumberFormatOptions;
};
