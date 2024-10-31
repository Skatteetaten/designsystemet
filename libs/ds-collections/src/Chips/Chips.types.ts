import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';

import { BaseProps, sizeArr } from '@skatteetaten/ds-core-utils';

import { ChipsRemovableProps } from '../ChipsRemovable/ChipsRemovable.types';
import { ChipsToggleProps } from '../ChipsToggle/ChipsToggle.types';

export type ChipSize = Extract<(typeof sizeArr)[number], 'small' | 'medium'>;

interface ChipsHTMLAttributes {
  ariaLabel?: ComponentPropsWithoutRef<'ul'>['aria-label'];
}

export interface ChipsProps extends BaseProps, ChipsHTMLAttributes {
  /** Liste med Chips.Toggle eller Chips.Removable */
  children?: ReactNode;
}

export interface ChipHTMLAttributes {
  disabled?: ComponentPropsWithoutRef<'button'>['disabled'];
}

export interface ChipCommonProps extends BaseProps, ChipHTMLAttributes {
  /** Størrelse på Chip. */
  size?: ChipSize;
  /** Tekst i Chip. */
  children: string | string[];
}

export interface ChipsComponent
  extends ForwardRefExoticComponent<
    ChipsProps & RefAttributes<HTMLUListElement>
  > {
  Toggle: ForwardRefExoticComponent<
    ChipsToggleProps & RefAttributes<HTMLButtonElement>
  >;
  Removable: ForwardRefExoticComponent<
    ChipsRemovableProps & RefAttributes<HTMLButtonElement>
  >;
}

export type ChipsContextProps = {
  updateFocus?: (removedChip: HTMLButtonElement) => void;
};
