import { HTMLProps, ReactNode, Ref } from 'react';

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
  ref?: Ref<HTMLTableCellElement>;
  /** Tekstjustering */
  alignment?: TextAlignment;
  /** HTML-element for cellen */
  as?: TableCellAs;
  /** Innhold i cellen */
  children?: ReactNode;
  /**
   * Angir om sorteringsknappen er disabled. Gjelder kun når isSortable er satt
   * til true.
   */
  isSortDisabled?: boolean;
}

type HeaderCellDiscriminatedProps =
  | {
      /** Angir om det er mulig å sortere tabellen med */
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
