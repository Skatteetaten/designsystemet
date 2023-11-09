import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredSkipToHTMLAttributes = Pick<ComponentPropsWithoutRef<'a'>, 'href'>;

export interface SkipLinkProps extends RequiredSkipToHTMLAttributes, BaseProps {
  /** Overskriver default lenketekst */
  children?: string;
}
