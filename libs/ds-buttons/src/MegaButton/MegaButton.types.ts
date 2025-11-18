import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  MouseEventHandler,
  Ref,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export type RequiredMegaButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button' | 'a'>,
  'accessKey' | 'onBlur' | 'onClick' | 'onFocus'
>;

type MegaButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface MegaButtonPropsHTMLAttributes extends MegaButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export type MegaButtonDiscriminatedProp =
  | {
      ref?: Ref<HTMLAnchorElement>;
      /**
       * Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til
       * href attributtet på lenken.
       */
      href: string;
      disabled?: never;
      /**
       * Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes
       * hvis knappen er en lenke til en side på et annet domene.
       */
      isExternal?: boolean;
      type?: never;
      /** Om knappen skal inneholde Spinner. */
      hasSpinner?: never | false;
      /**
       * Overskriver default tekst som leses opp av skjermleser når Spinner
       * snurrer i knappen.
       */
      spinnerTitle?: never;
    }
  | ({
      ref?: Ref<HTMLButtonElement>;
      /**
       * Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til
       * href attributtet på lenken.
       */
      href?: never;
      disabled?: boolean;
      /**
       * Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes
       * hvis knappen er en lenke til en side på et annet domene.
       */
      isExternal?: never | false;
      /** Om knappen skal inneholde Spinner. */
      hasSpinner?: boolean;
      /**
       * Overskriver default tekst som leses opp av skjermleser når Spinner
       * snurrer i knappen.
       */
      spinnerTitle?: string;
    } & Pick<ComponentPropsWithoutRef<'button'>, 'type'>);

export interface MegaButtonComponentCommonProps
  extends MegaButtonPropsHTMLAttributes,
    BaseProps {
  /** Tekst på knapp */
  children: string;
}

export type MegaButtonProps = MegaButtonComponentCommonProps &
  MegaButtonDiscriminatedProp;
