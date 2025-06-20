import { MouseEventHandler, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { User } from '../TopBannerExternal/TopBannerExternal.types';

export interface TopBannerExternalUserMenuProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innhold i komponenten */
  user: User | null | undefined;
  varslerAmount?: number;
  onLogOutClick?: MouseEventHandler<HTMLButtonElement>;
  onUserClick?: MouseEventHandler<HTMLButtonElement>;
  canRepresentOthers?: boolean;
}
