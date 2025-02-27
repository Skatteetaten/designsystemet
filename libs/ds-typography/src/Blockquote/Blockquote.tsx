import { forwardRef, JSX } from 'react';

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
      canBeManuallyFocused,
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
        className={`${styles.blockquote} ${spacingClassName} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        tabIndex={canBeManuallyFocused ? -1 : undefined}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';
