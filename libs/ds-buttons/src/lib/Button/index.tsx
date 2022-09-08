import { forwardRef } from 'react';

import ButtonProps from './Button.types';

import styles from './button.module.scss';

export const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      //TODO Gjennomgang av properties vil skal tilby
      id,
      'data-testid': dataTestId = `testid-${id ? id : 'noid'}`,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      children,
      variant,
      disabled = false,
      icon,
      onClick,
      className = '',
    },
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        className={`${variant ? styles[variant] : ''} ${className}`}
        id={id}
        data-testid={dataTestId}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
      >
        {/* TODO implementere visning av ikoner */}
        {icon && <span className={styles.dsicon}>{'\u262F'}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
Button.defaultProps = {
  children: 'Standardtekst på knapp',
  disabled: false,
  variant: 'primary',
};

export default Button;
