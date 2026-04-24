import { useState, useId, JSX, useMemo, useEffect } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getTabsVariantDefault } from './defaults';
import { TabsProps, TabsComponent } from './Tabs.types';
import { TabsContext } from './TabsContext';
import { TabsList } from './TabsList/TabsList';
import { TabsPanel } from './TabsPanel/TabsPanel';
import { TabsTab } from './TabsTab/TabsTab';

/**
 * Tabs
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-tabs--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/tabs/) - Brukerveiledning
 */
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
  const baseId = useId();
  const [activeTab, setActiveTab] = useState(value ?? defaultValue);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (!value) return;
    setActiveTab(value);
  }, [value]);

  if (activeTab === undefined) {
    throw new Error(`prop 'defaultValue' eller 'value' må ha en satt verdi`);
  }

  const contextValue = useMemo(
    () => ({
      activeTab,
      baseId: id ?? baseId,
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
    [activeTab, id, baseId, hasBorder, variant, isMultiline, index, onChange]
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
