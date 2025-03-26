import React, { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { SelectOptionProps } from './SelectOption.types';

import styles from './SelectOption.module.scss';

export const SelectOption = ({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  value,
  children,
}: SelectOptionProps): JSX.Element => {
  return (
    <option
      ref={ref}
      lang={lang}
      id={externalId}
      className={`${styles.option} ${className}`.trim()}
      data-testid={dataTestId}
      value={value}
    >
      {children}
    </option>
  );
};

SelectOption.displayName = 'SelectOption';
