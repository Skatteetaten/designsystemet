import React, { type JSX } from 'react';

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
    return (
      <li
        id={`${comboboxId}-max-selected-message`}
        className={styles.maxSelectedMessage}
        role={'status'}
        aria-live={'polite'}
        aria-atomic={'true'}
      >
        {selectedCount}
        {' av '}
        {maxSelected}
        {' valgt'}
      </li>
    );
  }
);

MaxSelectedMessage.displayName = 'MaxSelectedMessage';
