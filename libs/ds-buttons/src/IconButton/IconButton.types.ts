import { FocusEventHandler, MouseEventHandler, ReactElement } from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-utils';

type RequiredIconButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'accessKey' | 'disabled' | 'onBlur' | 'onClick' | 'onFocus'
>;

type IconButtonHTMLAttributes = Partial<RequiredIconButtonHTMLAttributes>;
interface IconButtonPropsHTMLAttributes extends IconButtonHTMLAttributes {
  ariaLabel: string;
  ariaDescribedBy?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
}

export interface IconButtonProps
  extends IconButtonPropsHTMLAttributes,
    BaseProps {
  /** Om knappen har en ramme/sirkel. */
  isOutlined?: boolean;
  /** Størrelse på knappen. */
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath: ReactElement;
}
