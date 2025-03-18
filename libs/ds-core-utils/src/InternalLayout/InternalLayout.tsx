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
      <p>
        {
          'The wrapper uses flexbox and manages the organization of aside and main, and the gaps between them. It uses:'
        }
      </p>
      <p>
        {'.wrapper {'}
        <br />
        {'display: var(--semantic-responsive-internal-container-display);'}
        <br />
        {
          'flex-direction: var(--semantic-responsive-internal-container-flex-direction);'
        }
        <br />
        {'gap: var(--semantic-responsive-internal-container-padding);'}
        <br />
        {'padding: var(--semantic-responsive-internal-container-padding);'}
        <br />
        {'}'}
      </p>
      <p>
        {'.aside {'}
        <br />
        {'flex: 0 0 var(--semantic-responsive-internal-aside);'}
        <br />
        {'}'}
      </p>
      <p>
        {'.main {'}
        <br />
        {'flex: 1;'}
        <br />
        {'}'}
      </p>
    </>
  );
};
