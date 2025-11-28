import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface FooterLogoProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Logo */
  children: ReactNode;
}
