import { Dispatch, ReactNode, Ref, RefObject, SetStateAction, FC } from 'react';

import {
  BaseProps,
  Density,
  Position,
  Size,
} from '@skatteetaten/ds-core-utils';

import { TableBody } from '../TableBody/TableBody';
import { TableDataCell } from '../TableDataCell/TableDataCell';
import { TableEditableRow } from '../TableEditableRow/TableEditableRow';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';
import { TableRow } from '../TableRow/TableRow';
import { TableSum } from '../TableSum/TableSum';

export const tableVariantArr = ['standard', 'compact'] as const;
export type TableVariant = (typeof tableVariantArr)[number];

export type TableSize = Extract<
  Size,
  'extraSmall' | 'small' | 'medium' | 'large'
>;

export const tableCellAsArr = ['td', 'th'] as const;
export type TableCellAs = (typeof tableCellAsArr)[number];

export type TextAlignment = Extract<Position, 'left' | 'right' | 'center'>;

export type sortDirection = 'none' | 'ascending' | 'descending';
export interface SortState {
  /** Stigende eller synkende sortering */
  direction: sortDirection;
  /** Holder styr på hvilken kolonne som skal sortering */
  sortKey?: string;
}

export interface TableContextProps {
  sortState?: SortState;
  setSortState?: Dispatch<SetStateAction<SortState>>;
  variant: Density;
  size?: TableSize;
  rowInEditModeId?: string;
  setRowInEditModeId: Dispatch<SetStateAction<string | undefined>>;
}

export type RowWithExpandButtonHandle = {
  focusButton: () => void;
  rowRef: RefObject<HTMLTableRowElement | null>;
  buttonRef: RefObject<HTMLButtonElement | null>;
};

export interface TableProps extends BaseProps {
  ref?: Ref<HTMLTableElement>;
  /** Table caption */
  caption: string;
  /**
   * @deprecated Erstattes as 'size' i neste major versjon.
   *
   *   Definerer stilen til tabellen.
   */
  variant?: Density;
  /** Definerer størrelse på tabellen. */
  size?: TableSize;
  /** Holder styr på sortering av kolonner */
  sortState?: SortState;
  /**
   * Styrer om tabellen skal ta opp full bredde eller tilpasse seg størrelsen på
   * innholdet
   */
  hasFullWidth?: boolean;
  /** Gjør caption synlig */
  showCaption?: boolean;
  /** Oppdaterer sorteringstilstand når sorterbar kolonneheader klikkes */
  setSortState?: Dispatch<SetStateAction<SortState>>;
  /** Id til rad som skal være i redigeringsmodus når tabellen rendres. */
  rowInEditModeId?: string;
  /** Innholdet i tabellen */
  children?: ReactNode;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}

export interface TableComponent extends FC<TableProps> {
  Header: typeof TableHeader;
  HeaderCell: typeof TableHeaderCell;
  Row: typeof TableRow;
  EditableRow: typeof TableEditableRow;
  DataCell: typeof TableDataCell;
  Body: typeof TableBody;
  Sum: typeof TableSum;
}
