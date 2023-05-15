import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TextAlignment } from '../Table/Table.types';

type RequiredTableHeaderCellHTMLAttributes = Pick<
  React.HTMLProps<HTMLTableCellElement>,
  'scope' | 'colSpan'
>;
type TableHeaderCellHTMLAttributes =
  Partial<RequiredTableHeaderCellHTMLAttributes>;

export interface TableHeaderCellCommonProps
  extends TableHeaderCellHTMLAttributes,
    BaseProps {
  alignment?: TextAlignment;
  children?: ReactNode;
}

type HeaderCellDiscriminatedProps =
  | {
      isSortable: true;
      sortKey: string;
    }
  | {
      isSortable?: false;
      sortKey?: string;
    };

export type TableHeaderCellProps = TableHeaderCellCommonProps &
  HeaderCellDiscriminatedProps;
