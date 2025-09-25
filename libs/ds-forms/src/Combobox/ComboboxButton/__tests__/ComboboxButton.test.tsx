import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { ComboboxButton } from '../ComboboxButton';

describe('ComboboxButton', () => {
  const defaultProps = {
    isOpen: false,
    onClick: vi.fn(),
  };

  describe('Clear button functionality', () => {
    it('should render clear button when hasValue and onClear are provided (single select)', () => {
      const onClear = vi.fn();
      render(
        <ComboboxButton
          {...defaultProps}
          multiple={false}
          hasValue
          onClear={onClear}
        />
      );

      const clearButton = screen.getByRole('button', {
        name: /nullstill valg/i,
      });
      expect(clearButton).toBeInTheDocument();
      expect(clearButton).toHaveAttribute('type', 'button');
      expect(clearButton).toHaveAttribute('data-chevron-button');
    });

    it('should call onClear when clear button is clicked', () => {
      const onClear = vi.fn();
      render(
        <ComboboxButton
          {...defaultProps}
          multiple={false}
          hasValue
          onClear={onClear}
        />
      );

      const clearButton = screen.getByRole('button', {
        name: /nullstill valg/i,
      });
      fireEvent.click(clearButton);

      expect(onClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('Size variants', () => {
    it('should apply large variant styles when variant is large', () => {
      render(<ComboboxButton {...defaultProps} variant={'large'} />);

      const buttonContainer = screen
        .getByLabelText('Åpne forslag')
        .closest('[data-chevron-button]');
      expect(buttonContainer?.className).toMatch(/chevronButton_large/);
    });

    it('should not render clear button for multiple select even with hasValue and onClear', () => {
      const onClear = vi.fn();
      render(
        <ComboboxButton {...defaultProps} hasValue multiple onClear={onClear} />
      );

      expect(
        screen.queryByRole('button', { name: /nullstill valg/i })
      ).not.toBeInTheDocument();
      expect(screen.getByLabelText('Åpne forslag')).toBeInTheDocument();
    });
  });

  describe('Disabled state handling', () => {
    it('should not trigger onClick when disabled', () => {
      const onClick = vi.fn();
      render(<ComboboxButton {...defaultProps} disabled onClick={onClick} />);

      const buttonContainer = screen
        .getByLabelText('Åpne forslag')
        .closest('[data-chevron-button]');
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fireEvent.click(buttonContainer!);

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
