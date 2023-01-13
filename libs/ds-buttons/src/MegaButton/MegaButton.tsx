import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
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
      disabled,
      accessKey,
      type = 'button',
      ariaDescribedby,
      onBlur,
      onClick,
      onFocus,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
    const cssName = `${styles.button} ${className}`;
    const buttonType = href !== undefined ? undefined : type;

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
        type={buttonType}
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
              ariaLabel={t('shared.ExternalIcon')}
            />
          </span>
        )}
      </Tag>
    );
  }
);

MegaButton.displayName = 'MegaButton';
