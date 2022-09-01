import { BaseProps } from '@skatteetaten/ds-core-devutils';

import styles from './button.module.scss';

export function Button({
  id,
  'data-testid': dataTestId,
}: BaseProps): JSX.Element {
  return (
    <div id={id} data-testid={dataTestId} className={styles.test}>
      <h1>{'Welcome to awesome Button!'}</h1>
    </div>
  );
}

export default Button;
