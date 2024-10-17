import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { HeadingProps } from './Heading.types';

import styles from './Heading.module.scss';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      as: Tag,
      level,
      canBeManuallyFocused,
      hasSpacing,
      children,
    },
    ref
  ): JSX.Element => {
    const levelClassName = level ? styles[`heading_level${level}`] : '';
    let spacingClassName = '';
    if (hasSpacing) {
      if (level === 1) {
        spacingClassName = styles.heading_hasSpacingMedium;
      } else if (level === 2) {
        spacingClassName = styles.heading_hasSpacingSmallMobileMediumOtherwise;
      } else if (level === 3 || level === 4) {
        spacingClassName = styles.heading_hasSpacingSmall;
      } else if (level === 5) {
        spacingClassName = styles.heading_hasSpacingExtraSmall;
      }
    }
    return (
      <Tag
        ref={ref}
        id={id}
        className={`${styles.heading} ${levelClassName} ${spacingClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        tabIndex={canBeManuallyFocused ? -1 : undefined}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';
