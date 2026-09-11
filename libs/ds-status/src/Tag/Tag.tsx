import { JSX } from 'react';

import { Icon } from '@skatteetaten/ds-icons';

import { TagProps } from './Tag.types';

import styles from './Tag.module.scss';

/**
 * Tag
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/tag)
 */
export const Tag = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  canBeManuallyFocused = false,
  color = 'ochre',
  size = 'medium',
  svgPath,
  children,
}: TagProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={`${styles.tag} ${className}`.trim()}
      tabIndex={canBeManuallyFocused ? -1 : undefined}
      data-color={color}
      data-size={size}
    >
      {svgPath && (
        <Icon className={styles.icon} svgPath={svgPath} size={'small'} />
      )}
      {children}
    </div>
  );
};

Tag.displayName = 'Tag';
