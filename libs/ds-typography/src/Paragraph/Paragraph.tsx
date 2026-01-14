import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getParagraphVariantDefault } from './defaults';
import { ParagraphProps } from './Paragraph.types';

import styles from './Paragraph.module.scss';

/**
 * Paragraph
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-paragraph--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/typography/#paragraph) - Brukerveiledning
 */
export const Paragraph = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  variant = getParagraphVariantDefault(),
  canBeManuallyFocused,
  hasSpacing,
  children,
}: ParagraphProps): JSX.Element => {
  return (
    <p
      ref={ref}
      id={id}
      className={`${styles.paragraph} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      data-ingress={variant === 'ingress' ? 'true' : undefined}
      data-has-spacing={hasSpacing ? 'true' : undefined}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
    >
      {children}
    </p>
  );
};

Paragraph.displayName = 'Paragraph';
