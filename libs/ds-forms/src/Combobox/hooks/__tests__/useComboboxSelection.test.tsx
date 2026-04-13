import { renderHook, act } from '@testing-library/react';

import type { ComboboxOption } from '../../Combobox.types';
import { useComboboxSelection } from '../useComboboxSelection';

describe('useComboboxSelection', () => {
  const options: ComboboxOption[] = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ];

  it('remaps keyboard focus to selected option after search is cleared', () => {
    const setSelectedValues = vi.fn<(values: ComboboxOption[]) => void>();
    const setSearchTerm = vi.fn<(term: string) => void>();
    const closeDropdown = vi.fn<(manual?: boolean) => void>();
    const setFocusedIndex = vi.fn<(index: number) => void>();
    const inputRef = { current: null };

    const { result, rerender } = renderHook(
      ({ searchTerm }) =>
        useComboboxSelection({
          options,
          multiple: true,
          searchTerm,
          selectedValues: [],
          setSelectedValues,
          setSearchTerm,
          closeDropdown,
          setFocusedIndex,
          inputRef,
        }),
      {
        initialProps: { searchTerm: 'ch' },
      }
    );

    act(() => {
      result.current.handleOptionSelect(options[2], true);
    });

    expect(setFocusedIndex).not.toHaveBeenCalled();

    rerender({ searchTerm: '' });

    expect(setFocusedIndex).toHaveBeenCalledWith(2);
  });

  it('uses visual group order when remapping keyboard focus', () => {
    const groupedOptions: ComboboxOption[] = [
      { label: 'Oslo', value: 'oslo' },
      { label: 'Trondheim', value: 'trondheim', group: 'Trøndelag' },
      { label: 'Bergen', value: 'bergen', group: 'Vestland' },
      { label: 'Steinkjer', value: 'steinkjer', group: 'Trøndelag' },
    ];

    const setSelectedValues = vi.fn<(values: ComboboxOption[]) => void>();
    const setSearchTerm = vi.fn<(term: string) => void>();
    const closeDropdown = vi.fn<(manual?: boolean) => void>();
    const setFocusedIndex = vi.fn<(index: number) => void>();
    const inputRef = { current: null };

    const { result, rerender } = renderHook(
      ({ searchTerm }) =>
        useComboboxSelection({
          options: groupedOptions,
          multiple: true,
          searchTerm,
          selectedValues: [],
          setSelectedValues,
          setSearchTerm,
          closeDropdown,
          setFocusedIndex,
          inputRef,
        }),
      {
        initialProps: { searchTerm: 'st' },
      }
    );

    act(() => {
      result.current.handleOptionSelect(groupedOptions[3], true);
    });

    rerender({ searchTerm: '' });

    expect(setFocusedIndex).toHaveBeenCalledWith(2);
  });

  it('clears focused index when removing the last selected value with backspace', () => {
    const setSelectedValues = vi.fn<(values: ComboboxOption[]) => void>();
    const setSearchTerm = vi.fn<(term: string) => void>();
    const closeDropdown = vi.fn<(manual?: boolean) => void>();
    const setFocusedIndex = vi.fn<(index: number) => void>();
    const onSelectionChange = vi.fn<(values: ComboboxOption[]) => void>();
    const inputRef = { current: null };

    const { result } = renderHook(() =>
      useComboboxSelection({
        options,
        multiple: true,
        searchTerm: '',
        selectedValues: [options[0]],
        setSelectedValues,
        setSearchTerm,
        closeDropdown,
        setFocusedIndex,
        inputRef,
        onSelectionChange,
      })
    );

    act(() => {
      result.current.handleRemoveLastValue();
    });

    expect(setSelectedValues).toHaveBeenCalledWith([]);
    expect(setFocusedIndex).toHaveBeenCalledWith(-1);
    expect(onSelectionChange).toHaveBeenCalledWith([]);
  });

  it('clears focused index when removing the last selected chip', () => {
    const setSelectedValues = vi.fn<(values: ComboboxOption[]) => void>();
    const setSearchTerm = vi.fn<(term: string) => void>();
    const closeDropdown = vi.fn<(manual?: boolean) => void>();
    const setFocusedIndex = vi.fn<(index: number) => void>();
    const onSelectionChange = vi.fn<(values: ComboboxOption[]) => void>();
    const inputRef = { current: null };

    const { result } = renderHook(() =>
      useComboboxSelection({
        options,
        multiple: true,
        searchTerm: '',
        selectedValues: [options[0]],
        setSelectedValues,
        setSearchTerm,
        closeDropdown,
        setFocusedIndex,
        inputRef,
        onSelectionChange,
      })
    );

    act(() => {
      result.current.handleRemoveValue(options[0]);
    });

    expect(setSelectedValues).toHaveBeenCalledWith([]);
    expect(setFocusedIndex).toHaveBeenCalledWith(-1);
    expect(onSelectionChange).toHaveBeenCalledWith([]);
  });
});
