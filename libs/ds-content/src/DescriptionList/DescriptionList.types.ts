import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import { BaseProps, Size, Weight } from '@skatteetaten/ds-core-utils';

import { DescriptionListElement } from '../DescriptionListElement/DescriptionListElement';

export type DescriptionListSize = Extract<Size, 'small' | 'medium'>;
export type Orientation = 'vertical' | 'horizontal';

export type DescriptionListWeight = Extract<Weight, 'regular' | 'bold'>;

export interface DescriptionListCommonProps extends BaseProps {
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
}

export type DescriptionListProps = DescriptionListCommonProps;

export interface DescriptionListComponent
  extends ForwardRefExoticComponent<
    DescriptionListProps & RefAttributes<HTMLDListElement>
  > {
  Element: typeof DescriptionListElement;
}
