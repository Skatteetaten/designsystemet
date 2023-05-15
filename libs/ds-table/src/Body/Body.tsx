import { forwardRef, ReactNode } from 'react';

export const Body = forwardRef<
  HTMLTableSectionElement,
  { children: ReactNode }
>(({ children }, ref) => <tbody ref={ref}>{children}</tbody>);

Body.displayName = 'TableBody';
