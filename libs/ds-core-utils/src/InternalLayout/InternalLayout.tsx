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
        className={`${styles.layout} ${className}`}
      >
        <style>{storyBookCSSOverride}</style>
        <div className={`${styles.aside}`}>
          <p>
            <strong>{'Aside area'}</strong>
          </p>
        </div>
        <div className={`${styles.main}`}>
          <p>
            <strong>{'Main area'}</strong>
          </p>
          <article className={styles.article}>
            <p>
              <strong>{'Responsive article'}</strong>
              <br />
              {'(uses --semantic-responsive-article)'}
            </p>
          </article>
          <section className={styles.wideContent}>
            <p>
              <strong>{'Responsive wide-content'}</strong>
              <br />
              {'(uses --semantic-responsive-wide-content)'}
            </p>
          </section>
          <p>{'...'}</p>
        </div>
      </div>
      <p>
        {
          'The wrapper uses css-grid and manages the dimensions of aside and main, and the gaps between them. It uses:'
        }
      </p>
      <p>
        {'--semantic-responsive-internal-container-display'}
        <br />
        {'--semantic-responsive-internal-container-padding)'}
        <br />
        {'--semantic-responsive-internal-aside'}
      </p>
    </>
  );
};
