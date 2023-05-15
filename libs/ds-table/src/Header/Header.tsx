import { forwardRef } from 'react';

export const Header = forwardRef<
  HTMLTableSectionElement,
  { children: JSX.Element }
>(({ children }, ref) => <thead ref={ref}>{children}</thead>);

Header.displayName = 'TableHeader';
