import React from 'react';
import { BaseProps, Size } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

type IconButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'tabIndex'
  | 'aria-label'
  | 'aria-hidden'
  | 'aria-describedby'
  | 'disabled'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

export interface IconButtonComponentProps extends IconButtonPropsHTMLAttributes {
  iconProps: IconProps;
  buttonSize?: Extract<Size,  'small' | 'medium' | 'large'>;
  isOutlined?: boolean;
}

/**
 * @param {IconProps} iconProps - (Optional) props som sendes videre til Icon-komponent
 * @param {string} buttonSize - (Default: 'medium') størrelse på knappen
 * @param {boolean} isOutlined - (Default: false) ramme rundt knappen
 * @param {number} tabIndex - 
 * @param {boolean} disabled - (Default: false) disable knappen
 */

export type IconButtonProps = BaseProps & IconButtonComponentProps;
