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
    const [isCurrentPage, setIsCurrentPage] = useState(false);
    const { itemCount, showLastItemAsCurrentPage } = useContext(
      BreadcrumbsListContext
    );

    const itemRef = useRef<HTMLLIElement>(null);

    useImperativeHandle(ref, () => itemRef.current as HTMLLIElement);

    useEffect(() => {
      if (itemRef.current?.nextSibling || !showLastItemAsCurrentPage) {
        setIsCurrentPage(false);
      } else {
        setIsCurrentPage(true);
      }
    }, [itemCount, showLastItemAsCurrentPage]);

    const concatenatedClassNames =
      `${styles.breadcrumbsItem} ${className}`.trim();

    return (
      <BreadcrumbsItemContext.Provider value={{ isCurrentPage }}>
        <li
          ref={itemRef}
          id={id}
          className={concatenatedClassNames}
          lang={lang}
          data-testid={dataTestId}
          aria-current={isCurrentPage ? 'page' : ariaCurrent}
        >
          {children}
        </li>
      </BreadcrumbsItemContext.Provider>
    );
  }
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';
