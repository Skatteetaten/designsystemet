import { forwardRef, useContext } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { DataCellProps } from './DataCell.types';
import {
  getDataCellAsDefault,
  getTableVariantDefault,
} from '../Table/defaults';
import { TableContext } from '../Table/TableContext';

import styles from './DataCell.module.scss';

export const DataCell = forwardRef<HTMLTableCellElement, DataCellProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestid,
      as: Tag = getDataCellAsDefault(),
      colSpan,
      rowSpan,
      alignment = 'left',
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
    } ${className}`;

    return (
      <Tag
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestid}
        colSpan={colSpan}
        rowSpan={rowSpan}
        scope={Tag === 'th' ? 'row' : undefined}
      >
        {children}
      </Tag>
    );
  }
);
export { getDataCellAsDefault };

DataCell.displayName = 'DataCell';
