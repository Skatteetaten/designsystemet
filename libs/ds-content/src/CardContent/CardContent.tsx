import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardContentProps } from './CardContent.types';

import styles from './CardContent.module.scss';

export const CardContent = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  rightContent,
  spacingVertical,
  classNames,
  children,
}: CardContentProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.cardContent} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      data-spacing={spacingVertical}
    >
      <div className={classNames?.children}>{children}</div>
      {rightContent && (
        <div
          className={`${styles.rightContent} ${classNames?.rightContent ?? ''}`.trim()}
        >
          {rightContent}
        </div>
      )}
    </div>
  );
};

CardContent.displayName = 'CardContent';
