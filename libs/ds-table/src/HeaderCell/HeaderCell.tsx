import { forwardRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ArrowDownSVGpath,
  ArrowUpDownSVGpath,
  ArrowUpSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { TableHeaderCellProps } from './HeaderCell.types';
import { getTableVariantDefault } from '../Table/defaults';
import { TableContext } from '../Table/TableContext';

import styles from './HeaderCell.module.scss';

export const HeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestid,
      alignment = 'left',
      colSpan,
      isSortable,
      scope,
      sortKey,
      children,
    },
    ref
  ) => {
    const { t } = useTranslation('ds_tables', { i18n: dsI18n });
    const context = useContext(TableContext);

    const variant = context?.variant ?? getTableVariantDefault();
    const alignmentClassName = styles[`headerCell_${alignment}`];
    const variantClassName = styles[`headerCell_${variant}`];
    const concatenatedClassNames = `${styles.headerCell} ${
      isSortable ? '' : variantClassName
    } ${
      scope === 'row' ? styles.headerCell_row : ''
    } ${alignmentClassName} ${className}`;

    const handleOnSort = (): void => {
      const direction =
        context?.sortState?.direction === 'ascending'
          ? 'descending'
          : 'ascending';
      if (context?.setSortState) {
        context?.setSortState({ sortKey: sortKey, direction });
      }

      context?.setRowInEditModeId(undefined);
    };

    const getSortIconAndTitle = (): [JSX.Element, string] => {
      if (context?.sortState?.sortKey !== sortKey) {
        return [ArrowUpDownSVGpath, t('table.Sortable')];
      }
      const direction = context?.sortState?.direction;
      switch (direction) {
        case 'ascending':
          return [ArrowUpSVGpath, t('table.SortedAscending')];
        case 'descending':
          return [ArrowDownSVGpath, t('table.SortedDescending')];
        case 'none':
        default:
          return [ArrowUpDownSVGpath, t('table.Sortable')];
      }
    };

    const [sortIcon, sortTitle] = getSortIconAndTitle();

    return (
      <th
        ref={ref}
        id={id}
        className={concatenatedClassNames}
        lang={lang}
        data-testid={dataTestid}
        scope={scope}
        colSpan={colSpan}
      >
        {isSortable ? (
          <button
            className={`${styles.headerCellSortButton} ${variantClassName}`}
            type={'button'}
            onClick={handleOnSort}
          >
            {children}
            <Icon
              svgPath={sortIcon}
              className={styles.headerCellSortButtonIcon}
              title={sortTitle}
            />
          </button>
        ) : (
          children
        )}
      </th>
    );
  }
);

HeaderCell.displayName = 'TableHeaderCell';
