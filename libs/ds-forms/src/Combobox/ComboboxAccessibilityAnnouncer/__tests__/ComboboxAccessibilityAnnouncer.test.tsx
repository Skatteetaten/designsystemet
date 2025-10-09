import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import type { ComboboxOption } from '../../Combobox.types';
import { ComboboxAccessibilityAnnouncer } from '../ComboboxAccessibilityAnnouncer';

describe('ComboboxAccessibilityAnnouncer', () => {
  const defaultProps = {
    comboboxId: 'test-combobox',
    isLoading: false,
    loadingMessage: 'Loading options...',
    isOpen: false,
    displayOptions: [] as ComboboxOption[],
    searchTerm: '',
  };

  const mockOptions: ComboboxOption[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  describe('Loading state announcements', () => {
    it('should announce loading message when isLoading is true', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          loadingMessage={'Laster alternativer...'}
          isLoading
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveTextContent('Laster alternativer...');
    });

    it('should prioritize loading message over other states', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          loadingMessage={'Loading...'}
          displayOptions={mockOptions}
          searchTerm={'test'}
          isOpen
          isLoading
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveTextContent('Loading...');
    });
  });

  describe('Options available announcements', () => {
    it('should announce available options count when open with options', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          displayOptions={mockOptions}
          isOpen
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveAttribute('aria-live', 'polite');
      // The exact text depends on i18n translation
      expect(announcer?.textContent).toContain('alternativer tilgjengelig');
    });

    it('should handle single option correctly', () => {
      const singleOption = [{ label: 'Single Option', value: '1' }];

      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          displayOptions={singleOption}
          isOpen
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer?.textContent).toContain('Ett alternativ tilgjengelig');
    });
  });

  describe('No results announcements', () => {
    it('should announce no results when open with search term but no options', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          displayOptions={[]}
          searchTerm={'xyz'}
          isOpen
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveAttribute('aria-live', 'polite');
      expect(announcer?.textContent).toContain('Ingen treff');
    });

    it('should not announce no results when closed', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          isOpen={false}
          displayOptions={[]}
          searchTerm={'xyz'}
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveTextContent('');
    });

    it('should not announce no results when no search term', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          displayOptions={[]}
          searchTerm={''}
          isOpen
        />
      );

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveTextContent('');
    });
  });

  describe('Accessibility attributes', () => {
    it('should have correct ARIA attributes', () => {
      render(<ComboboxAccessibilityAnnouncer {...defaultProps} />);

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveAttribute('aria-live', 'polite');

      expect(announcer).toHaveAttribute('aria-atomic', 'true');
    });

    it('should have correct id based on comboboxId', () => {
      render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          comboboxId={'country-selector'}
        />
      );

      const announcer = document.getElementById('country-selector-status');
      expect(announcer).toHaveAttribute('id', 'country-selector-status');
    });

    it('should apply screen reader only styling', () => {
      render(<ComboboxAccessibilityAnnouncer {...defaultProps} />);

      const announcer = document.getElementById('test-combobox-status');
      expect(announcer?.className).toMatch(/srOnly/);
    });
  });

  describe('Component state changes', () => {
    it('should update message when props change', () => {
      const { rerender } = render(
        <ComboboxAccessibilityAnnouncer {...defaultProps} isOpen={false} />
      );

      let announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveTextContent('');

      rerender(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          displayOptions={mockOptions}
          isOpen
        />
      );

      announcer = document.getElementById('test-combobox-status');
      expect(announcer?.textContent).toContain('alternativer tilgjengelig');
    });

    it('should handle transition from loading to loaded state', () => {
      const { rerender } = render(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          loadingMessage={'Loading...'}
          isLoading
        />
      );

      let announcer = document.getElementById('test-combobox-status');
      expect(announcer).toHaveTextContent('Loading...');

      rerender(
        <ComboboxAccessibilityAnnouncer
          {...defaultProps}
          isLoading={false}
          displayOptions={mockOptions}
          isOpen
        />
      );

      announcer = document.getElementById('test-combobox-status');
      expect(announcer).not.toHaveTextContent('Loading...');
      expect(announcer?.textContent).toContain('alternativer tilgjengelig');
    });
  });
});
