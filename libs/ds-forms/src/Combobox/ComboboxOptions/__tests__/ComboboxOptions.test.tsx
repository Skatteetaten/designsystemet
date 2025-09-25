import { createRef } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

import type { ComboboxOption } from '../../Combobox.types';
import { ComboboxOptions } from '../ComboboxOptions';

describe('ComboboxOptions', () => {
  const mockOptions: ComboboxOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const defaultProps = {
    isOpen: true,
    displayOptions: mockOptions,
    searchTerm: '',
    multiple: false,
    selectedValues: [] as ComboboxOption[],
    comboboxId: 'test-combobox',
    listId: 'test-list',
    focusedIndex: -1,
    handleButtonFocus: vi.fn(),
    handleOptionSelect: vi.fn(),
    setFocusedIndex: vi.fn(),
    customListRef: createRef<HTMLUListElement>(),
  };

  it('should render options list with correct ARIA attributes', () => {
    render(<ComboboxOptions {...defaultProps} />);

    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeInTheDocument();
    expect(listbox).toHaveAttribute('id', 'test-list');
    expect(listbox).toHaveAttribute('aria-multiselectable', 'false');

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Option 1');
    expect(options[0]).toHaveAttribute('id', 'test-combobox-option-0');
    expect(options[0]).toHaveAttribute('aria-selected', 'false');
  });

  it('should show loading state with spinner', async () => {
    render(
      <ComboboxOptions
        {...defaultProps}
        loadingMessage={'Laster data...'}
        isLoading
      />
    );

    expect(screen.getByTestId('combobox-loading-spinner')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Laster data...')).toBeInTheDocument();
    });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should show "no results" message when search has no matches', () => {
    render(
      <ComboboxOptions
        {...defaultProps}
        searchTerm={'xyz'}
        displayOptions={[]}
      />
    );

    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeInTheDocument();
    expect(screen.getByText(/Ingen treff for "xyz"/)).toBeInTheDocument();
  });
});
