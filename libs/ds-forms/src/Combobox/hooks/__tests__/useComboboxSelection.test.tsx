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
});
