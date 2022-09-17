import React, { forwardRef } from 'react';

import ButtonProps from './Button.types';

import styles from './button.module.scss';

export const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      //TODO Gjennomgang av properties
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
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
    },
    ref
  ): JSX.Element => {
    const cssName = `${styles.button} ${
      styles[`button_${variant}`]
    } ${className}`;
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
        aria-labelledby={ariaLabelledby}
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
