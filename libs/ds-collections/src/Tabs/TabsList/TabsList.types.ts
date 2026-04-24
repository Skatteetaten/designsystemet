import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  Ref,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

interface TabsListHTMLAttributes {
  ariaLabel?: ComponentPropsWithoutRef<'div'>['aria-label'];
}

export interface TabsListProps extends BaseProps, TabsListHTMLAttributes {
  ref?: Ref<HTMLDivElement>;
  /** En eller flere Tab-komponenter */
  children: ReactNode;
}
export type TabsListComponent = FunctionComponent<TabsListProps>;
