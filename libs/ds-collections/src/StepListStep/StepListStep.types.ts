import { ReactElement, ReactNode } from 'react';

import { PanelProps } from '@skatteetaten/ds-content';
import { BaseProps } from '@skatteetaten/ds-core-utils';
import { HeadingProps } from '@skatteetaten/ds-typography';

export const stepVariantArr = [
  'active',
  'passive',
  'positiveResult',
  'neutralResult',
] as const;

export type StepVariant = (typeof stepVariantArr)[number];

export interface StepListStepProps extends BaseProps {
  /** Overskriver default tekst på edit-knapp*/
  editButtonText?: string;
  /** Overskriver default tekst på next-knapp*/
  nextButtonText?: string;
  /** Angir nummer på steget. */
  stepNumber: number;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Dersom steget har et ikon som vises i stedet for stegnummer må det gjøres en vundering på om ikonet er meningsbærende og trenger en alternativ tekst.*/
  svgTitle?: string;
  /** Tittel på steget.*/
  title: string;
  /** Heading tag h1-6 */
  titleAs?: HeadingProps['as'];
  /** Definerer stilen til steget.*/
  variant?: StepVariant;
  /** Kalles når endre knappen klikkes. Knappen fjernes når onEdit er undefined. */
  onEdit?: () => void;
  /** Kalles når neste knappen klikkes. Knappen fjernes når onNext er undefined. */
  onNext?: () => void;
  /** Tittel på intro til resultatsteg*/
  introTitle?: PanelProps['title'];
  /** Heading tag h1-6 på intro til resultatsteg */
  introTitleAs?: PanelProps['titleAs'];
  /** Innhold i intro til resultatsteg */
  introContent?: PanelProps['children'];
  /**
   Styrer om innholdet i stegene skal ha maks bredde container-article eller skal ta plassen som
   er tilgjengelig.
   */
  hasResultContentFullWidth?: boolean;
  /** Innholdet i steget */
  children: ReactNode;
}
