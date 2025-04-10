import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  MouseEventHandler,
  ReactElement,
  Ref,
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
  ComponentPropsWithoutRef<'button' | 'a'>,
  'accessKey' | 'type'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaDescribedby?: string;
  ariaCurrent?: ComponentPropsWithoutRef<'button'>['aria-current'];
  onBlur?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

interface ButtonAsLink {
  ref?: Ref<HTMLAnchorElement>;
  /** Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til href attributtet på lenken. */
  href: string;
  disabled?: never | false;
  form?: never;
  /** Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes hvis knappen er en lenke til en side på et annet domene. */
  isExternal?: boolean;
  type?: never;
}

type ButtonAsButton = {
  ref?: Ref<HTMLButtonElement>;
  /** Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til href attributtet på lenken. */
  href?: never;
  disabled?: boolean;
  /** Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes hvis knappen er en lenke til en side på et annet domene. */
  isExternal?: never | false;
} & Pick<ComponentPropsWithoutRef<'button'>, 'type' | 'form'>;

export type ButtonDiscriminatedProps = ButtonAsLink | ButtonAsButton;

export interface ButtonCommonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  /** Tekst på knapp. */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement<SVGPathElement>;
  /** Definerer stilen til knappen. */
  variant?: ButtonVariant;
  /** Om knappen skal inneholde Spinner. */
  hasSpinner?: boolean;
  /** Overskriver default tekst som leses opp av skjermleser når Spinner snurrer i knappen. */
  spinnerTitle?: string;
}

export type ButtonProps = ButtonCommonProps & ButtonDiscriminatedProps;
