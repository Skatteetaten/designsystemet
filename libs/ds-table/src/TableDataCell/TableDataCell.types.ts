import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TableCellAs, TextAlignment } from '../Table/Table.types';

type RequiredTableDataCellHTMLAttributes = Pick<
  React.HTMLProps<HTMLTableCellElement>,
  'colSpan' | 'rowSpan'
>;
type TableDataCellHTMLAttributes = Partial<RequiredTableDataCellHTMLAttributes>;

export interface TableDataCellProps
  extends TableDataCellHTMLAttributes,
    BaseProps {
  /** Tekstjustering */
  alignment?: TextAlignment;
  /** HTML-element for cellen*/
  as?: TableCellAs;
  /** Innhold i cellen*/
  children?: ReactNode;
}
