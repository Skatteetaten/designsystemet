import { MouseEventHandler, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { User } from '../TopBannerExternal/TopBannerExternal.types';

export interface TopBannerExternalUserMenuProps extends BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Innhold i komponenten */
  user: User;
  varslerAmount?: number;
  onLogOutClick?: MouseEventHandler<HTMLButtonElement>;
  onUserClick?: MouseEventHandler<HTMLButtonElement>;
  canRepresentOthers?: boolean;
  children?: React.ReactNode;
}
