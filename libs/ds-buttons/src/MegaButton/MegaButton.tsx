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
      // TODO jevne ut rekkefølgen på props på tvers
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
