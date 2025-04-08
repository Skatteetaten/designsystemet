import { JSX } from 'react';

import { BaseProps } from '../base-props.types';

import styles from './InternalLayout.module.scss';

export const InternalLayout: (props: BaseProps) => JSX.Element = ({
  id,
  className = '',
  'data-testid': dataTestId,
}) => {
  const storyBookCSSOverride = `
  div.css-1gh4yjl { max-width: none}
  `;
  return (
    <>
      <div
        id={id}
        data-testid={dataTestId}
        className={`${styles.wrapper} ${className}`.trim()}
      >
        <style>{storyBookCSSOverride}</style>
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
      <p className={styles.paragraph}>
        {
          'Wrapperen bruker flexbox og håndterer organiseringen av aside og main, samt avstanden mellom dem. Den bruker:'
        }
      </p>
      <p className={styles.paragraph}>
        {'.wrapper {'}
        <br />
        {'display: var(--semantic-responsive-internal-container-display);'}
        <br />
        {
          'flex-direction: var(--semantic-responsive-internal-container-flex-direction);'
        }
        <br />
        {'gap: var(--semantic-responsive-internal-container-spacing);'}
        <br />
        {'padding: var(--semantic-responsive-internal-container-spacing);'}
        <br />
        {'}'}
      </p>
      <p className={styles.paragraph}>
        {'.aside {'}
        <br />
        {'flex: 0 0 var(--semantic-responsive-internal-aside);'}
        <br />
        {'}'}
      </p>
      <p className={styles.paragraph}>
        {'.main {'}
        <br />
        {'flex: 1;'}
        <br />
        {'}'}
      </p>
    </>
  );
};
