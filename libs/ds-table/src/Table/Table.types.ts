import {
  Dispatch,
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
  RefObject,
  SetStateAction,
} from 'react';

import { BaseProps, Density, Position } from '@skatteetaten/ds-core-utils';

import { TableDataCellProps } from '../TableDataCell/TableDataCell.types';
import { TableEditableRowProps } from '../TableEditableRow/TableEditableRow.types';
import { TableHeaderCellProps } from '../TableHeaderCell/TableHeaderCell.types';
import { TableRowProps } from '../TableRow/TableRow.types';
import { TableSumProps } from '../TableSum/TableSum.types';

export const tableVariantArr = ['standard', 'compact'] as const;
export type TableVariant = (typeof tableVariantArr)[number];

export const tableCellAsArr = ['td', 'th'] as const;
export type TableCellAs = (typeof tableCellAsArr)[number];

export type TextAlignment = Extract<Position, 'left' | 'right' | 'center'>;

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
  /** Id til rad som skal være i redigeringsmodus når tabellen rendres. */
  rowInEditModeId?: string;
  /**  Innholdet i tabellen  */
  children?: ReactNode;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}

export interface TableComponent
  extends ForwardRefExoticComponent<
    TableProps & RefAttributes<HTMLTableElement>
  > {
  Header: ForwardRefExoticComponent<
    BaseProps & PropsWithChildren & RefAttributes<HTMLTableSectionElement>
  >;
  HeaderCell: ForwardRefExoticComponent<
    TableHeaderCellProps & RefAttributes<HTMLTableCellElement>
  >;
  Row: ForwardRefExoticComponent<
    TableRowProps & RefAttributes<HTMLTableRowElement>
  >;
  EditableRow: ForwardRefExoticComponent<
    TableEditableRowProps & RefAttributes<HTMLTableRowElement>
  >;
  DataCell: ForwardRefExoticComponent<
    TableDataCellProps & RefAttributes<HTMLTableCellElement>
  >;
  Body: ForwardRefExoticComponent<
    BaseProps & PropsWithChildren & RefAttributes<HTMLTableSectionElement>
  >;
  Sum: ForwardRefExoticComponent<
    TableSumProps & RefAttributes<HTMLTableRowElement>
  >;
}
