import { JSX, useRef, memo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import type {
  ComboboxAccessibilityAnnouncerProps,
  ComboboxOption,
} from './Combobox.types';

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

  useEffect(() => {
    const newMessage = getAnnouncementMessage(
      isOpen,
      displayOptions,
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
  }, [isOpen, displayOptions, searchTerm, t]);

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
