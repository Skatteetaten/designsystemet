import { useEffect, type RefObject } from 'react';

import {
  getNextEnabledIndex,
  getPreviousEnabledIndex,
  getFirstEnabledIndex,
  isIndexEnabled,
} from '../combobox-state-utils';
import type { ComboboxOption } from '../Combobox.types';

export interface UseComboboxKeyboardProps {
  isOpen: boolean;
  allOptions: ComboboxOption[];
  displayOptions: ComboboxOption[];
  enabledIndices: number[];
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  openDropdown: () => void;
  closeDropdown: (manual?: boolean) => void;
  setSearchTerm: (term: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  minSearchLength?: number;
  onSelectionChange?:
    | ((selectedOption: ComboboxOption | null) => void)
    | ((selectedOptions: ComboboxOption[]) => void);
  multiple?: boolean;
  selectedValues?: ComboboxOption[];
  onRemoveLastValue?: () => void;
  onOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
}

// Utility functions to reduce cognitive complexity
const isInputFocused = (
  inputRef: RefObject<HTMLInputElement | null>
): boolean => {
  return Boolean(
    inputRef.current && document.activeElement === inputRef.current
  );
};

const canOpenPopup = (
  allOptions: ComboboxOption[],
  inputRef: RefObject<HTMLInputElement | null>,
  minSearchLength: number
): boolean => {
  return (
    allOptions.length > 0 &&
    (inputRef.current?.value.length ?? 0) >= minSearchLength
  );
};

const getNextFocusIndex = (
  currentIndex: number,
  enabledIndices: number[]
): number => {
  return getNextEnabledIndex(currentIndex, enabledIndices);
};

// Popup management utilities
const openPopupWithFocus = (
  openDropdown: () => void,
  setFocusedIndex: (index: number) => void,
  focusIndex?: number
): void => {
  openDropdown();
  if (focusIndex !== undefined) {
    setFocusedIndex(focusIndex);
  }
};

const closePopup = (
  closeDropdown: (manual?: boolean) => void,
  setFocusedIndex: (index: number) => void
): void => {
  closeDropdown(true);
  setFocusedIndex(-1);
};

// Handle exact text match when no option is focused
const handleExactMatch = (
  inputRef: RefObject<HTMLInputElement | null>,
  displayOptions: ComboboxOption[],
  onOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void
): void => {
  const searchValue = inputRef.current?.value.trim();
  if (!searchValue) return;

  const exactMatch = displayOptions.find(
    (option) => option.label.toLowerCase() === searchValue.toLowerCase()
  );

  if (exactMatch) {
    onOptionSelect(exactMatch, true); // true = fromKeyboard
  }
};

// Arrow Down key handler
const handleArrowDown = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  const {
    isOpen,
    allOptions,
    enabledIndices,
    focusedIndex,
    openDropdown,
    setFocusedIndex,
    inputRef,
    minSearchLength = 0,
  } = props;

  e.preventDefault();

  if (e.altKey) {
    // Alt + Down Arrow: Display popup without moving focus
    // For Alt+Down, use normal minSearchLength logic
    if (!isOpen && canOpenPopup(allOptions, inputRef, minSearchLength)) {
      openDropdown();
    }
    return;
  }

  // Down Arrow: Move focus into popup or navigate within popup
  // For regular Arrow Down, bypass minSearchLength and open if we have any options
  if (!isOpen && allOptions.length > 0) {
    const firstEnabledIndex = getFirstEnabledIndex(enabledIndices);
    if (firstEnabledIndex !== -1) {
      openPopupWithFocus(openDropdown, setFocusedIndex, firstEnabledIndex);
    }
  } else if (isOpen) {
    const nextIndex = getNextFocusIndex(focusedIndex, enabledIndices);
    if (nextIndex !== -1) {
      setFocusedIndex(nextIndex);
    }
  }
};

