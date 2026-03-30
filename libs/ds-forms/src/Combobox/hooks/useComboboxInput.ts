import {
  useCallback,
  type ChangeEvent,
  type FocusEvent,
  type RefObject,
} from 'react';

import type { ComboboxProps, ComboboxOption } from '../Combobox.types';
import { useBrowserCompatibility } from './useBrowserCompatibility';
import {
  getFirstEnabledIndex,
  openDropdownWithFocus,
} from '../utils/combobox-state-utils';

export type DropdownTrigger =
  | 'focus'
  | 'input'
  | 'click'
  | 'keyboard'
  | 'chevron';

interface UseComboboxInputProps {
  multiple: boolean;
  searchTerm: string;
  selectedValues: ComboboxOption[];
  setSelectedValues: (values: ComboboxOption[]) => void;
  setSearchTerm: (term: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  onSelectionChange?: ComboboxProps['onSelectionChange'];
  onInputChange?: (value: string) => void;
  onBlur?: ComboboxProps['onBlur'];
  onFocus?: ComboboxProps['onFocus'];
  value?: ComboboxProps['value'];
  openDropdown: (trigger: DropdownTrigger) => void;
  closeDropdown: (manual?: boolean) => void;
  enabledIndices: number[];
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}

interface UseComboboxInputReturn {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void;
  handleClearValue: () => void;
}

interface SingleSelectBlurOutcome {
  nextSearchTerm?: string;
  shouldClearSelection: boolean;
}

const getSingleSelectBlurOutcome = ({
  searchTerm,
  selectedLabel,
  isControlled,
}: {
  searchTerm: string;
  selectedLabel: string;
  isControlled: boolean;
}): SingleSelectBlurOutcome => {
  if (searchTerm === '') {
    if (selectedLabel === '') {
      return { shouldClearSelection: false };
    }

    if (isControlled) {
      return {
        nextSearchTerm: selectedLabel,
        shouldClearSelection: false,
      };
    }

    return { shouldClearSelection: true };
  }

  if (selectedLabel === '') {
    return {
      nextSearchTerm: '',
      shouldClearSelection: false,
    };
  }

  if (searchTerm !== selectedLabel) {
    return {
      nextSearchTerm: selectedLabel,
      shouldClearSelection: false,
    };
  }

  return { shouldClearSelection: false };
};

/**
 * Input field event handling hook for combobox.
 *
 * What: Handles input changes, focus management, value clearing, and integrates
 * with browser compatibility features.
 *
 * Why: Input field behavior needs careful coordination with dropdown state and
 * cross-browser compatibility (especially iOS/Safari focus issues).
 *
 * @param props - The configuration object for input handling
 * @param props.multiple - Whether multiple selections are allowed
 * @param props.searchTerm - Current input value shown in the combobox
 * @param props.selectedValues - Currently selected options
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
 * @param props.enabledIndices - Array of indices for non-disabled options
 * @param props.setFocusedIndex - Function to update focused option index
 * @returns Object containing input event handlers
 */
export function useComboboxInput({
  multiple,
  searchTerm,
  selectedValues,
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
  setFocusedIndex,
  enabledIndices,
}: UseComboboxInputProps): UseComboboxInputReturn {
  const { safeFocus, preventZoom, manageVirtualKeyboard } =
    useBrowserCompatibility();

  /**
   * Handles text input changes and triggers dropdown opening.
   *
   * What: Clears selection in single-select mode when input is emptied.
   *
   * Why: Typing should open dropdown and clear conflicting selections in
   * single-select mode.
   */
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.target.value.trimStart();
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

      const firstEnabledIndex =
        newValue !== '' ? getFirstEnabledIndex(enabledIndices) : -1;
      const inputOpenDropDown = (): void => openDropdown('input');
      openDropdownWithFocus(
        inputOpenDropDown,
        setFocusedIndex,
        firstEnabledIndex
      );

      // Call user's onInputChange callback
      onInputChange?.(newValue);
    },
    [
      setSearchTerm,
      multiple,
      value,
      enabledIndices,
      onInputChange,
      setSelectedValues,
      onSelectionChange,
      openDropdown,
      setFocusedIndex,
    ]
  );

  /**
   * Handles input focus with mobile compatibility.
   *
   * What: Prevents iOS zoom and manages virtual keyboard display.
   *
   * Why: Keyboard/programmatic focus should not automatically open the
   * dropdown. Mobile devices still need special handling for zoom and virtual
   * keyboard.
   */
  const handleInputFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      // Prevent zoom on iOS devices
      preventZoom(e.target);

      // Manage virtual keyboard for mobile devices
      manageVirtualKeyboard(e.target, true);

      onFocus?.(e);
    },
    [onFocus, preventZoom, manageVirtualKeyboard]
  );

  /**
   * Handles input blur with delayed dropdown closing.
   *
   * What: Delays closing to allow focus to move to dropdown options.
   *
   * Why: Immediate closing on blur would prevent option selection via
   * mouse/touch. Delay allows focus to move within the combobox component.
   */
  const handleInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      // Hide virtual keyboard on mobile devices when losing focus
      manageVirtualKeyboard(e.target, false);

      if (!multiple) {
        const selectedLabel = selectedValues[0]?.label ?? '';
        const { nextSearchTerm, shouldClearSelection } =
          getSingleSelectBlurOutcome({
            searchTerm,
            selectedLabel,
            isControlled: value !== undefined,
          });

        if (shouldClearSelection) {
          setSelectedValues([]);
          if (onSelectionChange) {
            (
              onSelectionChange as (
                selectedOption: ComboboxOption | null
              ) => void
            )(null);
          }
        }

        if (nextSearchTerm !== undefined) {
          setSearchTerm(nextSearchTerm);
          onInputChange?.(nextSearchTerm);
        }
      }

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
      closeDropdown,
      manageVirtualKeyboard,
      multiple,
      onBlur,
      onInputChange,
      onSelectionChange,
      searchTerm,
      selectedValues,
      setSearchTerm,
      setSelectedValues,
      value,
    ]
  );

  /**
   * Clears the input value and closes dropdown.
   *
   * What: Triggers selection change callbacks
   *
   * Why: Clear button should reset the component to empty state and refocus
   * input.
   */
  const handleClearValue = useCallback((): void => {
    setSearchTerm('');
    setSelectedValues([]);

    if (inputRef.current) {
      safeFocus(inputRef.current);

      if (onSelectionChange) {
        if (multiple) {
          (onSelectionChange as (values: ComboboxOption[]) => void)([]);
        } else {
          (onSelectionChange as (value: ComboboxOption | null) => void)(null);
        }
      }

      // Reopen dropdown after clearing using keyboard
      requestAnimationFrame(() => {
        openDropdown('click');
      });
    }
  }, [
    setSearchTerm,
    setSelectedValues,
    inputRef,
    safeFocus,
    onSelectionChange,
    multiple,
    openDropdown,
  ]);

  return {
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleClearValue,
  };
}
