import { ReactNode, Ref } from 'react';

import { BaseProps, Size, Weight } from '@skatteetaten/ds-core-utils';

import { DescriptionListElement } from './DescriptionListElement/DescriptionListElement';

export type DescriptionListSize = Extract<Size, 'small' | 'medium'>;
export type Orientation = 'vertical' | 'horizontal';

export type DescriptionListWeight = Extract<Weight, 'regular' | 'bold'>;

export interface DescriptionListCommonProps extends BaseProps {
  ref?: Ref<HTMLDListElement>;
  /** Liste med DescriptionList.Element */
  children?: ReactNode;
  /** Margin under DescriptionList. */
  hasSpacing?: boolean;
  /** Styrer retning lista vises i. */
  variant?: Orientation;
  /** Styrer retning elementene vises i. */
  descriptionDirection?: Orientation;
  /** Styrer font-weight på description. */
  descriptionWeight?: DescriptionListWeight;
  /** Styrer font-weight på term. */
  termWeight?: DescriptionListWeight;
  /** Størrelse på komponenten. */
  size?: DescriptionListSize;
  /** Styrer om komponenten automatisk bytter til vertikal variant på mobil. */
  isVerticalOnMobile?: boolean;
  /** Styrer om descriptionDirection automatisk bytter til vertikal på mobil. */
  isDescriptionVerticalOnMobile?: boolean;
}

export type DescriptionListProps = DescriptionListCommonProps;

export interface DescriptionListComponent
  extends React.FC<DescriptionListProps> {
  Element: typeof DescriptionListElement;
}
