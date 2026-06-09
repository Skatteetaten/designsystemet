import { JSX } from 'react';

import { ListElementProps } from './ListElement.types';

import styles from './ListElement.module.scss';

export const ListElement = ({
  ref,
  id,
  className = '',
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
