import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ListElementProps extends BaseProps {
  ref?: Ref<HTMLLIElement>;
  /** Tekst eller markup for listelementet */
  children: ReactNode;
}
