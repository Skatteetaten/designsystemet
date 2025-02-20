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
        className={`${styles.cardHeader} ${className ?? ''}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        data-spacing={spacingVertical}
      >
        {children}
        {rightContent && (
          <div
            className={`${styles.rightContent} ${classNames?.rightContent ?? ''}`.trim()}
          >
            {rightContent}
          </div>
        )}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';
