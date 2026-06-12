import { JSX } from 'react';

import { BaseProps } from '../base-props.types';

import styles from './ExternalLayout.module.scss';

export const ExternalLayout: (props: BaseProps) => JSX.Element = ({
  id,
  className = '',
  'data-testid': dataTestId,
}) => {
  return (
    <div
      id={id}
      data-testid={dataTestId}
      className={`${styles.externalLayout} ${className}`.trim()}
    >
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}></div>
          <div className={styles.headerGrid}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      <main className={styles.main} tabIndex={-1}>
        <section className={styles.responsiveContainer}>
          {'--semantic-responsive-container'}
        </section>
        <section className={styles.responsiveWideContent}>
          {'--semantic-responsive-wide-content'}
        </section>
        <section className={styles.responsiveArticle}>
          {'--semantic-responsive-article'}
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </div>
  );
};
