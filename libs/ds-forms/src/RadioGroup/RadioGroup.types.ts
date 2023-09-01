import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  ReactElement,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { RadioProps } from '../Radio/Radio.types';

export const radioGroupVariantArr = ['standard', 'horizontal'] as const;
export type RadioGroupVariant = (typeof radioGroupVariantArr)[number];

export interface RadioGroupContextProps {
  defaultValue?: string | number;
  errorId?: string;
  name: string;
  selectedValue?: string | number;
  hasError?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type RequiredInputHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'onChange'
>;

type RequiredFieldsetHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled'
>;

type InputHTMLAttributes = Partial<RequiredInputHTMLAttributes>;
interface InputPropsHTMLAttributes extends InputHTMLAttributes {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

interface RadioGroupComponentCommonProps
  extends InputPropsHTMLAttributes,
    RequiredFieldsetHTMLAttributes,
    BaseProps {
  /** Radio-komponenter */
  children: JSX.Element | JSX.Element[];
  /** Skjuler navnet på gruppen men er fortsatt synlig for skjermleser. */
  hideLegend?: boolean;
  /** Navn på gruppen. */
  legend: React.ReactNode;
  /** Tilleggstekst */
  description?: string;
  /** Hjelpetekst */
  helpText?: string;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: ReactElement;
  /** Title-element til hjelpeikon */
  titleHelpSvg?: string;
  /** Overskriver autogenerert name */
  name?: string;
  /** Definerer stilen til gruppen. */
  variant?: RadioGroupVariant;
}

type RadioGroupDiscriminatedRequiredProps =
  | {
      /** Om gruppen er obligatorisk */
      required: boolean;
      /** Om obligatorisk gruppe skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
      /** Om gruppen er obligatorisk */
      required?: never;
      /** Om obligatorisk gruppe skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: never;
    };

type RadioGroupDiscriminatedCheckedProps =
  | {
      /** Hvilke value som skal være satt til checked (controlled state) */
      selectedValue?: string | number;
      /** Hvilke value som skal være satt til default checked (uncontrolled state) */
      defaultValue?: never;
    }
  | {
      /** Hvilke value som skal være satt til checked (controlled state) */
      selectedValue?: never;
      /** Hvilke value som skal være satt til default checked (uncontrolled state) */
      defaultValue?: string | number;
    };

type RadioGroupDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om gruppen har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om gruppen har en feil */
      hasError?: never;
    };

export type RadioGroupProps = RadioGroupComponentCommonProps &
  RadioGroupDiscriminatedRequiredProps &
  RadioGroupDiscriminatedCheckedProps &
  RadioGroupDiscriminatedErrorProps;

export interface RadioGroupComponent
  extends React.ForwardRefExoticComponent<
    RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>
  > {
  Radio: React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLInputElement>
  >;
}
