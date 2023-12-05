import { MouseEventHandler } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { User } from '../TopBannerExternal/TopBannerExternal.types';

export const userRoleArr = ['meg', 'andre', 'virksomhet'] as const;
export type UserRole = (typeof userRoleArr)[number];

export interface TopBannerUserButtonProps extends BaseProps {
  /** Hvilken rolle innlogget bruker har. Hvis user.role er lik 'meg' settes automatisk teksten 'Meg selv' ellers settes teksten til user.name */
  user: User;
  /** Callback når knappen trykkes på. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
