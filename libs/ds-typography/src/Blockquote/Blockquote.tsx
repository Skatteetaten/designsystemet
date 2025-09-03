import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BlockquoteProps } from './Blockquote.types';
import { getBlockquoteBorderColorDefault } from './defaults';

import styles from './Blockquote.module.scss';

export const Blockquote = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  canBeManuallyFocused,
  hasSpacing,
  borderColor = getBlockquoteBorderColorDefault(),
  children,
}: BlockquoteProps): JSX.Element => {
  const spacingClassName = hasSpacing ? styles.blockquote_hasSpacing : '';
  const borderColorClassName = borderColor
    ? styles[`blockquote_${borderColor}`]
    : '';
  return (
    <blockquote
      ref={ref}
      id={id}
      className={`${styles.blockquote} ${spacingClassName} ${borderColorClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
    >
      {children}
    </blockquote>
  );
};

Blockquote.displayName = 'Blockquote';

export { getBlockquoteBorderColorDefault };
