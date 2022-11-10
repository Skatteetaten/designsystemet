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
      lang,
      'data-testid': dataTestId,
      href,
      isExternal,
      disabled = getCommonDisabledDefault(),
      accessKey,
      ariaDescribedby,
      onBlur,
      onClick,
      onFocus,
      children,
    },
    ref
  ): JSX.Element => {
    const cssName = `${styles.button} ${className}`;

    const Tag = href !== undefined ? 'a' : 'button';
    return (
      <Tag
        ref={
          ref as (
            instance: HTMLButtonElement | HTMLAnchorElement | null
          ) => void
        }
        id={id}
        className={cssName}
        lang={lang}
        data-testid={dataTestId}
        href={href}
        accessKey={accessKey}
        disabled={disabled}
        aria-describedby={ariaDescribedby}
        role={href ? 'button' : undefined}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {children}
        {isExternal && (
          <span className={styles.icon}>
            <ExternalIcon
              className={styles.svg}
              //TODO rette opp i hardkodet verdi når vi støtter flere språk.
              ariaLabel={'Til et annet nettsted'}
            />
          </span>
        )}
      </Tag>
    );
  }
);

MegaButton.displayName = 'MegaButton';
