import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ErrorIcon } from '@skatteetaten/ds-icons';

import { ErrorMessageProps } from './ErrorMessage.types';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      showError,
      children,
    },
    ref
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        role={'alert'}
      >
        {showError && (
          <div className={styles.errorMessage}>
            <ErrorIcon size={'small'} className={styles.errorMessageIcon} />
            <p className={styles.errorMessageText}>{children}</p>
          </div>
        )}
      </div>
    );
  }
);

ErrorMessage.displayName = 'ErrorMessage';
