//import { BaseProps } from '@skatteetaten/ds-core-devutils';

import styles from './button.module.scss';

interface BaseProps {
  id?: string;
  dataTestId?: string;
}

export function Button({ id, dataTestId }: BaseProps): JSX.Element {
  return (
    <div id={id} data-testid={dataTestId} className={styles.test}>
      <h1>{'Welcome to awesome Button!'}</h1>
    </div>
  );
}

export default Button;
