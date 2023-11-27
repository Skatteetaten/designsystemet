import { forwardRef, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleSVGpath,
  BriefcaseSVGpath,
  PersonSVGpath,
} from '@skatteetaten/ds-icons';

import { TopBannerUserButtonProps } from './TopBannerUserButton.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';

import styles from './TopBannerUserButton.module.scss';

export const TopBannerUserButton = forwardRef<
  HTMLButtonElement,
  TopBannerUserButtonProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      role,
      children,
      onUsername,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_pages', { i18n: dsI18n });

    let roleSVGpath = PersonSVGpath;
    let title = t('userbutton.SelfIconText');
    if (role === 'virksomhet') {
      roleSVGpath = BriefcaseSVGpath;
      title = t('userbutton.WorkIconText');
    } else if (role === 'andre') {
      roleSVGpath = AccountMultipleSVGpath;
      title = t('userbutton.OtherIconText');
    }

    // TODO FRONT 1161 - erstattet hardkodet tekst når tekstvariabelen finnes
    return (
      <TopBannerButton
        ref={ref}
        id={id}
        className={className}
        classNames={{
          container: styles.usernameButton,
          text: styles.usernameText,
        }}
        lang={lang}
        data-testid={dataTestId}
        variant={'filled'}
        svgPath={roleSVGpath}
        title={title}
        onClick={onUsername}
      >
        {children ? children : 'Meg selv'}
      </TopBannerButton>
    );
  }
);

TopBannerUserButton.displayName = 'TopBannerUserButton';
