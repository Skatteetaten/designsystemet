import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useBrowserCompatibility } from '../hooks/useBrowserCompatibility';

describe('Combobox Browser Compatibility Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockUserAgent = (userAgent: string): void => {
    Object.defineProperty(navigator, 'userAgent', {
      value: userAgent,
      configurable: true,
    });
  };

  it('should integrate with Safari browser features', () => {
    mockUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15'
    );

    const { result } = renderHook(() => useBrowserCompatibility());

    expect(result.current.browserInfo.isSafari).toBe(true);
    expect(result.current.browserInfo.isChrome).toBe(false);
    expect(result.current.browserInfo.isFirefox).toBe(false);
  });

  it('should integrate with Chrome browser features', () => {
    mockUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    const { result } = renderHook(() => useBrowserCompatibility());

    expect(result.current.browserInfo.isChrome).toBe(true);
    expect(result.current.browserInfo.isSafari).toBe(false);
    expect(result.current.browserInfo.isFirefox).toBe(false);
  });

  it('should integrate with Firefox browser features', () => {
    mockUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
    );

    const { result } = renderHook(() => useBrowserCompatibility());

    expect(result.current.browserInfo.isFirefox).toBe(true);
    expect(result.current.browserInfo.isFirefoxDesktop).toBe(true);
  });

  it('should handle mobile iOS features', () => {
    mockUserAgent(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    );

    const { result } = renderHook(() => useBrowserCompatibility());

    expect(result.current.browserInfo.isIOS).toBe(true);
    expect(result.current.browserInfo.isMobile).toBe(true);
  });
});
