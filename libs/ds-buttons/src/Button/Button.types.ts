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
  'accessKey' | 'disabled' | 'type' | 'onBlur' | 'onClick' | 'onFocus'
>;

// TODO Vil ekstrakte enums fra ButtonAria['aria-current'] OG at disse vises i Storybook og som type-hints
// Dvs boolean | "time" | "false" | "true" | "page" | "step" | "location" | "date" | undefined
// type ButtonAria = Pick<ComponentPropsWithoutRef<'button'>, 'aria-current'>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaDescribedby?: string;
  // TODO For ariaCurrent så ønsker vi enums fra ButtonAria['aria-current'];
  ariaCurrent?:
    | boolean
    | 'time'
    | 'false'
    | 'true'
    | 'page'
    | 'step'
    | 'location'
    | 'date';
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
