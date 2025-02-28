import { Ref } from 'react';

import { ChipCommonProps } from '../Chips/Chips.types';

export interface ChipsRemovableProps extends ChipCommonProps {
  ref?: Ref<HTMLButtonElement>;
  /**
   * Callback-funksjon som utføres når brukeren klikker på chipen.
   * Denne funksjonen kan brukes til å håndtere fjerning av chipen fra visningen.
   */
  onClose?: () => void;
}
