import { ChipCommonProps } from '../Chips/Chips.types';

export interface ChipsRemovableProps extends ChipCommonProps {
  /** Callback som kalles når chip klikkes på */
  onClose?: () => void;
}
