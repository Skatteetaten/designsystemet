import React, { forwardRef } from 'react';

import {
  getCommonClassNameDefault,
  getCommonDisabledDefault,
} from '@skatteetaten/ds-core-utils';
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
      className = getCommonClassNameDefault(),
      'data-testid': dataTestId,
      children,
      href,
      tabIndex,
      disabled = getCommonDisabledDefault(),
      accessKey,
      ariaDescribedby,
      isExternal,
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
        href={href}
        accessKey={accessKey}
        tabIndex={tabIndex}
        disabled={disabled}
        aria-describedby={ariaDescribedby}
        role={href ? 'button' : undefined}
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
