import { JSX, useRef, memo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import type {
  ComboboxAccessibilityAnnouncerProps,
  ComboboxOption,
} from './Combobox.types';
import { useDebounce } from './hooks/useDebounce';

import styles from './Combobox.module.scss';

const getAnnouncementMessage = (
  isOpen: boolean,
  displayOptions: ComboboxOption[],
  searchTerm: string,
  t: ReturnType<typeof useTranslation>['t']
): string => {
  if (isOpen && displayOptions.length > 0) {
    return displayOptions.length === 1
      ? t('combobox.OneOptionAvailable')
      : t('combobox.OptionsAvailable', { count: displayOptions.length });
  }

  if (isOpen && searchTerm && displayOptions.length === 0) {
    return t('combobox.NoResults', { searchTerm });
  }

  return '';
};

const ComboboxAccessibilityAnnouncerComponent = ({
  isOpen,
  displayOptions,
  searchTerm,
}: ComboboxAccessibilityAnnouncerProps): JSX.Element => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });
  const announcerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>();

  // Only debounce when user is actively searching, with multiple results found
  // Don't debounce when dropdown opening, no results, or single result
  // This ensures immediate announcements for important accessibility events
  const shouldDebounce =
    isOpen && searchTerm.length > 0 && displayOptions.length > 1;
  const debouncedDisplayOptions = useDebounce(
    displayOptions,
    shouldDebounce ? 500 : 0
  );

  // Use immediate options when not debouncing to avoid async delay
  const effectiveDisplayOptions = shouldDebounce
    ? debouncedDisplayOptions
    : displayOptions;

  useEffect(() => {
    const newMessage = getAnnouncementMessage(
      isOpen,
      effectiveDisplayOptions,
      searchTerm,
      t
    );
    setMessage(newMessage);

    if (newMessage) {
      const timeout = setTimeout(() => {
        setMessage('');
      }, 3000);
      return (): void => {
        clearTimeout(timeout);
      };
    }
    return undefined;
  }, [isOpen, effectiveDisplayOptions, searchTerm, t]);

  return (
    <div
      ref={announcerRef}
      aria-live={'polite'}
      className={styles.srOnly}
      aria-atomic
    >
      {message}
    </div>
  );
};

export const ComboboxAccessibilityAnnouncer = memo(
  ComboboxAccessibilityAnnouncerComponent
);
