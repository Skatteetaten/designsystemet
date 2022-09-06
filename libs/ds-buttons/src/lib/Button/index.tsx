import { forwardRef } from 'react';

import ButtonProps from './Button.types';

import styles from './button.module.scss';

export const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      'data-testid': dataTestId = `testid-${id}`,
      children,
      variant,
      disabled = false,
      icon,
      onClick,
    },
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        className={variant ? styles[variant] : ''}
        id={id}
        data-testid={dataTestId}
        disabled={disabled}
        onClick={onClick}
      >
        {/* TODO implementere visning av ikoner */}
        {icon && <span className={styles.dsicon}>{'(I)'}</span>}
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
