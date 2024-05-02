import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  ReactNode,
  RefObject,
} from 'react';
import { useTranslation } from 'react-i18next';

import { InlineButton, Button, IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ChevronLeftSVGpath,
  ChevronRightSVGpath,
} from '@skatteetaten/ds-icons';

import {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from './defaults';
import {
  PaginationProps,
  PageOption,
  PaginationListProps,
} from './Pagination.types';
import {
  canHaveElipsisEnd,
  canHaveElipsisStart,
  getRange,
  isElipsis,
} from './utils';

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
          className={styles.paginationElipsis}
          aria-label={dsI18n.t('pagination.EllipsisAltText')}
        >
          {'...'}
        </p>
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
      defaultCurrent = 1,
      sibling = getDefaultSibling(),
      pageSize = getDefaultPageSize(),
      totalItems,
      hidePrevNextButtonTitle = getDefaultHidePrevNextButtonTitle(),
      hidePageSummary = getDefaultHidePageSummary(),
      ariaLabel,
      onChange,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
    const lastPageRef = useRef<HTMLButtonElement>(null);
    const firstPageRef = useRef<HTMLButtonElement>(null);
    const lastPage = Math.ceil(totalItems / pageSize);
    const option: PageOption = {
      currentPage: currentPage,
      defaultCurrent: defaultCurrent,
      onChange: onChange,
    };
    const pageSibling = sibling < 1 ? 1 : sibling;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const useCurrentPage = (value: number, option: PageOption) => {
      const [internalPage, setInternalPage] = useState<number>(() => {
        if (option.currentPage) {
          return option.currentPage;
        } else if (option.defaultCurrent) {
          return option.defaultCurrent;
        } else {
          return value;
        }
      });
      return [internalPage, setInternalPage] as const;
    };

    const [internalPage, setInteralPage] = useCurrentPage(1, option);
    const handleChange = (page: number): void => {
      setInteralPage(page);
      if (page === 1) {
        firstPageRef?.current?.focus();
      } else if (page === lastPage) {
        lastPageRef?.current?.focus();
      }
      onChange?.(page);
    };

    const firstRender = useRef(true);
    useEffect(() => {
      if (!firstRender.current) {
        setInteralPage(1);
        onChange(1);
      }
      firstRender.current = false;
    }, [onChange, setInteralPage, totalItems]);

    const arrowLeft = (activePage: number): ReactNode => {
      return (
        <li className={styles.paginationElement_leftArrow}>
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
        <li className={styles.paginationElement_rightArrow}>
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

    const rangeTo =
      internalPage * pageSize > totalItems
        ? totalItems
        : internalPage * pageSize;
    const showPaginationSummary = dsI18n.t(
      'ds_navigation:pagination.PageSummary',
      {
        range: `${internalPage * pageSize + 1 - pageSize}–${rangeTo}`,
        total: totalItems,
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
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
};
