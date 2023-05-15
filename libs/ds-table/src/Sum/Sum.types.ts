import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredSumHTMLAttributes = Pick<
  React.HTMLProps<HTMLTableCellElement>,
  'colSpan'
>;
type SumHTMLAttributes = Partial<RequiredSumHTMLAttributes>;

export interface TableSumProps extends SumHTMLAttributes, BaseProps {
  /** Overstyrer standard tekst i raden*/
  sumText?: string;
  /** Skal det vises strek over sum*/
  hasTopSeparator?: boolean;
  /** Innholdet i datacellen til sum*/
  children?: ReactNode;
}
