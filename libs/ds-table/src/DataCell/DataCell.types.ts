import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TextAlignment } from '../Table/Table.types';

type RequiredTableDataCellHTMLAttributes = Pick<
  React.HTMLProps<HTMLTableCellElement>,
  'colSpan' | 'rowSpan'
>;
type TableDataCellHTMLAttributes = Partial<RequiredTableDataCellHTMLAttributes>;

export const dataCellAsArr = ['td', 'th'] as const;
export type DataCellAs = typeof dataCellAsArr[number];
export interface DataCellProps extends TableDataCellHTMLAttributes, BaseProps {
  /** Tekstjustering */
  alignment?: TextAlignment;
  /** HTML-element for cellen*/
  as?: DataCellAs;
  /** Innhold i cellen*/
  children?: ReactNode;
}
