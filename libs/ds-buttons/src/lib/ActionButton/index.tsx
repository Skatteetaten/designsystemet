import { FC } from 'react';

import styles from './ActionButton.module.scss';

export const ActionButton: FC = (): any => {
  return (
    <div>
      <button className={styles['actionButton']}>{'Action!'}</button>
    </div>
  );
};

export default ActionButton;
