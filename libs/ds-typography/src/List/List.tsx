import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getListAsDefault } from './defaults';
import { ListProps, ListComponent, AnyHTMLListElement } from './List.types';
import { ListElement } from './ListElement';

import styles from './List.module.scss';

export const List = forwardRef<AnyHTMLListElement, ListProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestid,
      as: Tag = getListAsDefault(),
      hasSpacing,
      children,
    },
    ref
  ): JSX.Element => {
    const bulletClassName = Tag === 'ul' ? styles.list_withBullet : '';
    const spacingClassName = hasSpacing ? styles.list_hasSpacing : '';
    return (
      <Tag
        ref={ref as (instance: AnyHTMLListElement | null) => void}
        id={id}
        className={`${styles.list} ${bulletClassName} ${spacingClassName} ${className}`}
        lang={lang}
        data-testid={dataTestid}
      >
        {children}
      </Tag>
    );
  }
) as ListComponent;

List.displayName = 'List';
List.Element = ListElement;

export { getListAsDefault };
