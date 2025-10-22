import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useBrowserCompatibility } from '../useBrowserCompatibility';

describe('useBrowserCompatibility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockUserAgent = (userAgent: string): void => {
    Object.defineProperty(navigator, 'userAgent', {
      value: userAgent,
      configurable: true,
    });
  };

  it('should detect Safari correctly', () => {
    mockUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15'
    );

    const { result } = renderHook(() => useBrowserCompatibility());

    expect(result.current.browserInfo.isSafari).toBe(true);
    expect(result.current.browserInfo.isChrome).toBe(false);
    expect(result.current.browserInfo.isFirefox).toBe(false);
  });

  it('should detect Chrome correctly', () => {
    mockUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    const { result } = renderHook(() => useBrowserCompatibility());

    expect(result.current.browserInfo.isChrome).toBe(true);
    expect(result.current.browserInfo.isSafari).toBe(false);
    expect(result.current.browserInfo.isFirefox).toBe(false);
  });

  it('should provide browser compatibility functions', () => {
    const { result } = renderHook(() => useBrowserCompatibility());

    expect(typeof result.current.safeFocus).toBe('function');
    expect(typeof result.current.preventZoom).toBe('function');
    expect(typeof result.current.manageVirtualKeyboard).toBe('function');
    expect(typeof result.current.handleFirefoxAriaLabel).toBe('function');
  });

  it('should handle safe focus correctly', () => {
    const mockElement = document.createElement('button');
    const focusSpy = vi.spyOn(mockElement, 'focus');

    const { result } = renderHook(() => useBrowserCompatibility());

    result.current.safeFocus(mockElement);

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should handle virtual keyboard management', () => {
    mockUserAgent(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    );

    const mockInput = document.createElement('input');
    const { result } = renderHook(() => useBrowserCompatibility());

    result.current.manageVirtualKeyboard(mockInput, true);
    expect(mockInput.getAttribute('inputmode')).toBe('text');

    result.current.manageVirtualKeyboard(mockInput, false);
    expect(mockInput.getAttribute('inputmode')).toBe('none');
  });
});
