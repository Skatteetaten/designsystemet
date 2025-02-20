import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsItemProps } from './BreadcrumbsItem.types';
import { BreadcrumbsItemContext } from '../BreadcrumbsItemContext/BreadcrumbsItemContext';
import { BreadcrumbsListContext } from '../BreadcrumbsListContext/BreadcrumbsListContext';

import styles from './BreadcrumbsItem.module.scss';

export const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      ariaCurrent,
      children,
    },
    ref
  ) => {
    const [isLastItem, setIsLastItem] = useState(false);
    const { itemCount, showLastItemAsCurrentPage } = useContext(
      BreadcrumbsListContext
    );

    const itemRef = useRef<HTMLLIElement>(null);

    useImperativeHandle(ref, () => itemRef.current as HTMLLIElement);

    useEffect(() => {
      if (itemRef.current?.nextSibling) {
        setIsLastItem(false);
      } else {
        setIsLastItem(true);
      }
    }, [itemCount, showLastItemAsCurrentPage]);

    const concatenatedClassNames =
      `${styles.breadcrumbsItem} ${className ?? ''}`.trim();

    const displayAsCurrentPage = isLastItem && showLastItemAsCurrentPage;

    return (
      <BreadcrumbsItemContext.Provider
        value={{
          displayAsCurrentPage: isLastItem && showLastItemAsCurrentPage,
        }}
      >
        <li
          ref={itemRef}
          id={id}
          className={concatenatedClassNames}
          lang={lang}
          data-testid={dataTestId}
          aria-current={displayAsCurrentPage ? 'page' : ariaCurrent}
        >
          {children}
          {!isLastItem && (
            <span className={styles.separator} aria-hidden={'true'}>
              {'/'}
            </span>
          )}
        </li>
      </BreadcrumbsItemContext.Provider>
    );
  }
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';
