import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { DividerProps } from './Divider.types';

import styles from './Divider.module.scss';

export const Divider = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
}: DividerProps): JSX.Element => {
  const concatenatedClassName = `${styles.divider} ${className}`.trim();
  return <hr ref={ref} className={concatenatedClassName} id={id} lang={lang} />;
};
