import { useContext, JSX } from 'react';

import { TableDataCellProps } from './TableDataCell.types';
import { defaultTableSize } from '../Table/defaults';
import { TableContext } from '../Table/TableContext';

import styles from './TableDataCell.module.scss';

export const TableDataCell = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  as: Tag = 'td',
  alignment = 'left',
  verticalAlignment = 'top',
  colSpan,
  rowSpan,
  scope,
  children,
}: TableDataCellProps): JSX.Element => {
  const context = useContext(TableContext);
  const size = context?.size ?? defaultTableSize;
  const sizeClassName = styles[`dataCell_${size}`];
  const alignmentClassName = styles[`dataCell_${alignment}`];
  const verticalAlignmentClassName = styles[`dataCell_${verticalAlignment}`];

  const concatenatedClassName = `${
    styles.dataCell
  } ${sizeClassName} ${alignmentClassName} ${verticalAlignmentClassName} ${
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
};

TableDataCell.displayName = 'TableDataCell';
