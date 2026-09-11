import { JSX } from 'react';

import { ParagraphProps } from './Paragraph.types';

import styles from './Paragraph.module.scss';

/**
 * Paragraph
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/paragraph)
 */
export const Paragraph = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  variant = 'standard',
  canBeManuallyFocused = false,
  hasSpacing = false,
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
