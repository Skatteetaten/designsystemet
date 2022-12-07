/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef } from 'react';

import {
  getCommonDisabledDefault,
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
      'data-testid': dataTestId,
      svgPath,
      variant = getButtonVariantDefault(),
      accessKey,
      disabled = getCommonDisabledDefault(),
      ariaDescribedby,
      onBlur,
      onClick,
      onFocus,
      children,
    },
    ref
  ): JSX.Element => {
    const withIconClassName = svgPath ? `${styles.button_withIcon}` : '';
    const concatenatedClassName = `${styles.button} ${
      styles[`button_${variant}`]
    } ${withIconClassName} ${className}`;
    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        data-testid={dataTestId}
        accessKey={accessKey}
        disabled={disabled}
        aria-describedby={ariaDescribedby}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {svgPath && (
          <span className={styles.icon}>
            <Icon svgPath={svgPath} />
          </span>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { getButtonVariantDefault };
