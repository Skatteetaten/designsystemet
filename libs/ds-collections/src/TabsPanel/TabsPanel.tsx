import { JSX, useContext } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getTabsPanelKeepMountedDefault } from './defaults';
import { TabsPanelProps } from './TabsPanel.types';
import { valueRegex } from '../Tabs/utils';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsPanel.module.scss';

export const TabsPanel = ({
  ref,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  value,
  keepMounted = getTabsPanelKeepMountedDefault(),
  children,
}: TabsPanelProps): JSX.Element | null => {
  const { activeTab, baseId } = useContext(TabsContext);
  const isActive = activeTab === value;
  const panelClassName = `${styles.panel} ${
    isActive ? styles.panel_active : ''
  }`.trim();

  if (!valueRegex.test(value)) {
    throw new Error('Value kan kun inneholde tegn som er gyldig i en html id.');
  }

  if (!keepMounted && !isActive) {
    return null;
  }

  return (
    <div
      ref={ref}
      id={`ds-tab-panel-${baseId}-${value}`}
      className={`${panelClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      role={'tabpanel'}
      aria-labelledby={`ds-tab-id-${baseId}-${value}`}
      hidden={keepMounted ? !isActive : undefined}
    >
      {children}
    </div>
  );
};

TabsPanel.displayName = 'TabsPanel';
