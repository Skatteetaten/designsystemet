import { ReactElement, ReactNode, Ref } from 'react';

import { ButtonProps } from '@skatteetaten/ds-buttons';
import { PanelProps } from '@skatteetaten/ds-content';
import { BaseProps } from '@skatteetaten/ds-core-utils';
import { HeadingProps } from '@skatteetaten/ds-typography';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

export const stepVariantArr = [
  'active',
  'passive',
  'positiveResult',
  'neutralResult',
] as const;

export type StepVariant = (typeof stepVariantArr)[number];

export interface StepListStepProps extends BaseProps {
  ref?: Ref<HTMLLIElement>;
  /** Overskriver default tekst på edit-knapp */
  editButtonText?: string;
  /** Overskriver default tekst på next-knapp */
  nextButtonText?: string;
  /** Props til nextButton. Se Button-komponenten for api-dokumentasjon. */
  nextButtonProps?: DistributiveOmit<ButtonProps, 'children' | 'onClick'>;
  /** Angir nummer på steget. */
  stepNumber: number;
  /**
   * HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke.
   * Alternativt kan custom path sendes.
   */
  svgPath?: ReactElement<SVGPathElement>;
  /**
   * Dersom steget har et ikon som vises i stedet for stegnummer må det gjøres
   * en vundering på om ikonet er meningsbærende og trenger en alternativ
   * tekst.
   */
  svgTitle?: string;
  /** Tittel på steget. */
  title: string;
  /** Heading tag h1-6 */
  titleAs?: HeadingProps['as'];
  /** Definerer stilen til steget. */
  variant?: StepVariant;
  /** Kalles når endre knappen klikkes. Knappen fjernes når onEdit er undefined. */
  onEdit?: () => void;
  /** Kalles når neste knappen klikkes. Knappen fjernes når onNext er undefined. */
  onNext?: () => void;
  /** Tittel på intro til resultatsteg */
  introTitle?: PanelProps['title'];
  /** Heading tag h1-6 på intro til resultatsteg */
  introTitleAs?: PanelProps['titleAs'];
  /** Innhold i intro til resultatsteg */
  introContent?: PanelProps['children'];
  /**
   * Styrer om innholdet i stegene skal ha maks bredde container-article eller
   * skal ta plassen som er tilgjengelig.
   */
  hasResultContentFullWidth?: boolean;

  /**
   * Styrer om aktivt steg skal få fokus automatisk. Hvis denne settes til false
   * må man håndtere fokus selv. Når man bruker id propen så vil komponenten gi
   * elementet som skal få fokus id=`${id}-focus-target` slik at man kan finne
   * elementet.
   */
  shouldAutoFocusWhenActive?: boolean;
  /** Innholdet i steget */
  children: ReactNode;
}
