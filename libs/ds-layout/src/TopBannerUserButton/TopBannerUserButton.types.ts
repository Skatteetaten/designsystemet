import { BaseProps } from '@skatteetaten/ds-core-utils';

export const userRoleArr = ['meg', 'andre', 'virksomhet'] as const;
export type UserRole = (typeof userRoleArr)[number];

export interface TopBannerUserButtonProps extends BaseProps {
  /** Teksten på knappen. Hva teksten skal være henger sammen med userRole. Når rollen er 'meg', settes brukernavn til 'Meg selv' automatisk. Hvis rollen er 'andre', må det settes brukernavn til navnet på person det gjelder mens rollen 'virksomhet' settes navnet på virksomheten. */
  children?: string;
  /** Hvilken rolle innlogget bruker har. */
  role?: UserRole;
  /** Callback når knappen trykkes på. */
  onUsername?: () => void;
}
