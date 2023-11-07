import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './SKESquare40.svg';
import { BaseProps } from '../base-props.types';
import { getCommonClassNameDefault } from '../defaults';
import { dsI18n } from '../i18n';

import styles from './SkatteetatenLogo.module.scss';

export const SkatteetatenLogo = forwardRef<HTMLImageElement, BaseProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });

    return (
      <img
        ref={ref}
        id={id}
        className={`${styles.logo} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        src={logo}
        alt={t('shared.SkeLogoImageText')}
      />
    );
  }
);

SkatteetatenLogo.displayName = 'SkatteetatenLogo';
