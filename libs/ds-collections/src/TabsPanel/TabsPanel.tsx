import { JSX, useContext, useEffect, useId } from 'react';

import { set } from 'date-fns';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { TabsPanelProps } from './TabsPanel.types';
import { valueRegex } from '../Tabs/utils';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsPanel.module.scss';

export const TabsPanel = ({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  value,
  children,
}: TabsPanelProps): JSX.Element => {
  const generatedId = `ds-panel-id-${useId()}`;
  const internalPanelId = externalId ?? generatedId;

  const { activeTab, tabId, panelId, setPanelId } = useContext(TabsContext);
  const panelClassName = `${styles.panel} ${
    activeTab === value ? styles.panel_active : ''
  }`.trim();

  useEffect(() => {
    setPanelId(internalPanelId);
  }, [internalPanelId, setPanelId]);

  if (!valueRegex.test(value)) {
    throw new Error('Value kan kun inneholde tegn som er gyldig i en html id.');
  }

  return (
    <div
      ref={ref}
      id={panelId}
      className={`${panelClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      role={'tabpanel'}
      aria-labelledby={tabId}
      hidden={activeTab !== value}
    >
      {children}
    </div>
  );
};

TabsPanel.displayName = 'TabsPanel';
