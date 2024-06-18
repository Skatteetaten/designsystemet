/* eslint-disable array-callback-return */
import { forwardRef, ReactNode, useContext, useMemo, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { TabsListProps, TabsListComponent } from './TabsList.types';
import { TabsContextProps } from '../Tabs/Tabs.types';
import { TabsContext } from '../TabsContext/TabsContext';

import styles from './TabsList.module.scss';

const TabRenderComponent = ({
  children,
  context,
}: {
  children: ReactNode;
  context: TabsContextProps;
}): string | JSX.Element | JSX.Element[] => {
  const contextValue = useMemo(() => context, [context]);
  switch (typeof children) {
    case 'string':
      return children;
    case 'object':
      if (Array.isArray(children)) {
        return children.map((child, index) => (
          <TabsContext.Provider
            key={`${context.value}-${index}`}
            value={{ ...contextValue, index }}
          >
            {child}
          </TabsContext.Provider>
        ));
      } else {
        return (
          <TabsContext.Provider key={0} value={{ ...contextValue, index: 0 }}>
            {children}
          </TabsContext.Provider>
        );
      }
    default:
      return '';
  }
};

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      children,
    },
    ref
  ): JSX.Element => {
    const { isMultiline, ...context } = useContext(TabsContext);
    const multilineClassName = isMultiline ? styles.tabList_multiline : '';
    return (
      <div
        ref={ref}
        id={id}
        className={`${styles.tabList} ${multilineClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        role={'tablist'}
        tabIndex={-1}
      >
        <TabRenderComponent context={context}>{children}</TabRenderComponent>
      </div>
    );
  }
) as TabsListComponent;

TabsList.displayName = 'Tabs.List';
