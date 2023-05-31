/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef } from 'react';

import {
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { ButtonProps } from './Button.types';
import { getButtonVariantDefault } from './defaults';

import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      svgPath,
      variant = getButtonVariantDefault(),
      accessKey,
      disabled,
      type = getCommonButtonTypeDefault(),
      ariaDescribedby,
      onBlur,
      onClick,
      onFocus,
      children,
    },
    ref
  ): JSX.Element => {
    const withIconClassName = svgPath ? styles.button_withIcon : '';
    const concatenatedClassName = `${styles.button} ${
      styles[`button_${variant}`]
    } ${withIconClassName} ${className}`;
    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        accessKey={accessKey}
        disabled={disabled}
        type={type}
        aria-describedby={ariaDescribedby}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {svgPath && (
          <span className={styles.iconWrapper}>
            <Icon className={styles.icon} svgPath={svgPath} />
          </span>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { getButtonVariantDefault };
