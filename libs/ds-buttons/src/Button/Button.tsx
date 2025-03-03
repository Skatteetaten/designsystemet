import { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { ExternalIcon, Icon } from '@skatteetaten/ds-icons';
import { Spinner, SpinnerColor } from '@skatteetaten/ds-progress';

import { ButtonProps } from './Button.types';
import { getButtonVariantDefault } from './defaults';

import styles from './Button.module.scss';

export const Button = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  spinnerTitle,
  svgPath,
  variant = getButtonVariantDefault(),
  accessKey,
  disabled,
  form,
  href,
  type = getCommonButtonTypeDefault(),
  ariaDescribedby,
  ariaCurrent,
  hasSpinner,
  isExternal,
  onBlur,
  onClick,
  onFocus,
  children,
}: ButtonProps): JSX.Element => {
  const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
  const withIconClassName =
    !isExternal && svgPath ? styles.button_withIcon : '';
  const withIconRightClassName = isExternal ? styles.button_withIconRight : '';
  const concatenatedClassName = `${styles.button} ${
    styles[`button_${variant}`]
  } ${withIconClassName} ${withIconRightClassName} ${className}`.trim();
  const hideClassName = hasSpinner ? styles.hide : '';
  const getSpinnerColor = (): SpinnerColor => {
    if (disabled) {
      return 'black';
    } else if (variant === 'primary') {
      return 'white';
    } else if (variant === 'danger') {
      return 'black';
    } else {
      return 'blue';
    }
  };

  const Tag = href !== undefined ? 'a' : 'button';

  return (
    <Tag
      ref={
        ref as (instance: HTMLButtonElement | HTMLAnchorElement | null) => void
      }
      id={id}
      className={concatenatedClassName}
      lang={lang}
      data-testid={dataTestId}
      accessKey={accessKey}
      disabled={disabled}
      href={href}
      form={form}
      type={href !== undefined ? undefined : type}
      aria-current={ariaCurrent}
      aria-describedby={ariaDescribedby}
      role={href ? 'button' : undefined}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
    >
      {!isExternal && svgPath && (
        <span className={`${styles.iconWrapper} ${hideClassName}`.trim()}>
          <Icon className={styles.icon} svgPath={svgPath} />
        </span>
      )}
      <span className={`${styles.buttonText} ${hideClassName}`.trim()}>
        {children}
      </span>
      {isExternal && (
        <span className={`${styles.iconWrapper} ${hideClassName}`.trim()}>
          <ExternalIcon
            className={`${styles.icon} ${styles.iconExternal} ${hideClassName}`.trim()}
            ariaLabel={t('shared.ExternalIcon')}
          />
        </span>
      )}
      {hasSpinner && (
        <Spinner
          className={styles.spinner}
          color={getSpinnerColor()}
          size={'small'}
          hideTitle
        >
          {spinnerTitle}
        </Spinner>
      )}
    </Tag>
  );
};
Button.displayName = 'Button';

export { getButtonVariantDefault };
