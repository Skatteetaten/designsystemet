import { useContext, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  ArrowDownSVGpath,
  ArrowUpDownSVGpath,
  ArrowUpSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { TableHeaderCellProps } from './TableHeaderCell.types';
import {
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  getTableVariantDefault,
} from '../Table/defaults';
import { sortDirection } from '../Table/Table.types';
import { TableContext } from '../TableContext/TableContext';

import styles from './TableHeaderCell.module.scss';

export const TableHeaderCell = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  alignment = getTableCellAlignmentDefault(),
  as: Tag = getHeaderCellAsDefault(),
  colSpan,
  isSortDisabled,
  isSortable,
  scope,
  sortKey,
  children,
}: TableHeaderCellProps): JSX.Element => {
  const { t } = useTranslation('ds_tables', { i18n: dsI18n });
  const context = useContext(TableContext);

  const variant = context?.variant ?? getTableVariantDefault();
  const alignmentClassName = styles[`headerCell_${alignment}`];
  const variantClassName = styles[`headerCell_${variant}`];
  const concatenatedClassNames = `${styles.headerCell} ${
    isSortable ? styles.headerCell_noPadding : variantClassName
  } ${
    scope === 'row' ? styles.headerCell_row : ''
  } ${alignmentClassName} ${className}`.trim();

  const handleOnSort = (): void => {
    let direction: sortDirection = 'ascending';
    if (context?.sortState?.sortKey === sortKey) {
      switch (context?.sortState?.direction) {
        case 'ascending':
          direction = 'descending';
          break;
        case 'descending':
          direction = 'none';
          break;
      }
    }
    if (context?.setSortState) {
      context?.setSortState({
        sortKey: direction !== 'none' ? sortKey : undefined,
        direction,
      });
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
    <Tag
      ref={ref}
      id={id}
      className={concatenatedClassNames}
      lang={lang}
      data-testid={dataTestId}
      scope={scope}
      colSpan={colSpan}
    >
      {isSortable ? (
        <button
          className={`${styles.headerCellSortButton} ${variantClassName}`.trim()}
          type={'button'}
          disabled={isSortDisabled}
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
    </Tag>
  );
};

TableHeaderCell.displayName = 'TableHeaderCell';
