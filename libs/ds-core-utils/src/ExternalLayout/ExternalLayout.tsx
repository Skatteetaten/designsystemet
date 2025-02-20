import { JSX } from 'react';

import { BaseProps } from '../base-props.types';

import styles from './ExternalLayout.module.scss';

export const ExternalLayout: (props: BaseProps) => JSX.Element = ({
  id,
  className = '',
  'data-testid': dataTestId,
}) => {
  const storyBookCSSOverride = `
  div.css-1gh4yjl { max-width: none}
  `;
  return (
    <div
      id={id}
      data-testid={dataTestId}
      className={`${styles.layout} ${className ?? ''}`.trim()}
    >
      <style>{storyBookCSSOverride}</style>
      <p>
        <strong>{'Responsive container'}</strong>
      </p>
      <article className={styles.article}>
        <p>
          <strong>{'Responsive article'}</strong>
        </p>
        <p>{'(uses --semantic-responsive-article)'}</p>
      </article>
      <p>{'(uses --semantic-responsive-container)'}</p>
    </div>
  );
};
