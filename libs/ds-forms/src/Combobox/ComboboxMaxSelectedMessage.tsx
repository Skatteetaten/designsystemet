import React, { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import styles from './Combobox.module.scss';

interface MaxSelectedMessageProps {
  selectedCount: number;
  maxSelected: number;
  comboboxId: string;
}

export const ComboboxMaxSelectedMessage = React.memo<MaxSelectedMessageProps>(
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
        {selectedCount === 1
          ? t('combobox.SelectedOfTotalSingular', {
              selected: selectedCount,
              total: maxSelected,
            })
          : t('combobox.SelectedOfTotalPlural', {
              selected: selectedCount,
              total: maxSelected,
            })}
      </li>
    );
  }
);

ComboboxMaxSelectedMessage.displayName = 'ComboboxMaxSelectedMessage';
