import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon, WarningSVGpath } from '@skatteetaten/ds-icons';

import { ErrorMessageProps } from './ErrorMessage.types';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  showError,
  children,
}: ErrorMessageProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      aria-live={'assertive'}
      aria-atomic
    >
      {showError && (
        <div className={`${styles.errorMessage} ${className}`.trim()}>
          <Icon
            svgPath={WarningSVGpath}
            size={'small'}
            className={styles.errorMessageIcon}
          />
          <p className={styles.errorMessageText}>{children}</p>
        </div>
      )}
    </div>
  );
};

ErrorMessage.displayName = 'ErrorMessage';
