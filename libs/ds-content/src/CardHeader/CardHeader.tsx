import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardContentProps } from './CardHeader.types';

import styles from './CardHeader.module.scss';

export const CardHeader = forwardRef<HTMLDivElement, CardContentProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      rightContent,
      spacing,
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        id={id}
        className={`${className} ${styles.cardHeader}`}
        lang={lang}
        data-testid={dataTestId}
        data-spacing={spacing}
      >
        {children}
        {rightContent && (
          <div className={styles.rightContent}>{rightContent}</div>
        )}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';
