import { forwardRef, PropsWithChildren } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  BaseProps & PropsWithChildren
>(({ children, ...baseProps }, ref) => (
  <tbody ref={ref} {...baseProps}>
    {children}
  </tbody>
));

TableBody.displayName = 'TableBody';
