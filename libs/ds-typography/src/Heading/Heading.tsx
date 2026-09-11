import { JSX } from 'react';

import { HeadingProps } from './Heading.types';

import styles from './Heading.module.scss';

/**
 * Heading
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/heading)
 */
export const Heading = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  as: Tag,
  level: externalLevel,
  canBeManuallyFocused = false,
  hasSpacing = false,
  children,
}: HeadingProps): JSX.Element => {
  const TAG_LEVEL_MAP: Record<string, number> = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 5,
  };

  const getLevelFromTag = (tag: string): number => TAG_LEVEL_MAP[tag];

  const level = externalLevel ?? getLevelFromTag(Tag);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.heading} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      data-level={level}
      data-has-spacing={hasSpacing ? 'true' : undefined}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
    >
      {children}
    </Tag>
  );
};

Heading.displayName = 'Heading';
