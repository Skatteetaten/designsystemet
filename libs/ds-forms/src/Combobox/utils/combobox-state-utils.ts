import type { ComboboxOption } from '../Combobox.types';

/**
 * Global state interface representing the current combobox configuration.
 * Used to calculate option states and navigation indices.
 */
export interface ComboboxState {
  /** All available options in the combobox */
  options: ComboboxOption[];
  /** Currently selected options */
  selectedValues: ComboboxOption[];
  /** Whether combobox is in multi-select mode */
  multiple: boolean;
  /** Optional maximum number of selections allowed */
  maxSelected?: number;
}

/**
 * State information for a single option within the combobox.
 * Determines visual appearance and interaction behavior.
 */
export interface OptionState {
  /** Whether this option is currently selected */
  isSelected: boolean;
  /** Whether this option is disabled (not selectable) */
  isDisabled: boolean;
  /** Whether this option can receive keyboard focus */
  isFocusable: boolean;
}

/**
 * Checks if a specific option is currently selected.
 * @param option - The option to check
 * @param selectedValues - Array of currently selected options
 * @returns True if the option is selected, false otherwise
 */
export const isOptionSelected = (
  option: ComboboxOption,
  selectedValues: ComboboxOption[]
): boolean => {
  return selectedValues.some((selected) => selected.value === option.value);
};

/**
 * Determines if an option should be disabled based on selection limits.
 * An option is disabled when max selections are reached and the option is not already selected.
 * @param option - The option to check
 * @param state - Current combobox state containing selection info
 * @returns True if the option should be disabled, false otherwise
 */
export const isOptionDisabled = (
  option: ComboboxOption,
  state: ComboboxState
): boolean => {
  const { selectedValues, multiple, maxSelected } = state;

  if (!multiple || !maxSelected) {
    return false;
  }

  const isSelected = isOptionSelected(option, selectedValues);
  const isMaxLimitReached = selectedValues.length >= maxSelected && !isSelected;

  return isMaxLimitReached;
};

/**
 * Calculates the complete state information for a single option.
 * Combines selection status, disabled state, and focusability into one object.
 * @param option - The option to analyze
 * @param state - Current combobox state
 * @returns Complete state object for the option
 */
export const getOptionState = (
  option: ComboboxOption,
  state: ComboboxState
): OptionState => {
  const isSelected = isOptionSelected(option, state.selectedValues);
  const isDisabled = isOptionDisabled(option, state);
  const isFocusable = !isDisabled;

  return {
    isSelected,
    isDisabled,
    isFocusable,
  };
};

/**
 * Gets array indices of all options that can be focused via keyboard navigation.
 * Excludes disabled options to prevent keyboard traps.
 * @param state - Current combobox state
 * @returns Array of indices for focusable options
 */
export const getEnabledIndices = (state: ComboboxState): number[] => {
  return state.options
    .map((option, index) => ({ option, index }))
    .filter(({ option }) => !isOptionDisabled(option, state))
    .map(({ index }) => index);
};

/**
 * Finds the next focusable option index after the current one.
 * Wraps to the beginning if at the end of the list.
 * @param currentIndex - Current focused option index
 * @param enabledIndices - Array of all focusable option indices
 * @returns Index of next focusable option, or -1 if none available
 */
export const getNextEnabledIndex = (
  currentIndex: number,
  enabledIndices: number[]
): number => {
  if (enabledIndices.length === 0) {
    return -1;
  }

  const currentEnabledPosition = enabledIndices.findIndex(
    (index) => index === currentIndex
  );

  if (currentEnabledPosition === -1) {
    return enabledIndices[0];
  }

  const nextPosition =
    currentEnabledPosition < enabledIndices.length - 1
      ? currentEnabledPosition + 1
      : 0;

  return enabledIndices[nextPosition];
};

/**
 * Finds the previous focusable option index before the current one.
 * Wraps to the end if at the beginning of the list.
 * @param currentIndex - Current focused option index
 * @param enabledIndices - Array of all focusable option indices
 * @returns Index of previous focusable option, or -1 if none available
 */
export const getPreviousEnabledIndex = (
  currentIndex: number,
  enabledIndices: number[]
): number => {
  if (enabledIndices.length === 0) {
    return -1;
  }

  const currentEnabledPosition = enabledIndices.findIndex(
    (index) => index === currentIndex
  );

  if (currentEnabledPosition === -1) {
    return enabledIndices[enabledIndices.length - 1];
  }

  const previousPosition =
    currentEnabledPosition > 0
      ? currentEnabledPosition - 1
      : enabledIndices.length - 1;

  return enabledIndices[previousPosition];
};

/**
 * Gets the first focusable option index.
 * Used for Home key navigation and initial focus placement.
 * @param enabledIndices - Array of all focusable option indices
 * @returns Index of first focusable option, or -1 if none available
 */
export const getFirstEnabledIndex = (enabledIndices: number[]): number => {
  return enabledIndices.length > 0 ? enabledIndices[0] : -1;
};

/**
 * Checks if a specific index corresponds to a focusable option.
 * Used to validate focus targets before applying focus.
 * @param index - Option index to check
 * @param enabledIndices - Array of all focusable option indices
 * @returns True if the index is focusable, false otherwise
 */
export const isIndexEnabled = (
  index: number,
  enabledIndices: number[]
): boolean => {
  return enabledIndices.includes(index);
};
