import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardContentProps } from './CardHeader.types';

import styles from './CardHeader.module.scss';

export const CardHeader = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
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
