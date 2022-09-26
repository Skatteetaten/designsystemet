import { BaseProps } from '../base-props.types';

import styles from './InternalLayout.module.scss';

export const InternalLayout: (props: BaseProps) => JSX.Element = ({
  id,
  className = '',
  'data-testid': dataTestId,
}) => {
  return (
    <>
      <div
        id={id}
        data-testid={dataTestId}
        className={`${styles.layout} ${className}`}
      >
        <div className={`${styles.aside}`}>
          <p>{'Aside area'}</p>
        </div>
        <div className={`${styles.main}`}>
          <p>{'Main area'}</p>
          <article className={styles.article}>
            <p>{'Responsive article'}</p>
            <p>{'(uses --semantic-responsive-article)'}</p>
          </article>
          <section className={styles.wideContent}>
            {'Responsive wide-content'}
            <p>{'(uses --semantic-responsive-wide-content)'}</p>
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

export default InternalLayout;
