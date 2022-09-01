import ButtonProps from './Button.types';

import styles from './button.module.scss';

export const Button = ({
  knappetekst = 'Knappetekst',
  buttonStyle,
}: ButtonProps): JSX.Element => {
  // const BStyle = buttonStyle ? styles[buttonStyle] : '';
  return (
    <>
      <button className={buttonStyle ? styles[buttonStyle] : ''}>
        {knappetekst}
      </button>
      {/* Start debuginfo during developmend */}
      <hr />
      {'Valgt buttonStyle :'} {buttonStyle}
      <br />
      {buttonStyle ? styles[buttonStyle] : ''}
      {/* End debuginfo during developmend */}
    </>
  );
};

Button.defaultProps = {
  knappetekst: 'StandardKnappTekst',
  icon: 'checkbox',
};

export default Button;
