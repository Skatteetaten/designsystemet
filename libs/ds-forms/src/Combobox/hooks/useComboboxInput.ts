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
  chevronClickedRef: React.RefObject<boolean>;
}

interface UseComboboxInputReturn {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void;
  handleClearValue: () => void;
}

/**
 * Input field event handling hook for combobox.
 *
 * What: Handles input changes, focus management, value clearing, and integrates
 * with browser compatibility features.
 *
 * Why: Input field behavior needs careful coordination with dropdown state and
 * cross-browser compatibility (especially iOS/Safari focus issues).
 * @param props - The configuration object for input handling
 * @param props.multiple - Whether multiple selections are allowed
 * @param props.setSelectedValues - Function to update selected values
 * @param props.setSearchTerm - Function to update search term
 * @param props.inputRef - Reference to the input element
 * @param props.onSelectionChange - Optional callback for selection changes
 * @param props.onInputChange - Optional callback for input value changes
 * @param props.onBlur - Optional callback for input blur events
 * @param props.onFocus - Optional callback for input focus events
 * @param props.value - Current value(s) of the combobox
 * @param props.openDropdown - Function to open the dropdown
 * @param props.closeDropdown - Function to close the dropdown
 * @param props.chevronClickedRef - Ref to track if chevron was recently clicked
 * @returns Object containing input event handlers
 */
export function useComboboxInput({
  multiple,
  setSelectedValues,
  setSearchTerm,
  openDropdown,
  closeDropdown,
  inputRef,
  onSelectionChange,
  onInputChange,
  onBlur,
  onFocus,
  value,
  chevronClickedRef,
}: UseComboboxInputProps): UseComboboxInputReturn {
  const { safeFocus, preventZoom, manageVirtualKeyboard } =
    useBrowserCompatibility();
  /**
   * Handles text input changes and triggers dropdown opening.
   *
   * What: Clears selection in single-select mode when input is emptied.
   *
   * Why: Typing should open dropdown and clear conflicting selections in single-select mode.
   */
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

  /**
   * Handles input focus with mobile compatibility and smart dropdown opening.
   *
   * What: Prevents iOS zoom and manages virtual keyboard display.
   *
   * Why: Focus should open dropdown except when coming from chevron button.
   * Mobile devices need special handling for zoom and virtual keyboard.
   */
  const handleInputFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      const currentValue = e.target.value;

      // Prevent zoom on iOS devices
      preventZoom(e.target);

      // Manage virtual keyboard for mobile devices
      manageVirtualKeyboard(e.target, true);

      // Check if focus is coming from chevron button
      const isFromChevron =
        (e.relatedTarget instanceof Element &&
          e.relatedTarget.hasAttribute('data-chevron-button')) ||
        chevronClickedRef.current;

      // Only auto-open dropdown if focus is not from chevron button
      if (!isFromChevron) {
        openDropdown(currentValue, 'focus');
      }

      onFocus?.(e);
    },
    [
      openDropdown,
      onFocus,
      preventZoom,
      manageVirtualKeyboard,
      chevronClickedRef,
    ]
  );

  /**
   * Handles input blur with delayed dropdown closing.
   *
   * What: Delays closing to allow focus to move to dropdown options.
   *
   * Why: Immediate closing on blur would prevent option selection via mouse/touch.
   * Delay allows focus to move within the combobox component.
   */
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
    [
      openDropdown,
      onFocus,
      preventZoom,
      manageVirtualKeyboard,
      chevronClickedRef,
    ]
  );

  /**
   * Clears the input value and closes dropdown.
   *
   * What: Triggers selection change callbacks for uncontrolled components.
   *
   * Why: Clear button should reset the component to empty state and refocus input.
   */
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
