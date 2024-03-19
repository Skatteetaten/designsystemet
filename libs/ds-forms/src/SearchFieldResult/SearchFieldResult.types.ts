import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  Dispatch,
  FocusEventHandler,
  SetStateAction,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredSearchFieldResultHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'li'>,
  'role'
>;

type SearchFieldResultHTMLAttributes =
  Partial<RequiredSearchFieldResultHTMLAttributes>;

interface SearchFieldPropsHTMLAttributes
  extends SearchFieldResultHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export interface SearchFieldResultProps
  extends SearchFieldPropsHTMLAttributes,
    BaseProps {
  title?: string;
  hasFocus?: boolean;
  children: string;
  setFocus: Dispatch<SetStateAction<number>>;
  index: number;
  onClick?: () => void;
}
