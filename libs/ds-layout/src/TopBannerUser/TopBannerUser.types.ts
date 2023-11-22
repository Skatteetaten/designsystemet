import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const usernameAsArr = ['button', 'span'] as const;
export type UsernameAs = (typeof usernameAsArr)[number];

export const userRoleArr = ['meg', 'verge', 'virksomhet'] as const;
export type UserRole = (typeof userRoleArr)[number];

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;
interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TopBannerUserProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  /** Navn på innlogget bruker. */
  children: string;
  /** Hvilken rolle innloget bruker har. */
  role: UserRole;
  /** HTML-tag for brukernavn TODO FRONT-1161 ikke i bruk enda */
  as?: UsernameAs;
}
