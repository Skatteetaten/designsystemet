import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  Ref,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TabsTab } from '../TabsTab/TabsTab';

interface TabsListHTMLAttributes {
  ariaLabel?: ComponentPropsWithoutRef<'div'>['aria-label'];
}

export interface TabsListProps extends BaseProps, TabsListHTMLAttributes {
  ref?: Ref<HTMLDivElement>;
  /** En eller flere Tab-komponenter */
  children: ReactNode;
}
export interface TabsListComponent extends FunctionComponent<TabsListProps> {
  children?: typeof TabsTab;
}
