import { FC } from 'react';

import styles from './ActionButton.module.scss';

export const ActionButton: FC = (): JSX.Element => {
  return (
    <div>
      <button className={styles.actionButton}>{'Action!'}</button>
    </div>
  );
};

export default ActionButton;
