import { Children, JSX } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { TableSumProps } from './TableSum.types';
import { TableDataCell } from '../TableDataCell/TableDataCell';
import { TableRow } from '../TableRow/TableRow';

import styles from './TableSum.module.scss';

export const defaultTableSumText = dsI18n.t('ds_tables:tablesum.Sum');

export const TableSum = ({
  ref,
  id,
  className,
  lang,
  'data-testid': dataTestId,
  labelAlignment = 'left',
  valueAlignment = 'right',
  colSpan,
  hasTopSeparator = false,
  sumText = defaultTableSumText,
  children,
}: TableSumProps): JSX.Element => {
  const concatenatedClassName = `${styles.sum} ${
    hasTopSeparator ? styles.sum_topSeparator : ''
  }`.trim();
  return (
    <tfoot id={id} className={className} lang={lang} data-testid={dataTestId}>
      <TableRow ref={ref}>
        <TableDataCell
          className={concatenatedClassName}
          as={'th'}
          alignment={labelAlignment}
          colSpan={colSpan}
        >
          {sumText}
        </TableDataCell>
        {Children.map(children, (child) => (
          <TableDataCell
            className={concatenatedClassName}
            alignment={valueAlignment}
          >
            {child}
          </TableDataCell>
        ))}
      </TableRow>
    </tfoot>
  );
};

TableSum.displayName = 'TableSum';
