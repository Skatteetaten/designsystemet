import type { ComponentPropsWithoutRef, Ref } from 'react';

import type { BaseProps, Prettify, Size } from '@skatteetaten/ds-core-utils';
import type { SpinnerProps } from '@skatteetaten/ds-progress';

import type { ComboboxButton } from './ComboboxButton/ComboboxButton';
import type { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import type { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

export type ComboboxSize = Extract<Size, 'medium' | 'large'>;

export type ComboboxOption = {
  label: string;
  value: string;
};

export type TypedComboboxOption<TData> = ComboboxOption & {
  data: TData;
};

type SafeOmit<T, K extends keyof T> = Omit<T, K>;

export type ComboboxPropsHTMLAttributes = SafeOmit<
  ComponentPropsWithoutRef<'input'>,
  | 'value'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'id'
  | 'name'
  | 'disabled'
  | 'required'
  | 'type'
  | 'role'
  | 'className'
  | 'aria-expanded'
  | 'aria-autocomplete'
  | 'aria-controls'
  | 'aria-owns'
  | 'aria-activedescendant'
  | 'aria-describedby'
  | 'aria-invalid'
  | 'aria-busy'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-required'
  | 'aria-disabled'
  | 'aria-readonly'
  | 'aria-hidden'
  | 'aria-live'
  | 'aria-atomic'
  | 'aria-relevant'
  | 'aria-haspopup'
  | 'placeholder'
  | 'min'
  | 'max'
  | 'step'
  | 'accept'
  | 'capture'
  | 'checked'
  | 'multiple'
  | 'list'
  | 'results'
>;

interface ComboboxCommonProps extends ComboboxPropsHTMLAttributes, BaseProps {
  ref?: Ref<HTMLInputElement | null>;
  classNames?: Prettify<
    {
      container?: string;
      input?: string;
      options?: string;
      chips?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;

  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Margin under komponenten */
  hasSpacing?: boolean;
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: boolean;
  /** Ledetekst */
  label: string;
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
  /** Minimum antall tegn som må tastes før søkeresultater vises */
  minSearchLength?: number;
  options: ComboboxOption[];
  /** Viser loading state med spinner */
  isLoading?: boolean;
  /** Tilpasset melding som vises under loading */
  loadingMessage?: string;
  /** Props for å tilpasse spinner utseende */
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
  /** Om skjemafeltet er obligatorisk */
  required?: boolean;
  /** Input placeholder text */
  placeholder?: string;
  /** Input name attribute for form submission */
  name?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Callback fired when input loses focus */
  onBlur?: ComponentPropsWithoutRef<'input'>['onBlur'];
  /** Callback fired when input gains focus */
  onFocus?: ComponentPropsWithoutRef<'input'>['onFocus'];
}

interface SingleComboboxProps extends ComboboxCommonProps {
  multiple?: false;
  /** Størrelsen på combobox */
  variant?: ComboboxSize;
  /** Current value - optional for both controlled and uncontrolled modes */
  value?: string | number;
  /** Callback når en enkelt option velges eller fjernes */
  onSelectionChange?: (selectedOption: ComboboxOption | null) => void;
  /** Callback når input-verdien endres - optional for live search functionality */
  onInputChange?: (searchTerm: string) => void;
}

interface MultiComboboxProps extends ComboboxCommonProps {
  multiple: true;
  /** Størrelsen på combobox - automatisk satt til 'large' for multi-select */
  variant?: 'large';
  /** Current values - optional for both controlled and uncontrolled modes */
  value?: (string | number)[];
  /** Callback når options velges eller fjernes i multi-select mode */
  onSelectionChange?: (selectedOptions: ComboboxOption[]) => void;
  /** Callback når input-verdien endres - optional for live search functionality */
  onInputChange?: (searchTerm: string) => void;
  /** Maximum number of options that can be selected. Shows "X of Y selected" message when limit is reached */
  maxSelected?: number;
}

export type ComboboxProps = SingleComboboxProps | MultiComboboxProps;

export interface ComboboxComponent extends React.FC<ComboboxProps> {
  Button: typeof ComboboxButton;
  Chips: React.ComponentType<{
    multiple: boolean;
    selectedValues: ComboboxOption[];
    onRemoveValue: (value: ComboboxOption) => void;
    classNames?: { chips?: string };
  }>;
  Options: typeof ComboboxOptions;
}
