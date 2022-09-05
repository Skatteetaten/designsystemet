import ButtonProps from './Button.types';

import styles from './button.module.scss';

export function Button({
  id,
  'data-testid': dataTestId,
  knappetekst = 'Knappetekst',
  buttonStyle,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={buttonStyle ? styles[buttonStyle] : ''}
      id={id}
      data-testid={dataTestId}
    >
      {knappetekst}
    </button>
  );
}

Button.defaultProps = {
  knappetekst: 'Standardtekst på knapp',
  icon: 'checkbox',
};

export default Button;
