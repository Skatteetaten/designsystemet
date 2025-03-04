import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredSelectOptionHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'option'>,
  'value'
>;

export interface SelectOptionProps
  extends RequiredSelectOptionHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLOptionElement>;
  /** Ledetekst til option. */
  children: string;
}
