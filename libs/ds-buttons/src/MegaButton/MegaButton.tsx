import React, { forwardRef } from 'react';

import { ExternalIcon } from '@skatteetaten/ds-icons';

import { MegaButtonProps } from './MegaButton.types';

import styles from './MegaButton.module.scss';

export const MegaButton = forwardRef<HTMLButtonElement, MegaButtonProps>(
  (
    {
      //TODO Gjennomgang av properties
      id,
      className = '',
      children,
      disabled = false,
      isExternal,
      tabIndex,
      'data-testid': dataTestId,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const cssName = `${styles.button} ${className}`;

    return (
      <button
        ref={ref}
        id={id}
        className={cssName}
        data-testid={dataTestId}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        tabIndex={tabIndex}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {children}
        {isExternal && (
          <span className={styles.icon}>
            <ExternalIcon className={styles.svg} />
          </span>
        )}
      </button>
    );
  }
);

MegaButton.displayName = 'MegaButton';
