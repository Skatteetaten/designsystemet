import { FC } from 'react';

import styles from './ActionButton.module.scss';

export const ActionButton: FC = () => {
  return (
    <div className={styles.actionButtonTest}>
      <button className={styles.actionButton}>{'Action!'}</button>
    </div>
  );
};

export default ActionButton;
