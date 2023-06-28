import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getParagraphVariantDefault } from './defaults';
import { ParagraphProps } from './Paragraph.types';

import styles from './Paragraph.module.scss';

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      variant = getParagraphVariantDefault(),
      hasSpacing,
      children,
    },
    ref
  ): JSX.Element => {
    let spacingClassName = '';
    if (hasSpacing) {
      if (variant === 'standard') {
        spacingClassName = styles.paragraph_hasSpacingLarge;
      } else if (variant === 'ingress') {
        spacingClassName = styles.paragraph_hasSpacingExtraLarge;
      }
    }
    const concatenatedClassName = `${styles.paragraph} ${
      styles[`paragraph_${variant}`]
    } ${spacingClassName} ${className}`;
    return (
      <p
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export { getParagraphVariantDefault };
