import { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { BaseProps, sizeArr } from '@skatteetaten/ds-core-utils';

import { ChipsRemovable } from '../ChipsRemovable/ChipsRemovable';
import { ChipsToggle } from '../ChipsToggle/ChipsToggle';

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
  Toggle: typeof ChipsToggle;
  Removable: typeof ChipsRemovable;
}

export type ChipsContextProps = {
  updateFocus?: (removedChip: HTMLButtonElement) => void;
};
