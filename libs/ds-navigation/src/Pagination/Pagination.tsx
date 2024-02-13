import { forwardRef, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { InlineButton, Button, IconButton } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';
import { dsI18n } from '@skatteetaten/ds-core-utils';

import { getDefaultListLength, getDefaultSibling } from './defaults';
import { PaginationProps } from './Pagination.types';

import styles from './Pagination.module.scss';

// TODO isvalid hvis new page > total allowed pages

export const Pagination = forwardRef<HTMLUListElement, PaginationProps>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      currentPage,
      sibling = getDefaultSibling(),
      listLength = getDefaultListLength(),
      listTotalLength,
      hidePrevNextButtonTitle = false,
      hidePageSummary = false,
      /* Antall elementer som skal vises på yttersiden av dotdotdot
      på sikt kan dette være en prop til konsumenter */
      /*  boundary, */
      onChange,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_navigation', { i18n: dsI18n });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState<number>(1);
    useEffect(() => {
      setPage(currentPage);
    }, [currentPage]);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleChange = (page: number) => {
      setPage(page);
      onChange?.(page);
      //return page;
    };

    const arrowLeft = (activePage: number): ReactNode => {
      return (
        <li className={styles.paginationElement}>
          {hidePrevNextButtonTitle && (
            <IconButton
              type={'button'}
              svgPath={
                <path
                  d={'m16.9 17.98-6.1-6.1 6.1-6.1-1.8-1.9-8 8 8 8 1.8-1.9Z'}
                />
              }
              title={t('pagination.PreviousButtonTitle')}
              onClick={() => handleChange(activePage - 1)}
            />
          )}
          {!hidePrevNextButtonTitle && (
            <InlineButton
              iconPosition={'left'}
              svgPath={
                <path
                  d={'m16.9 17.98-6.1-6.1 6.1-6.1-1.8-1.9-8 8 8 8 1.8-1.9Z'}
                />
              }
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
              svgPath={
                <path d={'m7.1 5.8 6.1 6.1L7.1 18 9 19.9l8-8-8-8-1.9 1.9Z'} />
              }
              title={t('pagination.NextButtonTitle')}
              onClick={() => handleChange(activePage + 1)}
            />
          )}
          {!hidePrevNextButtonTitle && (
            <InlineButton
              iconPosition={'right'}
              svgPath={
                <path d={'m7.1 5.8 6.1 6.1L7.1 18 9 19.9l8-8-8-8-1.9 1.9Z'} />
              }
              className={styles.paginationButton}
              onClick={() => handleChange(activePage + 1)}
            >
              {t('pagination.NextButtonTitle')}
            </InlineButton>
          )}
        </li>
      );
    };

    const lastPage = Math.ceil(listTotalLength / listLength);
    const NavigationBar = (): ReactNode => {
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
      if (canHaveElipsisStart(currentPage, sibling)) {
        if (currentPage > 2) {
          rangeStart = currentPage - sibling;
        }
        barList.push('...');
      }
      if (rangeStart < currentPage + 1) {
        barList.push(...getRange(rangeStart, currentPage - 1));
      }
      if (currentPage > 1 && currentPage < lastPage) {
        barList.push(currentPage);
      }

      if (canHaveElipsisEnd(currentPage, sibling, lastPage)) {
        rangeEnd = currentPage + sibling;
      }
      if (rangeEnd > currentPage) {
        barList.push(...getRange(currentPage + 1, rangeEnd));
      }
      if (canHaveElipsisEnd(currentPage, sibling, lastPage)) {
        barList.push('...');
      }
      barList.push(lastPage);
      return barList.map((paging) => (
        <li key={paging} className={styles.paginationElement}>
          {paging === '...' ? (
            <Paragraph>{'...'}</Paragraph>
          ) : (
            <Button
              variant={paging === currentPage ? 'primary' : 'tertiary'}
              className={styles.paginationButton}
              onClick={() => handleChange(Number(paging))}
            >
              {paging.toString()}
            </Button>
          )}
        </li>
      ));
    };

    const paginationCSS = `${
      styles.pagination ?? styles.pagination
    } ${className}`;
    const showPaginationSummary = dsI18n.t(
      'ds_navigation:pagination.PageSummary',
      {
        range: `${page * listLength + 1 - listLength} - ${page * listLength}`,
        total: listTotalLength,
      }
    );
    const pageSummary = `${styles.paginationSummary} ${
      hidePageSummary ? styles.paginationSummary_hide : ''
    }`;
    const paginationList = `${styles.paginationList}`;
    return (
      <nav aria-label={'sidevelger'} className={styles.pagination}>
        <div className={pageSummary}>
          {showPaginationSummary}
          {''}
          {hidePageSummary}
        </div>
        <ul
          ref={ref}
          id={id}
          lang={lang}
          className={paginationList}
          data-testid={dataTestId}
        >
          {page > 1 && arrowLeft(page)}
          {lastPage > 1 && <NavigationBar />}
          {page < lastPage && arrowRight(page)}
        </ul>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

export { getDefaultListLength, getDefaultSibling };