// Arrow Up key handler
const handleArrowUp = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  const {
    isOpen,
    focusedIndex,
    enabledIndices,
    closeDropdown,
    setFocusedIndex,
  } = props;

  e.preventDefault();

  if (e.altKey) {
    // Alt + Up Arrow: Close popup and return focus to combobox
    if (isOpen) {
      closePopup(closeDropdown, setFocusedIndex);
    }
    return;
  }

  // Up Arrow: Navigate within popup
  if (!isOpen) return;

  if (isIndexEnabled(focusedIndex, enabledIndices)) {
    const firstEnabledIndex = getFirstEnabledIndex(enabledIndices);

    if (focusedIndex === firstEnabledIndex) {
      // We're at the first enabled option - close dropdown instead of wrapping
      closePopup(closeDropdown, setFocusedIndex);
    } else {
      // Move to previous enabled option
      const previousIndex = getPreviousEnabledIndex(
        focusedIndex,
        enabledIndices
      );
      setFocusedIndex(previousIndex);
    }
  } else {
    // Current index is not enabled, close dropdown
    closePopup(closeDropdown, setFocusedIndex);
  }
};

// Common selection logic for Enter and Space keys
const handleSelection = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  const {
    isOpen,
    focusedIndex,
    displayOptions,
    enabledIndices,
    inputRef,
    onOptionSelect,
  } = props;

  e.preventDefault();

  // Handle focused option selection
  if (
    isOpen &&
    isIndexEnabled(focusedIndex, enabledIndices) &&
    displayOptions[focusedIndex]
  ) {
    const selectedOption = displayOptions[focusedIndex];

    onOptionSelect(selectedOption, true); // true = fromKeyboard
    return;
  }

  // Handle exact text match when no option is focused
  handleExactMatch(inputRef, displayOptions, onOptionSelect);
};

// Enter key handler
const handleEnter = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  handleSelection(e, props);
};

// Space key handler
const handleSpace = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  handleSelection(e, props);
};

// Escape key handler
const handleEscape = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  const { isOpen, closeDropdown, setFocusedIndex, setSearchTerm } = props;

  e.preventDefault();

  if (isOpen) {
    closePopup(closeDropdown, setFocusedIndex);
  } else {
    // Optional: clear the combobox when popup is hidden
    setSearchTerm('');
  }
};

// Tab key handler
const handleTab = (
  _e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  const { isOpen, closeDropdown, setFocusedIndex } = props;

  if (isOpen) {
    closePopup(closeDropdown, setFocusedIndex);
  }
  // Allow normal tab behavior
};

// Backspace key handler
const handleBackspace = (
  e: KeyboardEvent,
  props: UseComboboxKeyboardProps
): void => {
  const { multiple, inputRef, selectedValues = [], onRemoveLastValue } = props;

  // In multi-select mode, remove last selected value if input is empty
  if (
    multiple &&
    inputRef.current?.value === '' &&
    selectedValues.length > 0 &&
    onRemoveLastValue
  ) {
    e.preventDefault();
    onRemoveLastValue();
  }
  // Otherwise, let the browser handle normal backspace behavior
};

export function useComboboxKeyboard(props: UseComboboxKeyboardProps): void {
  const { inputRef } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!isInputFocused(inputRef)) return;

      // Key handler mapping to replace switch statement
      const keyHandlers: Record<
        string,
        (e: KeyboardEvent, props: UseComboboxKeyboardProps) => void
      > = {
        ArrowDown: handleArrowDown,
        ArrowUp: handleArrowUp,
        Enter: handleEnter,
        ' ': handleSpace,
        Escape: handleEscape,
        Tab: handleTab,
        Backspace: handleBackspace,
      };

      const handler = keyHandlers[e.key];
      if (handler) {
        handler(e, props);
      }
      // For other keys, let the input handle it naturally
    };

    document.addEventListener('keydown', handleKeyDown);
    return (): void => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [props, inputRef]);
}
