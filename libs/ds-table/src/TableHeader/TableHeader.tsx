import { forwardRef, PropsWithChildren } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  BaseProps & PropsWithChildren
>(({ children, ...baseProps }, ref) => (
  <thead ref={ref} {...baseProps}>
    {children}
  </thead>
));

TableHeader.displayName = 'TableHeader';
