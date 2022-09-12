import { forwardRef } from 'react';

import ButtonProps from './Button.types';

import styles from './button.module.scss';

// type SType = keyof typeof styles;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      tabIndex,
      'data-testid': dataTestId = `testid-${id ? id : 'noid'}`,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
    },
    ref
  ): JSX.Element => {
    // const fullStyleName = `button_${variant}` as SType; // Brukt med styles[fullStyleName]
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
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        tabIndex={tabIndex}
      >
        {/* TODO implementere visning av ikoner */}
        {icon && <span className={styles.dsicon}>{'\u262F'}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
