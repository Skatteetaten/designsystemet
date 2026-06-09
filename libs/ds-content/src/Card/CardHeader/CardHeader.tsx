import { JSX } from 'react';

import { CardContentProps } from './CardHeader.types';

import styles from './CardHeader.module.scss';

export const CardHeader = ({
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
      className={`${styles.cardHeader} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
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
};

CardHeader.displayName = 'CardHeader';
