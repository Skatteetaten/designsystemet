import { useState, useId, JSX, useMemo, useEffect } from 'react';

import { set } from 'date-fns';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getTabsVariantDefault } from './defaults';
import { TabsProps, TabsComponent } from './Tabs.types';
import { TabsContext } from '../TabsContext/TabsContext';
import { TabsList } from '../TabsList/TabsList';
import { TabsPanel } from '../TabsPanel/TabsPanel';
import { TabsTab } from '../TabsTab/TabsTab';

export const Tabs = (({
  ref,
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
}: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(value ?? defaultValue);
  const [tabId, setTabId] = useState<string>('');
  const [panelId, setPanelId] = useState<string>('');
  useEffect(() => {
    if (!value) return;
    setActiveTab(value);
  }, [value]);
  const [index, setIndex] = useState<number>(0);
  if (activeTab === undefined) {
    throw new Error(`prop 'defaultValue' eller 'value' må ha en satt verdi`);
  }
  const contextValue = useMemo(
    () => ({
      activeTab,
      panelId,
      setPanelId,
      tabId,
      setTabId,
      hasBorder,
      setInternalActiveTab: (value: string): void => {
        setActiveTab(value);
        if (value) onChange?.(value);
      },
      variant,
      isMultiline,
      index,
      setIndex,
    }),
    [
      activeTab,
      hasBorder,
      variant,
      isMultiline,
      index,
      onChange,
      panelId,
      tabId,
      setPanelId,
      setTabId,
    ]
  );
  return (
    <div
      ref={ref}
      id={id}
      className={className}
      lang={lang}
      data-testid={dataTestId}
    >
      <TabsContext.Provider value={contextValue}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}) as TabsComponent;

Tabs.displayName = 'Tabs';
Tabs.List = TabsList;
Tabs.List.displayName = 'Tabs.List';
Tabs.Panel = TabsPanel;
Tabs.Panel.displayName = 'Tabs.Panel';
Tabs.Tab = TabsTab;
Tabs.Tab.displayName = 'Tabs.Tab';

export { getTabsVariantDefault };
