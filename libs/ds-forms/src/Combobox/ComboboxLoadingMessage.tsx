import type { JSX } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import { LoadingMessageProps } from './Combobox.types';

import styles from './Combobox.module.scss';

export const ComboboxLoadingMessage = ({
  comboboxId,
  spinnerProps,
}: LoadingMessageProps): JSX.Element => {
  return (
    <output
      className={styles.loadingContainer}
      id={`${comboboxId}-loading`}
      aria-live={'polite'}
    >
      <Spinner
        size={'medium'}
        hideTitle={false}
        titlePosition={'right'}
        {...spinnerProps}
        data-testid={'combobox-loading-spinner'}
      />
    </output>
  );
};

ComboboxLoadingMessage.displayName = 'ComboboxLoadingMessage';
