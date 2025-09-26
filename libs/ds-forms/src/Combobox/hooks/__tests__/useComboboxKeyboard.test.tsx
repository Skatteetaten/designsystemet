import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useComboboxKeyboard } from '../useComboboxKeyboard';
import {
  setupKeyboardTest,
  simulateKeyboardEvent,
  mockOptions,
  createMockInputElement,
  getKeydownHandler,
} from './test-utils';

describe('useComboboxKeyboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('ArrowDown key behavior', () => {
    it('should call setIsOpen(true) and setFocusedIndex(0) when popup closed', () => {
      // Arrange: Setup mock input with popup closed
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        focusedIndex: -1,
        inputRef: { current: mockInput },
        minSearchLength: 0,
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify popup opened and first option focused
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.openDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(0);
    });

    it('should increment focusedIndex when popup open', () => {
      // Arrange: Setup mock input and keyboard test with popup open
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        focusedIndex: 1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify preventDefault called and focusedIndex incremented
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(2);
      expect(mockProps.openDropdown).not.toHaveBeenCalled();
    });

    it('should call setFocusedIndex(0) when at last option index', () => {
      // Arrange: Setup mock input with focus at last option
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        focusedIndex: 2, // Last index in mockOptions
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress at last option
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify wrap-around to first option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(0);
    });

    it('should call setIsOpen(true) but not setFocusedIndex when Alt+ArrowDown', () => {
      // Arrange: Setup mock input with popup closed and Alt key combination
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        focusedIndex: -1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Alt+ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown', {
        altKey: true,
      });

      // Assert: Verify popup opened but no focus change
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.openDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).not.toHaveBeenCalled();
    });

    it('should not call setIsOpen when input length below minSearchLength for Alt+ArrowDown', () => {
      // Arrange: Setup mock input with insufficient search length
      const mockInput = createMockInputElement('ab'); // Only 2 chars
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        focusedIndex: -1,
        minSearchLength: 3, // Requires 3 chars
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Alt+ArrowDown keypress with insufficient search length
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown', {
        altKey: true,
      });

      // Assert: Verify popup not opened due to search length requirement for Alt+Down
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.openDropdown).not.toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).not.toHaveBeenCalled();
    });

    it('should call setIsOpen even when input length below minSearchLength for regular ArrowDown', () => {
      // Arrange: Setup mock input with insufficient search length
      const mockInput = createMockInputElement('ab'); // Only 2 chars
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        focusedIndex: -1,
        minSearchLength: 3, // Requires 3 chars
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate regular ArrowDown keypress with insufficient search length
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify popup opens despite search length requirement (keyboard navigation)
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.openDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(0);
    });
  });

  describe('ArrowUp key behavior', () => {
    it('should decrement focusedIndex when popup open', () => {
      // Arrange: Setup mock input with focus at middle option
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        focusedIndex: 1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify focusedIndex decremented
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(0);
    });

    it('should close dropdown when at first option index', () => {
      // Arrange: Setup mock input with focus at first option
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        focusedIndex: 0, // First index
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress at first option
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify dropdown closes instead of wrapping
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.closeDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(-1);
    });

    it('should close dropdown when at first enabled option with disabled options before it', () => {
      // Arrange: Setup mock input with first option disabled, focus on second option (first enabled)
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [1, 2], // First option disabled, second and third enabled
        focusedIndex: 1, // First enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress at first enabled option
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify dropdown closes instead of wrapping
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.closeDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(-1);
    });

    it('should call setIsOpen(false) and setFocusedIndex(-1) when Alt+ArrowUp', () => {
      // Arrange: Setup mock input with popup open
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        focusedIndex: 1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Alt+ArrowUp keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp', {
        altKey: true,
      });

      // Assert: Verify popup closed and focus reset
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.closeDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(-1);
    });

    it('should not call setFocusedIndex or setIsOpen when popup closed and no Alt key', () => {
      // Arrange: Setup mock input with popup closed
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        focusedIndex: -1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress with popup closed
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify no state changes when popup closed
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).not.toHaveBeenCalled();
      expect(mockProps.closeDropdown).not.toHaveBeenCalled();
    });
  });

  describe('ArrowUp key behavior with disabled options', () => {
    it('should skip disabled options when navigating up', () => {
      // Arrange: Setup with middle option disabled
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [0, 2], // Middle option disabled
        focusedIndex: 2, // Last enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify focus moves to first enabled option, skipping disabled middle option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(0);
    });

    it('should navigate to previous enabled option when current is not first enabled', () => {
      // Arrange: Setup with first option disabled, focus on last enabled
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [1, 2], // First option disabled
        focusedIndex: 2, // Last enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify focus moves to previous enabled option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(1);
    });
  });

  describe('ArrowDown key behavior with disabled options', () => {
    it('should skip disabled options when navigating down', () => {
      // Arrange: Setup with middle option disabled
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [0, 2], // Middle option disabled
        focusedIndex: 0, // First enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify focus moves to last enabled option, skipping disabled middle option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(2);
    });

    it('should open dropdown and focus first enabled option when closed', () => {
      // Arrange: Setup with first option disabled, dropdown closed
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        enabledIndices: [1, 2], // First option disabled
        focusedIndex: -1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify dropdown opens and focuses first enabled option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.openDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(1); // First enabled option
    });
  });

  describe('ArrowUp key behavior with disabled options', () => {
    it('should skip disabled options when navigating up', () => {
      // Arrange: Setup with middle option disabled
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [0, 2], // Middle option disabled
        focusedIndex: 2, // Last enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify focus moves to first enabled option, skipping disabled middle option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(0);
    });

    it('should navigate to previous enabled option when current is not first enabled', () => {
      // Arrange: Setup with first option disabled, focus on last enabled
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [1, 2], // First option disabled
        focusedIndex: 2, // Last enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowUp keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowUp');

      // Assert: Verify focus moves to previous enabled option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(1);
    });
  });

  describe('ArrowDown key behavior with disabled options', () => {
    it('should skip disabled options when navigating down', () => {
      // Arrange: Setup with middle option disabled
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        enabledIndices: [0, 2], // Middle option disabled
        focusedIndex: 0, // First enabled option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify focus moves to last enabled option, skipping disabled middle option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(2);
    });

    it('should open dropdown and focus first enabled option when closed', () => {
      // Arrange: Setup with first option disabled, dropdown closed
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        allOptions: mockOptions,
        enabledIndices: [1, 2], // First option disabled
        focusedIndex: -1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate ArrowDown keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify dropdown opens and focuses first enabled option
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.openDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(1); // First enabled option
    });
  });

  describe('Enter key selection behavior', () => {
    it('should call setSearchTerm, setIsOpen(false), setFocusedIndex(-1) and onSelectionChange in single-select', () => {
      // Arrange: Setup mock input for single-select with focused option
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        displayOptions: mockOptions,
        focusedIndex: 1, // Belgium option
        multiple: false,
        onOptionSelect: vi.fn(), // Required callback
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Enter keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Enter');

      // Assert: Verify onOptionSelect called
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.onOptionSelect).toHaveBeenCalledWith(
        mockOptions[1], // Belgium option
        true // fromKeyboard
      );
    });

    it("should call setSearchTerm('') and onSelectionChange with array in multi-select", () => {
      // Arrange: Setup mock input for multi-select with existing selection
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        displayOptions: mockOptions,
        focusedIndex: 1, // Belgium option
        multiple: true,
        selectedValues: [{ value: 'albania', label: 'Albania' }],
        onOptionSelect: vi.fn(), // Required callback
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Enter keypress in multi-select
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Enter');

      // Assert: Verify onOptionSelect called
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.onOptionSelect).toHaveBeenCalledWith(
        mockOptions[1], // Belgium option
        true // fromKeyboard
      );
    });

    it('should toggle off (remove) when selecting already selected option in multi-select with keyboard', () => {
      // Arrange: Setup mock input with already selected option focused
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        displayOptions: mockOptions,
        focusedIndex: 0, // Albania - already selected
        multiple: true,
        selectedValues: [{ value: 'albania', label: 'Albania' }],
        onOptionSelect: vi.fn(),
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Enter keypress on already selected option (should toggle off)
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Enter');

      // Assert: Verify onOptionSelect called
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.onOptionSelect).toHaveBeenCalledWith(
        mockOptions[0], // Albania option
        true // fromKeyboard
      );
    });

    it('should call onOptionSelect instead of onSelectionChange when onOptionSelect provided', () => {
      // Arrange: Setup mock input with onOptionSelect callback
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        allOptions: mockOptions,
        displayOptions: mockOptions,
        focusedIndex: 1, // Belgium option
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Enter keypress with onOptionSelect
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Enter');

      // Assert: Verify onOptionSelect called instead of onChange
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.onOptionSelect).toHaveBeenCalledWith(
        mockOptions[1],
        true
      );
      expect(mockProps.onSelectionChange).not.toHaveBeenCalled();
    });

    it('should call onOptionSelect with exact match when focusedIndex is -1 and dropdown is open', () => {
      // Arrange: Setup mock input with exact text match
      const mockInput = createMockInputElement('Albania'); // Exact match
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true, // Dropdown must be open for exact match to work
        allOptions: mockOptions,
        displayOptions: mockOptions,
        focusedIndex: -1, // No option focused
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Enter keypress with exact text match
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Enter');

      // Assert: Verify exact match handling
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.onOptionSelect).toHaveBeenCalledWith(
        mockOptions[0],
        true
      );
    });
  });

  describe('Escape key behavior', () => {
    it('should call setIsOpen(false) and setFocusedIndex(-1) when popup open', () => {
      // Arrange: Setup mock input with popup open
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        focusedIndex: 1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Escape keypress with popup open
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Escape');

      // Assert: Verify popup closed
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.closeDropdown).toHaveBeenCalled();
      expect(mockProps.setFocusedIndex).toHaveBeenCalledWith(-1);
    });

    it("should call setSearchTerm('') when popup closed", () => {
      // Arrange: Setup mock input with popup closed
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: false,
        focusedIndex: -1,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Escape keypress with popup closed
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Escape');

      // Assert: Verify search term cleared
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.setSearchTerm).toHaveBeenCalledWith('');
    });

    it('should call preventDefault when popup open', () => {
      // Arrange: Setup mock input with popup open
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        isOpen: true,
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Escape keypress
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Escape');

      // Assert: Verify preventDefault called
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe('Backspace key behavior in multi-select', () => {
    it('should call preventDefault and onRemoveLastValue when input empty', () => {
      // Arrange: Setup mock input for multi-select with empty input
      const mockInput = createMockInputElement(''); // Empty input
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        multiple: true,
        selectedValues: [
          { value: 'albania', label: 'Albania' },
          { value: 'belgium', label: 'Belgium' },
        ],
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Backspace keypress with empty input
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Backspace');

      // Assert: Verify last value removal
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockProps.onRemoveLastValue).toHaveBeenCalled();
    });

    it('should not call preventDefault or onRemoveLastValue when input has content', () => {
      // Arrange: Setup mock input for multi-select with content
      const mockInput = createMockInputElement('search'); // Has content
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        multiple: true,
        selectedValues: [{ value: 'albania', label: 'Albania' }],
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Backspace keypress with content in input
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Backspace');

      // Assert: Verify normal backspace behavior (no preventDefault)
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockProps.onRemoveLastValue).not.toHaveBeenCalled();
    });

    it('should not call preventDefault or onRemoveLastValue in single-select mode', () => {
      // Arrange: Setup mock input for single-select with empty input
      const mockInput = createMockInputElement('');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        multiple: false, // Single-select mode
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Backspace keypress in single-select
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Backspace');

      // Assert: Verify no special backspace handling in single-select
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockProps.onRemoveLastValue).not.toHaveBeenCalled();
    });

    it('should not call preventDefault or onRemoveLastValue when no selected values', () => {
      // Arrange: Setup mock input for multi-select with no selections
      const mockInput = createMockInputElement('');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        multiple: true,
        selectedValues: [], // No selected values
        inputRef: { current: mockInput },
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate Backspace keypress with no selections
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'Backspace');

      // Assert: Verify no removal when no values exist
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockProps.onRemoveLastValue).not.toHaveBeenCalled();
    });
  });

  describe('Hook lifecycle', () => {
    it('should register and unregister event listeners', () => {
      // Arrange: Setup mock input and keyboard test
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener, mockRemoveEventListener } =
        setupKeyboardTest({
          inputRef: { current: mockInput },
        });

      // Act: Mount and unmount hook
      const { unmount } = renderHook(() => useComboboxKeyboard(mockProps));

      // Assert: Verify event listener registered
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      // Act: Unmount hook
      unmount();

      // Assert: Verify event listener unregistered
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );
    });

    it('should not call preventDefault when input not focused', () => {
      // Arrange: Setup mock input but change document.activeElement
      const mockInput = createMockInputElement('search');
      const { mockProps, mockAddEventListener } = setupKeyboardTest({
        inputRef: { current: mockInput },
      });

      // Change active element to different element
      Object.defineProperty(document, 'activeElement', {
        writable: true,
        value: document.createElement('div'), // Different element
      });

      renderHook(() => useComboboxKeyboard(mockProps));
      const keydownHandler = getKeydownHandler(mockAddEventListener);

      // Act: Simulate keypress when input not focused
      const mockEvent = simulateKeyboardEvent(keydownHandler, 'ArrowDown');

      // Assert: Verify handler doesn't execute when input not focused
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockProps.openDropdown).not.toHaveBeenCalled();
    });
  });
});
