import { JSX } from 'react';

import { CardContentProps } from './CardContent.types';

import styles from './CardContent.module.scss';

export const CardContent = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  rightContent,
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
