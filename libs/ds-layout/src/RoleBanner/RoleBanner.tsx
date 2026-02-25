import { JSX, useEffect, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';

import { RoleBannerProps } from './RoleBanner.types';
import { getRoleIcon } from './utils';

import styles from './RoleBanner.module.scss';

/**
 * RoleBanner
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-rolebanner--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/rolebanner/) - Brukerveiledning
 */
export const RoleBanner = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  user,
  isSticky,
}: RoleBannerProps): JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => bannerRef?.current as HTMLDivElement);
  const { t } = useTranslation('ds_layout', { i18n: dsI18n });

  const identifier = ` (${user?.identifier})`;

  useEffect(() => {
    const handleScroll = (): void => {
      const newValue = window.scrollY > 0 ? 'true' : 'false';
      const currentValue = bannerRef.current?.getAttribute('data-scrolled');
      if (newValue !== currentValue) {
        bannerRef.current?.setAttribute('data-scrolled', newValue);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const shouldBeSticky =
    isSticky !== undefined ? isSticky : user?.role !== 'meg';

  return (
    <section
      ref={bannerRef}
      id={id}
      role={'region'}
      aria-label={t('rolebanner.AriaLabel')}
      lang={lang}
      data-testid={dataTestId}
      data-user={user?.role}
      data-sticky={shouldBeSticky}
      className={`${styles.roleBanner} ${className}`.trim()}
    >
      <div className={styles.content}>
        <span className={styles.nameWrapper}>
          {`${t('rolebanner.Represents')}`}
          {getRoleIcon(user?.role)}
          {user.role !== 'meg' && (
            <span className={styles.srOnly}>
              {user.role === 'virksomhet'
                ? ` ${t('rolebanner.Business')} `
                : ` ${t('rolebanner.Person')} `}
            </span>
          )}
          <span className={styles.bold}>{user.name}</span>
        </span>
        <span className={styles.bold}>{identifier}</span>
      </div>
    </section>
  );
};

RoleBanner.displayName = 'RoleBanner';
