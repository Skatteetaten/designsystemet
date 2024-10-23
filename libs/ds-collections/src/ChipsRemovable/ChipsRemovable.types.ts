import { ChipCommonProps } from '../Chips/Chips.types';

export interface ChipsRemovableProps extends ChipCommonProps {
  /** Callback som kalles når Chip skal lukkes. */
  onClose?: () => void;
}
