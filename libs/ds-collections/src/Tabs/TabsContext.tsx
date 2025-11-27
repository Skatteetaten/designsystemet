import { createContext } from 'react';

import { TabsContextProps } from './Tabs.types';

export const TabsContext = createContext<TabsContextProps>(
  {} as TabsContextProps
);
