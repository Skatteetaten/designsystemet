import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const modalPaddingArr = ['none', 's', 'm', 'l', 'mega'] as const;
export type ModalPadding = (typeof modalPaddingArr)[number];

type RequiredModalHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'dialog'>,
  'open'
>;

type ModalHTMLAttributes = Partial<RequiredModalHTMLAttributes>;

export interface ModalProps extends ModalHTMLAttributes, BaseProps {
  /** Innhold */
  children: ReactNode;
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
  /** Callback når modalen lukkes */
  onClose?: () => void;
}
