import { forwardRef, useContext, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ExternalIcon, Icon } from '@skatteetaten/ds-icons';

import { LinkProps } from './Link.types';
import { LinkContext } from '../LinkContext/LinkContext';

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
      download,
      ariaDescribedby,
      ariaCurrent,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
    const context = useContext(LinkContext);

    const getColor = (): string => {
      if (color) {
        return styles[`link_${color}`];
      } else if (context?.color) {
        return styles[`link_${context?.color}`];
      } else {
        return '';
      }
    };

    const concatenatedClassName = `${styles.link} ${getColor()} ${className}`;

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
        aria-current={ariaCurrent}
        aria-describedby={ariaDescribedby}
        download={download}
        onClick={onClick}
      >
        {svgPath && (
          <Icon
            size={'medium'}
            svgPath={svgPath}
            className={`${styles.icon} ${styles.icon_isCustom}`}
          />
        )}
        {children}
        {isExternal && (
          <ExternalIcon
            size={'medium'}
            className={`${styles.icon} ${styles.icon_isExternal}`}
            ariaLabel={t('shared.ExternalIcon')}
          />
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';
