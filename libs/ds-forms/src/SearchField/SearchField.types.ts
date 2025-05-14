import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  Ref,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  Prettify,
  sizeArr,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';
import SearchFieldResult from '../SearchFieldResult/SearchFieldResult';

export const searchArrSize = [sizeArr[2], sizeArr[3], sizeArr[4]] as const;
export type SearchSize = (typeof searchArrSize)[number];

type RequiredDatePickerHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'accessKey'
  | 'autoComplete'
  | 'defaultValue'
  | 'disabled'
  | 'form'
  | 'name'
  | 'placeholder'
  | 'readOnly'
  | 'value'
>;

type SearchFieldHTMLAttributes = Partial<RequiredDatePickerHTMLAttributes>;

interface SearchFieldPropsHTMLAttributes extends SearchFieldHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export interface SearchResult {
  title?: string;
  description: string;
  key?: string;
}

interface SearchFieldCommonProps
  extends SearchFieldPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLInputElement>;
  classNames?: Prettify<
    {
      container?: string;
      errorMessage?: string;
      textbox?: string;
      searchContainer?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /** Overskriver default  tooltip-tekst til nullstill-knappen */
  clearButtonTitle?: string;
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: boolean;
  /** Ledetekst */
  label: string;
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Overskriver default title på søkeknappen*/
  searchButtonTitle?: string;
  /** Definerer stilen til SearchField */
  variant?: SearchSize;
  /** Kalles ved trykk på knappen for resetting av søkefeltet */
  onClear?: MouseEventHandler<HTMLButtonElement>;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
  /** Kalles med enter-knapp i søkefeltet */
  onSearch?: (event: KeyboardEvent<HTMLInputElement>, value?: string) => void;
  /** Kalles ved trykk på søkeknappen */
  onSearchClick?: (
    event: MouseEvent<HTMLButtonElement>,
    value?: string
  ) => void;
  /** Kalles ved trykk på søkeresultat */
  onResultClick?: (result: SearchResult) => void;
  /** Liste med søkeresultater som skal vises under feltet */
  results?: Array<SearchResult>;
  /** Om søkeknappen skal vises med ikon eller tekst */
  hasSearchButtonIcon?: boolean;
}

export type SearchFieldProps = SearchFieldCommonProps & FormRequiredProps;

export interface SearchFieldComponent extends React.FC<SearchFieldProps> {
  Result: typeof SearchFieldResult;
}
