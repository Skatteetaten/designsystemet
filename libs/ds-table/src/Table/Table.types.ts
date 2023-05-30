import { Dispatch, ReactNode, SetStateAction } from 'react';

import { BaseProps, Density } from '@skatteetaten/ds-core-utils';

import { DataCellProps } from '../DataCell/DataCell.types';
import { TableHeaderCellProps } from '../HeaderCell/HeaderCell.types';
import { RowProps } from '../Row/Row.types';
import { TableSumProps } from '../Sum/Sum.types';

//TODO Skal bli en del av felles Position type?
export const textAlignArr = ['left', 'right', 'center'] as const;
export type TextAlignment = typeof textAlignArr[number];

export type sortDirection = 'none' | 'ascending' | 'descending'; //TODO flytte til felles?
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

export interface TableEditableRowProps extends BaseProps {
  editableContent?: (closeEditing: () => void) => ReactNode;
  onEdit?: () => void;
  children?: ReactNode;
}

export interface TableComponent
  extends React.ForwardRefExoticComponent<
    TableProps & React.RefAttributes<HTMLTableElement>
  > {
  Header: React.ForwardRefExoticComponent<
    { children: JSX.Element } & React.RefAttributes<HTMLTableSectionElement>
  >;
  HeaderCell: React.ForwardRefExoticComponent<
    TableHeaderCellProps & React.RefAttributes<HTMLTableCellElement>
  >;
  Row: React.ForwardRefExoticComponent<
    RowProps & React.RefAttributes<HTMLTableRowElement>
  >;
  EditableRow: React.ForwardRefExoticComponent<
    TableEditableRowProps & React.RefAttributes<HTMLTableRowElement>
  >;
  DataCell: React.ForwardRefExoticComponent<
    DataCellProps & React.RefAttributes<HTMLTableCellElement>
  >;
  Body: React.ForwardRefExoticComponent<
    { children: ReactNode } & React.RefAttributes<HTMLTableSectionElement>
  >;
  Sum: React.ForwardRefExoticComponent<
    TableSumProps & React.RefAttributes<HTMLTableRowElement>
  >;
}
