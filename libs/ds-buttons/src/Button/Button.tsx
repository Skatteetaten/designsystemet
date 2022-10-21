/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef } from 'react';

import {
  getButtonVariantDefault,
  getCommonDisabledDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      children,
      variant = getButtonVariantDefault(),
      disabled = getCommonDisabledDefault(),
      svgPath,
      tabIndex,
      accessKey,
      'data-testid': dataTestId,
      ariaDescribedby,
      onClick,
      onBlur,
      onFocus,
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
        disabled={disabled}
        aria-describedby={ariaDescribedby}
        accessKey={accessKey}
        tabIndex={tabIndex}
        onClick={onClick}
        onBlur={onBlur}
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

export {
  getButtonVariantDefault,
  getCommonDisabledDefault,
  getCommonClassNameDefault,
};
