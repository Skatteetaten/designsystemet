import { forwardRef, useState } from 'react';

import { getCommonClassNameDefault, getTabsVariantDefault } from './defaults';
import { TabsProps, TabsComponent, TabsArr } from './Tabs.types';
import { TabsContext } from '../TabsContext/TabsContext';
import { TabsList } from '../TabsList/TabsList';
import { TabsPanel } from '../TabsPanel/TabsPanel';
import { TabsTab } from '../TabsTab/TabsTab';

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      defaultValue,
      isMultiline,
      children,
      hasBorder,
      variant = getTabsVariantDefault(),
    },
    ref
  ): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>(defaultValue);
    const [tabs, setTabsInternal] = useState<TabsArr>([]);
    const [index, setIndex] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
      <div
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
      >
        <TabsContext.Provider
          value={{
            setActiveTab,
            activeTab,
            variant,
            hasBorder,
            isMultiline,
            tabs,
            setTabs: setTabsInternal,
            index,
            setIndex,
            activeIndex,
            setActiveIndex,
          }}
        >
          {children}
        </TabsContext.Provider>
      </div>
    );
  }
) as TabsComponent;

//export interface TabsTabComponent {}

Tabs.displayName = 'Tabs';
Tabs.List = TabsList;
Tabs.List.displayName = 'Tabs.List';
Tabs.Panel = TabsPanel;
Tabs.Panel.displayName = 'Tabs.Panel';
Tabs.Tab = TabsTab;
Tabs.Tab.displayName = 'Tabs.Tab';
