import { forwardRef } from 'react';

import { Icon } from '@skatteetaten/ds-icons';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      className = '',
      children,
      variant = 'primary',
      disabled = false,
      iconProps,
      tabIndex,
      'data-testid': dataTestId,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const withicon = iconProps ? `${styles.button_withicon}` : '';
    const cssName = `${styles.button} ${
      styles[`button_${variant}`]
    } ${withicon} ${className}`;
    return (
      <button
        ref={ref}
        id={id}
        className={cssName}
        data-testid={dataTestId}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-describedby={ariaDescribedby}
        tabIndex={tabIndex}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {iconProps && (
          <span className={styles.icon}>
            <Icon {...iconProps} aria-label={undefined} />
          </span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
// TODO FRONT-918 Avklare bruk av default / named exports
export default Button;
