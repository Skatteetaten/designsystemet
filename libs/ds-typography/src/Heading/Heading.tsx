import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { HeadingProps } from './Heading.types';

import styles from './Heading.module.scss';

/**
 * Heading
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-heading--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/typography/#heading) - Brukerveiledning
 */
export const Heading = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  as: Tag,
  level,
  canBeManuallyFocused,
  hasSpacing,
  children,
}: HeadingProps): JSX.Element => {
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
      className={`${styles.heading} ${levelClassName} ${spacingClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
    >
      {children}
    </Tag>
  );
};

Heading.displayName = 'Heading';
