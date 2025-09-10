import {
  KeyboardEvent,
  useCallback,
  useContext,
  JSX,
  useId,
  useEffect,
} from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { TabsTabProps } from './TabsTab.types';
import { valueRegex } from '../Tabs/utils';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsTab.module.scss';

export const TabsTab = ({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  svgPath,
  value,
  onClick,
  children,
}: TabsTabProps): JSX.Element => {
  const generatedId = `ds-tab-id-${useId()}`;
  const internalTabId = externalId ?? generatedId;

  const {
    activeTab,
    tabId,
    setTabId,
    panelId,
    hasBorder,
    variant,
    setInternalActiveTab,
  } = useContext(TabsContext);
  const tabClassName = styles.tab;
  const variantClassName = variant === 'compact' ? styles.tab_compact : '';
  const activeClassName = activeTab === value ? styles.tab_active : '';
  const borderClassName = hasBorder ? styles.tab_border : '';
  const withIconClassName = svgPath ? styles.tab_icon : '';

  useEffect(() => {
    setTabId(internalTabId);
  }, [internalTabId, setTabId]);

  if (!valueRegex.test(value)) {
    throw new Error('Value kan kun inneholde tegn som er gyldig i en html id.');
  }

  const handleKeyboardNavigation = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>): void => {
      switch (event.key) {
        case 'ArrowRight': {
          const next = event.currentTarget.nextSibling;
          const current = event.currentTarget;
          if (next) {
            (next as HTMLElement).focus();
          } else {
            (current.parentElement?.firstChild as HTMLElement).focus();
          }
          break;
        }
        case 'ArrowLeft': {
          const previous = event.currentTarget.previousSibling;
          const current = event.currentTarget;
          if (previous) {
            (previous as HTMLElement).focus();
          } else {
            (current.parentElement?.lastChild as HTMLElement).focus();
          }
          break;
        }
        default:
          return;
      }
    },
    []
  );
  return (
    <button
      ref={ref}
      id={tabId}
      className={`${tabClassName} ${variantClassName} ${borderClassName} ${activeClassName} ${withIconClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      role={'tab'}
      type={'button'}
      tabIndex={activeTab !== value ? -1 : 0}
      aria-selected={activeTab === value}
      aria-controls={panelId}
      onClick={(): void => {
        if (onClick) {
          onClick(value);
        } else {
          setInternalActiveTab(value);
        }
      }}
      onKeyDown={(e): void => {
        handleKeyboardNavigation(e);
      }}
    >
      {svgPath && (
        <Icon
          svgPath={svgPath}
          variant={'systemIcon'}
          size={variant === 'compact' ? 'small' : 'medium'}
        />
      )}
      {children}
    </button>
  );
};

TabsTab.displayName = 'TabsTab';
