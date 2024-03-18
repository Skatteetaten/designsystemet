import { forwardRef, useState, useRef, ReactNode, RefObject } from 'react';
import { useTranslation } from 'react-i18next';

import { InlineButton, Button, IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ChevronLeftSVGpath,
  ChevronRightSVGpath,
} from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

import {
  getDefaultListLength,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from './defaults';
import {
  PaginationProps,
  PageOption,
  PaginationListProps,
} from './Pagination.types';

import styles from './Pagination.module.scss';

// TODO isvalid hvis new page > total allowed pages

const PaginationList = ({
  lastPage,
  internalPage,
  sibling,
  handleChange,
  firstPageRef,
  lastPageRef,
}: PaginationListProps): ReactNode => {
  const barList = [];
  const getRange = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const canHaveElipsisEnd = (
    active: number,
    sibling: number,
    lastPage: number
  ): boolean => active + sibling + 1 < lastPage - 1;
  const canHaveElipsisStart = (active: number, sibling: number): boolean =>
    active - sibling - 1 > 2;

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

  const isElipsis = (paging: string | number): boolean => {
    return paging?.toString().match(/^elips/) ? true : false;
  };

  return barList.map((paging) => (
    <li key={paging} className={styles.paginationElement}>
      {isElipsis(paging) ? (
        <Paragraph
          className={styles.paginationElipsis}
          //TODO må få en oversettelse for tekst
          aria-label={'dot dot dot'}
        >
          {'...'}
        </Paragraph>
      ) : (
        <Button
          ref={getRef({ paging, lastPage, firstPageRef, lastPageRef })}
          variant={paging === internalPage ? 'primary' : 'tertiary'}
          className={styles.paginationButton}
          ariaCurrent={paging === internalPage ? true : undefined}
          onClick={() => handleChange(Number(paging))}
        >
          {paging.toString()}
        </Button>
      )}
    </li>
  ));
};

export const Pagination = forwardRef<HTMLUListElement, PaginationProps>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      currentPage,
      defaultCurrentPage = 1,
      sibling = getDefaultSibling(),
      listLength = getDefaultListLength(),
      listTotalLength,
      hidePrevNextButtonTitle = getDefaultHidePrevNextButtonTitle(),
      hidePageSummary = getDefaultHidePageSummary(),
      ariaLabel,
      onChange = (): void => {},
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
    const lastPageRef = useRef<HTMLButtonElement>(null);
    const firstPageRef = useRef<HTMLButtonElement>(null);
    const lastPage = Math.ceil(listTotalLength / listLength);
    const option: PageOption = {
      currentPage: currentPage,
      defaultCurrentPage: defaultCurrentPage,
      onChange: onChange,
    };
    const pageSibling = sibling < 1 ? 1 : sibling;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const useCurrentPage = (value: number, option: PageOption) => {
      const [internalPage, setInternalPage] = useState<number>(() => {
        if (option.currentPage) {
          return option.currentPage;
        } else if (option.defaultCurrentPage) {
          return option.defaultCurrentPage;
        } else {
          return value;
        }
      });
      return [internalPage, setInternalPage] as const;
    };

    const [internalPage, setInteralPage] = useCurrentPage(1, option);
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleChange = (page: number) => {
      setInteralPage(page);
      if (page === 1) {
        firstPageRef?.current?.focus();
      } else if (page === lastPage) {
        lastPageRef?.current?.focus();
      }
      onChange?.(page);
    };

    const arrowLeft = (activePage: number): ReactNode => {
      const cssLeft = `${styles.paginationElement} ${styles.paginationElement_leftArrow}`;
      return (
        <li className={cssLeft}>
          {hidePrevNextButtonTitle && (
            <IconButton
              type={'button'}
              svgPath={ChevronLeftSVGpath}
              title={t('pagination.PreviousButtonTitle')}
              onClick={() => handleChange(activePage - 1)}
            />
          )}
          {!hidePrevNextButtonTitle && (
            <InlineButton
              iconPosition={'left'}
              svgPath={ChevronLeftSVGpath}
              className={styles.paginationButton}
              onClick={() => handleChange(activePage - 1)}
            >
              {t('pagination.PreviousButtonTitle')}
            </InlineButton>
          )}
        </li>
      );
    };

    const arrowRight = (activePage: number): ReactNode => {
      return (
        <li className={styles.paginationElement}>
          {hidePrevNextButtonTitle && (
            <IconButton
              type={'button'}
              svgPath={ChevronRightSVGpath}
              title={t('pagination.NextButtonTitle')}
              onClick={() => handleChange(activePage + 1)}
            />
          )}
          {!hidePrevNextButtonTitle && (
            <InlineButton
              iconPosition={'right'}
              svgPath={ChevronRightSVGpath}
              className={styles.paginationButton}
              onClick={() => handleChange(activePage + 1)}
            >
              {t('pagination.NextButtonTitle')}
            </InlineButton>
          )}
        </li>
      );
    };

    const showPaginationSummary = dsI18n.t(
      'ds_navigation:pagination.PageSummary',
      {
        range: `${internalPage * listLength + 1 - listLength}–${
          internalPage * listLength
        }`,
        total: listTotalLength,
      }
    );
    const pageSummary = `${
      hidePageSummary ? styles.paginationSummary_hide : ''
    }`;
    const paginationCss = `${styles.pagination} ${
      className ? className : ''
    }`.trim();
    const listCss = `${styles.paginationList} ${
      hidePageSummary ? styles.paginationList_summaryhidden : ''
    }`;
    return (
      <nav
        ref={ref}
        id={id}
        className={paginationCss}
        lang={lang}
        data-testid={dataTestId}
        aria-label={ariaLabel ? ariaLabel : t('pagination.WrapperAriaLabel')}
      >
        <div className={pageSummary} aria-live={'polite'} aria-atomic={'true'}>
          {showPaginationSummary}
        </div>
        <ul className={listCss}>
          {internalPage > 1 && arrowLeft(internalPage)}
          {lastPage > 1 && (
            <PaginationList
              lastPage={lastPage}
              sibling={pageSibling}
              internalPage={internalPage}
              handleChange={handleChange}
              firstPageRef={firstPageRef}
              lastPageRef={lastPageRef}
            />
          )}
          {internalPage < lastPage && arrowRight(internalPage)}
        </ul>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

export {
  getDefaultListLength,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
};
