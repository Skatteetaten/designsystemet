import { forwardRef, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleSVGpath,
  BriefcaseSVGpath,
  PersonSVGpath,
} from '@skatteetaten/ds-icons';

import { TopBannerUserProps } from './TopBannerUser.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import styles from '../TopBannerUser/TopBannerUser.module.scss';

export const TopBannerUser = forwardRef<HTMLButtonElement, TopBannerUserProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      role,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_pages', { i18n: dsI18n });

    let roleSVGpath = PersonSVGpath;
    let title = '';
    if (role === 'meg') {
      title = t('userbutton.SelfIconText');
    } else if (role === 'virksomhet') {
      roleSVGpath = BriefcaseSVGpath;
      title = t('userbutton.WorkIconText');
    } else if (role === 'verge') {
      roleSVGpath = AccountMultipleSVGpath;
      title = t('userbutton.OtherIconText');
    }

    return (
      <TopBannerButton
        ref={ref}
        id={id}
        className={className}
        classNames={{ text: styles.username }}
        lang={lang}
        data-testid={dataTestId}
        variant={'filled'}
        svgPath={roleSVGpath}
        title={title}
        onClick={onClick}
      >
        {children}
      </TopBannerButton>
    );
  }
);

TopBannerUser.displayName = 'TopBannerUser';
