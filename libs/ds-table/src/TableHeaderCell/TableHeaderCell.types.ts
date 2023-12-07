import { HTMLProps, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TableCellAs, TextAlignment } from '../Table/Table.types';

type RequiredTableHeaderCellHTMLAttributes = Pick<
  HTMLProps<HTMLTableCellElement>,
  'scope' | 'colSpan'
>;
type TableHeaderCellHTMLAttributes =
  Partial<RequiredTableHeaderCellHTMLAttributes>;

export interface TableHeaderCellCommonProps
  extends TableHeaderCellHTMLAttributes,
    BaseProps {
  /** Tekstjustering */
  alignment?: TextAlignment;
  /** HTML-element for cellen*/
  as?: TableCellAs;
  /** Innhold i cellen*/
  children?: ReactNode;
}

type HeaderCellDiscriminatedProps =
  | {
      /** Angir om det er mulig å sortere tabellen med  */
      isSortable: true;
      /** Tekstjustering */
      sortKey: string;
    }
  | {
      isSortable?: false;
      sortKey?: string;
    };

export type TableHeaderCellProps = TableHeaderCellCommonProps &
  HeaderCellDiscriminatedProps;
