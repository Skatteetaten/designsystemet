import styles from './ActionButton.module.scss';
import { FC } from 'react';

export const ActionButton: FC = () => {
  return (
    <div>
      <button className={styles['actionButton']}>Action!</button>
    </div>
  );
};

export default ActionButton;
