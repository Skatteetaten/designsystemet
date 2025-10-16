import type { ComponentPropsWithoutRef, Ref, RefObject } from 'react';

import type { BaseProps, Prettify, Size } from '@skatteetaten/ds-core-utils';
import type { SpinnerProps } from '@skatteetaten/ds-progress';

import { ComboboxButton } from './ComboboxButton';
import type { ComboboxOptions } from './ComboboxOptions';
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
  | 'id'
  | 'type'
  | 'role'
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

  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  helpText?: LabelWithHelpProps['helpText'];
  label: string;
  loadingMessage?: string;
  /** Minimum antall tegn som må tastes før søkeresultater vises */
  minSearchLength?: number;
  options: ComboboxOption[];
  /** Props for å tilpasse spinner utseende */
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** If true, adds spacing under the combobox */
  hasSpacing?: boolean;
  hideLabel?: boolean;
  isLoading?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
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
  variant?: never;
  /** Current values - optional for both controlled and uncontrolled modes */
  value?: ComponentPropsWithoutRef<'input'>['value'];
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
  SelectedOptions: React.ComponentType<{
    multiple: boolean;
    selectedValues: ComboboxOption[];
    onRemoveValue: (value: ComboboxOption) => void;
    classNames?: { chips?: string };
  }>;
  Options: typeof ComboboxOptions;
}

export type ComboboxSelectedOptionsProps = {
  multiple: boolean;
  selectedValues: ComboboxOption[];
  onRemoveValue: (value: ComboboxOption) => void;
  classNames?: { chips?: string };
};

export type ComboboxOptionsProps = {
  isOpen: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
  displayOptions: ComboboxOption[];
  searchTerm: string;
  multiple: boolean;
  selectedValues: ComboboxOption[];
  comboboxId: string;
  listId: string;
  focusedIndex: number;
  classNames?: { options?: string };
  handleButtonFocus: (index: number) => void;
  handleOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
  customListRef: RefObject<HTMLUListElement | null>;
  hasError?: boolean;
  maxSelected?: number;
};

export type MaxSelectedMessageProps = {
  selectedCount: number;
  maxSelected: number;
  comboboxId: string;
};

export type LoadingMessageProps = {
  message?: string;
  comboboxId: string;
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
};

export type ComboboxButtonProps = {
  isOpen: boolean;
  onClick: (e?: React.MouseEvent) => void;
  hasValue?: boolean;
  onClear?: () => void;
  multiple?: boolean;
  disabled?: boolean;
  variant?: ComboboxSize;
};

export type ComboboxAccessibilityAnnouncerProps = {
  comboboxId: string;
  isLoading: boolean;
  loadingMessage: string;
  isOpen: boolean;
  displayOptions: ComboboxOption[];
  searchTerm: string;
};
