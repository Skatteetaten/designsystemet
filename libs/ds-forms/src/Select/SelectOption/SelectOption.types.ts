import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export type SelectOptionValue = ComponentPropsWithoutRef<'option'>['value'];

export interface SelectOptionProps<TValue extends SelectOptionValue = string>
  extends BaseProps {
  ref?: Ref<HTMLOptionElement>;
  /**
   * Verdi for option. Kan være strengunion, f.eks. type Status = 'active' |
   * 'inactive'.
   */
  value?: TValue;
  /** Ledetekst til option. */
  children: string;
}
