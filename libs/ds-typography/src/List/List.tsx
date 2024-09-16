import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getListAsDefault } from './defaults';
import { ListProps, ListComponent, AnyHTMLListElement } from './List.types';
import { ListElement } from '../ListElement/ListElement';

import styles from './List.module.scss';

export const List = forwardRef<AnyHTMLListElement, ListProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      as: Tag = getListAsDefault(),
      canBeManuallyFocused,
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
        data-testid={dataTestId}
        tabIndex={canBeManuallyFocused ? -1 : undefined}
      >
        {children}
      </Tag>
    );
  }
) as ListComponent;

List.displayName = 'List';
List.Element = ListElement;
List.Element.displayName = 'List.Element';

export { getListAsDefault };
