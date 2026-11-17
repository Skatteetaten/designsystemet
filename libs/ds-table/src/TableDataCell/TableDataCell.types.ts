import { HTMLProps, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import {
  TableCellAs,
  TextAlignment,
  VerticalAlignment,
} from '../Table/Table.types';

type RequiredTableDataCellHTMLAttributes = Pick<
  HTMLProps<HTMLTableCellElement>,
  'scope' | 'colSpan' | 'rowSpan'
>;
type TableDataCellHTMLAttributes = Partial<RequiredTableDataCellHTMLAttributes>;

export interface TableDataCellProps
  extends TableDataCellHTMLAttributes, BaseProps {
  ref?: Ref<HTMLTableCellElement>;
  /** Tekstjustering */
  alignment?: TextAlignment;
  /** Vertikal justering av innholdet i cellen */
  verticalAlignment?: VerticalAlignment;
  /** HTML-element for cellen*/
  as?: TableCellAs;
  /** Innhold i cellen*/
  children?: ReactNode;
}
