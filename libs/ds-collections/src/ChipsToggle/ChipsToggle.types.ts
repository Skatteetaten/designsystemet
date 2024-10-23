import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ChipCommonProps } from '../Chips/Chips.types';

export interface ChipsToggleProps extends ChipCommonProps, BaseProps {
  /** Skal Chip vises med avhukings(!?)-ikon. */
  showCheckmark?: boolean;
  /** Viser Chip i valgt tilstand ved hjelp av aria-pressed */
  isSelected?: boolean;
  /** Callback som kalles når Chip klikkes på. */
  onClick?: () => void;
}
