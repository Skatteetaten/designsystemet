import { HTMLProps, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TextAlignment } from '../Table/Table.types';

type RequiredSumHTMLAttributes = Pick<
  HTMLProps<HTMLTableCellElement>,
  'colSpan'
>;
type SumHTMLAttributes = Partial<RequiredSumHTMLAttributes>;

export interface TableSumProps extends SumHTMLAttributes, BaseProps {
  /** Overstyrer standard tekst i raden*/
  sumText?: string;
  /** Tekstjustering for tekst i sumrad*/
  labelAlignment?: TextAlignment;
  /** Tekstjustering for verdi i sumrad*/
  valueAlignment?: TextAlignment;
  /** Skal det vises strek over sum*/
  hasTopSeparator?: boolean;
  /** Innholdet i datacellen til sum*/
  children?: ReactNode;
}
