import { useCallback, type RefObject } from 'react';

import {
  selectOption,
  removeOption,
  SELECTION_BEHAVIORS,
} from '../combobox-utils';
import type { ComboboxProps, ComboboxOption } from '../Combobox.types';

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
