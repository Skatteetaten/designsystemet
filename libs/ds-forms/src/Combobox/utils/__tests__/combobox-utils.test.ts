import { createRef } from 'react';

import type { ComboboxOption } from '../../Combobox.types';
import {
  filterOptions,
  getSelectedValuesFromValue,
  getSearchTermFromValue,
  SELECTION_BEHAVIORS,
  selectOption,
  removeOption,
} from '../combobox-utils';

describe('combobox-utils', () => {
  const mockOptions: ComboboxOption[] = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
  ];

  describe('filterOptions', () => {
    it('Når searchTerm er tom, så returnerer den alle options', () => {
      const result = filterOptions(mockOptions, '');
      expect(result).toEqual(mockOptions);
    });

    it('Når searchTerm matcher noen options, så filtrerer den riktig', () => {
      const result = filterOptions(mockOptions, 'a');
      expect(result).toEqual([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Date', value: 'date' },
      ]);
    });

    it('Når searchTerm er case-insensitive, så filtrerer den riktig', () => {
      const result = filterOptions(mockOptions, 'APPLE');
      expect(result).toEqual([{ label: 'Apple', value: 'apple' }]);
    });

    it('Når searchTerm ikke matcher noen options, så returnerer den tom array', () => {
      const result = filterOptions(mockOptions, 'xyz');
      expect(result).toEqual([]);
    });

    it('Når multiple er true, så returnerer den alle options uavhengig av selectedValues', () => {
      const result = filterOptions(mockOptions, 'a');
      expect(result).toEqual([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Date', value: 'date' },
      ]);
    });
  });

  describe('getSelectedValuesFromValue', () => {
    it('Når multiple er false, så returnerer den tom array', () => {
      const result = getSelectedValuesFromValue('apple', mockOptions, false);
      expect(result).toEqual([]);
    });

    it('Når multiple er true og value er array, så returnerer den matching options', () => {
      const result = getSelectedValuesFromValue(
        ['apple', 'cherry'],
        mockOptions,
        true
      );
      expect(result).toEqual([
        { label: 'Apple', value: 'apple' },
        { label: 'Cherry', value: 'cherry' },
      ]);
    });

    it('Når multiple er true men value ikke er array, så returnerer den tom array', () => {
      const result = getSelectedValuesFromValue('apple', mockOptions, true);
      expect(result).toEqual([]);
    });

    it('Når value inneholder ukjente verdier, så filtrerer den de bort', () => {
      const result = getSelectedValuesFromValue(
        ['apple', 'unknown', 'cherry'],
        mockOptions,
        true
      );
      expect(result).toEqual([
        { label: 'Apple', value: 'apple' },
        { label: 'Cherry', value: 'cherry' },
      ]);
    });
  });

  describe('getSearchTermFromValue', () => {
    it('Når multiple er true, så returnerer den tom string', () => {
      const result = getSearchTermFromValue(['apple'], mockOptions, true);
      expect(result).toBe('');
    });

    it('Når multiple er false og value finnes i options, så returnerer den label', () => {
      const result = getSearchTermFromValue('apple', mockOptions, false);
      expect(result).toBe('Apple');
    });

    it('Når multiple er false og value ikke finnes i options, så returnerer den stringified value', () => {
      const result = getSearchTermFromValue('unknown', mockOptions, false);
      expect(result).toBe('unknown');
    });

    it('Når value er undefined, så returnerer den tom string', () => {
      const result = getSearchTermFromValue(undefined, mockOptions, false);
      expect(result).toBe('');
    });

    it('Når value er number, så konverterer den til string', () => {
      const numberOptions = [{ label: 'One', value: '1' }];
      const result = getSearchTermFromValue(1, numberOptions, false);
      expect(result).toBe('1');
    });
  });

  describe('SELECTION_BEHAVIORS', () => {
    it('MOUSE behavior har riktige verdier', () => {
      expect(SELECTION_BEHAVIORS.MOUSE).toEqual({
        allowToggleOff: true,
        resetFocusIndex: true,
        delayedFocus: true,
      });
    });

    it('KEYBOARD behavior har riktige verdier', () => {
      expect(SELECTION_BEHAVIORS.KEYBOARD).toEqual({
        allowToggleOff: true,
        resetFocusIndex: false,
        delayedFocus: false,
      });
    });
  });

  describe('selectOption', () => {
    let mockSetSelectedValues: ReturnType<typeof vi.fn>;
    let mockSetSearchTerm: ReturnType<typeof vi.fn>;
    let mockCloseDropdown: ReturnType<typeof vi.fn>;
    let mockSetFocusedIndex: ReturnType<typeof vi.fn>;
    let mockOnSelectionChange: ReturnType<typeof vi.fn>;
    let mockInputRef: React.RefObject<HTMLInputElement | null>;

    beforeEach(() => {
      mockSetSelectedValues = vi.fn();
      mockSetSearchTerm = vi.fn();
      mockCloseDropdown = vi.fn();
      mockSetFocusedIndex = vi.fn();
      mockOnSelectionChange = vi.fn();
      mockInputRef = createRef<HTMLInputElement | null>();

      // Mock HTMLInputElement
      const mockInput = {
        focus: vi.fn(),
      } as unknown as HTMLInputElement;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mockInputRef as any).current = mockInput;
    });

    describe('single-select mode', () => {
      it('Når en option velges, så oppdaterer den search term og lukker dropdown', () => {
        const option = mockOptions[0];

        selectOption(option, {
          multiple: false,
          selectedValues: [],
          behavior: SELECTION_BEHAVIORS.MOUSE,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
        });

        expect(mockSetSearchTerm).toHaveBeenCalledWith('Apple');
        expect(mockCloseDropdown).toHaveBeenCalled();
        expect(mockSetFocusedIndex).toHaveBeenCalledWith(-1);
        expect(mockOnSelectionChange).toHaveBeenCalledWith(option);
      });

      it('Når onSelectionChange ikke er definert, så krasjer den ikke', () => {
        const option = mockOptions[0];

        expect(() => {
          selectOption(option, {
            multiple: false,
            selectedValues: [],
            behavior: SELECTION_BEHAVIORS.MOUSE,
            setSelectedValues: mockSetSelectedValues,
            setSearchTerm: mockSetSearchTerm,
            closeDropdown: mockCloseDropdown,
            setFocusedIndex: mockSetFocusedIndex,
            inputRef: mockInputRef,
          });
        }).not.toThrow();
      });
    });

    describe('multi-select mode', () => {
      it('Når en ny option velges, så legger den til i selectedValues', () => {
        const option = mockOptions[0];
        const selectedValues = [mockOptions[1]];

        selectOption(option, {
          multiple: true,
          selectedValues,
          behavior: SELECTION_BEHAVIORS.MOUSE,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
        });

        expect(mockSetSelectedValues).toHaveBeenCalledWith([
          mockOptions[1],
          mockOptions[0],
        ]);
        expect(mockSetSearchTerm).toHaveBeenCalledWith('');
        expect(mockOnSelectionChange).toHaveBeenCalledWith([
          mockOptions[1],
          mockOptions[0],
        ]);
      });

      it('Når en allerede valgt option velges med MOUSE behavior, så fjerner den den fra selectedValues', () => {
        const option = mockOptions[0];
        const selectedValues = [mockOptions[0], mockOptions[1]];

        selectOption(option, {
          multiple: true,
          selectedValues,
          behavior: SELECTION_BEHAVIORS.MOUSE,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
        });

        expect(mockSetSelectedValues).toHaveBeenCalledWith([mockOptions[1]]);
        expect(mockOnSelectionChange).toHaveBeenCalledWith([mockOptions[1]]);
      });

      it('Når maxSelected er nådd og ny option velges, så gjør den ingenting', () => {
        const option = mockOptions[2]; // Not selected
        const selectedValues = [mockOptions[0], mockOptions[1]];

        selectOption(option, {
          multiple: true,
          selectedValues,
          behavior: SELECTION_BEHAVIORS.MOUSE,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
          maxSelected: 2,
        });

        expect(mockSetSelectedValues).not.toHaveBeenCalled();
        expect(mockOnSelectionChange).not.toHaveBeenCalled();
      });

      it('Når maxSelected er nådd men allerede valgt option deselekteres, så tillates det', () => {
        const option = mockOptions[0]; // Already selected
        const selectedValues = [mockOptions[0], mockOptions[1]];

        selectOption(option, {
          multiple: true,
          selectedValues,
          behavior: SELECTION_BEHAVIORS.MOUSE,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
          maxSelected: 2,
        });

        expect(mockSetSelectedValues).toHaveBeenCalledWith([mockOptions[1]]);
        expect(mockOnSelectionChange).toHaveBeenCalledWith([mockOptions[1]]);
      });

      it('Når MOUSE behavior brukes, så resettes focusIndex og delayed focus kalles', () => {
        vi.useFakeTimers();
        const option = mockOptions[0];

        selectOption(option, {
          multiple: true,
          selectedValues: [],
          behavior: SELECTION_BEHAVIORS.MOUSE,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
        });

        expect(mockSetFocusedIndex).toHaveBeenCalledWith(-1);

        // Fast-forward timers to trigger delayed focus
        vi.runAllTimers();
        expect(mockInputRef.current?.focus).toHaveBeenCalled();

        vi.useRealTimers();
      });

      it('Når KEYBOARD behavior brukes, så resettes ikke focusIndex og ingen delayed focus', () => {
        const option = mockOptions[0];

        selectOption(option, {
          multiple: true,
          selectedValues: [],
          behavior: SELECTION_BEHAVIORS.KEYBOARD,
          setSelectedValues: mockSetSelectedValues,
          setSearchTerm: mockSetSearchTerm,
          closeDropdown: mockCloseDropdown,
          setFocusedIndex: mockSetFocusedIndex,
          inputRef: mockInputRef,
          onSelectionChange: mockOnSelectionChange,
        });

        expect(mockSetFocusedIndex).not.toHaveBeenCalled();
        expect(mockInputRef.current?.focus).not.toHaveBeenCalled();
      });
    });
  });

  describe('removeOption', () => {
    let mockSetSelectedValues: ReturnType<typeof vi.fn>;
    let mockOnSelectionChange: ReturnType<typeof vi.fn>;

    beforeEach(() => {
      mockSetSelectedValues = vi.fn();
      mockOnSelectionChange = vi.fn();
    });

    it('Når en option fjernes, så oppdaterer den selectedValues og kaller callback', () => {
      const optionToRemove = mockOptions[1];
      const selectedValues = [mockOptions[0], mockOptions[1], mockOptions[2]];

      removeOption(optionToRemove, {
        selectedValues,
        setSelectedValues: mockSetSelectedValues,
        onSelectionChange: mockOnSelectionChange,
      });

      const expectedNewValues = [mockOptions[0], mockOptions[2]];
      expect(mockSetSelectedValues).toHaveBeenCalledWith(expectedNewValues);
      expect(mockOnSelectionChange).toHaveBeenCalledWith(expectedNewValues);
    });

    it('Når option ikke finnes i selectedValues, så filtrerer den likevel', () => {
      const optionToRemove = mockOptions[3];
      const selectedValues = [mockOptions[0], mockOptions[1]];

      removeOption(optionToRemove, {
        selectedValues,
        setSelectedValues: mockSetSelectedValues,
        onSelectionChange: mockOnSelectionChange,
      });

      expect(mockSetSelectedValues).toHaveBeenCalledWith(selectedValues);
      expect(mockOnSelectionChange).toHaveBeenCalledWith(selectedValues);
    });

    it('Når onSelectionChange ikke er definert, så krasjer den ikke', () => {
      const optionToRemove = mockOptions[0];
      const selectedValues = [mockOptions[0]];

      expect(() => {
        removeOption(optionToRemove, {
          selectedValues,
          setSelectedValues: mockSetSelectedValues,
        });
      }).not.toThrow();

      expect(mockSetSelectedValues).toHaveBeenCalledWith([]);
    });

    it('Når selectedValues er tom, så forblir den tom', () => {
      const optionToRemove = mockOptions[0];
      const selectedValues: ComboboxOption[] = [];

      removeOption(optionToRemove, {
        selectedValues,
        setSelectedValues: mockSetSelectedValues,
        onSelectionChange: mockOnSelectionChange,
      });

      expect(mockSetSelectedValues).toHaveBeenCalledWith([]);
      expect(mockOnSelectionChange).toHaveBeenCalledWith([]);
    });
  });
});
