import { Dispatch, ReactNode, Ref, SetStateAction } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TabsList } from '../TabsList/TabsList';
import { TabsPanel } from '../TabsPanel/TabsPanel';
import { TabsTab } from '../TabsTab/TabsTab';

export const tabsVariantArr = ['standard', 'compact'] as const;
export type TabsVariant = (typeof tabsVariantArr)[number];

type TabsDiscriminatedValueProps =
  | {
      /** Verdi som bestemmer hvilke tab-element som skal ha aktiv-status når komponenten er controlled */
      value: string;
      /**
       * Verdi som bestemmer hvilke tab-element som skal ha aktiv-status når komponenten er uncontrolled.
       * value må oppdateres via onChange-eventet
       */
      defaultValue?: string;
    }
  | {
      /** Verdi som bestemmer hvilke tab-element som skal ha aktiv-status når komponenten er controlled */
      value?: string;
      /**
       * Verdi som bestemmer hvilke tab-element som skal ha aktiv-status når komponenten er uncontrolled.
       * value må oppdateres via onChange-eventet
       */
      defaultValue: string;
    };

interface TabsCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Verdi som bestemmer hvilke tab-element som skal ha aktiv-status når komponenten er controlled */
  value?: string;
  /**
   * Verdi som bestemmer hvilke tab-element som skal ha aktiv-status når komponenten er uncontrolled.
   * value må oppdateres via onChange-eventet
   */
  defaultValue?: string;
  /** Lar listen med tab'er flyte over flere linje hvis ikke plass på en linje */
  isMultiline?: boolean;
  /** Definerer stilen standard eller compact */
  variant?: TabsVariant;
  /** Border på tab-elementen */
  hasBorder?: boolean;
  /** onChange callback hvor value har verdien til aktiv Tab-element */
  onChange?: (value: string) => void;
  /** Tabs.List og Tabs.Panel */
  children?: ReactNode;
}

export type TabsProps = TabsCommonProps & TabsDiscriminatedValueProps;

export interface TabsComponent extends React.FC<TabsProps> {
  List: typeof TabsList;
  Panel: typeof TabsPanel;
  Tab: typeof TabsTab;
}

export type TabsArr = string[];

export interface TabsContextProps
  extends Omit<TabsProps, 'children' | 'defaultValue'> {
  /** Setter for activeTab */
  setInternalActiveTab: (value: string) => void;
  /** Tab som er aktiv - key er tabsKey */
  activeTab?: string;
  /** Setter for liste med tabKeys */
  setTabs?: Dispatch<SetStateAction<TabsArr>>;
  /** Teller for å sette index på array of Tabs.Tab */
  index?: number;
  /** Setter for Index */
  setIndex: Dispatch<SetStateAction<number>>;
  /** Unik id for Tabs.Tab */
  tabId: string;
  /** Setter id til Tabs.Tab */
  setTabId: Dispatch<SetStateAction<string>>;
  /** Unik id for Tabs.Panel */
  panelId: string;
  /** Setter id til Tabs.Panel */
  setPanelId: Dispatch<SetStateAction<string>>;
}
