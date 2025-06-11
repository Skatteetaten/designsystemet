import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TopBannerExternalUserMenuProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innhold i komponenten */
  children: ReactNode;
}
