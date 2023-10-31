import { forwardRef } from 'react';

import { BaseProps } from '../base-props.types';
import { getCommonClassNameDefault } from '../defaults';

import styles from './Separator.module.scss';

export const Separator = forwardRef<HTMLDivElement, BaseProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
    },
    ref
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        id={id}
        className={`${styles.separator} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
      >
        <div className={styles.separatorRight}></div>
        <div className={styles.separatorLeft}></div>
      </div>
    );
  }
);

Separator.displayName = 'Separator';
