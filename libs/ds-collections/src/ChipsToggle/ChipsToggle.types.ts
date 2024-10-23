import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ChipCommonProps } from '../Chips/Chips.types';

export interface ChipsToggleProps extends ChipCommonProps, BaseProps {
  /** Skal Chip vises med avmerkingsikon. */
  showCheckmark?: boolean;
  /** Er Chip valgt.  */
  isSelected?: boolean;
  /** Callback som kalles når Chip klikkes på. */
  onClick?: () => void;
}
