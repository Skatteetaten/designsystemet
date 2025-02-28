import { JSX, Ref } from 'react';

import { BaseProps } from '../base-props.types';
import { getCommonClassNameDefault } from '../defaults';

import styles from './Separator.module.scss';

export const Separator = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
}: BaseProps & {
  ref?: Ref<HTMLDivElement>;
}): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.separator} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      <div className={styles.separatorLeft}></div>
      <div className={styles.separatorRight}></div>
    </div>
  );
};

Separator.displayName = 'Separator';
