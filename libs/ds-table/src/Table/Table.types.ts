import {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';

import { BaseProps, Density } from '@skatteetaten/ds-core-utils';

import { TableDataCellProps } from '../TableDataCell/TableDataCell.types';
import { TableEditableRowProps } from '../TableEditableRow/TableEditableRow.types';
import { TableHeaderCellProps } from '../TableHeaderCell/TableHeaderCell.types';
import { TableRowProps } from '../TableRow/TableRow.types';
import { TableSumProps } from '../TableSum/TableSum.types';

export const tableVariantArr = ['standard', 'compact'] as const;
export type TableVariant = typeof tableVariantArr[number];

export const tableCellAsArr = ['td', 'th'] as const;
export type TableCellAs = typeof tableCellAsArr[number];

//TODO Skal bli en del av felles Position type?
export const textAlignArr = ['left', 'right', 'center'] as const;
export type TextAlignment = typeof textAlignArr[number];

export type sortDirection = 'none' | 'ascending' | 'descending';
export interface SortState {
  /** stigende eller synkende sortering */
  direction: sortDirection;
  /** Holder styr på hvilken kolonne som skal sortering*/
  sortKey?: string;
}

export interface TableContextProps {
  sortState?: SortState;
  setSortState?: Dispatch<SetStateAction<SortState>>;
  variant: Density;
  rowInEditModeId?: string;
  setRowInEditModeId: Dispatch<SetStateAction<string | undefined>>;
}

export type RowWithExpandButtonHandle = {
  focusButton: () => void;
  rowRef: RefObject<HTMLTableRowElement>;
};

export interface TableProps extends BaseProps {
  /** Table caption  */
  caption: string;
  /** Definerer stilen til tabellen. */
  variant?: Density;
  /** Holder styr på sortering av kolonner */
  sortState?: SortState;
  /** Styrer om tabellen skal ta opp full bredde eller tilpasse seg størrelsen på innholdet */
  hasFullWidth?: boolean;
  /** Gjør caption synlig */
  showCaption?: boolean;
  /** Oppdaterer sorteringstilstand når sorterbar kolonneheader klikkes */
  setSortState?: Dispatch<SetStateAction<SortState>>;
  /**  Innholdet i tabellen  */
  children?: ReactNode;
}

export interface TableComponent
  extends React.ForwardRefExoticComponent<
    TableProps & React.RefAttributes<HTMLTableElement>
  > {
  Header: React.ForwardRefExoticComponent<
    BaseProps & PropsWithChildren & React.RefAttributes<HTMLTableSectionElement>
  >;
  HeaderCell: React.ForwardRefExoticComponent<
    TableHeaderCellProps & React.RefAttributes<HTMLTableCellElement>
  >;
  Row: React.ForwardRefExoticComponent<
    TableRowProps & React.RefAttributes<HTMLTableRowElement>
  >;
  EditableRow: React.ForwardRefExoticComponent<
    TableEditableRowProps & React.RefAttributes<HTMLTableRowElement>
  >;
  DataCell: React.ForwardRefExoticComponent<
    TableDataCellProps & React.RefAttributes<HTMLTableCellElement>
  >;
  Body: React.ForwardRefExoticComponent<
    BaseProps & PropsWithChildren & React.RefAttributes<HTMLTableSectionElement>
  >;
  Sum: React.ForwardRefExoticComponent<
    TableSumProps & React.RefAttributes<HTMLTableRowElement>
  >;
}
