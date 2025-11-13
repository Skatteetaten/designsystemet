import { useCallback, type RefObject } from 'react';

import type { ComboboxProps, ComboboxOption } from '../Combobox.types';
import {
  selectOption,
  removeOption,
  SELECTION_BEHAVIORS,
} from '../utils/combobox-utils';

interface UseComboboxSelectionProps {
  multiple: boolean;
  selectedValues: ComboboxOption[];
  setSelectedValues: (values: ComboboxOption[]) => void;
  setSearchTerm: (term: string) => void;
  closeDropdown: (manual?: boolean) => void;
  setFocusedIndex: (index: number) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  onSelectionChange?: ComboboxProps['onSelectionChange'];
  maxSelected?: number;
}

interface UseComboboxSelectionReturn {
  handleRemoveLastValue: () => void;
  handleOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
  handleRemoveValue: (optionToRemove: ComboboxOption) => void;
}

/**
 * Option selection and removal logic hook for combobox.
 *
 * What: Provides methods for selecting options, removing selections, and handling
 * keyboard vs mouse selection behaviors.
 *
 * Why: Selection logic differs significantly between single and multi-select modes.
 * Centralized selection handling ensures consistent behavior and proper callbacks.
 * @param props - The configuration object for selection handling
 * @param props.multiple - Whether multiple selections are allowed
 * @param props.selectedValues - Currently selected options
 * @param props.setSelectedValues - Function to update selected values
 * @param props.setSearchTerm - Function to update search term
 * @param props.closeDropdown - Function to close the dropdown
 * @param props.setFocusedIndex - Function to update focused index
 * @param props.inputRef - Reference to the input element
 * @param props.onSelectionChange - Optional callback for selection changes
 * @param props.maxSelected - Maximum number of selected options (for multiple)
 * @returns Object containing selection and removal handlers
 */
export function useComboboxSelection({
  multiple,
  selectedValues,
  setSelectedValues,
  setSearchTerm,
  closeDropdown,
  setFocusedIndex,
  inputRef,
  onSelectionChange,
  maxSelected,
}: UseComboboxSelectionProps): UseComboboxSelectionReturn {
  /**
   * Removes the last selected value in multi-select mode.
   *
   * What: Used when user presses Backspace with empty input.
   *
   * Why: Common UX pattern for tag inputs - Backspace removes last tag when input is empty.
   */
  const handleRemoveLastValue = useCallback((): void => {
    if (multiple && selectedValues.length > 0) {
      const newSelectedValues = selectedValues.slice(0, -1);
      setSelectedValues(newSelectedValues);

      if (onSelectionChange) {
        (onSelectionChange as (values: ComboboxOption[]) => void)(
          newSelectedValues
        );
      }
    }
  }, [multiple, selectedValues, setSelectedValues, onSelectionChange]);

  /**
   * Handles option selection with keyboard vs mouse behavior distinction.
   *
   * What: Delegates to shared selection utilities with appropriate behavior flags.
   *
   * Why: Keyboard and mouse selection may have different behaviors (dropdown closing, focus management).
   */
  const handleOptionSelect = useCallback(
    (option: ComboboxOption, fromKeyboard = false): void => {
      const behavior = fromKeyboard
        ? SELECTION_BEHAVIORS.KEYBOARD
        : SELECTION_BEHAVIORS.MOUSE;

      selectOption(option, {
        multiple,
        selectedValues,
        behavior,
        setSelectedValues,
        setSearchTerm,
        closeDropdown,
        setFocusedIndex,
        inputRef,
        onSelectionChange,
        maxSelected,
      });
    },
    [
      multiple,
      selectedValues,
      setSelectedValues,
      setSearchTerm,
      closeDropdown,
      setFocusedIndex,
      onSelectionChange,
      inputRef,
      maxSelected,
    ]
  );

  /**
   * Removes a specific selected value in multi-select mode.
   *
   * What: Used by remove buttons on selected option tags.
   *
   * Why: Users need ability to remove specific selections without affecting others.
   */
  const handleRemoveValue = useCallback(
    (optionToRemove: ComboboxOption): void => {
      if (multiple) {
        removeOption(optionToRemove, {
          selectedValues,
          setSelectedValues,
          onSelectionChange,
        });
      }
    },
    [multiple, selectedValues, setSelectedValues, onSelectionChange]
  );

  return {
    handleRemoveLastValue,
    handleOptionSelect,
    handleRemoveValue,
  };
}
