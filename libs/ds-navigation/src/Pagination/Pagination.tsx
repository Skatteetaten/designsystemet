import { forwardRef, useState, useRef, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { InlineButton, IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ChevronLeftSVGpath,
  ChevronRightSVGpath,
} from '@skatteetaten/ds-icons';
import { TFunction } from 'i18next';

import {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from './defaults';
import { PaginationProps, PageOption } from './Pagination.types';
import { PaginationList } from '../PaginationList/PaginationList';

import styles from './Pagination.module.scss';

// TODO isvalid hvis new page > total allowed pages

type FirstLastPageButtonProps = {
  activePage: number;
  navigateDirection: 'next' | 'previous';
  hidePrevNextButtonTitle: boolean;
  t: TFunction<'ds_navigation', undefined>;
  handleChange: (page: number) => void;
};

const FirstLastPageButton = ({
  activePage,
  navigateDirection,
  hidePrevNextButtonTitle,
  t,
  handleChange,
}: FirstLastPageButtonProps): ReactNode => {
  const style =
    navigateDirection === 'previous'
      ? styles.paginationElement_leftArrow
      : styles.paginationElement_rightArrow;
  const buttonTitle = t('pagination.NextButtonTitle');
  const icon =
    navigateDirection === 'previous' ? ChevronLeftSVGpath : ChevronRightSVGpath;
  console.log(`activePage er ${activePage}`);
  const multiplication = navigateDirection === 'next' ? 1 : -1;
  return (
    <li className={style}>
      {hidePrevNextButtonTitle ? (
        <IconButton
          type={'button'}
          svgPath={icon}
          title={buttonTitle}
          onClick={() => handleChange(activePage + multiplication)}
        />
      ) : (
        <InlineButton
          iconPosition={navigateDirection === 'previous' ? 'left' : 'right'}
          svgPath={icon}
          className={styles.paginationButton}
          onClick={() => handleChange(activePage + multiplication)}
        >
          {buttonTitle}
        </InlineButton>
      )}
    </li>
  );
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
      onChange = (): void => {},
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
      console.log(`setinternatl page via handleChange. page ble ${page}`);
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

    const showPaginationSummary = dsI18n.t(
      'ds_navigation:pagination.PageSummary',
      {
        range: `${internalPage * pageSize + 1 - pageSize}–${
          internalPage * pageSize
        }`,
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
          {internalPage > 1 && (
            <FirstLastPageButton
              activePage={internalPage}
              navigateDirection={'previous'}
              handleChange={handleChange}
              t={t}
              hidePrevNextButtonTitle={hidePrevNextButtonTitle}
            />
          )}
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
          {internalPage < lastPage && (
            <FirstLastPageButton
              activePage={internalPage}
              navigateDirection={'next'}
              handleChange={handleChange}
              t={t}
              hidePrevNextButtonTitle={hidePrevNextButtonTitle}
            />
          )}
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
