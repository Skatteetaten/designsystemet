import { FunctionComponent, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TabsTab } from '../TabsTab/TabsTab';
export interface TabsListProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** En eller flere Tab-komponenter */
  children: ReactNode;
}
export interface TabsListComponent extends FunctionComponent<TabsListProps> {
  children?: typeof TabsTab;
}
