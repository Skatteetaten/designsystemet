import { MouseEventHandler } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const userRoleArr = ['meg', 'andre', 'virksomhet'] as const;
export type UserRole = (typeof userRoleArr)[number];

export interface TopBannerUserButtonProps extends BaseProps {
  /** Teksten på knappen. Hvis role er lik 'meg' settes automatisk teksten 'Meg selv' og kan ikke overskrives. */
  children?: string;
  /** Hvilken rolle innlogget bruker har. */
  role?: UserRole;
  /** Callback når knappen trykkes på. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
