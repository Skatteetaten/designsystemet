import { useEffect, useRef, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getTableVariantDefault } from './defaults';
import { TableComponent, TableProps } from './Table.types';
import { TableContext } from './TableContext';
import { TableBody } from '../TableBody/TableBody';
import { TableDataCell } from '../TableDataCell/TableDataCell';
import { TableEditableRow } from '../TableEditableRow/TableEditableRow';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';
import { TableRow } from '../TableRow/TableRow';
import { TableSum } from '../TableSum/TableSum';
import { getScreenReaderSortDirectionText } from '../utils';

import styles from './Table.module.scss';

/**
 * Table
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-table--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/table/) - Brukerveiledning
 */
export const Table = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  caption,
  rowInEditModeId: externalRowInEditModeId,
  variant = getTableVariantDefault(),
  size,
  sortState,
  canBeManuallyFocused,
  hasFullWidth,
  showCaption,
  setSortState,
  children,
}: TableProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const srTimeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

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

  const variantClassName = size
    ? styles[`table_${size}`]
    : styles[`table_${variant}`];
  const captionVariantClassName = size
    ? styles[`tableCaption_${size}`]
    : styles[`tableCaption_${variant}`];
  const concatenatedClassName = `${styles.table} ${
    hasFullWidth ? styles.table_fullWidth : ''
  } ${variantClassName} ${className}`.trim();
  const captionClassName = `${styles.tableCaption} ${
    showCaption ? '' : styles.hidden
  } ${captionVariantClassName}`.trim();
  const wrapperClassName = `${isTableScrollable ? styles.wrapper : ''} ${
    shouldFadeLeft ? styles.wrapper_fadeLeft : ''
  }`.trim();

  /**
   * Når tabellen har scrollbar vises en fade-effekt for å indikere at tabellen
   * har mer innhold. Her sjekker vi hvor lang det er scrollet for å finne ut om
   * det er høyre eller venstre som skal fades.
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
      requestAnimationFrame(() => {
        for (const entry of entries) {
          updateDimensions(entry);
        }
      });
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
        size,
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
}) as TableComponent;
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
