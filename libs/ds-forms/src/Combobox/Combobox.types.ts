import type { ComponentPropsWithoutRef, Ref, RefObject } from 'react';

import type { BaseProps, Prettify, Size } from '@skatteetaten/ds-core-utils';
import type { SpinnerProps } from '@skatteetaten/ds-progress';

import type { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

export type ComboboxSize = Extract<Size, 'medium' | 'large'>;

export type ComboboxOption = {
  label: string;
  value: string;
};

export type TypedComboboxOption<TData> = ComboboxOption & {
  data: TData;
};

export type ComboboxPropsHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'name'
  | 'disabled'
  | 'required'
  | 'placeholder'
  | 'onBlur'
  | 'onFocus'
  | 'form'
  | 'accessKey'
>;

interface ComboboxCommonProps extends ComboboxPropsHTMLAttributes, BaseProps {
  ref?: Ref<HTMLInputElement | null>;
  classNames?: Prettify<
    {
      options?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;

  /** Tilleggstekst som vises under label */
  description?: LabelWithHelpProps['description'];
  /** Feilmelding som vises under komponenten */
  errorMessage?: string;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Hjelpetekst som vises i tooltip */
  helpText?: LabelWithHelpProps['helpText'];
  /** Ledetekst som vises over komponenten */
  label: string;
  /** Overskriver teksten som vises med spinner når isLoading = true. */
  spinnerLabel?: string;
  /** Minimum antall tegn før søkeresultater vises */
  minSearchLength?: number;
  /** Array av valg som kan velges fra */
  options: ComboboxOption[];
  /** For å tilpasse 'color' eller 'size' til spinner */
  spinnerProps?: Prettify<Partial<Pick<SpinnerProps, 'size' | 'color'>>>;
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Legger til margin under komponenten */
  hasSpacing?: boolean;
  /** Skjuler label visuelt, men er fortsatt synlig for skjermleser */
  hideLabel?: boolean;
  /** Viser loading state med spinner */
  isLoading?: boolean;
  /** Kalles når hjelpeteksten vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
}

interface SingleComboboxProps extends ComboboxCommonProps {
  /** Tillater valg av flere alternativer */
  multiple?: false;
  /** Størrelsen på combobox. For multi-select er størrelsen automatisk satt til 'large'. */
  variant?: ComboboxSize;
  /** Kontrollert(e) verdi(er) - valgfri for både kontrollert og ukontrollert modus */
  value?: string | number;
  /** Kalles når valget endres. Enkeltvalg: mottar ComboboxOption | null */
  onSelectionChange?: (selectedOption: ComboboxOption | null) => void;
  /** Kalles når input-teksten endres. Mottar søketekst som string. Nyttig for asynkron søk og filtrering */
  onInputChange?: (searchTerm: string) => void;
  maxSelected?: never;
}

interface MultiComboboxProps extends ComboboxCommonProps {
  /** Tillater valg av flere alternativer */
  multiple: true;
  /** Størrelsen på combobox. For multi-select er størrelsen automatisk satt til 'large'. */
  variant?: never;
  /** Kontrollert(e) verdi(er) - valgfri for både kontrollert og ukontrollert modus */
  value?: ComponentPropsWithoutRef<'input'>['value'];
  /** Kalles når valget endres. Flervalg: mottar ComboboxOption[] array */
  onSelectionChange?: (selectedOptions: ComboboxOption[]) => void;
  /** Kalles når input-teksten endres. Mottar søketekst som string. Nyttig for asynkron søk og filtrering */
  onInputChange?: (searchTerm: string) => void;
  /** Maksimalt antall valg i flervalg-modus. Viser "X av Y valgt" melding når grensen nås. Ikke tilgjengelig i enkeltvalg-modus. */
  maxSelected?: number;
}

export type ComboboxProps = SingleComboboxProps | MultiComboboxProps;

export type ComboboxComponent = React.FC<ComboboxProps>;

export type ComboboxSelectedOptionsProps = {
  multiple: boolean;
  selectedValues: ComboboxOption[];
  onRemoveValue: (value: ComboboxOption) => void;
  labelId?: string;
  disabled?: boolean;
};

export type ComboboxOptionsProps = {
  isOpen: boolean;
  isLoading?: boolean;
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
  displayOptions: ComboboxOption[];
  searchTerm: string;
  minSearchLength: number;
  multiple: boolean;
  selectedValues: ComboboxOption[];
  comboboxId: string;
  listId: string;
  focusedIndex: number;
  className?: string;
  handleButtonFocus: (index: number) => void;
  handleOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
  customListRef: RefObject<HTMLDivElement | null>;
  maxSelected?: number;
  spinnerLabel?: string;
};

export type MaxSelectedMessageProps = {
  selectedCount: number;
  maxSelected: number;
};

export type LoadingMessageProps = {
  comboboxId: string;
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
  spinnerLabel?: string;
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
  isOpen: boolean;
  displayOptions: ComboboxOption[];
  searchTerm: string;
};
