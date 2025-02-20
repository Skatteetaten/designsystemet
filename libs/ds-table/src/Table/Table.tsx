import { forwardRef, useEffect, useRef, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  getTableVariantDefault,
  getDataCellAsDefault,
  getHeaderCellAsDefault,
  getTableRowExpandButtonPositionDefault,
  getTableCellAlignmentDefault,
  getTableSumAlignmentDefault,
} from './defaults';
import { TableComponent, TableProps } from './Table.types';
import { TableBody } from '../TableBody/TableBody';
import { TableContext } from '../TableContext/TableContext';
import { TableDataCell } from '../TableDataCell/TableDataCell';
import { TableEditableRow } from '../TableEditableRow/TableEditableRow';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';
import { TableRow } from '../TableRow/TableRow';
import { TableSum } from '../TableSum/TableSum';
import { getScreenReaderSortDirectionText } from '../utils';

import styles from './Table.module.scss';

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      caption,
      rowInEditModeId: externalRowInEditModeId,
      variant = getTableVariantDefault(),
      sortState,
      canBeManuallyFocused,
      hasFullWidth,
      showCaption,
      setSortState,
      children,
    },
    ref
  ): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const srTimeoutId = useRef<NodeJS.Timeout>();

    const [isTableScrollable, setIsTableScrollable] = useState<boolean>(false);
    const [shouldShowSRText, setShouldShowSRText] = useState<boolean>(false);
    const [shouldFadeLeft, setShouldFadeLeft] = useState<boolean>(false);
    const [internalRowInEditModeId, setInternalRowInEditModeId] = useState<
      string | undefined
    >(externalRowInEditModeId);
    const rowInEditModeId = externalRowInEditModeId ?? internalRowInEditModeId;

    if (caption === '') {
      console.error('Empty string is not a valid caption.');
    }
    const { t } = useTranslation('ds_tables', { i18n: dsI18n });

    const variantClassName = styles[`table_${variant}`];
    const captionVariantClassName = styles[`tableCaption_${variant}`];
    const concatenatedClassName = `${styles.table} ${
      hasFullWidth ? styles.table_fullWidth : ''
    } ${variantClassName} ${className ?? ''}`.trim();
    const captionClassName = `${styles.tableCaption} ${
      showCaption ? '' : styles.hidden
    } ${captionVariantClassName}`.trim();
    const wrapperClassName = `${isTableScrollable ? styles.wrapper : ''} ${
      shouldFadeLeft ? styles.wrapper_fadeLeft : ''
    }`.trim();

    /**
     * Når tabellen har scrollbar vises en fade-effekt for å indikere at
     * tabellen har mer innhold. Her sjekker vi hvor lang det er scrollet
     * for å finne ut om det er høyre eller venstre som skal fades.
     */
    useEffect(() => {
      const wrapper = wrapperRef.current;
      const handleScroll = (): void => {
        const scrollPosition = wrapper?.scrollLeft || 0;
        const scrollWidth = wrapper?.scrollWidth || 0;
        const width = wrapper?.clientWidth || 0;

        const hasScrolledMoreThanHalfway =
          scrollPosition + width / 2 > scrollWidth / 2;
        setShouldFadeLeft(hasScrolledMoreThanHalfway);
      };

      wrapper?.addEventListener('scroll', handleScroll);

      return (): void => {
        wrapper?.removeEventListener('scroll', handleScroll);
      };
    }, []);

    /** Holder styr på om tabellen trenger en horisontal scrollbar. */
    useEffect(() => {
      const updateDimensions = (entry: ResizeObserverEntry): void => {
        const wrapperScrollWidth = wrapperRef?.current?.scrollWidth ?? 0;
        const wrapperClientWidth = Math.round(
          entry.contentBoxSize[0].inlineSize ?? 0
        );

        setIsTableScrollable(wrapperScrollWidth > wrapperClientWidth + 1);
        // +1 fordi Safari regner/avrunder forskjellig fra andre nettlesere
      };

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          updateDimensions(entry);
        }
      });
      wrapperRef.current && observer.observe(wrapperRef.current);
      return (): void => {
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      if (srTimeoutId.current) {
        clearTimeout(srTimeoutId.current);
      }
      setShouldShowSRText(true);

      srTimeoutId.current = setTimeout(() => {
        setShouldShowSRText(false);
        srTimeoutId.current = undefined;
      }, 3000);
    }, [sortState]);

    return (
      <TableContext.Provider
        value={{
          sortState,
          setSortState,
          variant,
          rowInEditModeId,
          setRowInEditModeId: setInternalRowInEditModeId,
        }}
      >
        <div ref={wrapperRef} className={wrapperClassName}>
          <table
            ref={ref}
            id={id}
            className={concatenatedClassName}
            lang={lang}
            data-testid={dataTestId}
            tabIndex={canBeManuallyFocused ? -1 : undefined}
          >
            <caption className={captionClassName}>{caption}</caption>
            {children}
          </table>
          {sortState && (
            <div className={styles.hidden} aria-live={'polite'}>
              {getScreenReaderSortDirectionText(shouldShowSRText, sortState, t)}
            </div>
          )}
        </div>
      </TableContext.Provider>
    );
  }
) as TableComponent;
Table.displayName = 'Table';
Table.Header = TableHeader;
Table.Header.displayName = 'Table.Header';
Table.HeaderCell = TableHeaderCell;
Table.HeaderCell.displayName = 'Table.HeaderCell';
Table.Row = TableRow;
Table.Row.displayName = 'Table.Row';
Table.EditableRow = TableEditableRow;
Table.EditableRow.displayName = 'Table.EditableRow';
Table.DataCell = TableDataCell;
Table.DataCell.displayName = 'Table.DataCell';
Table.Body = TableBody;
Table.Body.displayName = 'Table.Body';
Table.Sum = TableSum;
Table.Sum.displayName = 'Table.Sum';

export {
  getDataCellAsDefault,
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  getTableRowExpandButtonPositionDefault,
  getTableVariantDefault,
  getTableSumAlignmentDefault,
};
