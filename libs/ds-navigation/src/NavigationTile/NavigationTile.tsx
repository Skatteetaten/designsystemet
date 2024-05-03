import { JSX, ReactNode, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  ArrowForwardSVGpath,
  ExternalIcon,
  Icon,
} from '@skatteetaten/ds-icons';

import {
  getNavigationTileHeadingAsDefault,
  getNavigationTileHideArrowDefault,
  getNavigationTileSizeDefault,
} from './defaults';
import { NavigationTileProps } from './NavigationTile.types';

import styles from './NavigationTile.module.scss';

export const NavigationTile = forwardRef<
  HTMLAnchorElement,
  NavigationTileProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      title,
      titleAs: TitleTag = getNavigationTileHeadingAsDefault(),
      isExternal,
      hideArrowIcon = getNavigationTileHideArrowDefault(),
      size = getNavigationTileSizeDefault(),
      svgPath,
      href,
      target,
      ariaDescribedby,
      children,
      onClick,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

    const renderLinkIcon = (): ReactNode => {
      if (size === 'extraLarge') {
        return null;
      }

      if (isExternal) {
        return (
          <ExternalIcon
            size={'large'}
            className={styles.icon}
            ariaLabel={t('shared.ExternalIcon')}
          />
        );
      }

      if (!hideArrowIcon) {
        return (
          <Icon
            size={'large'}
            svgPath={ArrowForwardSVGpath}
            className={styles.icon}
          />
        );
      }

      return null;
    };

    const contentClassNames = `${styles.content} ${
      size !== 'extraLarge' && svgPath ? styles.contentIndented : ''
    }`.trim();

    const concatenatedClassName = `${styles.navigationTile} ${
      styles[`navigationTile_${size}`]
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
        <div className={styles.header}>
          {svgPath && (
            <Icon
              size={size === 'extraLarge' ? 'extraLarge' : 'large'}
              svgPath={svgPath}
              className={`${styles.icon} ${
                size === 'extraLarge' ? styles.icon_extraLarge : ''
              }`}
            />
          )}
          <TitleTag
            className={`${styles.title} ${
              size !== 'medium' ? styles[`title_${size}`] : ''
            }`.trim()}
          >
            {title}
          </TitleTag>
          {renderLinkIcon()}
        </div>
        <div className={contentClassNames}>{children}</div>
      </a>
    );
  }
);

NavigationTile.displayName = 'NavigationTile';

export {
  getNavigationTileHeadingAsDefault,
  getNavigationTileHideArrowDefault,
  getNavigationTileSizeDefault,
};
