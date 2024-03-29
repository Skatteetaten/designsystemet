import { HTMLProps, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TableCellAs, TextAlignment } from '../Table/Table.types';

type RequiredTableDataCellHTMLAttributes = Pick<
  HTMLProps<HTMLTableCellElement>,
  'scope' | 'colSpan' | 'rowSpan'
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
