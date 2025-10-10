import { useMemo } from 'react';

interface BrowserInfo {
  isSafari: boolean;
  isIOS: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isMobile: boolean;
  isFirefoxDesktop: boolean;
  isAndroid: boolean;
}

interface BrowserCompatibilityFeatures {
  browserInfo: BrowserInfo;
  safeFocus: (element: HTMLElement, options?: FocusOptions) => void;
  preventZoom: (inputElement: HTMLInputElement) => void;
  manageVirtualKeyboard: (input: HTMLInputElement, show: boolean) => void;
  handleFirefoxAriaLabel: (element: HTMLElement, callback: () => void) => void;
}

/**
 * Detects browser type and platform information using User Agent string.
 * Provides reliable browser detection for cross-browser compatibility features.
 *
 * Detection includes:
 * - Safari browser identification (excluding Chrome/Android)
 * - iOS device detection (iPad, iPhone, iPod)
 * - Chrome browser identification
 * - Firefox browser identification
 * - Mobile device detection (various platforms)
 * - Firefox desktop specific detection
 * - Android platform detection
 * @returns BrowserInfo object with boolean flags for each detected browser/platform
 * @example
 * ```typescript
 * const browserInfo = detectBrowser();
 * if (browserInfo.isIOS) {
 *   // Apply iOS-specific workarounds
 * }
 * ```
 */
const detectBrowser = (): BrowserInfo => {
  if (typeof window === 'undefined') {
    return {
      isSafari: false,
      isIOS: false,
      isChrome: false,
      isFirefox: false,
      isMobile: false,
      isFirefoxDesktop: false,
      isAndroid: false,
    };
  }

  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isChrome = /Chrome/.test(userAgent);
  const isFirefox = /Firefox/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  const isFirefoxDesktop = isFirefox && !isAndroid;

  return {
    isSafari,
    isIOS,
    isChrome,
    isFirefox,
    isMobile,
    isFirefoxDesktop,
    isAndroid,
  };
};

/**
 * Cross-browser compatibility utilities hook for combobox.
 *
 * What: Provides browser detection and compatibility utilities for safe focus,
 * iOS zoom prevention, virtual keyboard management, and Firefox aria-label handling.
 *
 * Why: Different browsers (especially mobile Safari, Firefox) have unique quirks that
 * break standard combobox functionality without specific workarounds.
 * @returns Browser compatibility features including detection and utility functions
 */
export const useBrowserCompatibility = (): BrowserCompatibilityFeatures => {
  const browserInfo = useMemo(() => detectBrowser(), []);

  /**
   * Safely focuses an element with browser-specific handling.
   * Uses setTimeout for iOS/Safari to work around focus timing issues.
   * Includes fallback for when focus options are not supported.
   * @param element - The HTML element to focus
   * @param options - Focus options (preventScroll, etc.)
   */
  const safeFocus = (element: HTMLElement, options?: FocusOptions): void => {
    if (!element?.focus) return;

    try {
      if (browserInfo.isIOS || browserInfo.isSafari) {
        setTimeout(() => {
          element.focus(options);
        }, 0);
      } else {
        element.focus(options);
      }
    } catch {
      try {
        element.focus();
      } catch {
        // Ignore focus errors
      }
    }
  };

  /**
   * Prevents unwanted zoom on iOS when focusing input elements.
   * Temporarily sets font-size to 16px to prevent iOS zoom behavior,
   * then restores original font-size on blur. Only applies to iOS devices.
   * @param inputElement - The input element to prevent zoom on
   */
  const preventZoom = (inputElement: HTMLInputElement): void => {
    if (!browserInfo.isIOS || !inputElement) return;

    const currentFontSize = window.getComputedStyle(inputElement).fontSize;
    const fontSize = parseFloat(currentFontSize);

    if (fontSize < 16) {
      inputElement.style.fontSize = '16px';
      inputElement.addEventListener(
        'blur',
        () => {
          inputElement.style.fontSize = currentFontSize;
        },
        { once: true }
      );
    }
  };

  /**
   * Manages virtual keyboard display on mobile devices by controlling inputmode attribute.
   * Sets inputmode to 'text' to show keyboard or 'none' to hide it.
   * Only affects mobile devices to prevent unwanted virtual keyboard behavior.
   * @param input - The input element to manage virtual keyboard for
   * @param show - Whether to show (true) or hide (false) the virtual keyboard
   */
  const manageVirtualKeyboard = (
    input: HTMLInputElement,
    show: boolean
  ): void => {
    if (!browserInfo.isMobile) return;

    if (show) {
      input.setAttribute('inputmode', 'text');
    } else {
      input.setAttribute('inputmode', 'none');
    }
  };

  /**
   * Handles Firefox-specific aria-label update workaround.
   * Firefox desktop requires blur event to properly process aria-label changes.
   * Other browsers use a standard timeout for aria-label processing.
   * @param element - The HTML element that needs aria-label handling
   * @param callback - Function to execute after aria-label is processed
   */
  const handleFirefoxAriaLabel = (
    element: HTMLElement,
    callback: () => void
  ): void => {
    if (browserInfo.isFirefoxDesktop) {
      const handleBlur = (): void => {
        callback();
        element.removeEventListener('blur', handleBlur);
      };
      element.addEventListener('blur', handleBlur);
    } else {
      setTimeout(callback, 100);
    }
  };

  return {
    browserInfo,
    safeFocus,
    preventZoom,
    manageVirtualKeyboard,
    handleFirefoxAriaLabel,
  };
};
