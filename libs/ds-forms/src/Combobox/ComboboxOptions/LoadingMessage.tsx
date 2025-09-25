import type { JSX } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';
import type { SpinnerProps } from '@skatteetaten/ds-progress';

import styles from '../Combobox.module.scss';

interface LoadingMessageProps {
  message?: string;
  comboboxId: string;
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
}

export const LoadingMessage = ({
  message = 'Laster...',
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
      >
        {message}
      </Spinner>
    </output>
  );
};

LoadingMessage.displayName = 'LoadingMessage';
