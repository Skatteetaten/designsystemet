import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  JSX,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { FieldsetProps } from '../Fieldset/Fieldset.types';
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
  /** Skjuler navn på gruppen, tilleggstekst og hjelpetekst, men er fortsatt synlig for skjermleser */
  hideLegend?: FieldsetProps['hideLegend'];
  /** Navn på gruppen. */
  legend: FieldsetProps['legend'];
  /** Tilleggstekst */
  description?: FieldsetProps['description'];
  /** Hjelpetekst */
  helpText?: FieldsetProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: FieldsetProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: FieldsetProps['titleHelpSvg'];
  /** Overskriver autogenerert name */
  name?: string;
  /** Definerer stilen til gruppen. */
  variant?: RadioGroupVariant;
}

type RadioGroupDiscriminatedRequiredProps =
  | {
      required: boolean;
      /** Om obligatorisk gruppe skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: FieldsetProps['showRequiredMark'];
    }
  | {
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
  extends ForwardRefExoticComponent<
    RadioGroupProps & RefAttributes<HTMLFieldSetElement>
  > {
  Radio: ForwardRefExoticComponent<
    RadioProps & RefAttributes<HTMLInputElement>
  >;
}
