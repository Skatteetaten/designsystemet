import { JSX, useContext } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { TabsPanelProps } from './TabsPanel.types';
import { valueRegex } from '../Tabs/utils';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsPanel.module.scss';

export const TabsPanel = ({
  ref,
  // id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  value,
  children,
}: TabsPanelProps): JSX.Element => {
  const { activeTab, baseId } = useContext(TabsContext);
  const panelClassName = `${styles.panel} ${
    activeTab === value ? styles.panel_active : ''
  }`.trim();

  if (!valueRegex.test(value)) {
    throw new Error('Value kan kun inneholde tegn som er gyldig i en html id.');
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
      hidden={activeTab !== value}
    >
      {children}
    </div>
  );
};

TabsPanel.displayName = 'TabsPanel';
