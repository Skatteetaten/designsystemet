import { JSX } from 'react';

import { Icon, WarningSVGpath } from '@skatteetaten/ds-icons';

import { ErrorMessageProps } from './ErrorMessage.types';

import styles from './ErrorMessage.module.scss';

/**
 * ErrorMessage
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/errormessage)
 */
export const ErrorMessage = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  hasSpacing = false,
  showError = false,
  children,
}: ErrorMessageProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      lang={lang}
      className={showError ? '' : styles.srOnly}
      data-testid={dataTestId}
      aria-live={'assertive'}
      aria-atomic
    >
      {showError && (
        <div
          className={`${styles.errorMessage} ${className}`.trim()}
          data-has-spacing={hasSpacing}
        >
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
