import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  MouseEventHandler,
  ReactElement,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const buttonVariantArr = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
] as const;
export type ButtonVariant = (typeof buttonVariantArr)[number];

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'accessKey' | 'disabled' | 'form' | 'type' | 'onBlur' | 'onClick' | 'onFocus'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonPropsHTMLAttributes, BaseProps {
  /** Tekst på knapp. */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Definerer stilen til knappen. */
  variant?: ButtonVariant;
  /** Om knappen skal inneholde Spinner. */
  hasSpinner?: boolean;
  /** Overskriver default tekst som leses opp av skjermleser når Spinner snurrer i knappen. */
  spinnerTitle?: string;
}
