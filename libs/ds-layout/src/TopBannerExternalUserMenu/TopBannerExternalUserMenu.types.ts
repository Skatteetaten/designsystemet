import { MouseEventHandler, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { User } from '../TopBannerExternal/TopBannerExternal.types';

export interface TopBannerExternalUserMenuProps extends BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Brukerinformasjon for brukeren som er logget inn */
  user: User;
  /** Antall ubehandlede varsler */
  notificationCount?: number;
  /** Funksjon som kalles når brukeren klikker på logge ut knappen */
  onLogOutClick?: MouseEventHandler<HTMLButtonElement>;
  /** Funksjon som kalles når brukeren klikker på bytt bruker knappen */
  onSwitchUserClick?: MouseEventHandler<HTMLButtonElement>;
  /** Barnelementer for komponenten */
  children?: React.ReactNode;
}
