import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
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
    const { t } = useTranslation('ds_Buttons', { i18n: dsI18n });
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
              //TODO FRONT-991 avklare hva som blir riktig key
              ariaLabel={t('knapp.MegaButton.AriaLabel.ExternalIcon')}
            />
          </span>
        )}
      </Tag>
    );
  }
);

MegaButton.displayName = 'MegaButton';
