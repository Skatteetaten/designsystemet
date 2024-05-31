import { forwardRef, useState, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getTabsVariantDefault } from './defaults';
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
      hasBorder,
      isMultiline,
      value,
      variant = getTabsVariantDefault(),
      onChange,
      children,
    },
    ref
  ): JSX.Element => {
    const [activeTab, setInternalTab] = useState(value || defaultValue);
    const [tabs, setTabsInternal] = useState<TabsArr>([]);
    const [index, setIndex] = useState<number>(0);
    if (activeTab === undefined) {
      throw new Error('prop defaultValue eller value må ha en verdi');
    }
    const setActiveTab = (value: string): void => {
      setInternalTab(value);
      if (value) onChange?.(value);
    };
    const baseId = useId();
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
            activeTab,
            baseId,
            hasBorder,
            setActiveTab,
            variant,
            isMultiline,
            tabs,
            setTabs: setTabsInternal,
            index,
            setIndex,
          }}
        >
          {children}
        </TabsContext.Provider>
      </div>
    );
  }
) as TabsComponent;

Tabs.displayName = 'Tabs';
Tabs.List = TabsList;
Tabs.List.displayName = 'Tabs.List';
Tabs.Panel = TabsPanel;
Tabs.Panel.displayName = 'Tabs.Panel';
Tabs.Tab = TabsTab;
Tabs.Tab.displayName = 'Tabs.Tab';
