import { JSX, useRef, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import type { ComboboxOption } from './Combobox.types';

import styles from './Combobox.module.scss';

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
  const announcerRef = useRef<HTMLDivElement>(null);

  const message = getAnnouncementMessage(
    isLoading,
    loadingMessage,
    isOpen,
    displayOptions,
    searchTerm,
    t
  );

  return (
    <div
      ref={announcerRef}
      aria-live={'polite'}
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
