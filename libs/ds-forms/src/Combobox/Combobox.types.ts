import type { ComponentPropsWithoutRef, Ref, RefObject } from 'react';

import type { BaseProps, Prettify, Size } from '@skatteetaten/ds-core-utils';
import type { SpinnerProps } from '@skatteetaten/ds-progress';

import type { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

export type ComboboxSize = Extract<Size, 'medium' | 'large'>;

type ComboboxOptionBase<TValue extends string | number = string> = {
  label: string;
  value: TValue;
  /**
   * Gruppe som alternativet tilhører. Alternativer med samme group vises sammen
   * under en felles overskrift.
   */
  group?: string;
};

/**
 * Representerer et alternativ i Combobox.
 *
 * @example
 *   // Basis - ingen generics
 *   const option: ComboboxOption = { label: 'Oslo', value: 'oslo' };
 *
 *   // Med typed value (string union)
 *   type Status = 'active' | 'inactive';
 *   const option: ComboboxOption<Status> = {
 *     label: 'Active',
 *     value: 'active',
 *   };
 *
 *   // Med metadata
 *   type Meta = { population: number };
 *   const option: ComboboxOption<string, Meta> = {
 *     label: 'Oslo',
 *     value: 'oslo',
 *     data: { population: 709037 },
 *   };
 *
 *   // Begge generics
 *   const option: ComboboxOption<Status, Meta> = {
 *     label: 'Active Oslo',
 *     value: 'active',
 *     data: { population: 709037 },
 *   };
 *
 * @param TValue - Type for value-feltet. Standard er string. Kan være
 *   strengunion (f.eks. 'active' | 'inactive') eller number.
 * @param TData - Type for metadata via data-feltet. Standard er never (ikke
 *   tilgjengelig).
 */
export type ComboboxOption<
  TValue extends string | number = string,
  TData = never,
> = [TData] extends [never]
  ? ComboboxOptionBase<TValue>
  : ComboboxOptionBase<TValue> & { data: TData };

/** @deprecated Bruk ComboboxOption<TValue, TData> i stedet. */
export type TypedComboboxOption<TData> = ComboboxOption<string, TData>;

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

interface ComboboxCommonProps<
  TValue extends string | number = string,
  TData = never,
> extends ComboboxPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLInputElement | null>;
  classNames?: Prettify<
    {
      container?: string;
      options?: string;
      inputList?: string;
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
  options: ComboboxOption<TValue, TData>[];
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

interface SingleComboboxProps<
  TValue extends string | number = string,
  TData = never,
> extends ComboboxCommonProps<TValue, TData> {
  /** Tillater valg av flere alternativer */
  multiple?: false;
  /**
   * Størrelsen på combobox. For multi-select er størrelsen automatisk satt til
   * 'large'.
   */
  variant?: ComboboxSize;
  /**
   * Kontrollert(e) verdi(er) - valgfri for både kontrollert og ukontrollert
   * modus
   */
  value?: TValue | number;
  /** Kalles når valget endres. Enkeltvalg: mottar ComboboxOption | null */
  onSelectionChange?: (
    selectedOption: ComboboxOption<TValue, TData> | null
  ) => void;
  /**
   * Kalles når input-teksten endres. Mottar søketekst som string. Nyttig for
   * asynkron søk og filtrering
   */
  onInputChange?: (searchTerm: string) => void;
  maxSelected?: never;
}

interface MultiComboboxProps<
  TValue extends string | number = string,
  TData = never,
> extends ComboboxCommonProps<TValue, TData> {
  /** Tillater valg av flere alternativer */
  multiple: true;
  /**
   * Størrelsen på combobox. For multi-select er størrelsen automatisk satt til
   * 'large'.
   */
  variant?: never;
  /**
   * Kontrollert(e) verdi(er) - valgfri for både kontrollert og ukontrollert
   * modus
   */
  value?: ComponentPropsWithoutRef<'input'>['value'];
  /** Kalles når valget endres. Flervalg: mottar ComboboxOption[] array */
  onSelectionChange?: (
    selectedOptions: ComboboxOption<TValue, TData>[]
  ) => void;
  /**
   * Kalles når input-teksten endres. Mottar søketekst som string. Nyttig for
   * asynkron søk og filtrering
   */
  onInputChange?: (searchTerm: string) => void;
  /**
   * Maksimalt antall valg i flervalg-modus. Viser "X av Y valgt" melding når
   * grensen nås. Ikke tilgjengelig i enkeltvalg-modus.
   */
  maxSelected?: number;
}

export type ComboboxProps<
  TValue extends string | number = string,
  TData = never,
> = SingleComboboxProps<TValue, TData> | MultiComboboxProps<TValue, TData>;

export interface ComboboxComponent {
  <TValue extends string | number, TData = never>(
    props: Readonly<ComboboxProps<TValue, TData>>
  ): React.JSX.Element;
  (props: Readonly<ComboboxProps>): React.JSX.Element;
  displayName?: string;
}

export type ComboboxSelectedOptionsProps = {
  className?: string;
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
  selectedValues: ComboboxOption[];
  searchTerm: string;
  focusedIndex: number;
};
