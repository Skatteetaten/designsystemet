import { PropsWithChildren, JSX, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const TableHeader = ({
  ref,
  children,
  ...baseProps
}: BaseProps &
  PropsWithChildren & {
    ref?: Ref<HTMLTableSectionElement>;
  }): JSX.Element => (
  <thead ref={ref} {...baseProps}>
    {children}
  </thead>
);

TableHeader.displayName = 'TableHeader';
