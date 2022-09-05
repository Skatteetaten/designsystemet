import ButtonProps from './Button.types';

import styles from './button.module.scss';

export const Button = ({
  knappetekst = 'Knappetekst',
  buttonStyle,
}: ButtonProps): JSX.Element => {
  // const BStyle = buttonStyle ? styles[buttonStyle] : '';
  return (
    <button className={buttonStyle ? styles[buttonStyle] : ''}>
      {knappetekst}
    </button>
  );
};

Button.defaultProps = {
  knappetekst: 'Standardtekst på knapp',
  icon: 'checkbox',
};

export default Button;
