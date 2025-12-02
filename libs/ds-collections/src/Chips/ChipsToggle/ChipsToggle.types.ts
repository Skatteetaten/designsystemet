import { Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { ChipCommonProps } from '../Chips.types';

export interface ChipsToggleProps extends ChipCommonProps, BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Angir om et avmerkingsikon (checkmark) skal vises i chipen. */
  showCheckmark?: boolean;
  /**
   * Angir om chipen er i valgt tilstand. Når true, vil chipen vises med valgt
   * styling og eventuelt avmerkingsikon hvis showCheckmark er true.
   */
  isSelected?: boolean;
  /** Callback-funksjon som utføres når brukeren klikker på chipen. */
  onClick?: () => void;
}
