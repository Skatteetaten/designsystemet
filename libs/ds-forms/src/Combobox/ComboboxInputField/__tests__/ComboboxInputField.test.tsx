import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';

import type { ComboboxOption } from '../../Combobox.types';
import { ComboboxInputField } from '../ComboboxInputField';

describe('ComboboxInputField', () => {
  const mockOptions: ComboboxOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  const defaultProps = {
    inputRef: createRef<HTMLInputElement>(),
    comboboxId: 'test-combobox',
    searchTerm: '',
    placeholder: 'Søk...',
    disabled: false,
    required: false,
    isOpen: false,
    listId: 'test-list',
    focusedOptionId: undefined,
    ariaDescribedBy: undefined,
    isLoading: false,
    multiple: false,
    selectedValues: [] as ComboboxOption[],
    name: 'test-field',
    handleInputChange: vi.fn(),
    handleInputFocus: vi.fn(),
    handleInputBlur: vi.fn(),
    htmlAttributes: {},
  };

  it('should render input with correct ARIA attributes for combobox', () => {
    render(
      <ComboboxInputField
        {...defaultProps}
        ariaDescribedBy={'help-text'}
        focusedOptionId={'test-combobox-option-0'}
        isOpen
      />
    );

    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-combobox');
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(input).toHaveAttribute('aria-autocomplete', 'list');
    expect(input).toHaveAttribute('aria-controls', 'test-list');
    expect(input).toHaveAttribute('aria-owns', 'test-list');
    expect(input).toHaveAttribute(
      'aria-activedescendant',
      'test-combobox-option-0'
    );
    expect(input).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('should render hidden inputs for multiple select mode', () => {
    const { container } = render(
      <ComboboxInputField
        {...defaultProps}
        selectedValues={mockOptions}
        name={'categories'}
        multiple
      />
    );

    const mainInput = screen.getByRole('combobox');
    expect(mainInput).not.toHaveAttribute('name');

    const hiddenInputs = container.querySelectorAll('input[type="hidden"]');
    expect(hiddenInputs).toHaveLength(2);
    expect(hiddenInputs[0]).toHaveAttribute('name', 'categories');
    expect(hiddenInputs[0]).toHaveAttribute('value', '1');
    expect(hiddenInputs[1]).toHaveAttribute('name', 'categories');
    expect(hiddenInputs[1]).toHaveAttribute('value', '2');
  });

  it('should handle loading and error states correctly', () => {
    render(
      <ComboboxInputField
        {...defaultProps}
        errorMessage={'Dette feltet er påkrevd'}
        isLoading
      />
    );

    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('aria-busy', 'true');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});
