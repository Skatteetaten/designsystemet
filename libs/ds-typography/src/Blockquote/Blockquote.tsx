import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BlockquoteProps } from './Blockquote.types';
import { getBlockquoteBorderColorDefault } from './defaults';

import styles from './Blockquote.module.scss';

/**
 * Blockquote
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-blockquote--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/typography/#blockquote) - Brukerveiledning
 */
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
