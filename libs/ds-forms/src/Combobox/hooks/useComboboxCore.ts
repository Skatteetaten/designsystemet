import {
  useState,
  useRef,
  useCallback,
  useId,
  useEffect,
  useMemo,
} from 'react';

import {
  getNextEnabledIndex,
  getPreviousEnabledIndex,
  isIndexEnabled,
  getEnabledIndices,
} from '../combobox-state-utils';
import {
  getSelectedValuesFromValue,
  getSearchTermFromValue,
  filterOptions,
} from '../combobox-utils';
import type { ComboboxOption, ComboboxProps } from '../Combobox.types';

export type DropdownTrigger =
  | 'focus'
  | 'input'
  | 'click'
  | 'keyboard'
  | 'chevron';

export interface UseComboboxCoreProps {
  options: ComboboxOption[];
  multiple: boolean;
  value?: ComboboxProps['value'];
  minSearchLength: number;
  htmlAttributes: { id?: string };
  isLoading?: boolean;
  safeFocus: (element: HTMLElement) => void;
  maxSelected?: number;
}

export interface UseComboboxCoreReturn {
  // State
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedValues: ComboboxOption[];
  setSelectedValues: (values: ComboboxOption[]) => void;
  isOpen: boolean;
  focusedIndex: number;
  enabledIndices: number[];
  displayOptions: ComboboxOption[];

  // Refs
  inputRef: React.RefObject<HTMLInputElement | null>;
  containerRef: React.RefObject<HTMLUListElement | null>;

  // IDs
  comboboxId: string;
  listId: string;
  errorId: string;

  // Actions
  openDropdown: (searchValue: string, trigger: DropdownTrigger) => void;
  closeDropdown: (manual?: boolean) => void;
  setFocusedIndex: (index: number) => void;
  resetFocus: () => void;

  // Event handlers
  handleChevronClick: (e?: React.MouseEvent) => void;
  handleContainerClick: (e: React.MouseEvent) => void;
  handleContainerKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;

  // Focus utilities
  focusedOption: ComboboxOption | null;
  moveFocusNext: () => void;
  moveFocusPrevious: () => void;
  getFocusedElementId: () => string | undefined;
  scrollToFocused: () => void;
  handleButtonFocus: (index: number) => void;
}

