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
      spacingVertical,
      classNames,
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        id={id}
        className={`${styles.cardContent} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        data-spacing={spacingVertical}
      >
        <div className={classNames?.children}>{children}</div>
        {rightContent && (
          <div
            className={`${styles.rightContent} ${classNames?.rightContent ?? ''}`}
          >
            {rightContent}
          </div>
        )}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';
