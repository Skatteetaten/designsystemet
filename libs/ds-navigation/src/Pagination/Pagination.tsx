import { forwardRef, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/* import { InlineButton, IconButton } from '@skatteetaten/ds-buttons'; */
import { dsI18n } from '@skatteetaten/ds-core-utils';
/* import {
  ChevronLeftSVGpath,
  ChevronRightSVGpath,
} from '@skatteetaten/ds-icons'; */
/* import { TFunction } from 'i18next'; */

import {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from './defaults';
import {
  PaginationProps,
  PageOption,
  PaginationComponent,
} from './Pagination.types';
import { PaginationList } from '../PaginationList/PaginationList';

import styles from './Pagination.module.scss';

// TODO isvalid hvis new page > total allowed pages
// TODO hvorfor skilles det ikke på bruken av hidePrevNextButtonTitle i storyen docs

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
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
      onChange = (): void => {},
    },
    ref
  ) => {
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

    /*     const arrowLeft = (activePage: number): ReactNode => {
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
    }; */

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
    if (showPaginationSummary === '') {
      throw new Error('Feil! Mangler import av språk fra ds-core-utils?');
    }
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
          {lastPage > 1 && (
            <PaginationList
              lastPage={lastPage}
              sibling={pageSibling}
              internalPage={internalPage}
              handleChange={handleChange}
              firstPageRef={firstPageRef}
              lastPageRef={lastPageRef}
              hidePrevNextButtonTitle={hidePrevNextButtonTitle}
            />
          )}
        </ul>
      </nav>
    );
  }
) as PaginationComponent;

Pagination.displayName = 'Pagination';
Pagination.List = PaginationList;
Pagination.List.displayName = 'Pagination.List';

export {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
};
