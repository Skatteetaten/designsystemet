import type { ComboboxProps, ComboboxOption } from '../Combobox.types';

/**
 * Filters combobox options based on search term and selection state.
 * In multi-select mode, all options remain visible to show checkboxes for selected items.
 * @param options - Array of all available options to filter
 * @param searchTerm - Current search input value to match against option labels
 * @returns Filtered array of options matching the search criteria
 */
export const filterOptions = (
  options: ComboboxOption[],
  searchTerm: string
): ComboboxOption[] => {
  const filteredOptions = options;

  // Keep all options visible in multi-select mode, including selected ones
  // This allows checkboxes to remain visible for selected items

  if (!searchTerm) return filteredOptions;

  return filteredOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

/**
 * Converts external value prop to internal selected values array.
 * Only processes multi-select arrays, returns empty array for single-select.
 * @param value - External value from props (string, number, array, or undefined)
 * @param options - Available options to match values against
 * @param multiple - Whether combobox is in multi-select mode
 * @returns Array of ComboboxOption objects matching the provided values
 */
export const getSelectedValuesFromValue = (
  value: string | number | readonly string[] | undefined,
  options: ComboboxOption[],
  multiple: boolean
): ComboboxOption[] => {
  if (multiple && Array.isArray(value)) {
    return options.filter((option) => value.includes(option.value));
  }
  return [];
};

/**
 * Converts external value prop to display text for the input field.
 * For single-select: returns the label of matching option or stringified value.
 * For multi-select: always returns empty string (chips display selected values).
 * @param value - External value from props (string, number, array, or undefined)
 * @param options - Available options to find label for the value
 * @param multiple - Whether combobox is in multi-select mode
 * @returns String to display in the input field
 */
export const getSearchTermFromValue = (
  value: string | number | readonly string[] | undefined,
  options: ComboboxOption[],
  multiple: boolean
): string => {
  if (multiple) {
    return '';
  }

  if (value !== undefined && !Array.isArray(value)) {
    const matchingOption = options.find((option) => option.value === value);
    return matchingOption ? matchingOption.label : String(value);
  }

  return '';
};

/**
 * Configuration object defining how option selection behaves for different interaction methods.
 * Used to standardize behavior differences between mouse clicks and keyboard navigation.
 */
export interface SelectionBehavior {
  /** Whether selected options can be toggled off. Mouse: true, Keyboard multi-select: false */
  allowToggleOff: boolean;
  /** Whether to reset focus index after selection. Mouse: true, Keyboard: false */
  resetFocusIndex: boolean;
  /** Whether to delay focus return to input. Mouse: true, Keyboard: false */
  delayedFocus: boolean;
}

/**
 * Predefined selection behavior configurations for common interaction patterns.
 * Ensures consistent UX between different input methods.
 */
export const SELECTION_BEHAVIORS = {
  /** Behavior for mouse/click interactions - allows toggle, resets focus, delays input focus */
  MOUSE: {
    allowToggleOff: true,
    resetFocusIndex: true,
    delayedFocus: true,
  },
  /** Behavior for keyboard interactions - allows toggle, preserves focus, immediate input focus */
  KEYBOARD: {
    allowToggleOff: true,
    resetFocusIndex: false,
    delayedFocus: false,
  },
} as const;

/**
 * Determines if an option can be selected without exceeding maximum limits.
 * @param option - The option to check for selection eligibility
 * @param selectedValues - Currently selected options
 * @param maxSelected - Maximum number of selections allowed (undefined = no limit)
 * @returns True if the option can be selected, false if max limit would be exceeded
 */
const canSelectOption = (
  option: ComboboxOption,
  selectedValues: ComboboxOption[],
  maxSelected?: number
): boolean => {
  const isAlreadySelected = selectedValues.some(
    (selected) => selected.value === option.value
  );

  // Can always deselect or select if no limit
  if (isAlreadySelected || !maxSelected) {
    return true;
  }

  // Check if adding would exceed max limit
  return selectedValues.length < maxSelected;
};

/**
 * Determines the selection action (ADD, REMOVE, NONE) based on current state and behavior.
 * @param option - The option being processed
 * @param selectedValues - Currently selected options
 * @param behavior - Selection behavior configuration (mouse vs keyboard)
 * @returns The action to take and whether the option is already selected
 */
const getSelectionAction = (
  option: ComboboxOption,
  selectedValues: ComboboxOption[],
  behavior: SelectionBehavior
): { action: 'ADD' | 'REMOVE' | 'NONE'; isAlreadySelected: boolean } => {
  const isAlreadySelected = selectedValues.some(
    (selected) => selected.value === option.value
  );

  if (isAlreadySelected && behavior.allowToggleOff) {
    return { action: 'REMOVE', isAlreadySelected };
  } else if (!isAlreadySelected) {
    return { action: 'ADD', isAlreadySelected };
  } else {
    // Already selected and toggle off not allowed (keyboard behavior)
    return { action: 'NONE', isAlreadySelected };
  }
};

/**
 * Handles focus management after option selection based on behavior configuration.
 * @param behavior - Selection behavior configuration defining focus handling
 * @param setFocusedIndex - Function to update focused option index
 * @param inputRef - Ref to the input element for focus management
 */
const handleSelectionFocus = (
  behavior: SelectionBehavior,
  setFocusedIndex: (index: number) => void,
  inputRef: React.RefObject<HTMLInputElement | null>
): void => {
  if (behavior.resetFocusIndex) {
    setFocusedIndex(-1);
  }

  if (behavior.delayedFocus) {
    setTimeout(() => inputRef.current?.focus(), 0);
  }
};

/**
 * Triggers the appropriate selection change callback based on single/multi-select mode.
 * @param selectedValues - The new selected values after selection change
 * @param onSelectionChange - Optional callback for selection changes
 * @param multiple - Whether combobox is in multi-select mode
 */
const triggerSelectionCallback = (
  selectedValues: ComboboxOption | ComboboxOption[],
  onSelectionChange: ComboboxProps['onSelectionChange'],
  multiple: boolean
): void => {
  if (!onSelectionChange) return;

  if (multiple) {
    (onSelectionChange as (values: ComboboxOption[]) => void)(
      selectedValues as ComboboxOption[]
    );
  } else {
    (onSelectionChange as (value: ComboboxOption | null) => void)(
      selectedValues as ComboboxOption
    );
  }
};

/**
 * Handles option selection logic for multi-select mode.
 * Manages selection state, validation, focus, and callbacks for multiple selections.
 * @param option - The option being selected
 * @param config - Configuration object containing state and handlers for multi-select
 * @param config.selectedValues - Currently selected options
 * @param config.behavior - Selection behavior configuration (mouse vs keyboard)
 * @param config.setSelectedValues - Function to update selected values state
 * @param config.setSearchTerm - Function to update search input state
 * @param config.setFocusedIndex - Function to update focused option index
 * @param config.inputRef - Ref to the input element for focus management
 * @param config.onSelectionChange - Optional callback for selection changes
 * @param config.maxSelected - Optional maximum number of selections allowed
 */
const selectMultipleOption = (
  option: ComboboxOption,
  {
    selectedValues,
    behavior,
    setSelectedValues,
    setSearchTerm,
    setFocusedIndex,
    inputRef,
    onSelectionChange,
    maxSelected,
  }: {
    selectedValues: ComboboxOption[];
    behavior: SelectionBehavior;
    setSelectedValues: (values: ComboboxOption[]) => void;
    setSearchTerm: (term: string) => void;
    setFocusedIndex: (index: number) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    onSelectionChange?: ComboboxProps['onSelectionChange'];
    maxSelected?: number;
  }
): void => {
  // Validate selection limits
  if (!canSelectOption(option, selectedValues, maxSelected)) {
    return; // Max limit reached, cannot add more
  }

  // Determine what action to take
  const { action } = getSelectionAction(option, selectedValues, behavior);

  if (action === 'NONE') {
    return; // No action needed
  }

  let newSelectedValues: ComboboxOption[];

  if (action === 'REMOVE') {
    // Remove the option
    newSelectedValues = selectedValues.filter(
      (selected) => selected.value !== option.value
    );
  } else {
    // Add the option
    newSelectedValues = [...selectedValues, option];
  }

  // Update state
  setSelectedValues(newSelectedValues);
  setSearchTerm(''); // Clear search in multi-select mode

  // Handle focus management
  handleSelectionFocus(behavior, setFocusedIndex, inputRef);

  // Trigger callback
  triggerSelectionCallback(newSelectedValues, onSelectionChange, true);
};

/**
 * Handles option selection logic for single-select mode.
 * Updates search term, closes dropdown, and triggers callback for single selection.
 * @param option - The option being selected
 * @param config - Configuration object containing state and handlers for single-select
 * @param config.setSearchTerm - Function to update search input state
 * @param config.closeDropdown - Function to close the dropdown
 * @param config.setFocusedIndex - Function to update focused option index
 * @param config.onSelectionChange - Optional callback for selection changes
 */
const selectSingleOption = (
  option: ComboboxOption,
  {
    setSearchTerm,
    closeDropdown,
    setFocusedIndex,
    onSelectionChange,
  }: {
    setSearchTerm: (term: string) => void;
    closeDropdown: (manual?: boolean) => void;
    setFocusedIndex: (index: number) => void;
    onSelectionChange?: ComboboxProps['onSelectionChange'];
  }
): void => {
  // Update search term to selected option label
  setSearchTerm(option.label);

  // Close dropdown and reset focus
  closeDropdown();
  setFocusedIndex(-1);

  // Trigger callback with selected option
  triggerSelectionCallback(option, onSelectionChange, false);
};

/**
 * Core option selection logic handling both single and multi-select modes.
 * Routes to appropriate handler based on selection mode and manages all selection state.
 * @param option - The option being selected
 * @param config - Configuration object containing all necessary state and handlers
 * @param config.multiple - Whether combobox is in multi-select mode
 * @param config.selectedValues - Currently selected options
 * @param config.behavior - Selection behavior configuration (mouse vs keyboard)
 * @param config.setSelectedValues - Function to update selected values state
 * @param config.setSearchTerm - Function to update search input state
 * @param config.closeDropdown - Function to close the dropdown
 * @param config.setFocusedIndex - Function to update focused option index
 * @param config.inputRef - Ref to the input element for focus management
 * @param config.onSelectionChange - Optional callback for selection changes
 * @param config.maxSelected - Optional maximum number of selections allowed
 */
export const selectOption = (
  option: ComboboxOption,
  {
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
  }: {
    multiple: boolean;
    selectedValues: ComboboxOption[];
    behavior: SelectionBehavior;
    setSelectedValues: (values: ComboboxOption[]) => void;
    setSearchTerm: (term: string) => void;
    closeDropdown: (manual?: boolean) => void;
    setFocusedIndex: (index: number) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    onSelectionChange?: ComboboxProps['onSelectionChange'];
    maxSelected?: number;
  }
): void => {
  if (multiple) {
    selectMultipleOption(option, {
      selectedValues,
      behavior,
      setSelectedValues,
      setSearchTerm,
      setFocusedIndex,
      inputRef,
      onSelectionChange,
      maxSelected,
    });
  } else {
    selectSingleOption(option, {
      setSearchTerm,
      closeDropdown,
      setFocusedIndex,
      onSelectionChange,
    });
  }
};

/**
 * Removes a specific option from the selected values array.
 * Used primarily for chip removal in multi-select mode.
 * @param optionToRemove - The option to remove from selection
 * @param config - Configuration object containing state and handlers
 * @param config.selectedValues - Currently selected options
 * @param config.setSelectedValues - Function to update selected values state
 * @param config.onSelectionChange - Optional callback for selection changes
 */
export const removeOption = (
  optionToRemove: ComboboxOption,
  {
    selectedValues,
    setSelectedValues,
    onSelectionChange,
  }: {
    selectedValues: ComboboxOption[];
    setSelectedValues: (values: ComboboxOption[]) => void;
    onSelectionChange?: ComboboxProps['onSelectionChange'];
  }
): void => {
  const newSelectedValues = selectedValues.filter(
    (selected) => selected.value !== optionToRemove.value
  );
  setSelectedValues(newSelectedValues);

  if (onSelectionChange) {
    (onSelectionChange as (values: ComboboxOption[]) => void)(
      newSelectedValues
    );
  }
};
