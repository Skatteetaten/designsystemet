import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { getTagColorDefault, getTagSizeDefault } from './defaults';
import { TagProps } from './Tag.types';

import styles from './Tag.module.scss';

export const Tag = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  canBeManuallyFocused,
  color = getTagColorDefault(),
  size = getTagSizeDefault(),
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
        <div className={styles.iconWrapper} aria-hidden>
          <Icon className={styles.icon} svgPath={svgPath} size={'small'} />
        </div>
      )}
      {children}
    </div>
  );
};

Tag.displayName = 'Tag';

export { getTagColorDefault, getTagSizeDefault };
