import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardContentProps } from './CardContent.types';

import styles from './CardContent.module.scss';

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
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
        className={`${className} ${styles.cardContent}`}
        lang={lang}
        data-testid={dataTestId}
        data-spacing={spacing}
      >
        <div>{children}</div>
        {rightContent && (
          <div className={styles.rightContent}>{rightContent}</div>
        )}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';
