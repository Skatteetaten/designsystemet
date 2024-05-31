import { FunctionComponent, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TabsTab } from '../TabsTab/TabsTab';
export interface TabsListProps extends BaseProps {
  /** En eller flere Tab-komponenter */
  children: ReactNode;
}
export interface TabsListComponent extends FunctionComponent<TabsListProps> {
  children?: typeof TabsTab;
}
