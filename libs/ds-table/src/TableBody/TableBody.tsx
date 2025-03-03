import { PropsWithChildren, Ref, JSX } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const TableBody = ({
  ref,
  children,
  ...baseProps
}: BaseProps &
  PropsWithChildren & { ref?: Ref<HTMLTableSectionElement> }): JSX.Element => (
  <tbody ref={ref} {...baseProps}>
    {children}
  </tbody>
);

TableBody.displayName = 'TableBody';
