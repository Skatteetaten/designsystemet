import React, { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import styles from '../Combobox.module.scss';

interface MaxSelectedMessageProps {
  selectedCount: number;
  maxSelected: number;
  comboboxId: string;
}

export const MaxSelectedMessage = React.memo<MaxSelectedMessageProps>(
  ({
    selectedCount,
    maxSelected,
    comboboxId,
  }: MaxSelectedMessageProps): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    return (
      <li
        id={`${comboboxId}-max-selected-message`}
        className={styles.maxSelectedMessage}
        role={'status'}
        aria-live={'polite'}
        aria-atomic={'true'}
      >
        {t('combobox.SelectedOfTotal', {
          selected: selectedCount,
          total: maxSelected,
        })}
      </li>
    );
  }
);

MaxSelectedMessage.displayName = 'MaxSelectedMessage';
