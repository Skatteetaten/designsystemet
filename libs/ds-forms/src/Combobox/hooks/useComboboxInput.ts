import {
  useCallback,
  type ChangeEvent,
  type FocusEvent,
  type RefObject,
} from 'react';

import type { ComboboxProps, ComboboxOption } from '../Combobox.types';
import { useBrowserCompatibility } from './useBrowserCompatibility';

export type DropdownTrigger =
  | 'focus'
  | 'input'
  | 'click'
  | 'keyboard'
  | 'chevron';

interface UseComboboxInputProps {
  multiple: boolean;
  setSelectedValues: (values: ComboboxOption[]) => void;
  setSearchTerm: (term: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  onSelectionChange?: ComboboxProps['onSelectionChange'];
  onInputChange?: (value: string) => void;
  onBlur?: ComboboxProps['onBlur'];
  onFocus?: ComboboxProps['onFocus'];
  value?: ComboboxProps['value'];
  openDropdown: (searchTerm: string, trigger: DropdownTrigger) => void;
  closeDropdown: (manual?: boolean) => void;
}

interface UseComboboxInputReturn {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void;
  handleClearValue: () => void;
}

export function useComboboxInput({
  multiple,
  setSelectedValues,
  setSearchTerm,
  inputRef,
  onSelectionChange,
  onInputChange,
  onBlur,
  onFocus,
  value,
  openDropdown,
  closeDropdown,
}: UseComboboxInputProps): UseComboboxInputReturn {
  const { safeFocus, preventZoom, manageVirtualKeyboard } =
    useBrowserCompatibility();
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.target.value;
      setSearchTerm(newValue);

      // Clear selection in uncontrolled single-select mode when input is emptied
      if (newValue === '' && !multiple && value === undefined) {
        setSelectedValues([]);
        if (onSelectionChange) {
          (
            onSelectionChange as (selectedOption: ComboboxOption | null) => void
          )(null);
        }
      }

      openDropdown(newValue, 'input');

      // Call user's onInputChange callback
      onInputChange?.(newValue);
    },
    [
      setSearchTerm,
      openDropdown,
      onInputChange,
      multiple,
      value,
      setSelectedValues,
      onSelectionChange,
    ]
  );

  const handleInputFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      const currentValue = e.target.value;

      // Prevent zoom on iOS devices
      preventZoom(e.target);

      // Manage virtual keyboard for mobile devices
      manageVirtualKeyboard(e.target, true);

      // Check if focus is coming from chevron button
      const isFromChevron =
        e.relatedTarget instanceof Element &&
        e.relatedTarget.hasAttribute('data-chevron-button');

      // Only auto-open dropdown if focus is not from chevron button
      if (!isFromChevron) {
        openDropdown(currentValue, 'focus');
      }

      onFocus?.(e);
    },
    [openDropdown, onFocus, preventZoom, manageVirtualKeyboard]
  );

  const handleInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      // Hide virtual keyboard on mobile devices when losing focus
      manageVirtualKeyboard(e.target, false);

      setTimeout(() => {
        const activeElement = document.activeElement;

        const comboboxContainer =
          e.target.closest('[role="combobox"]')?.parentElement;

        const isInCombobox = comboboxContainer?.contains(activeElement);
        const isInListbox = document
          .querySelector('[role="listbox"]')
          ?.contains(activeElement);

        if (!isInCombobox && !isInListbox) {
          closeDropdown();
        }
      }, 100);
      onBlur?.(e);
    },
    [closeDropdown, onBlur, manageVirtualKeyboard]
  );

  const handleClearValue = useCallback((): void => {
    setSearchTerm('');
    closeDropdown();

    if (inputRef.current) {
      safeFocus(inputRef.current);

      if (onSelectionChange && value === undefined) {
        if (multiple) {
          (onSelectionChange as (values: ComboboxOption[]) => void)([]);
        } else {
          (onSelectionChange as (value: ComboboxOption | null) => void)(null);
        }
      }
    }
  }, [
    setSearchTerm,
    closeDropdown,
    inputRef,
    safeFocus,
    onSelectionChange,
    multiple,
    value,
  ]);

  return {
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleClearValue,
  };
}
