import { renderHook, act } from '@testing-library/react';

import type { ComboboxOption } from '../../Combobox.types';
import { useComboboxCore } from '../useComboboxCore';

const mockOptions: ComboboxOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const mockSafeFocus = vi.fn();

const defaultProps = {
  options: mockOptions,
  multiple: false,
  minSearchLength: 0,
  htmlAttributes: {},
  safeFocus: mockSafeFocus,
  maxSelected: undefined,
};

describe('useComboboxCore', () => {
  describe('Initial state', () => {
    it('should initialize with correct default values', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      expect(result.current.searchTerm).toBe('');
      expect(result.current.selectedValues).toEqual([]);
      expect(result.current.isOpen).toBe(false);
      expect(result.current.focusedIndex).toBe(-1);
      expect(result.current.inputRef.current).toBeNull();
      expect(result.current.containerRef.current).toBeNull();
    });

    it('should initialize with controlled value for single select (A3, A7)', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          value: '2',
        })
      );

      expect(result.current.searchTerm).toBe('Option 2');
      expect(result.current.selectedValues).toEqual([]);
    });

    it('should initialize with controlled value for multi select (A3)', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          multiple: true,
          value: ['1', '3'],
        })
      );

      expect(result.current.searchTerm).toBe('');
      expect(result.current.selectedValues).toEqual([
        { label: 'Option 1', value: '1' },
        { label: 'Option 3', value: '3' },
      ]);
    });

    it('should generate stable IDs', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      expect(result.current.comboboxId).toMatch(/^combobox-/);
      expect(result.current.listId).toBe(`${result.current.comboboxId}-list`);
      expect(result.current.errorId).toMatch(/^comboboxErrorId-/);
    });

    it('should use provided ID from htmlAttributes', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          htmlAttributes: { id: 'custom-id' },
        })
      );

      expect(result.current.comboboxId).toBe('custom-id');
      expect(result.current.listId).toBe('custom-id-list');
    });
  });

  describe('Dropdown state management', () => {
    it('should open dropdown when minimum search length is met (A5)', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          minSearchLength: 2,
        })
      );

      act(() => {
        result.current.openDropdown('ab', 'input');
      });

      expect(result.current.isOpen).toBe(true);
    });

    it('should not open dropdown when minimum search length is not met (A5)', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          minSearchLength: 2,
        })
      );

      act(() => {
        result.current.openDropdown('a', 'input');
      });

      expect(result.current.isOpen).toBe(false);
    });

    it('should allow click to bypass minimum search length (A5)', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          minSearchLength: 2,
        })
      );

      act(() => {
        result.current.openDropdown('', 'click');
      });

      expect(result.current.isOpen).toBe(true);
    });

    it('should close dropdown and reset focus', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      // Open dropdown and set focus
      act(() => {
        result.current.openDropdown('test', 'input');
        result.current.setFocusedIndex(1);
      });

      expect(result.current.isOpen).toBe(true);
      expect(result.current.focusedIndex).toBe(1);

      // Close dropdown
      act(() => {
        result.current.closeDropdown();
      });

      expect(result.current.isOpen).toBe(false);
      expect(result.current.focusedIndex).toBe(-1);
    });

    it('should handle manual close and prevent auto-reopen', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      // Open dropdown
      act(() => {
        result.current.openDropdown('test', 'input');
      });

      expect(result.current.isOpen).toBe(true);

      // Manually close
      act(() => {
        result.current.closeDropdown(true);
      });

      expect(result.current.isOpen).toBe(false);

      // Should not reopen on focus
      act(() => {
        result.current.openDropdown('test', 'focus');
      });

      expect(result.current.isOpen).toBe(false);

      // Should reopen on input
      act(() => {
        result.current.openDropdown('test', 'input');
      });

      expect(result.current.isOpen).toBe(true);
    });
  });

  describe('Focus management', () => {
    it('should set focused index when dropdown is open', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      // First open dropdown to enable focus setting
      act(() => {
        result.current.openDropdown('', 'click');
      });

      act(() => {
        result.current.setFocusedIndex(2);
      });

      expect(result.current.focusedIndex).toBe(2);
    });

    it('should automatically reset focus when dropdown is closed', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      // First open dropdown
      act(() => {
        result.current.openDropdown('', 'click');
      });

      // Set focus while open
      act(() => {
        result.current.setFocusedIndex(1);
      });

      expect(result.current.focusedIndex).toBe(1);

      // Close dropdown - this should automatically reset focus to -1
      act(() => {
        result.current.closeDropdown();
      });

      expect(result.current.focusedIndex).toBe(-1);
    });
  });

  describe('State setters', () => {
    it('should update search term', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      act(() => {
        result.current.setSearchTerm('new search');
      });

      expect(result.current.searchTerm).toBe('new search');
    });

    it('should update selected values', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      const newValues = [mockOptions[0], mockOptions[2]];

      act(() => {
        result.current.setSelectedValues(newValues);
      });

      expect(result.current.selectedValues).toEqual(newValues);
    });
  });

  describe('Consolidated functionality', () => {
    it('should provide all dropdown and focus functionality in one hook', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      // Test that all consolidated functions are available
      expect(typeof result.current.handleChevronClick).toBe('function');
      expect(typeof result.current.handleContainerClick).toBe('function');
      expect(typeof result.current.handleContainerKeyDown).toBe('function');
      expect(typeof result.current.moveFocusNext).toBe('function');
      expect(typeof result.current.moveFocusPrevious).toBe('function');
      expect(typeof result.current.getFocusedElementId).toBe('function');
      expect(typeof result.current.scrollToFocused).toBe('function');
      expect(typeof result.current.handleButtonFocus).toBe('function');
      expect(Array.isArray(result.current.enabledIndices)).toBe(true);
    });

    it('should handle chevron click events', () => {
      const { result } = renderHook(() => useComboboxCore(defaultProps));

      // Dropdown should be closed initially
      expect(result.current.isOpen).toBe(false);

      // Mock event
      const mockEvent = {
        stopPropagation: vi.fn(),
        preventDefault: vi.fn(),
      };

      act(() => {
        result.current.handleChevronClick(mockEvent as any);
      });

      // Should open dropdown
      expect(result.current.isOpen).toBe(true);
      expect(mockEvent.stopPropagation).toHaveBeenCalled();

      act(() => {
        result.current.handleChevronClick(mockEvent as any);
      });

      // Should close dropdown and reset focus
      expect(result.current.isOpen).toBe(false);
      expect(result.current.focusedIndex).toBe(-1);
    });

    it('should calculate enabled indices internally', () => {
      const { result } = renderHook(() =>
        useComboboxCore({
          ...defaultProps,
          multiple: true,
          maxSelected: 2,
        })
      );

      // All options should be enabled when none are selected
      expect(result.current.enabledIndices).toEqual([0, 1, 2]);

      // Select two options
      act(() => {
        result.current.setSelectedValues([mockOptions[0], mockOptions[1]]);
      });

      // Should disable unselected options when max is reached
      expect(result.current.enabledIndices.length).toBe(2);
    });
  });
});
