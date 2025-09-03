import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BlockquoteProps } from './Blockquote.types';

import styles from './Blockquote.module.scss';

export const Blockquote = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  canBeManuallyFocused,
  hasSpacing,
  borderColor = 'Ochre',
  hideBorder,
  children,
}: BlockquoteProps): JSX.Element => {
  const spacingClassName = hasSpacing ? styles.blockquote_hasSpacing : '';
  const hideBorderClassName = hideBorder ? styles.blockquote_hideBorder : '';
  const borderColorClassName =
    !hideBorder && borderColor
      ? styles[`blockquote_borderColor${borderColor}`]
      : '';
  return (
    <blockquote
      ref={ref}
      id={id}
      className={`${styles.blockquote} ${spacingClassName} ${hideBorderClassName} ${borderColorClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
    >
      {children}
    </blockquote>
  );
};

Blockquote.displayName = 'Blockquote';
