import { forwardRef } from 'react';

import { TableSumProps } from './Sum.types';
import { DataCell } from '../DataCell/DataCell';
import { Row } from '../Row/Row';

import styles from './Sum.module.scss';

export const Sum = forwardRef<HTMLTableRowElement, TableSumProps>(
  ({ colSpan, hasTopSeparator, sumText = 'Sum', children }, ref) => {
    const concatenatedClassName = `${styles.sum} ${
      hasTopSeparator ? styles.sum_topSeparator : ''
    }`;
    return (
      <tfoot>
        <Row ref={ref}>
          <DataCell
            className={concatenatedClassName}
            alignment={'right'}
            colSpan={colSpan}
          >
            {sumText}
          </DataCell>
          <DataCell className={concatenatedClassName}>{children}</DataCell>
        </Row>
      </tfoot>
    );
  }
);

Sum.displayName = 'TableSum';
