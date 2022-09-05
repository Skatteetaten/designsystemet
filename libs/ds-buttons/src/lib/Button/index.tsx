import ButtonProps from './Button.types';

import styles from './button.module.scss';

export function Button({
  id,
  'data-testid': dataTestId,
  knappetekst = 'Knappetekst',
  buttonStyle,
  disabled,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={buttonStyle ? styles[buttonStyle] : ''}
      id={id}
      data-testid={dataTestId}
      disabled={disabled}
    >
      {knappetekst}
    </button>
  );
}

Button.defaultProps = {
  knappetekst: 'Standardtekst på knapp',
  icon: 'checkbox',
  disabled: false,
};

export default Button;
