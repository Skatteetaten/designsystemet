import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ExternalIcon, Icon } from '@skatteetaten/ds-icons';

import { LinkProps } from './Link.types';

import styles from './Link.module.scss';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      isExternal,
      color,
      svgPath,
      href,
      target,
      ariaDescribedby,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
    const concatenatedClassName = `${styles.link} ${
      color ? styles[`link_${color}`] : ''
    } ${className}`;

    return (
      <a
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        href={href}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        target={target}
        aria-describedby={ariaDescribedby}
        onClick={onClick}
      >
        {svgPath && (
          <Icon
            size={'small'}
            svgPath={svgPath}
            className={`${styles.icon} ${styles.icon_isCustom}`}
          />
        )}
        {children}
        {isExternal && (
          <ExternalIcon
            size={'small'}
            className={`${styles.icon} ${styles.icon_isExternal}`}
            ariaLabel={t('shared.ExternalIcon')}
          />
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';
