import { ReactElement, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

export const modalPaddingArr = ['none', 's', 'm', 'l', 'mega'] as const;
export type ModalPadding = (typeof modalPaddingArr)[number];

export const modalVariantArr = ['outline', 'plain', 'important'] as const;
export type ModalVariant = (typeof modalVariantArr)[number];

interface ModalComponentCommonProps extends BaseProps {
  classNames?: {
    container?: string;
    image?: string;
  };
  /** Innhold */
  children: ReactNode;
  /** Definerer stilen til Modal */
  variant?: ModalVariant;
  /** Padding rundt Modal */
  padding?: ModalPadding;
  /** Overskrift */
  title: string;
  /** Skjuler overskriften, men fremdeles synlig for skjermleser */
  hideTitle?: boolean;
  /** Om lukkekryss skal skjules */
  hideCloseButton?: boolean;
  /** Om autolukking skal skrus på/av. Autolukking er skrudd på som default. */
  dismissOnOutsideClick?: boolean;
  /** Om modalen kan lukkes ved Esc-trykk. Modalen lukkes ved Esc-trykk som default. */
  dismissOnEsc?: boolean;
  /* Modal i shadowndom - Deprecated: Prop skal fjernes ved lansering av neste major versjon  */
  shadowRootNode?: Document | ShadowRoot;
  /** Callback når modalen lukkes */
  onClose?: () => void;
}

export type ModalDiscriminatedGraphicProps =
  | {
      /** Source til illustrasjonsbilde øverst i Modal */
      imageSource?: string;
      /** Alt tekst til illustrasjonsbilde. Hvis bildet er meningsbærende, legg på alt tekst. */
      imageSourceAltText?: string;
      /** Icon-komponent som en funksjon som vises over overskriften */
      renderIcon?: never;
    }
  | {
      /** Source til illustrasjonsbilde øverst i Modal */
      imageSource?: never;
      /** Alt tekst til illustrasjonsbilde. Hvis bildet er meningsbærende, legg på alt tekst. */
      imageSourceAltText?: never;
      /** Icon-komponent som en funksjon som vises over overskriften */
      renderIcon?: () => ReactElement<IconProps>;
    };

export type ModalProps = ModalComponentCommonProps &
  ModalDiscriminatedGraphicProps;
