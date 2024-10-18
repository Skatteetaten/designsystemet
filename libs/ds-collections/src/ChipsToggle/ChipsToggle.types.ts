import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ChipCommonProps } from '../Chips/Chips.types';

interface ChipHTMLAttributes {
  ariaPressed?: ComponentPropsWithoutRef<'button'>['aria-pressed'];
}

export interface ChipsToggleProps
  extends ChipCommonProps,
    ChipHTMLAttributes,
    BaseProps {
  /** Skal Chip vises med avhukings(!?)-ikon. */
  showCheckmark?: boolean;
  /** Viser Chip i valgt tilstand ved hjelp av aria-pressed */
  isSelected?: boolean;
}
