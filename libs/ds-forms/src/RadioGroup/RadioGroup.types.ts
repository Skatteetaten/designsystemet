import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  ReactNode,
  Ref,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  Prettify,
} from '@skatteetaten/ds-core-utils';

import { FieldsetProps } from '../Fieldset/Fieldset.types';
import { Radio } from '../Radio/Radio';

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
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

type RequiredInputHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'onChange' | 'onBlur'
>;

type RequiredFieldsetHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled' | 'form'
>;

type InputHTMLAttributes = Partial<RequiredInputHTMLAttributes>;
interface InputPropsHTMLAttributes extends InputHTMLAttributes {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

interface RadioGroupComponentCommonProps
  extends InputPropsHTMLAttributes,
    RequiredFieldsetHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLFieldSetElement>;
  classNames?: Prettify<
    { errorMessage?: string } & FieldsetProps['classNames']
  >;
  /** Radio-komponenter */
  children: ReactNode;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Skjuler navn på gruppen, tilleggstekst og hjelpetekst, men er fortsatt synlig for skjermleser */
  hideLegend?: FieldsetProps['hideLegend'];
  /** Navn på gruppen. */
  legend: FieldsetProps['legend'];
  /** Tilleggstekst */
  description?: FieldsetProps['description'];
  /** Margin under gruppen */
  hasSpacing?: boolean;
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
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: FieldsetProps['onHelpToggle'];
  /** Shadowrootnode */
  shadowRootNode?: Document | ShadowRoot;
}

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

export type RadioGroupProps = RadioGroupComponentCommonProps &
  FormRequiredProps &
  RadioGroupDiscriminatedCheckedProps;

export interface RadioGroupComponent extends React.FC<RadioGroupProps> {
  Radio: typeof Radio;
}
