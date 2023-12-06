import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { ArrowDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { getTopBannerSkipLinkTargetDefault } from './defaults';
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
      shadowRootNode,
      target = getTopBannerSkipLinkTargetDefault(),
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

    const handleClick = (event: React.SyntheticEvent): void => {
      event.preventDefault();

      const container: HTMLElement | null = shadowRootNode
        ? shadowRootNode.querySelector(target)
        : document.querySelector(target);
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
        href={target}
        className={`${styles.skipLink} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        onClick={handleClick}
      >
        <span className={styles.skipLinkContent}>
          <Icon className={styles.icon} svgPath={ArrowDownSVGpath} />
          {children ?? t('topbanner.SkipLinkText')}
        </span>
      </a>
    );
  }
);
TopBannerSkipLink.displayName = 'TopBannerSkipLink';
