import { JSX } from 'react';

import { BaseProps } from '../base-props.types';

import styles from './InternalLayout.module.scss';

export const InternalLayout: (props: BaseProps) => JSX.Element = ({
  id,
  className = '',
  'data-testid': dataTestId,
}) => {
  return (
    <div
      id={id}
      data-testid={dataTestId}
      className={`${styles.wrapper} ${className}`.trim()}
    >
      <aside className={styles.aside}>
        <p className={styles.asideContent}>
          <strong>{'Aside area'}</strong>
        </p>
      </aside>
      <main className={styles.main}>
        <p className={styles.mainContent}>
          <strong>{'Main area'}</strong>
        </p>
      </main>
    </div>
  );
};
