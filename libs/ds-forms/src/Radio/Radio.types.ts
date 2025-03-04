import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredInputHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'value' | 'form' | 'onBlur' | 'onChange' | 'onFocus'
>;

type InputHTMLAttributes = Partial<RequiredInputHTMLAttributes>;

interface InputPropsHTMLAttributes extends InputHTMLAttributes {
  ariaDescribedby?: string;
}

export interface RadioProps extends InputPropsHTMLAttributes, BaseProps {
  ref?: Ref<HTMLInputElement>;
  /** Ledetekst til radioknapp. */
  children: string;
  /** Tilleggstekst til ledeteksten. */
  description?: string;
}
