import { JSX, ReactNode, Ref } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, IconButton, InlineButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ChevronLeftSVGpath,
  ChevronRightSVGpath,
} from '@skatteetaten/ds-icons';

import {
  canHaveEllipsisEnd,
  canHaveEllipsisStart,
  ELLIPSIS,
  getRange,
  isEllipsis,
} from './utils';
import {
  FirstLastPageButtonProps,
  PaginationItem,
  PaginationListProps,
} from '../Pagination/Pagination.types';

import styles from './PaginationList.module.scss';

const FirstLastPageButton = ({
  activePage,
  navigateDirection,
  hidePrevNextButtonTitle,
  t,
  handleChange,
}: FirstLastPageButtonProps): ReactNode => {
  const style =
    navigateDirection === 'previous'
      ? styles.element_leftArrow
      : styles.element_rightArrow;
  const buttonTitle =
    navigateDirection === 'previous'
      ? t('pagination.PreviousButtonTitle')
      : t('pagination.NextButtonTitle');
  const icon =
    navigateDirection === 'previous' ? ChevronLeftSVGpath : ChevronRightSVGpath;
  const multiplication = navigateDirection === 'next' ? 1 : -1;
  return (
    <li className={style}>
      {hidePrevNextButtonTitle ? (
        <IconButton
          svgPath={icon}
          title={buttonTitle}
          onClick={() => handleChange(activePage + multiplication)}
        />
      ) : (
        <InlineButton
          iconPosition={navigateDirection === 'previous' ? 'left' : 'right'}
          svgPath={icon}
          className={styles.button}
          onClick={() => handleChange(activePage + multiplication)}
        >
          {buttonTitle}
        </InlineButton>
      )}
    </li>
  );
};

const getFirstOrLastRef = ({
  paging,
  lastPage,
  firstPageRef,
  lastPageRef,
}: {
  paging: string | number;
  lastPage: number;
  firstPageRef: Ref<HTMLButtonElement> | undefined;
  lastPageRef: Ref<HTMLButtonElement> | undefined;
}): Ref<HTMLButtonElement> | undefined => {
  if (paging === 1) return firstPageRef;
  else if (paging === lastPage) return lastPageRef;
  return undefined;
};

export const PaginationList = ({
  lastPage,
  currentPage,
  sibling,
  handleChange,
  firstPageRef,
  lastPageRef,
  hidePrevNextButtonTitle,
}: PaginationListProps): JSX.Element => {
  const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
  const items: PaginationItem[] = [];
  let rangeStart = 2;
  let rangeEnd = lastPage - 1;
  items.push(1);
  if (canHaveEllipsisStart(currentPage, sibling)) {
    if (currentPage > 2) {
      rangeStart = currentPage - sibling;
    }
    items.push(ELLIPSIS.BEFORE);
  }
  if (rangeStart < currentPage + 1) {
    items.push(...getRange(rangeStart, currentPage - 1));
  }
  if (currentPage > 1 && currentPage < lastPage) {
    items.push(currentPage);
  }
  if (canHaveEllipsisEnd(currentPage, sibling, lastPage)) {
    rangeEnd = currentPage + sibling;
  }
  if (rangeEnd > currentPage) {
    items.push(...getRange(currentPage + 1, rangeEnd));
  }
  if (canHaveEllipsisEnd(currentPage, sibling, lastPage)) {
    items.push(ELLIPSIS.AFTER);
  }
  items.push(lastPage);

  return (
    <>
      {currentPage > 1 && (
        <FirstLastPageButton
          activePage={currentPage}
          navigateDirection={'previous'}
          handleChange={handleChange}
          t={t}
          hidePrevNextButtonTitle={hidePrevNextButtonTitle}
        />
      )}
      {items.map((paging) => (
        <li key={paging}>
          {isEllipsis(paging) ? (
            <p
              className={styles.elipsis}
              aria-label={dsI18n.t('pagination.EllipsisAltText')}
            >
              {'...'}
            </p>
          ) : (
            <Button
              ref={getFirstOrLastRef({
                paging,
                lastPage,
                firstPageRef,
                lastPageRef,
              })}
              variant={paging === currentPage ? 'primary' : 'tertiary'}
              className={styles.button}
              ariaCurrent={paging === currentPage ? true : undefined}
              onClick={() => handleChange(Number(paging))}
            >
              {paging.toString()}
            </Button>
          )}
        </li>
      ))}
      {currentPage < lastPage && (
        <FirstLastPageButton
          activePage={currentPage}
          navigateDirection={'next'}
          handleChange={handleChange}
          t={t}
          hidePrevNextButtonTitle={hidePrevNextButtonTitle}
        />
      )}
    </>
  );
};

PaginationList.displayName = 'PaginationList';
