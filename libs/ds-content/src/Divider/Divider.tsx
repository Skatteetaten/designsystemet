import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  getDividerSpacingBottomDefault,
  getDividerSpacingTopDefault,
} from './defaults';
import { DividerProps } from './Divider.types';

import styles from './Divider.module.scss';

export const Divider = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  subtle,
  spacingTop = getDividerSpacingTopDefault(),
  spacingBottom = getDividerSpacingBottomDefault(),
  ariaHidden,
}: DividerProps): JSX.Element => {
  const concatenatedClassName =
    `${styles.divider} ${subtle ? styles.divider_subtle : ''} ${className}`.trim();
  return (
    <hr
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={concatenatedClassName}
      aria-hidden={ariaHidden}
      data-spacing-top={spacingTop}
      data-spacing-bottom={spacingBottom}
    />
  );
};

export { getDividerSpacingTopDefault, getDividerSpacingBottomDefault };
