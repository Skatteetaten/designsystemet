import { forwardRef, useContext } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { TableDataCellProps } from './TableDataCell.types';
import {
  getDataCellAsDefault,
  getTableCellAlignmentDefault,
  getTableVariantDefault,
} from '../Table/defaults';
import { TableContext } from '../TableContext/TableContext';

import styles from './TableDataCell.module.scss';

export const TableDataCell = forwardRef<
  HTMLTableCellElement,
  TableDataCellProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      as: Tag = getDataCellAsDefault(),
      alignment = getTableCellAlignmentDefault(),
      colSpan,
      rowSpan,
      scope,
      children,
    },
    ref
  ) => {
    const context = useContext(TableContext);
    const variant = context?.variant ?? getTableVariantDefault();
    const variantClassName = styles[`dataCell_${variant}`];
    const alignmentClassName = styles[`dataCell_${alignment}`];

    const concatenatedClassName = `${
      styles.dataCell
    } ${variantClassName} ${alignmentClassName} ${
      rowSpan ? styles.dataCell_rowspan : ''
    } ${className}`.trim();

    return (
      <Tag
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        colSpan={colSpan}
        rowSpan={rowSpan}
        scope={(scope ?? Tag === 'th') ? 'row' : undefined}
      >
        {children}
      </Tag>
    );
  }
);
export { getDataCellAsDefault };

TableDataCell.displayName = 'TableDataCell';
