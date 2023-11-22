import { forwardRef, ReactElement, ReactNode, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
} from '@skatteetaten/ds-core-utils';

import { getTopBannerLogoHrefDefault } from './defaults';
import defaultEnglishLogo from './ske-logo-en.svg';
import defaultMobileLogo from './ske-logo-mobile.svg';
import defaultNorwegainLogo from './ske-logo.svg';
import {
  TopBannerLogoProps,
  ConditionalWrapperProps,
} from './TopBannerLogo.types';

import styles from './TopBannerLogo.module.scss';

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? children : wrapper(children));

export const TopBannerLogo = forwardRef<HTMLImageElement, TopBannerLogoProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      logo,
      href = getTopBannerLogoHrefDefault(),
      mobileLogo,
      noLinkLogo,
      alt,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_pages', { i18n: dsI18n });

    const linkWrapper = (children: ReactNode): ReactElement => (
      <a href={href} className={styles.logoLink}>
        {children}
      </a>
    );

    const defaultLogo =
      dsI18n.language === Languages.Engelsk
        ? defaultEnglishLogo
        : defaultNorwegainLogo;

    const defaultAltText = noLinkLogo
      ? t('topbannerexternal.SkeLogoImageText')
      : t('topbannerexternal.SkeLogoLinkText');
    const altText = alt ?? defaultAltText;

    return (
      <div
        ref={ref}
        id={id}
        className={`${className} ${styles.containerLogo}`.trim()}
        lang={lang}
        data-testid={dataTestId}
      >
        <ConditionalWrapper
          condition={noLinkLogo ?? false}
          wrapper={linkWrapper}
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
        </ConditionalWrapper>
      </div>
    );
  }
);

TopBannerLogo.displayName = 'Logo';
