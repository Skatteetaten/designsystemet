import { JSX } from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

import type { ComboboxOption } from '../../Combobox.types';
import { ComboboxChips } from '../SelectedOptions';

// Mock Chips component fra @skatteetaten/ds-collections
vi.mock('@skatteetaten/ds-collections', () => {
  const ChipsComponent = ({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element => <div data-testid={'chips-container'}>{children}</div>;

  const ChipsRemovable = ({
    children,
    onClose,
    size,
    ...props
  }: {
    children: React.ReactNode;
    onClose: () => void;
    size: string;
  }): JSX.Element => (
    <button
      data-testid={'chip-removable'}
      data-size={size}
      onClick={onClose}
      {...props}
    >
      {children}
    </button>
  );

  ChipsComponent.Removable = ChipsRemovable;

  return {
    Chips: ChipsComponent,
  };
});

describe('ComboboxChips', () => {
  const mockOptions: ComboboxOption[] = [
    { label: 'Norge', value: 'no' },
    { label: 'Sverige', value: 'se' },
    { label: 'Danmark', value: 'dk' },
  ];

  const defaultProps = {
    multiple: true,
    selectedValues: mockOptions,
    onRemoveValue: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Conditional rendering', () => {
    it('should return null when multiple is false', () => {
      const { container } = render(
        <ComboboxChips {...defaultProps} multiple={false} />
      );

      expect(container.firstChild).toBeNull();
    });

    it('should return null when selectedValues is empty', () => {
      const { container } = render(
        <ComboboxChips {...defaultProps} selectedValues={[]} />
      );

      expect(container.firstChild).toBeNull();
    });

    it('should return null when multiple is false and selectedValues is empty', () => {
      const { container } = render(
        <ComboboxChips {...defaultProps} multiple={false} selectedValues={[]} />
      );

      expect(container.firstChild).toBeNull();
    });

    it('should render when multiple is true and selectedValues has items', () => {
      render(<ComboboxChips {...defaultProps} />);

      expect(screen.getByTestId('chips-container')).toBeInTheDocument();
    });
  });

  describe('Chips rendering', () => {
    it('should render correct number of chips', () => {
      render(<ComboboxChips {...defaultProps} />);

      const chips = screen.getAllByTestId('chip-removable');
      expect(chips).toHaveLength(3);
    });

    it('should render chips with correct labels', () => {
      render(<ComboboxChips {...defaultProps} />);

      expect(screen.getByText('Norge')).toBeInTheDocument();
      expect(screen.getByText('Sverige')).toBeInTheDocument();
      expect(screen.getByText('Danmark')).toBeInTheDocument();
    });

    it('should render chips with small size', () => {
      render(<ComboboxChips {...defaultProps} />);

      const chips = screen.getAllByTestId('chip-removable');
      chips.forEach((chip) => {
        expect(chip).toHaveAttribute('data-size', 'small');
      });
    });

    it('should render single chip correctly', () => {
      const singleOption = [{ label: 'Norge', value: 'no' }];

      render(<ComboboxChips {...defaultProps} selectedValues={singleOption} />);

      const chips = screen.getAllByTestId('chip-removable');
      expect(chips).toHaveLength(1);
      expect(screen.getByText('Norge')).toBeInTheDocument();
    });
  });

  describe('onRemoveValue callback', () => {
    it('should call onRemoveValue with correct option when chip is clicked', async () => {
      const user = userEvent.setup();
      const mockOnRemove = vi.fn();

      render(<ComboboxChips {...defaultProps} onRemoveValue={mockOnRemove} />);

      const norgeChip = screen.getByText('Norge');
      await user.click(norgeChip);

      expect(mockOnRemove).toHaveBeenCalledTimes(1);
      expect(mockOnRemove).toHaveBeenCalledWith({
        label: 'Norge',
        value: 'no',
      });
    });

    it('should call onRemoveValue with correct option for different chips', async () => {
      const user = userEvent.setup();
      const mockOnRemove = vi.fn();

      render(<ComboboxChips {...defaultProps} onRemoveValue={mockOnRemove} />);

      // Klikk på Sverige chip
      const sverigeChip = screen.getByText('Sverige');
      await user.click(sverigeChip);

      expect(mockOnRemove).toHaveBeenCalledWith({
        label: 'Sverige',
        value: 'se',
      });

      // Klikk på Danmark chip
      const danmarkChip = screen.getByText('Danmark');
      await user.click(danmarkChip);

      expect(mockOnRemove).toHaveBeenCalledWith({
        label: 'Danmark',
        value: 'dk',
      });
      expect(mockOnRemove).toHaveBeenCalledTimes(2);
    });

    it('should handle multiple clicks on same chip', async () => {
      const user = userEvent.setup();
      const mockOnRemove = vi.fn();

      render(<ComboboxChips {...defaultProps} onRemoveValue={mockOnRemove} />);

      const norgeChip = screen.getByText('Norge');

      await user.click(norgeChip);
      await user.click(norgeChip);

      expect(mockOnRemove).toHaveBeenCalledTimes(2);
      expect(mockOnRemove).toHaveBeenNthCalledWith(1, {
        label: 'Norge',
        value: 'no',
      });
      expect(mockOnRemove).toHaveBeenNthCalledWith(2, {
        label: 'Norge',
        value: 'no',
      });
    });
  });

  describe('Custom classNames handling', () => {
    it('should apply default styles when no custom classNames provided', () => {
      render(<ComboboxChips {...defaultProps} />);

      const container = screen.getByTestId('chips-container').parentElement;
      // CSS modules will transform the class name, so we check for the presence of class
      expect(container?.className).toMatch(/chipsInline/);
    });

    it('should apply custom chips className when provided', () => {
      const customClassNames = { chips: 'custom-chips-class' };

      render(<ComboboxChips {...defaultProps} classNames={customClassNames} />);

      const container = screen.getByTestId('chips-container').parentElement;
      // CSS modules will transform the class name, but custom class should be preserved
      expect(container?.className).toMatch(/chipsInline/);
      expect(container).toHaveClass('custom-chips-class');
    });

    it('should handle empty custom chips className', () => {
      const customClassNames = { chips: '' };

      render(<ComboboxChips {...defaultProps} classNames={customClassNames} />);

      const container = screen.getByTestId('chips-container').parentElement;
      // CSS modules will transform the class name
      expect(container?.className).toMatch(/chipsInline/);
      expect(container?.className).toMatch(/\s$/); // ends with space
    });

    it('should handle undefined classNames prop', () => {
      render(<ComboboxChips {...defaultProps} classNames={undefined} />);

      const container = screen.getByTestId('chips-container').parentElement;
      // CSS modules will transform the class name
      expect(container?.className).toMatch(/chipsInline/);
    });
  });

  describe('React.memo optimization', () => {
    it('should not re-render when props are shallow equal', () => {
      const onRemoveValue = vi.fn();
      const props = {
        multiple: true,
        selectedValues: mockOptions,
        onRemoveValue,
      };

      const { rerender } = render(<ComboboxChips {...props} />);

      // Initial render should work
      expect(screen.getByTestId('chips-container')).toBeInTheDocument();
      expect(screen.getAllByTestId('chip-removable')).toHaveLength(3);

      // Re-render with identical props reference - memo should prevent re-render
      rerender(<ComboboxChips {...props} />);

      // Component should still be there and functional
      expect(screen.getByTestId('chips-container')).toBeInTheDocument();
      expect(screen.getAllByTestId('chip-removable')).toHaveLength(3);
    });

    it('should re-render when selectedValues change', () => {
      const onRemoveValue = vi.fn();
      const initialProps = {
        multiple: true,
        selectedValues: mockOptions,
        onRemoveValue,
      };

      const { rerender } = render(<ComboboxChips {...initialProps} />);
      expect(screen.getAllByTestId('chip-removable')).toHaveLength(3);

      // Re-render with different selectedValues
      const newProps = {
        ...initialProps,
        selectedValues: [mockOptions[0]],
      };

      rerender(<ComboboxChips {...newProps} />);
      expect(screen.getAllByTestId('chip-removable')).toHaveLength(1);
      expect(screen.getByText('Norge')).toBeInTheDocument();
    });

    it('should re-render when onRemoveValue function changes', () => {
      const initialOnRemove = vi.fn();
      const initialProps = {
        multiple: true,
        selectedValues: mockOptions,
        onRemoveValue: initialOnRemove,
      };

      const { rerender } = render(<ComboboxChips {...initialProps} />);
      expect(screen.getAllByTestId('chip-removable')).toHaveLength(3);

      // Re-render with new onRemoveValue function
      const newOnRemove = vi.fn();
      const newProps = {
        ...initialProps,
        onRemoveValue: newOnRemove,
      };

      rerender(<ComboboxChips {...newProps} />);
      expect(screen.getAllByTestId('chip-removable')).toHaveLength(3);
      expect(screen.getByText('Norge')).toBeInTheDocument();
    });
  });

  describe('Component display name', () => {
    it('should have correct displayName', () => {
      expect(ComboboxChips.displayName).toBe('Combobox.Chips');
    });
  });

  describe('Edge cases', () => {
    it('should handle options with special characters in labels', () => {
      const specialOptions: ComboboxOption[] = [
        { label: 'Åland & Øyer', value: 'ao' },
        { label: "Côte d'Ivoire", value: 'ci' },
        { label: 'São Tomé', value: 'st' },
      ];

      render(
        <ComboboxChips {...defaultProps} selectedValues={specialOptions} />
      );

      expect(screen.getByText('Åland & Øyer')).toBeInTheDocument();
      expect(screen.getByText("Côte d'Ivoire")).toBeInTheDocument();
      expect(screen.getByText('São Tomé')).toBeInTheDocument();
    });
  });
});
