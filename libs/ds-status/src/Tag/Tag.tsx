import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { getTagColorDefault, getTagSizeDefault } from './defaults';
import { TagProps } from './Tag.types';

import styles from './Tag.module.scss';

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      canBeManuallyFocused,
      color = getTagColorDefault(),
      size = getTagSizeDefault(),
      svgPath,
      children,
    },
    ref
  ): JSX.Element => {
    const variantClassName = styles[`tag_${color}`];
    const sizeClassName = styles[`tag_${size}`];

    return (
      <div
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={`${styles.tag} ${variantClassName} ${sizeClassName} ${className ?? ''}`.trim()}
        tabIndex={canBeManuallyFocused ? -1 : undefined}
      >
        {svgPath && (
          <div className={styles.iconWrapper} aria-hidden>
            <Icon className={styles.icon} svgPath={svgPath} />
          </div>
        )}
        {children}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export { getTagColorDefault, getTagSizeDefault };
