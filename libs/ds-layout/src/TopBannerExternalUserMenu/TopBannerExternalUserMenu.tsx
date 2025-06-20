import { JSX, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { Divider } from '@skatteetaten/ds-content';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  InfoSquareSVGpath,
  BellSVGpath,
  PersonSVGpath,
  LogOutSVGpath,
  PersonMoreSVGpath,
} from '@skatteetaten/ds-icons';

import { TopBannerExternalUserMenuProps } from './TopBannerExternalUserMenu.types';
import { User } from '../TopBannerExternal/TopBannerExternal.types';

import styles from './TopBannerExternalUserMenu.module.scss';

export const TopBannerExternalUserMenu = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  user,
  varslerAmount,
  onLogOutClick,
  onUserClick,
  canRepresentOthers,
}: TopBannerExternalUserMenuProps): JSX.Element => {
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });
  const modalRef = useRef<HTMLDialogElement>(null);
  const [role, setRole] = useState<User>();
  const domainName = window.location.hostname;
  const varselCircleStyle =
    varslerAmount && varslerAmount > 9
      ? styles.varselCircleLarge
      : styles.varselCircleSmall;

  return (
    <div className={styles.wrapper}>
      {(user?.role === 'virksomhet' || user?.role === 'andre') &&
        canRepresentOthers && (
          <div className={styles.namePrefix}>
            {t('topbannerexternalusermenu.OnBehalfOf')}
          </div>
        )}
      <div className={styles.name}>{user?.name}</div>
      {user?.role === 'virksomhet' && user.orgnr && (
        <div className={styles.orgnr}>{`Orgnr. ${user.orgnr}`}</div>
      )}
      <div>
        <InlineButton
          data-testid={'switch-user'}
          svgPath={PersonMoreSVGpath}
          onClick={onUserClick}
        >
          {t('topbannerexternalusermenu.SwitchUser')}
        </InlineButton>
      </div>
      <Divider></Divider>
      <div className={styles.varselWrapper}>
        {user?.role === 'virksomhet' && (
          <Link
            svgPath={BellSVGpath}
            href={`https://${domainName}/web/minside/virksomhet/varsler`}
          >
            {t('topbannerexternalusermenu.Notification')}
          </Link>
        )}
        {user?.role === 'meg' && (
          <Link
            svgPath={BellSVGpath}
            href={`https://${domainName}/web/minside/person/varsler`}
          >
            {t('topbannerexternalusermenu.Notification')}
          </Link>
        )}
        {typeof varslerAmount == 'number' && varslerAmount > 0 && (
          <span className={varselCircleStyle} data-testid={'varsel-circle'}>
            <span className={styles.varselAmount}>
              {varslerAmount > 99 ? '99+' : varslerAmount > 1 && varslerAmount}
            </span>
          </span>
        )}
      </div>
      <div>
        <Link
          svgPath={PersonSVGpath}
          href={`https://${domainName}/web/minside`}
        >
          {t('topbannerexternalusermenu.MyPage')}
        </Link>
      </div>
      {user?.role === 'virksomhet' && (
        <div>
          <Link
            svgPath={InfoSquareSVGpath}
            href={`https://${domainName}/web/minside/virksomhet/omvirksomheten`}
          >
            {t('topbannerexternalusermenu.AboutTheOrganisation')}
          </Link>
        </div>
      )}
      {user?.role === 'meg' && (
        <div>
          <Link
            svgPath={InfoSquareSVGpath}
            href={`https://${domainName}/web/minside/person/ommeg`}
          >
            {t('topbannerexternalusermenu.AboutMe')}
          </Link>
        </div>
      )}
      <div>
        <Divider></Divider>
        <InlineButton svgPath={LogOutSVGpath} onClick={onLogOutClick}>
          {t('rolepicker.Logout')}
        </InlineButton>
      </div>
    </div>
  );
};

TopBannerExternalUserMenu.displayName = 'TopBannerExternalUserMenu';
