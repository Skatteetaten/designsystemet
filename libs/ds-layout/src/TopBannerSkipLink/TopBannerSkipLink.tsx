import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ArrowDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { getTopBannerSkipLinkHrefDefault } from './defaults';
import { TopBannerSkipLinkProps } from './TopBannerSkipLink.types';

import styles from './TopBannerSkipLink.module.scss';

export const TopBannerSkipLink = forwardRef<
  HTMLAnchorElement,
  TopBannerSkipLinkProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      href = getTopBannerSkipLinkHrefDefault(),
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_pages', { i18n: dsI18n });

    const handleClick = (event: React.SyntheticEvent): void => {
      event.preventDefault();

      const container: HTMLElement | null = document.querySelector(href);
      if (container) {
        container.tabIndex = -1;
        container.focus();
        setTimeout(() => container.removeAttribute('tabindex'), 1000);
      }
    };

    return (
      <a
        ref={ref}
        id={id}
        href={href}
        className={`${styles.skipLink} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        onClick={handleClick}
      >
        <span className={styles.skipLinkContent}>
          <Icon className={styles.icon} svgPath={ArrowDownSVGpath} />
          {children ? children : t('topbannerexternal.SkipLinkText')}
        </span>
      </a>
    );
  }
);
TopBannerSkipLink.displayName = 'SkipLink';
