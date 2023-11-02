import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const modalPaddingArr = ['none', 's', 'm', 'l', 'mega'] as const;
export type ModalPadding = (typeof modalPaddingArr)[number];

export const modalVariantArr = ['standard', 'important'] as const;
export type ModalVariant = (typeof modalVariantArr)[number];

type RequiredModalHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'dialog'>,
  'open'
>;

type ModalHTMLAttributes = Partial<RequiredModalHTMLAttributes>;

export interface ModalProps extends ModalHTMLAttributes, BaseProps {
  classNames?: {
    container?: string;
    image?: string;
  };
  /** Innhold */
  children: ReactNode;
  /** Definerer stilen til Modal */
  variant?: ModalVariant;
  /** Modal uten ramme */
  hideOutline?: boolean;
  /** Padding rundt Modal */
  padding?: ModalPadding;
  /** Overskrift */
  title: string;
  /** Skjuler overskriften, men fremdeles synlig for skjermleser */
  hideTitle?: boolean;
  /** Om lukkekryss skal skjules */
  hideCloseButton?: boolean;
  /** Om autolukking skal skrus av */
  hideAutoClose?: boolean;
  /** Source til illustrasjonsbilde øverst i Modal */
  imageSource?: string;
  /** Alt tekst til illustrasjonsbilde */
  imageSourceAltText?: string;
  /** Callback når modalen lukkes */
  onClose?: () => void;
}
