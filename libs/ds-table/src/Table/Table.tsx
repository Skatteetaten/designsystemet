import { forwardRef, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getTableVariantDefault } from './defaults';
import { TableComponent, TableProps } from './Table.types';
import { TableContext } from './TableContext';
import { getScreenReaderSortDirectionText } from './utils';
import { Body } from '../Body/Body';
import { DataCell } from '../DataCell/DataCell';
import { EditableRow } from '../EditableRow/EditableRow';
import { Header } from '../Header/Header';
import { HeaderCell } from '../HeaderCell/HeaderCell';
import { Row } from '../Row/Row';
import { Sum } from '../Sum/Sum';

import styles from './Table.module.scss';
// TODO editable mangler mulighet til å vise knapp på venstre side

// TODO sort bedre typing?

// TODO ytelse må testes

// TODO fikse storybook controls substories osv

// TODO fokushåndtering

// TODO bedre eksempler i storybook

// TODO tester

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      caption,
      variant = getTableVariantDefault(),
      sortState,
      hasFullWidth,
      showCaption,
      setSortState,
      children,
    },
    ref
  ): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLTableElement | null>(null);

    const [isTableScrollable, setIsTableScrollable] = useState<boolean>(false);
    const [shouldShowSRText, setShouldShowSRText] = useState<boolean>(false);
    const [shouldFadeLeft, setShouldFadeLeft] = useState<boolean>(false);
    const [rowInEditModeId, setRowInEditModeId] = useState<string | undefined>(
      undefined
    );

    const { t } = useTranslation('ds_tables', { i18n: dsI18n });

    const variantClassName = styles[`table_${variant}`];
    const captionVariantClassName = styles[`tableCaption_${variant}`];
    const concatenatedClassName = `${styles.table} ${
      hasFullWidth ? styles.table_fullWidth : ''
    } ${variantClassName} ${className}`;
    const captionClassName = `${styles.tableCaption} ${
      showCaption ? '' : styles.hidden
    } ${captionVariantClassName}`;
    const wrapperClassName = `${isTableScrollable ? styles.wrapper : ''} ${
      shouldFadeLeft ? styles.wrapper_fadeLeft : ''
    }`;

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

      return () => {
        wrapper?.removeEventListener('scroll', handleScroll);
      };
    }, []);

    /** Holder styr på om tabellen trenger en scrollbar. */
    useEffect(() => {
      const updateDimensions = (): void => {
        const tableWidth = tableRef?.current?.clientWidth ?? 0;
        const wrapperWidth = wrapperRef?.current?.clientWidth ?? 0;

        setIsTableScrollable(tableWidth + 8 > wrapperWidth);
      };
      updateDimensions();

      window.addEventListener('resize', updateDimensions);
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }, []);

    useEffect(() => {
      //Sjekker først verdien slik at vi ikke starter flere timere samtidig
      if (!shouldShowSRText) {
        setShouldShowSRText(true);

        setTimeout(() => {
          setShouldShowSRText(false);
        }, 3000);
      }
    }, [shouldShowSRText, sortState]);

    return (
      <TableContext.Provider
        value={{
          sortState,
          setSortState,
          variant,
          rowInEditModeId,
          setRowInEditModeId,
        }}
      >
        <div ref={wrapperRef} className={wrapperClassName}>
          <table
            ref={(node): void => {
              tableRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={id}
            className={concatenatedClassName}
            lang={lang}
            data-testid={dataTestId}
          >
            {caption && (
              <caption className={captionClassName}>{caption}</caption>
            )}
            {children}
          </table>
          {sortState && (
            <div className={styles.hidden} aria-live={'polite'} role={'status'}>
              {getScreenReaderSortDirectionText(shouldShowSRText, sortState, t)}
            </div>
          )}
        </div>
      </TableContext.Provider>
    );
  }
) as TableComponent;
Table.displayName = 'Table';
Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Row = Row;
Table.EditableRow = EditableRow;
Table.DataCell = DataCell;
Table.Body = Body;
Table.Sum = Sum;

export { getTableVariantDefault };
