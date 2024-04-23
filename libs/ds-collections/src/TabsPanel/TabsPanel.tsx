import { forwardRef, useContext } from 'react';

import { getCommonClassNameDefault } from './defaults';
import { TabsPanelProps } from './TabsPanel.types';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsPanel.module.scss';

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  (
    {
      // id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      value,
      children,
    },
    ref
  ): JSX.Element => {
    const { activeTab } = useContext(TabsContext);
    const panelClassName = `${styles.panel} ${
      activeTab === value ? styles.panel_active : ''
    }`;
    return (
      <div
        ref={ref}
        id={`ds-tab-panel-${value}`}
        className={`${panelClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        role={'tabpanel'}
        aria-labelledby={`ds-tab-id-${value}`}
      >
        {children}
      </div>
    );
  }
);

TabsPanel.displayName = 'Tabs.Panel';
