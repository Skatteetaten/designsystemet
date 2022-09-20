import { forwardRef } from 'react';

import { ButtonProps } from './Button.types';

import styles from './button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      className = '',
      children = 'Klikk her',
      variant = 'primary',
      disabled = false,
      icon,
      onClick,
      onBlur,
      onFocus,
      tabIndex,
      'data-testid': dataTestId,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
    },
    ref
  ): JSX.Element => {
    const withicon = icon ? `${styles.button_withicon}` : '';
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
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-describedby={ariaDescribedby}
        tabIndex={tabIndex}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
// TODO sjekk default / named
export default Button;
