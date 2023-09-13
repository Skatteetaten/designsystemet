import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { TableSumProps } from './TableSum.types';
import { TableDataCell } from '../TableDataCell/TableDataCell';
import { TableRow } from '../TableRow/TableRow';

import styles from './TableSum.module.scss';

export const TableSum = forwardRef<HTMLTableRowElement, TableSumProps>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      labelAlignment,
      valueAlignment,
      colSpan,
      hasTopSeparator,
      sumText,
      children,
    },
    ref
  ) => {
    const { t } = useTranslation('ds_tables', { i18n: dsI18n });

    const concatenatedClassName = `${styles.sum} ${
      hasTopSeparator ? styles.sum_topSeparator : ''
    }`;
    return (
      <tfoot id={id} className={className} lang={lang} data-testid={dataTestId}>
        <TableRow ref={ref}>
          <TableDataCell
            className={concatenatedClassName}
            as={'th'}
            alignment={labelAlignment}
            colSpan={colSpan}
          >
            {sumText ?? t('tablesum.Sum')}
          </TableDataCell>
          <TableDataCell
            className={concatenatedClassName}
            alignment={valueAlignment}
          >
            {children}
          </TableDataCell>
        </TableRow>
      </tfoot>
    );
  }
);

TableSum.displayName = 'TableSum';
