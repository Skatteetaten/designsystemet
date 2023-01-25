import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getListHasIndentDefault, getListAsDefault } from './defaults';
import { ListProps, ListComponent, AnyHTMLListElement } from './List.types';
import { ListElement } from './ListElement';

import styles from './List.module.scss';

const List = forwardRef<AnyHTMLListElement, ListProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestid,
      as: Tag = getListAsDefault(),
      hasIndent = getListHasIndentDefault(),
      hasSpacing,
      children,
    },
    ref
  ): JSX.Element => {
    const bulletClassName = Tag === 'ul' ? styles['list_withBullet'] : '';
    const indentClassName = hasIndent ? styles['list_hasIndent'] : '';
    const spacingClassName = hasSpacing ? styles['list_hasSpacing'] : '';
    return (
      <Tag
        ref={ref as (instance: AnyHTMLListElement | null) => void}
        id={id}
        className={`${styles.list} ${bulletClassName} ${indentClassName} ${spacingClassName} ${className}`}
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

export { List, getListAsDefault, getListHasIndentDefault };
