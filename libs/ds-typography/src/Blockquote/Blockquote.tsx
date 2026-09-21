import { JSX } from 'react';

import { BlockquoteProps } from './Blockquote.types';

import styles from './Blockquote.module.scss';

/**
 * Blockquote
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/blockquote)
 */
export const Blockquote = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  canBeManuallyFocused = false,
  hasSpacing = false,
  borderColor = 'ochre',
  children,
}: BlockquoteProps): JSX.Element => {
  return (
    <blockquote
      ref={ref}
      id={id}
      className={`${styles.blockquote} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
      data-border-color={borderColor}
      data-has-spacing={hasSpacing ? true : undefined}
    >
      {children}
    </blockquote>
  );
};

Blockquote.displayName = 'Blockquote';
