import { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { ExternalIcon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

import { MegaButtonProps } from './MegaButton.types';

import styles from './MegaButton.module.scss';

/**
 * MegaButton
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-megabutton--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/megabutton/) - Brukerveiledning
 */
export const MegaButton = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  spinnerTitle,
  accessKey,
  disabled,
  href,
  type = getCommonButtonTypeDefault(),
  ariaDescribedby,
  hasSpinner,
  isExternal,
  onBlur,
  onClick,
  onFocus,
  children,
}: MegaButtonProps): JSX.Element => {
  const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
  const Tag = href !== undefined ? 'a' : 'button';
  const hideClassName = hasSpinner ? styles.hide : '';
  return (
    <Tag
      ref={
        ref as (instance: HTMLButtonElement | HTMLAnchorElement | null) => void
      }
      id={id}
      className={`${styles.button} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      href={href}
      accessKey={accessKey}
      disabled={disabled}
      type={href !== undefined ? undefined : type}
      aria-describedby={ariaDescribedby}
      role={href ? 'button' : undefined}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
    >
      <span className={hideClassName}>{children}</span>
      {isExternal && (
        <ExternalIcon
          className={`${styles.icon} ${hideClassName}`.trim()}
          ariaLabel={t('shared.ExternalIcon')}
        />
      )}
      {hasSpinner && (
        <Spinner
          className={styles.spinner}
          color={disabled ? 'black' : 'white'}
          size={'large'}
          hideTitle
        >
          {spinnerTitle}
        </Spinner>
      )}
    </Tag>
  );
};

MegaButton.displayName = 'MegaButton';
