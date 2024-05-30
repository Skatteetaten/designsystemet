import { KeyboardEvent, forwardRef, useCallback, useContext } from 'react';

import { Icon } from '@skatteetaten/ds-icons';

import { getCommonClassNameDefault } from './defaults';
import { TabsTabProps } from './TabsTab.types';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsTab.module.scss';

export const TabsTab = forwardRef<HTMLButtonElement, TabsTabProps>(
  (
    {
      // id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      children,
      svgPath,
      value,
      onClick,
    },
    ref
  ): JSX.Element => {
    const {
      baseId,
      activeTab,
      setActiveTab,
      variant,
      hasBorder,
      activeIndex,
      setActiveIndex,
    } = useContext(TabsContext);
    const tabClassName = styles.tab;
    const variantClassName = variant === 'compact' ? styles.tab_compact : '';
    const activeClassName = activeTab === value ? styles.tab_active : '';
    const borderClassName = hasBorder ? styles.tab_border : '';
    const withIconClassName = svgPath ? styles.tab_icon : '';

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
        id={`ds-tab-id-${baseId}-${value}`}
        className={`${tabClassName} ${variantClassName} ${borderClassName} ${activeClassName} ${withIconClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        role={'tab'}
        tabIndex={activeTab !== value ? -1 : 0}
        aria-selected={activeTab === value ?? false}
        aria-controls={`ds-tab-panel-${baseId}-${value}`}
        onClick={(e): void => {
          setActiveTab(value);
          setActiveIndex(activeIndex);
          onClick?.(e);
        }}
        onKeyDown={(e): void => {
          handleKeyboardNavigation(e);
        }}
      >
        {svgPath && (
          <Icon svgPath={svgPath} variant={'systemIcon'} size={'small'} />
        )}
        {children}
      </button>
    );
  }
);

TabsTab.displayName = 'Tabs.Tab';
