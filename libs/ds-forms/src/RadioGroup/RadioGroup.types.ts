import { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { RadioProps } from '../Radio/Radio.types';

export const radioGroupVariantArr = ['standard', 'horizontal'] as const;
export type RadioGroupVariant = typeof radioGroupVariantArr[number];

export interface RadioGroupContextProps {
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

type InputHTMLAttributes = Partial<RequiredInputHTMLAttributes>;
interface InputPropsHTMLAttributes extends InputHTMLAttributes {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface RadioGroupProps extends InputPropsHTMLAttributes, BaseProps {
  /** Radio-komponenter */
  children: JSX.Element | JSX.Element[];
  /** Om gruppen skal være inaktiv */
  disabled?: boolean;
  /** Feilmelding */
  errorMessage?: string;
  /** Viser feilmelding */
  hasError?: boolean;
  /** Skjule navn på gruppen. */
  hideLegend?: boolean;
  /** Navn på gruppen. */
  legend: React.ReactNode;
  /** Overskriver autogenerert name */
  name?: string;
  /** Om gruppen er påkrevd */
  required?: boolean;
  /** Hvilke value som er valgt */
  selectedValue?: string | number;
  /** Definerer stilen til gruppen. */
  variant?: RadioGroupVariant;
}

export interface RadioGroupComponent
  extends React.ForwardRefExoticComponent<
    RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>
  > {
  Radio: React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLInputElement>
  >;
}
