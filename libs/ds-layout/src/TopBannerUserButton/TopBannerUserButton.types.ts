import { BaseProps } from '@skatteetaten/ds-core-utils';

export const userRoleArr = ['meg', 'andre', 'virksomhet'] as const;
export type UserRole = (typeof userRoleArr)[number];

export interface TopBannerUserButtonProps extends BaseProps {
  /** Teksten på knappen. */
  children?: string;
  /** Hvilken rolle innlogget bruker har. */
  role: UserRole;
  /** Callback når knappen trykkes på. */
  onUsername?: () => void;
}
