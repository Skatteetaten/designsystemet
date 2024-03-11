import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  Dispatch,
  FocusEventHandler,
  SetStateAction,
} from 'react';

import { BaseProps, sizeArr } from '@skatteetaten/ds-core-utils';

export const searchArrSize = [sizeArr[2], sizeArr[3], sizeArr[4]] as const;
export type SearchSize = (typeof searchArrSize)[number];

type RequiredDatePickerHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'accessKey'
  | 'autoComplete'
  | 'defaultValue'
  | 'disabled'
  | 'name'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'value'
  | 'role'
>;

type SearchFieldHTMLAttributes = Partial<RequiredDatePickerHTMLAttributes>;

interface SearchFieldPropsHTMLAttributes extends SearchFieldHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

interface SearchFieldCommonProps
  extends SearchFieldPropsHTMLAttributes,
    BaseProps {
  classNames?: {
    container?: string;
    label?: string;
    dateContainer?: string;
    errorMessage?: string;
  };
  /** Definerer stilen til SearchField */
  variant?: SearchSize;
  title?: string;
  hasFocus?: boolean;
  children: string;
  setFocus: Dispatch<SetStateAction<number>>;
  index: number;
  onClick?: () => void;
}

export type SearchFieldDiscriminatedRequiredProps =
  | {
      required: true;
      /** Om obligatorisk form-komponent skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
      required?: never;
      /** Om obligatorisk form-komponent skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: never;
    };

export type SearchFieldDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om form-komponent har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om form-komponent har en feil */
      hasError?: never;
    };

export type SearchFieldResultProps = SearchFieldCommonProps &
  SearchFieldDiscriminatedRequiredProps &
  SearchFieldDiscriminatedErrorProps;
