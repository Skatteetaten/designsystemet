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
      onClick,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

    let buttonText = children;
    let roleSVGpath = PersonSVGpath;
    let title = '';
    if (role === 'meg') {
      buttonText = t('topbannerbutton.Myself');
      roleSVGpath = PersonSVGpath;
      title = t('topbannerbutton.MyselfTitle');
    } else if (role === 'virksomhet') {
      roleSVGpath = BriefcaseSVGpath;
      title = t('topbannerbutton.CompanyTitle');
    } else if (role === 'andre') {
      roleSVGpath = AccountMultipleSVGpath;
      title = t('topbannerbutton.OtherTitle');
    }

    return (
      <TopBannerButton
        ref={ref}
        id={id}
        className={className}
        classNames={
          role === 'meg'
            ? undefined
            : {
                container: styles.usernameButton,
                text: styles.usernameText,
              }
        }
        lang={lang}
        data-testid={dataTestId}
        variant={'filled'}
        svgPath={roleSVGpath}
        title={title}
        onClick={onClick}
      >
        {buttonText}
      </TopBannerButton>
    );
  }
);

TopBannerUserButton.displayName = 'TopBannerUserButton';
