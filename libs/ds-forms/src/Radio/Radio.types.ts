import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredInputHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'value'
>;

type InputHTMLAttributes = Partial<RequiredInputHTMLAttributes>;

interface InputPropsHTMLAttributes extends InputHTMLAttributes {
  ariaDescribedby?: string;
}

export interface RadioProps extends InputPropsHTMLAttributes, BaseProps {
  /** Ledetekst til radioknapp. */
  children: string;
  /** Tilleggstekst til ledeteksten. */
  description?: string;
}
