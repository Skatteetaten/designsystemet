import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { ListElementProps } from './ListElement.types';

import styles from './ListElement.module.scss';

export const ListElement = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  children,
}: ListElementProps): JSX.Element => {
  return (
    <li
      ref={ref}
      id={id}
      className={`${styles.element} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      {children}
    </li>
  );
};

ListElement.displayName = 'ListElement';
