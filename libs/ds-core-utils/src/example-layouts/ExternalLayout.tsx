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
      className={`${styles.layout} ${className}`}
    >
      <p>{'Responsive container'}</p>

      <article className={styles.article}>
        <p>{'Responsive article'}</p>
        <p>{'(uses --semantic-responsive-article)'}</p>
      </article>
      <p>{'(uses --semantic-responsive-container)'}</p>
    </div>
  );
};

export default ExternalLayout;
