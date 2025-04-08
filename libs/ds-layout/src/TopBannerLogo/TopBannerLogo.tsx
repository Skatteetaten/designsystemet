import { JSX } from 'react';
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
import { TopBannerLogoProps } from './TopBannerLogo.types';

import styles from './TopBannerLogo.module.scss';

export const TopBannerLogo = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  as: Tag = getTopBannerLogoAsDefault(),
  logo,
  href = getTopBannerLogoHrefDefault(),
  mobileLogo,
  alt,
  onClick,
}: TopBannerLogoProps): JSX.Element => {
  const { t } = useTranslation('ds_layout', { i18n: dsI18n });

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
    `${styles.logoContainer} ${asClassName} ${className}`.trim();

  return (
    <Tag
      ref={ref as (instance: HTMLDivElement | HTMLAnchorElement | null) => void}
      id={id}
      className={concatenatedClassName}
      lang={lang}
      data-testid={dataTestId}
      href={Tag === 'div' ? undefined : href}
      onClick={onClick}
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
};

TopBannerLogo.displayName = 'TopBannerLogo';
