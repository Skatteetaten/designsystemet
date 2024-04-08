import { ReactNode, RefObject } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  canHaveElipsisEnd,
  canHaveElipsisStart,
  getRange,
  isElipsis,
} from './utils';
import { PaginationListProps } from '../Pagination/Pagination.types';

import styles from './PaginationList.module.scss';

export const PaginationList = ({
  lastPage,
  internalPage,
  sibling,
  handleChange,
  firstPageRef,
  lastPageRef,
}: PaginationListProps): ReactNode => {
  const barList = [];

  let rangeStart = 2;
  let rangeEnd = lastPage - 1;
  barList.push(1);
  if (canHaveElipsisStart(internalPage, sibling)) {
    if (internalPage > 2) {
      rangeStart = internalPage - sibling;
    }
    barList.push('elips1');
  }
  if (rangeStart < internalPage + 1) {
    barList.push(...getRange(rangeStart, internalPage - 1));
  }
  if (internalPage > 1 && internalPage < lastPage) {
    barList.push(internalPage);
  }

  if (canHaveElipsisEnd(internalPage, sibling, lastPage)) {
    rangeEnd = internalPage + sibling;
  }
  if (rangeEnd > internalPage) {
    barList.push(...getRange(internalPage + 1, rangeEnd));
  }
  if (canHaveElipsisEnd(internalPage, sibling, lastPage)) {
    barList.push('elips2');
  }
  barList.push(lastPage);
  const getRef = ({
    paging,
    lastPage,
    firstPageRef,
    lastPageRef,
  }: {
    paging: string | number;
    lastPage: number;
    firstPageRef: RefObject<HTMLButtonElement> | undefined;
    lastPageRef: RefObject<HTMLButtonElement> | undefined;
  }): RefObject<HTMLButtonElement> | undefined => {
    if (paging === 1) return firstPageRef;
    else if (paging === lastPage) return lastPageRef;
    return undefined;
  };

  return barList.map((paging) => (
    <li key={paging}>
      {isElipsis(paging) ? (
        <p
          className={styles.elipsis}
          aria-label={dsI18n.t('pagination.EllipsisAltText')}
        >
          {'...'}
        </p>
      ) : (
        <Button
          ref={getRef({ paging, lastPage, firstPageRef, lastPageRef })}
          variant={paging === internalPage ? 'primary' : 'tertiary'}
          className={styles.button}
          ariaCurrent={paging === internalPage ? true : undefined}
          onClick={() => handleChange(Number(paging))}
        >
          {paging.toString()}
        </Button>
      )}
    </li>
  ));
};

if (process.env['NODE_ENV'] !== 'production') {
  PaginationList.displayName = 'PaginationList';
}
