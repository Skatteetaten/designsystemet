import { forwardRef, JSX, useRef, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
} from '@skatteetaten/ds-core-utils';

import {
  getTopBannerLogoAsDefault,
  getTopBannerLogoHrefDefault,
} from './defaults';
import defaultEnglishLogo from './ske-logo-en.svg';
import defaultMobileLogo from './ske-logo-mobile.svg';
import defaultNorwegainLogo from './ske-logo.svg';
import { LogoRefHandle, TopBannerLogoProps } from './TopBannerLogo.types';

import styles from './TopBannerLogo.module.scss';

export const TopBannerLogo = forwardRef<LogoRefHandle, TopBannerLogoProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      as: Tag = getTopBannerLogoAsDefault(),
      logo,
      href = getTopBannerLogoHrefDefault(),
      mobileLogo,
      alt,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

    const logoRef = useRef<HTMLAnchorElement & HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
      logoRef: logoRef,
    }));

    const defaultLogo =
      dsI18n.language === Languages.Engelsk
        ? defaultEnglishLogo
        : defaultNorwegainLogo;

    const defaultAltText =
      Tag === 'div'
        ? t('topbanner.SkeLogoImageText')
        : t('topbanner.SkeLogoLinkText');
    const altText = alt ?? defaultAltText;

    const asClassName = Tag !== 'div' ? styles.logoAsLink : '';
    const concatenatedClassName =
      `${className} ${styles.logoContainer} ${asClassName}`.trim();

    return (
      <Tag
        ref={logoRef}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        href={Tag === 'div' ? undefined : href}
      >
        <>
          <img
            className={styles.logo_mobile}
            alt={altText}
            src={mobileLogo ?? defaultMobileLogo}
          />
          <img
            className={styles.logo_desktop}
            alt={altText}
            src={logo ?? defaultLogo}
          />
        </>
      </Tag>
    );
  }
);

TopBannerLogo.displayName = 'Logo';
