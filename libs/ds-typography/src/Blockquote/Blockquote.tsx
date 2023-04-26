import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BlockquoteProps } from './Blockquote.types';

import styles from './Blockquote.module.scss';

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      hasSpacing,
      children,
    },
    ref
  ): JSX.Element => {
    const spacingClassName = hasSpacing ? styles.blockquote_hasSpacing : '';
    return (
      <blockquote
        ref={ref}
        id={id}
        className={`${styles.blockquote} ${spacingClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';
