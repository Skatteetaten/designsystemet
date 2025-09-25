import { JSX, useEffect, useRef, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import styles from '../Combobox.module.scss';
import type { ComboboxOption } from '../Combobox.types';
import { useBrowserCompatibility } from '../hooks/useBrowserCompatibility';

interface ComboboxAccessibilityAnnouncerProps {
  comboboxId: string;
  isLoading: boolean;
  loadingMessage: string;
  isOpen: boolean;
  displayOptions: ComboboxOption[];
  searchTerm: string;
}

const getAnnouncementMessage = (
  isLoading: boolean,
  loadingMessage: string,
  isOpen: boolean,
  displayOptions: ComboboxOption[],
  searchTerm: string,
  t: ReturnType<typeof useTranslation>['t']
): string => {
  if (isLoading) {
    return loadingMessage;
  }

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
  comboboxId,
  isLoading,
  loadingMessage,
  isOpen,
  displayOptions,
  searchTerm,
}: ComboboxAccessibilityAnnouncerProps): JSX.Element => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });
  const { handleFirefoxAriaLabel } = useBrowserCompatibility();
  const announcerRef = useRef<HTMLDivElement>(null);

  const message = getAnnouncementMessage(
    isLoading,
    loadingMessage,
    isOpen,
    displayOptions,
    searchTerm,
    t
  );

  // Handle Firefox aria-label updates when message changes
  useEffect(() => {
    if (announcerRef.current && message) {
      handleFirefoxAriaLabel(announcerRef.current, () => {
        // Callback executed when Firefox has processed the aria-label update
      });
    }
  }, [message, handleFirefoxAriaLabel]);

  return (
    <div
      ref={announcerRef}
      aria-label={message}
      aria-live={'polite'}
      aria-relevant={'additions text'}
      className={styles.srOnly}
      id={`${comboboxId}-status`}
      aria-atomic
    >
      {message}
    </div>
  );
};

export const ComboboxAccessibilityAnnouncer = memo(
  ComboboxAccessibilityAnnouncerComponent
);
