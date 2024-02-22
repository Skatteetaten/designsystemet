/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef, JSX } from 'react';

import {
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';
import { Spinner, SpinnerColor } from '@skatteetaten/ds-progress';

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
      spinnerTitle,
      svgPath,
      variant = getButtonVariantDefault(),
      accessKey,
      disabled,
      type = getCommonButtonTypeDefault(),
      ariaDescribedby,
      ariaCurrent,
      hasSpinner,
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
        aria-current={ariaCurrent}
        aria-describedby={ariaDescribedby}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {svgPath && (
          <span className={`${styles.iconWrapper} ${hideClassName}`.trim()}>
            <Icon className={styles.icon} svgPath={svgPath} />
          </span>
        )}
        <span className={`${styles.buttonText} ${hideClassName}`.trim()}>
          {children}
        </span>
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
      </button>
    );
  }
);
Button.displayName = 'Button';

export { getButtonVariantDefault };
