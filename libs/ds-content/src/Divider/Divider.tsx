import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  getDividerSpacingBottomDefault,
  getDividerSpacingTopDefault,
  getDividerVariantDefault,
} from './defaults';
import { DividerProps } from './Divider.types';

import styles from './Divider.module.scss';

export const Divider = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  variant = getDividerVariantDefault(),
  spacingTop = getDividerSpacingTopDefault(),
  spacingBottom = getDividerSpacingBottomDefault(),
  ariaHidden,
}: DividerProps): JSX.Element => {
  const concatenatedClassName = `${styles.divider} ${className}`.trim();
  return (
    <hr
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={concatenatedClassName}
      aria-hidden={ariaHidden}
      data-variant={variant}
      data-spacing-top={spacingTop}
      data-spacing-bottom={spacingBottom}
    />
  );
};
