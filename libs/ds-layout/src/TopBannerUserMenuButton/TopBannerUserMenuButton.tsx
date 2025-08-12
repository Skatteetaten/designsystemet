import { JSX, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  MenuUpSVGpath,
  Icon,
  MenuDownSVGpath,
  PersonIcon,
} from '@skatteetaten/ds-icons';

import { TopBannerUserMenuButtonProps } from './TopBannerUserMenuButton.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';

import styles from './TopBannerUserMenuButton.module.scss';

export const TopBannerUserMenuButton = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  user,
  notificationCount,
  isMenuOpen,
  onClick,
}: TopBannerUserMenuButtonProps): JSX.Element => {
  const { t } = useTranslation(['ds_layout', 'ds_overlays'], { i18n: dsI18n });

  const buttonText =
    user.role === 'meg' ? t('topbannerbutton.Myself') : user.name;

  const getUserIcon = (role: string): ReactNode => {
    switch (role) {
      case 'andre':
        return (
          <AccountMultipleIcon
            title={t('topbannerbutton.OtherTitle')}
            className={styles.userIconSvg}
          />
        );
      case 'virksomhet':
        return (
          <BriefcaseIcon
            title={t('topbannerbutton.CompanyTitle')}
            className={styles.userIconSvg}
          />
        );
      case 'meg':
      default:
        return (
          <PersonIcon
            title={t('topbannerbutton.MyselfTitle')}
            className={styles.userIconSvg}
          />
        );
    }
  };

  return (
    <TopBannerButton
      ref={ref}
      id={id}
      className={`${styles.menuButton} ${className}`.trim()}
      classNames={
        user.role === 'meg'
          ? undefined
          : {
              container: styles.usernameButton,
            }
      }
      lang={lang}
      data-testid={dataTestId}
      variant={'filled'}
      onClick={onClick}
    >
      <span className={styles.iconWrapper}>
        <span className={styles.userIcon}>{getUserIcon(user.role)}</span>
        <Icon
          svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
          className={styles.arrowMobile}
        />
        {!!notificationCount && notificationCount > 0 && (
          <span className={styles.notificationBadge}></span>
        )}
      </span>
      <span className={styles.buttonText}>{buttonText}</span>
      <span className={styles.srOnly}>&nbsp;{t('topbannerbutton.Menu')}</span>
      {!!notificationCount && notificationCount > 0 && (
        <span className={'srOnly'}>
          {t('ds_overlays:topbannerexternalusermenu.NotificationCountMessage', {
            count: notificationCount,
          })}
        </span>
      )}
      <Icon
        svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
        className={styles.arrowDesktop}
      />
      {!!notificationCount && notificationCount > 0 && (
        <span
          className={`${styles.notificationBadge} ${styles.notificationBadgeDesktop}`}
        ></span>
      )}
    </TopBannerButton>
  );
};

TopBannerUserMenuButton.displayName = 'TopBannerUserMenuButton';
