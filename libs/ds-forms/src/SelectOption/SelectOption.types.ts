import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredSelectOptionHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'option'>,
  'value'
>;

export interface SelectOptionProps
  extends RequiredSelectOptionHTMLAttributes,
    BaseProps {
  /** Ledetekst til option. */
  children: string;
}
