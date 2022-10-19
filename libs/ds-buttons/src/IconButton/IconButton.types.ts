import React from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-utils';
import { IconComponentCommonProps } from '@skatteetaten/ds-icons';

type IconButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'tabIndex'
  | 'accessKey'
  | 'disabled'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

interface IconButtonCustomProps extends IconButtonPropsHTMLAttributes {
  ariaLabel: string;
  ariaDescribedBy: string;
}

interface IconButtonComponentProps {
  size?: Extract<Size,  'small' | 'medium' | 'large'>;
  isOutlined?: boolean;
}

/**
 * @param {IconComponentCommonProps.svgPath} svgPath - (Påkrevd) selve path som tegner ikonet
 * @param {string} buttonSize - (Default: 'medium') størrelse på knappen
 * @param {boolean} isOutlined - (Default: false) ramme rundt knappen
 * @param {number} tabIndex - (Optional) styrer fokus
 * @param {boolean} disabled - (Default: false) disable knappen
 * @param {string} ariaLabel - (Påkrevd)
 * @param {string} ariaDescribedBy - (Påkrevd)
 */

export type IconButtonProps = BaseProps & IconButtonCustomProps & IconButtonComponentProps & IconComponentCommonProps;
