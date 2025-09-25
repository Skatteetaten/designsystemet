import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { MaxSelectedMessage } from '../MaxSelectedMessage';

describe('MaxSelectedMessage', () => {
  const defaultProps = {
    selectedCount: 2,
    maxSelected: 5,
    comboboxId: 'test-combobox',
  };

  describe('Rendering and content', () => {
    it('should render the message with correct text', () => {
      render(<MaxSelectedMessage {...defaultProps} />);

      const message = screen.getByRole('status');
      expect(message).toBeInTheDocument();
      expect(message).toHaveTextContent('2 av 5 valgt');
    });

    it('should render correct text for different count values', () => {
      render(
        <MaxSelectedMessage
          {...defaultProps}
          selectedCount={1}
          maxSelected={3}
        />
      );

      const message = screen.getByRole('status');
      expect(message).toHaveTextContent('1 av 3 valgt');
    });
  });

  describe('Accessibility attributes', () => {
    it('should have correct ARIA attributes', () => {
      render(<MaxSelectedMessage {...defaultProps} />);

      const message = screen.getByRole('status');
      expect(message).toHaveAttribute('role', 'status');
      expect(message).toHaveAttribute('aria-live', 'polite');
      expect(message).toHaveAttribute('aria-atomic', 'true');
    });

    it('should have correct id based on comboboxId', () => {
      render(
        <MaxSelectedMessage {...defaultProps} comboboxId={'my-combobox'} />
      );

      const message = screen.getByRole('status');
      expect(message).toHaveAttribute('id', 'my-combobox-max-selected-message');
    });

    it('should handle different comboboxId values', () => {
      render(
        <MaxSelectedMessage
          {...defaultProps}
          comboboxId={'country-selector-123'}
        />
      );

      const message = screen.getByRole('status');
      expect(message).toHaveAttribute(
        'id',
        'country-selector-123-max-selected-message'
      );
    });
  });

  describe('CSS styling', () => {
    it('should apply maxSelectedMessage CSS class', () => {
      render(<MaxSelectedMessage {...defaultProps} />);

      const message = screen.getByRole('status');
      // CSS modules will transform the class name
      expect(message.className).toMatch(/maxSelectedMessage/);
    });
  });

  describe('Component display name', () => {
    it('should have correct displayName', () => {
      expect(MaxSelectedMessage.displayName).toBe('MaxSelectedMessage');
    });
  });

  describe('Edge cases', () => {
    it('should handle large numbers correctly', () => {
      render(
        <MaxSelectedMessage
          {...defaultProps}
          selectedCount={999}
          maxSelected={1000}
        />
      );

      const message = screen.getByRole('status');
      expect(message).toHaveTextContent('999 av 1000 valgt');
    });

    it('should handle zero maxSelected', () => {
      render(
        <MaxSelectedMessage
          {...defaultProps}
          selectedCount={0}
          maxSelected={0}
        />
      );

      const message = screen.getByRole('status');
      expect(message).toHaveTextContent('0 av 0 valgt');
    });

    it('should handle selectedCount equal to maxSelected', () => {
      render(
        <MaxSelectedMessage
          {...defaultProps}
          selectedCount={10}
          maxSelected={10}
        />
      );

      const message = screen.getByRole('status');
      expect(message).toHaveTextContent('10 av 10 valgt');
    });
  });
});
