import {
  ForwardRefExoticComponent,
  ReactNode,
  SetStateAction,
  Dispatch,
  RefAttributes,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TabsList } from '../TabsList/TabsList';
import { TabsPanel } from '../TabsPanel/TabsPanel';
import { TabsTab } from '../TabsTab/TabsTab';

export const statusArr = ['success', 'neutral', 'warning', 'danger'] as const;
export type Status = (typeof statusArr)[number];

export const tabsVariantArr = ['standard', 'compact'] as const;
export type TabsVariant = (typeof tabsVariantArr)[number];
export interface TabsProps extends BaseProps {
  /** onChange callback for selected Tab */
  onChange?: (value: string) => void;
  /** Controlled selected value */
  value?: string;
  /** If uncontrolled, a default-value needs to be set */
  defaultValue?: string;
  /** Lar listen med tab'er flyte over flere linjer */
  isMultiline?: boolean;
  /** Varianter : prop for å sette enten small eller normal tab */
  variant?: TabsVariant;
  /** border på tab-elementen hvis prop er satt */
  hasBorder?: boolean;
  /** Tabs.List og Tabs.Panel */
  children?: ReactNode;
}

export interface TabsComponent
  extends ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>> {
  List: typeof TabsList;
  Panel: typeof TabsPanel;
  Tab: typeof TabsTab;
}

export type TabsArr = string[];

export interface TabsContextProps
  extends Omit<TabsProps, 'children' | 'defaultValue'> {
  /** setter for activeTab */
  setActiveTab: (value: string) => void; //Dispatch<SetStateAction<string>>;
  /** tab som er aktiv - key er tabsKey */
  activeTab?: string;
  /** Liste med tabKeys */
  tabs: TabsArr;
  /** Setter for liste med tabKeys */
  setTabs?: Dispatch<SetStateAction<TabsArr>>;
  /** teller for å sette index på array of Tabs.Tab */
  index?: number;
  /** Setter for Index */
  setIndex: Dispatch<SetStateAction<number>>;
  /** teller for å sette activeIndex på array of Tabs.TabList */
  activeIndex: number;
  /** Setter for activeIndex */
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
