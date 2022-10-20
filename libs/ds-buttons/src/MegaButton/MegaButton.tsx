import React, { forwardRef } from 'react';

import { ExternalIcon } from '@skatteetaten/ds-icons';

import { MegaButtonProps } from './MegaButton.types';

import styles from './MegaButton.module.scss';

export const MegaButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  MegaButtonProps
>(
  (
    {
      id,
      className = '',
      children,
      tabIndex,
      href,
      accessKey,
      'data-testid': dataTestId,
      ariaDescribedby,
      isExternal,
      disabled,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const cssName = `${styles.button} ${className}`;

    const Tag = href ? 'a' : 'button';
    return (
      <Tag
        ref={
          ref as (
            instance: HTMLButtonElement | HTMLAnchorElement | null
          ) => void
        }
        id={id}
        className={cssName}
        data-testid={dataTestId}
        role={href ? 'button' : undefined}
        href={href}
        accessKey={accessKey}
        aria-describedby={ariaDescribedby}
        tabIndex={tabIndex}
        disabled={disabled}
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
      </Tag>
    );
  }
);

MegaButton.displayName = 'MegaButton';
