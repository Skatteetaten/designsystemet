import { JSX, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  ArrowForwardSVGpath,
  ExternalIcon,
  Icon,
} from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

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
      classNames,
      description,
      hasSpinner,
      isExternal,
      hideArrowIcon = getNavigationTileHideArrowDefault(),
      size = getNavigationTileSizeDefault(),
      spinnerTitle,
      svgPath,
      href,
      target,
      ariaDescribedby,
      onClick,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

    const iconClassNames = `${styles.icon} ${
      size !== 'medium' ? styles[`icon_${size}`] : ''
    }`;

    const spinnerClassNames = `${styles.spinner} ${
      size === 'extraLarge' ? styles[`spinner_${size}`] : ''
    }`;

    const titleClassNames = `${styles.title} ${
      size !== 'medium' ? styles[`title_${size}`] : ''
    } ${classNames?.title}`.trim();

    const descriptionClassNames = `${styles.description} ${
      size === 'extraLarge' && styles.description_extraLarge
    } ${size !== 'extraLarge' && (svgPath || hasSpinner) ? styles.descriptionIndented : ''} ${
      classNames?.description
    }`.trim();

    const concatenatedClassName = `${styles.navigationTile} ${
      styles[`navigationTile_${size}`]
    } ${className} ${classNames?.container}`.trim();

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
          {svgPath && !hasSpinner && (
            <Icon
              size={size === 'extraLarge' ? 'extraLarge' : 'large'}
              svgPath={svgPath}
              className={iconClassNames}
            />
          )}
          {hasSpinner && (
            <Spinner
              className={spinnerClassNames}
              color={'blue'}
              size={size === 'extraLarge' ? 'large' : 'medium'}
              hideTitle
            >
              {spinnerTitle}
            </Spinner>
          )}
          <TitleTag className={titleClassNames}>{title}</TitleTag>
          {isExternal && size !== 'extraLarge' ? (
            <ExternalIcon
              size={'large'}
              className={iconClassNames}
              ariaLabel={t('shared.ExternalIcon')}
            />
          ) : null}

          {!isExternal && !hideArrowIcon && size !== 'extraLarge' ? (
            <Icon
              size={'large'}
              svgPath={ArrowForwardSVGpath}
              className={iconClassNames}
            />
          ) : null}
        </div>
        {description && (
          <div className={descriptionClassNames}>{description}</div>
        )}
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