export function useComboboxCore({
  options,
  multiple,
  value,
  minSearchLength,
  htmlAttributes,
  isLoading = false,
  safeFocus,
  maxSelected,
}: UseComboboxCoreProps): UseComboboxCoreReturn {
  // Initialize state based on props
  const [searchTerm, setSearchTerm] = useState(
    getSearchTermFromValue(value, options, multiple)
  );
  const [selectedValues, setSelectedValues] = useState<ComboboxOption[]>(
    getSelectedValuesFromValue(value, options, multiple)
  );
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [manuallyClosed, setManuallyClosed] = useState(false);
  const [optionsChanged, setOptionsChanged] = useState(false);

  // DOM refs - centralized in core hook
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousOptionsRef = useRef<ComboboxOption[]>(options);

  // Generate stable IDs
  const generatedId = `combobox-${useId()}`;
  const comboboxId = htmlAttributes.id ?? generatedId;
  const listId = `${comboboxId}-list`;
  const errorId = `comboboxErrorId-${useId()}`;

  // Track if options have changed during loading
  useEffect(() => {
    const hasChanged =
      isLoading &&
      JSON.stringify(previousOptionsRef.current) !== JSON.stringify(options);

    setOptionsChanged(hasChanged);
    previousOptionsRef.current = options;
  }, [options, isLoading]);

  // Calculate display options based on dropdown state
  const displayOptions = useMemo(() => {
    if (!isOpen) return []; // No options when dropdown is closed
    if (isLoading) return []; // Empty list while loading (spinner shows instead)
    return filterOptions(options, searchTerm, selectedValues, multiple);
  }, [options, searchTerm, isOpen, multiple, selectedValues, isLoading]);

  // Calculate enabled indices for keyboard navigation
  // Use allOptions when closed (for keyboard opening), displayOptions when open (for navigation)
  const enabledIndices = useMemo(() => {
    const optionsToUse = isOpen ? displayOptions : options;
    return getEnabledIndices({
      options: optionsToUse,
      selectedValues,
      multiple,
      maxSelected,
    });
  }, [isOpen, displayOptions, options, selectedValues, multiple, maxSelected]);

  // Get currently focused option
  const focusedOption = useMemo(() => {
    return focusedIndex >= 0 && focusedIndex < displayOptions.length
      ? displayOptions[focusedIndex]
      : null;
  }, [focusedIndex, displayOptions]);

  // Core actions
  const openDropdown = useCallback(
    (
      searchValue: string,
      trigger: 'focus' | 'input' | 'click' | 'keyboard' | 'chevron'
    ): void => {
      // If manually closed, only allow input, chevron, keyboard or click to reopen
      if (
        manuallyClosed &&
        trigger !== 'input' &&
        trigger !== 'chevron' &&
        trigger !== 'keyboard' &&
        trigger !== 'click'
      ) {
        return;
      }

      // Check minimum search length, but allow click to bypass
      if (searchValue.length >= minSearchLength || trigger === 'click') {
        setIsOpen(true);
        if (trigger === 'input') {
          setManuallyClosed(false); // Reset when user types
        }
      }
    },
    [manuallyClosed, minSearchLength]
  );

  const closeDropdown = useCallback((manual = false): void => {
    setIsOpen(false);
    setFocusedIndex(-1); // Reset focus when closing
    if (manual) {
      setManuallyClosed(true);
    }
  }, []);

  const resetFocus = useCallback((): void => {
    setFocusedIndex(-1);
  }, []);

  // Scroll to focused element with debouncing
  const scrollToFocused = useCallback(() => {
    if (!containerRef.current || focusedIndex < 0) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const focusedElement = containerRef.current?.querySelector(
        `[id="${comboboxId}-option-${focusedIndex}"]`
      ) as HTMLElement;

      if (focusedElement) {
        const rect = focusedElement.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();

        if (containerRect) {
          const isVisible =
            rect.top >= containerRect.top &&
            rect.bottom <= containerRect.bottom;

          if (!isVisible) {
            focusedElement.scrollIntoView({
              block: 'nearest',
              inline: 'nearest',
            });
          }
        }
      }
    }, 16);
  }, [comboboxId, focusedIndex]);

  // Enhanced setFocusedIndex with validation
  const setFocusedIndexEnhanced = useCallback(
    (index: number) => {
      if (optionsChanged) {
        setFocusedIndex(-1);
        return;
      }

      if (index === -1) {
        setFocusedIndex(index);
        return;
      }

      if (enabledIndices.length === 0) {
        setFocusedIndex(-1);
        return;
      }

      // Clamp to valid enabled range
      let clampedIndex = index;
      if (index < enabledIndices[0]) {
        clampedIndex = enabledIndices[0];
      } else if (index > enabledIndices[enabledIndices.length - 1]) {
        clampedIndex = enabledIndices[enabledIndices.length - 1];
      } else if (!isIndexEnabled(index, enabledIndices)) {
        const nextEnabled = enabledIndices.find((i) => i > index);
        const prevEnabled = enabledIndices
          .slice()
          .reverse()
          .find((i) => i < index);

        if (nextEnabled !== undefined && prevEnabled !== undefined) {
          clampedIndex =
            nextEnabled - index <= index - prevEnabled
              ? nextEnabled
              : prevEnabled;
        } else if (nextEnabled !== undefined) {
          clampedIndex = nextEnabled;
        } else if (prevEnabled !== undefined) {
          clampedIndex = prevEnabled;
        } else {
          clampedIndex = enabledIndices[0];
        }
      }

      setFocusedIndex(clampedIndex);
    },
    [optionsChanged, enabledIndices]
  );

  // Focus navigation utilities
  const moveFocusNext = useCallback(() => {
    if (enabledIndices.length === 0) return;
    const nextIndex = getNextEnabledIndex(focusedIndex, enabledIndices);
    if (nextIndex !== -1) {
      setFocusedIndexEnhanced(nextIndex);
    }
  }, [focusedIndex, enabledIndices, setFocusedIndexEnhanced]);

  const moveFocusPrevious = useCallback(() => {
    if (enabledIndices.length === 0) return;
    const previousIndex = getPreviousEnabledIndex(focusedIndex, enabledIndices);
    if (previousIndex !== -1) {
      setFocusedIndexEnhanced(previousIndex);
    }
  }, [focusedIndex, enabledIndices, setFocusedIndexEnhanced]);

  const getFocusedElementId = useCallback(() => {
    return focusedIndex >= 0
      ? `${comboboxId}-option-${focusedIndex}`
      : undefined;
  }, [comboboxId, focusedIndex]);

  const handleButtonFocus = useCallback(
    (index: number): void => {
      setFocusedIndexEnhanced(index);
    },
    [setFocusedIndexEnhanced]
  );

  // Event handlers from dropdown
  const handleChevronClick = useCallback(
    (e?: React.MouseEvent): void => {
      e?.stopPropagation();

      if (isOpen) {
        closeDropdown(true);
      } else {
        const currentValue = inputRef.current?.value || '';
        openDropdown(currentValue, 'chevron');
      }
      resetFocus();
    },
    [isOpen, openDropdown, closeDropdown, inputRef, resetFocus]
  );

  const handleContainerClick = useCallback(
    (e: React.MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.closest('button')) {
        return;
      }

      const currentValue = inputRef.current?.value || '';
      openDropdown(currentValue, 'click');

      if (inputRef.current) {
        safeFocus(inputRef.current);
      }
    },
    [openDropdown, inputRef, safeFocus]
  );

  const handleContainerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if ((e.target as HTMLElement).tagName === 'BUTTON') {
        return;
      }

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    },
    [inputRef]
  );

  // Auto-scroll when focused index changes
  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      scrollToFocused();
    }
  }, [focusedIndex, isOpen, scrollToFocused]);

  // Reset focus when options change significantly
  useEffect(() => {
    if (focusedIndex >= displayOptions.length) {
      setFocusedIndex(-1);
    }
  }, [displayOptions.length, focusedIndex]);

  // Reset focus when options change during loading
  useEffect(() => {
    if (optionsChanged) {
      setFocusedIndex(-1);
    }
  }, [optionsChanged]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return (): void => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    // State
    searchTerm,
    setSearchTerm,
    selectedValues,
    setSelectedValues,
    isOpen,
    focusedIndex,
    enabledIndices,
    displayOptions,

    // Refs
    inputRef,
    containerRef,

    // IDs
    comboboxId,
    listId,
    errorId,

    // Actions
    openDropdown,
    closeDropdown,
    setFocusedIndex: setFocusedIndexEnhanced,
    resetFocus,

    // Event handlers
    handleChevronClick,
    handleContainerClick,
    handleContainerKeyDown,

    // Focus utilities
    focusedOption,
    moveFocusNext,
    moveFocusPrevious,
    getFocusedElementId,
    scrollToFocused,
    handleButtonFocus,
  };
}
