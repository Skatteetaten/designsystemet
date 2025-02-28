import { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { BaseProps, sizeArr } from '@skatteetaten/ds-core-utils';

import { ChipsRemovableProps } from '../ChipsRemovable/ChipsRemovable.types';
import { ChipsToggleProps } from '../ChipsToggle/ChipsToggle.types';

export type ChipSize = Extract<(typeof sizeArr)[number], 'small' | 'medium'>;

interface ChipsHTMLAttributes {
  ariaLabel?: ComponentPropsWithoutRef<'ul'>['aria-label'];
}

export interface ChipsProps extends BaseProps, ChipsHTMLAttributes {
  ref?: Ref<HTMLUListElement>;
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

export interface ChipsComponent extends React.FC<ChipsProps> {
  Toggle: React.FC<ChipsToggleProps>;
  Removable: React.FC<ChipsRemovableProps>;
}

export type ChipsContextProps = {
  updateFocus?: (removedChip: HTMLButtonElement) => void;
};
